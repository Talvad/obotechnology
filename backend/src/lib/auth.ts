import type {
  APIGatewayProxyEventV2WithJWTAuthorizer,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";
import { HttpError } from "./http";

export type ApiEvent = APIGatewayProxyEventV2WithJWTAuthorizer;
export type ApiResult = APIGatewayProxyStructuredResultV2;
export type PromiseApiResult = Promise<APIGatewayProxyStructuredResultV2>;

export function getAccessToken(event: ApiEvent): string {
  const header = event.headers["authorization"] ?? "";
  const token = header.replace(/^Bearer\s+/i, "").trim();
  if (!token) throw new HttpError(401, "Missing access token", "Unauthorized");
  return token;
}

export function getGroups(event: ApiEvent): string[] {
  const raw = event.requestContext.authorizer.jwt.claims["cognito:groups"];
  if (Array.isArray(raw)) return raw.map(String);
  if (typeof raw === "string") {
    const trimmed = raw.trim().replace(/^\[|\]$/g, "");
    return trimmed ? trimmed.split(/[\s,]+/).filter(Boolean) : [];
  }
  return [];
}

export function getSub(event: ApiEvent): string {
  return String(event.requestContext.authorizer.jwt.claims["sub"] ?? "");
}
