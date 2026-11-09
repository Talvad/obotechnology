import z from "zod";
import { ApiEvent, PromiseApiResult } from "../lib/auth";
import { HttpError, json, parseBody, safely } from "../lib/http";

const UserRoutes = {
  SIGNUP: "POST /api/v1/auth/signup",
  CONFIRM_SIGNUP: "POST /api/v1/auth/confirm-signup",
  RESEND_CODE: "POST /api/v1/auth/resend-code",
  LOGIN: "POST /api/v1/auth/login",
  REFRESH_TOKEN: "POST /api/v1/auth/refresh-token",
  FORGOT_PASSWORD: "POST /api/v1/auth/forgot-password",
  RESET_PASSWORD: "POST /api/v1/auth/reset-password",
  NEW_PASSWORD: "POST /api/v1/auth/new-password",
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

type UserRoutesType = (typeof UserRoutes)[keyof typeof UserRoutes];

type RouteHandler = (event: ApiEvent) => PromiseApiResult;
const routeHandlers: Record<string, RouteHandler> = {
  "POST /api/v1/auth/signup": async (event) => {
    const { email, password, name } = parseBody(Schemas.SIGNUP, event.body);
    // await cognito.send(
    //   new SignUpCommand({
    //     ClientId: config.clientId,
    //     Username: body.email,
    //     Password: body.password,
    //     UserAttributes: [
    //       { Name: 'email', Value: body.email },
    //       { Name: 'name', Value: body.name },
    //     ],
    //   }),
    // );
    return json(201, {
      message: "Account created. Check your email for the verification code.",
      data: { email, password, name },
    });
  },
};

export const handler = (event: ApiEvent): PromiseApiResult =>
  safely(async () => {
    const route = routeHandlers[event.routeKey];
    if (!route) throw new HttpError(404, "Not found", "NotFound");
    return route(event);
  });
