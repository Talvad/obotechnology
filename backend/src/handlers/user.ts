import z from "zod";
import {
  ApiEvent,
  getAccessToken,
  getGroups,
  getSub,
  PromiseApiResult,
} from "../lib/auth";
import { HttpError, json, parseBody, safely } from "../lib/http";
import { attr, cognito } from "../lib/cognito";
import {
  type AuthenticationResultType,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  DeleteUserAttributesCommand,
  ForgotPasswordCommand,
  GetUserCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  ResendConfirmationCodeCommand,
  RespondToAuthChallengeCommand,
  SignUpCommand,
  UpdateUserAttributesCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { config } from "../lib/config";
import { avatarUrl, deleteOwnObject, isWebp, s3 } from "../lib/s3";
import { randomUUID } from "node:crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const UserRoutes = {
  SIGNUP: "POST /api/v1/auth/signup",
  CONFIRM_SIGNUP: "POST /api/v1/auth/confirm-signup",
  RESEND_CODE: "POST /api/v1/auth/resend-code",
  LOGIN: "POST /api/v1/auth/login",
  REFRESH_TOKEN: "POST /api/v1/auth/refresh-token",
  FORGOT_PASSWORD: "POST /api/v1/auth/forgot-password",
  RESET_PASSWORD: "POST /api/v1/auth/reset-password",
  NEW_PASSWORD: "POST /api/v1/auth/new-password",
  ME: "GET /api/v1/me",
  LOGOUT: "POST /api/v1/auth/logout",
  UPLOAD_AVATAR: "POST /api/v1/me/avatar",
  DELETE_AVATAR: "DELETE /api/v1/me/avatar",
} as const;

const email = z.string().trim().toLowerCase().email();
const password = z.string().min(8).max(256);

const Schemas = {
  SIGNUP: z.object({
    email,
    password,
    name: z.string().trim().min(1).max(100),
  }),
  CONFIRM_SIGNUP: z.object({ email, code: z.string().trim().min(1) }),
  RESEND_CODE: z.object({ email }),
  LOGIN: z.object({ email, password: z.string().min(1) }),
  REFRESH_TOKEN: z.object({ refreshToken: z.string().min(1) }),
  FORGOT_PASSWORD: z.object({ email }),
  RESET_PASSWORD: z.object({
    email,
    code: z.string().trim().min(1),
    newPassword: password,
  }),
  NEW_PASSWORD: z.object({
    email,
    newPassword: password,
    session: z.string().min(1),
  }),
};
const MAX_AVATAR_BYTES = 1024 * 1024;
const avatarSchema = z.object({
  image: z
    .string()
    .min(1)
    .max(Math.ceil((MAX_AVATAR_BYTES * 4) / 3) + 8), // base64 of the WebP bytes
});
function tokens(result: AuthenticationResultType | undefined) {
  if (!result?.AccessToken)
    throw new HttpError(401, "Authentication failed", "NotAuthorized");
  return {
    accessToken: result.AccessToken,
    idToken: result.IdToken,
    // Absent on refresh: Cognito keeps the original refresh token valid.
    refreshToken: result.RefreshToken,
    expiresIn: result.ExpiresIn,
    tokenType: result.TokenType,
  };
}

type UserRoutesType = (typeof UserRoutes)[keyof typeof UserRoutes];

