import z from "zod";
import { ApiResult, PromiseApiResult } from "./auth";

export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly code?: string,
  ) {
    super(message);
  }
}

export function json(statusCode: number, body: unknown): ApiResult {
  return {
    statusCode,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  };
}

export function parseBody<S extends z.ZodType>(
  schema: S,
  body: string | undefined,
): z.infer<S> {
  let data: unknown;
  try {
    data = body ? JSON.parse(body) : {};
  } catch (error) {
    throw new HttpError(400, "Request body must be valid JSON", "InvalidJson");
  }
  const result = schema.safeParse(body);
  if (!result.success) {
    const message = result.error.issues
      .map((i) => `${i.path.join(".") || "body"}: ${i.message}`)
      .join("; ");
    throw new HttpError(400, message, "ValidationError");
  }
  return result.data;
}

const COGNITO_ERRORS: Record<string, [number, string]> = {
  NotAuthorizedException: [
    401,
    "Incorrect username or password, or token is invalid",
  ],
};

const ALL_ERRORS: Record<string, [number, string]> = {
  ...COGNITO_ERRORS,
};

export function toErrorResponse(err: unknown): ApiResult {
  if (err instanceof HttpError) {
    return json(err.statusCode, {
      error: err.code ?? "Error",
      message: err.message,
    });
  }
  const name = err instanceof Error ? err.name : "";
  const mapped = ALL_ERRORS[name];
  if (mapped) {
    return json(mapped[0], { error: name, message: mapped[1] });
  }
  console.error("Unhandled error", err);
  return json(500, {
    error: "InternalServerError",
    message: "Something went wrong",
  });
}

export async function safely(fn: () => PromiseApiResult): PromiseApiResult {
  try {
    return await fn();
  } catch (error) {
    return toErrorResponse(error);
  }
}