type RouteHandler = (event: ApiEvent) => PromiseApiResult;
const routeHandlers: Record<string, RouteHandler> = {
  [UserRoutes.SIGNUP]: async (event) => {
    const { email, password, name } = parseBody(Schemas.SIGNUP, event.body);
    await cognito.send(
      new SignUpCommand({
        ClientId: config.clientId,
        Username: email,
        Password: password,
        UserAttributes: [
          { Name: "email", Value: email },
          { Name: "name", Value: name },
        ],
      }),
    );
    return json(201, {
      message: "Account created. Check your email for the verification code.",
    });
  },
  [UserRoutes.CONFIRM_SIGNUP]: async (event) => {
    const { email, code } = parseBody(Schemas.CONFIRM_SIGNUP, event.body);
    await cognito.send(
      new ConfirmSignUpCommand({
        ClientId: config.clientId,
        Username: email,
        ConfirmationCode: code,
      }),
    );
    return json(200, { message: "Email confirmed. You can now log in." });
  },
  [UserRoutes.RESEND_CODE]: async (event) => {
    const { email } = parseBody(Schemas.RESEND_CODE, event.body);
    await cognito.send(
      new ResendConfirmationCodeCommand({
        ClientId: config.clientId,
        Username: email,
      }),
    );
    return json(200, {
      message: "If the account exists, a new code has been sent.",
    });
  },
  [UserRoutes.LOGIN]: async (event) => {
    const { email, password } = parseBody(Schemas.LOGIN, event.body);
    const res = await cognito.send(
      new InitiateAuthCommand({
        ClientId: config.clientId,
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: { USERNAME: email, PASSWORD: password },
      }),
    );

    // Admin-created users must set a new password on first login.
    if (res.ChallengeName === "NEW_PASSWORD_REQUIRED") {
      return json(200, {
        challenge: "NEW_PASSWORD_REQUIRED",
        session: res.Session,
      });
    }
    if (res.ChallengeName) {
      throw new HttpError(
        400,
        `Unsupported challenge: ${res.ChallengeName}`,
        "UnsupportedChallenge",
      );
    }
    return json(200, tokens(res.AuthenticationResult));
  },
  [UserRoutes.REFRESH_TOKEN]: async (event) => {
    const { refreshToken } = parseBody(Schemas.REFRESH_TOKEN, event.body);
    const res = await cognito.send(
      new InitiateAuthCommand({
        ClientId: config.clientId,
        AuthFlow: "REFRESH_TOKEN_AUTH",
        AuthParameters: { REFRESH_TOKEN: refreshToken },
      }),
    );
    return json(200, tokens(res.AuthenticationResult));
  },
  [UserRoutes.FORGOT_PASSWORD]: async (event) => {
    const { email } = parseBody(Schemas.FORGOT_PASSWORD, event.body);
    try {
      await cognito.send(
        new ForgotPasswordCommand({
          ClientId: config.clientId,
          Username: email,
        }),
      );
    } catch (err) {
      // Do not reveal whether the account exists; still surface throttling.
      const name = err instanceof Error ? err.name : "";
      if (
        name !== "UserNotFoundException" &&
        name !== "InvalidParameterException"
      )
        throw err;
    }
    return json(200, {
      message:
        "If the account exists, a reset code has been sent to its email.",
    });
  },
  [UserRoutes.RESET_PASSWORD]: async (event) => {
    const { email, code, newPassword } = parseBody(
      Schemas.RESET_PASSWORD,
      event.body,
    );
    await cognito.send(
      new ConfirmForgotPasswordCommand({
        ClientId: config.clientId,
        Username: email,
        ConfirmationCode: code,
        Password: newPassword,
      }),
    );
    return json(200, {
      message: "Password has been reset. You can now log in.",
    });
  },
  [UserRoutes.NEW_PASSWORD]: async (event) => {
    const { email, newPassword, session } = parseBody(
      Schemas.NEW_PASSWORD,
      event.body,
    );
    const res = await cognito.send(
      new RespondToAuthChallengeCommand({
        ClientId: config.clientId,
        ChallengeName: "NEW_PASSWORD_REQUIRED",
        Session: session,
        ChallengeResponses: { USERNAME: email, NEW_PASSWORD: newPassword },
      }),
    );
    return json(200, tokens(res.AuthenticationResult));
  },
  [UserRoutes.ME]: async (event) => {
    const user = await cognito.send(
      new GetUserCommand({ AccessToken: getAccessToken(event) }),
    );
    const attr = (name: string) =>
      user.UserAttributes?.find((a) => a.Name === name)?.Value;
    return json(200, {
      id: attr("sub"),
      email: attr("email"),
      name: attr("name"),
      groups: getGroups(event),
    });
  },
  [UserRoutes.LOGOUT]: async (event) => {
    await cognito.send(
      new GlobalSignOutCommand({ AccessToken: getAccessToken(event) }),
    );
    return json(200, { message: "Logged out" });
  },
  [UserRoutes.UPLOAD_AVATAR]: async (event) => {
    const { image } = parseBody(avatarSchema, event.body);
    const bytes = Buffer.from(image, "base64");
    if (bytes.length === 0)
      throw new HttpError(400, "Image is empty", "InvalidImage");
    if (bytes.length > MAX_AVATAR_BYTES)
      throw new HttpError(413, "Image is too large", "ImageTooLarge");
    if (!isWebp(bytes))
      throw new HttpError(400, "Image must be a WebP file", "InvalidImage");

    const token = getAccessToken(event);
    const sub = getSub(event);
    const current = await cognito.send(
      new GetUserCommand({ AccessToken: token }),
    );
    const previous = attr(current, "picture");

    // New key per upload: no stale caches, and the old object can be removed afterwards.
    const key = `avatars/${sub}/${randomUUID()}.webp`;
    await s3.send(
      new PutObjectCommand({
        Bucket: config.avatarBucket,
        Key: key,
        Body: bytes,
        ContentType: "image/webp",
      }),
    );

    try {
      await cognito.send(
        new UpdateUserAttributesCommand({
          AccessToken: token,
          UserAttributes: [{ Name: "picture", Value: key }],
        }),
      );
    } catch (err) {
      await deleteOwnObject(key, sub); // do not leave an orphan behind
      throw err;
    }

    await deleteOwnObject(previous, sub);
    return json(200, { avatarUrl: await avatarUrl(key) });
  },
  [UserRoutes.DELETE_AVATAR]: async (event) => {
    const token = getAccessToken(event);
    const current = await cognito.send(
      new GetUserCommand({ AccessToken: token }),
    );
    await cognito.send(
      new DeleteUserAttributesCommand({
        AccessToken: token,
        UserAttributeNames: ["picture"],
      }),
    );
    await deleteOwnObject(attr(current, "picture"), getSub(event));
    return json(200, { avatarUrl: null });
  },
};

export const handler = (event: ApiEvent): PromiseApiResult =>
  safely(async () => {
    const route = routeHandlers[event.routeKey];
    if (!route) throw new HttpError(404, "Not found", "NotFound");
    return route(event);
  });
