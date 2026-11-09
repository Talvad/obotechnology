import { ApiResult } from './auth';
import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly code?: string,
  ) {
    super(message);
  }
}

export function json(
  statusCode: number,
  body: unknown,
): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  };
}

const COGNITO_ERRORS: Record<string, [number, string]> = {
  NotAuthorizedException: [
    401,
    'Incorrect username or password, or token is invalid',
  ],
};

const ALL_ERRORS: Record<string, [number, string]> = {
  ...COGNITO_ERRORS,
};

export function toErrorResponse(
  err: unknown,
): APIGatewayProxyStructuredResultV2 {
  if (err instanceof HttpError) {
    return json(err.statusCode, {
      error: err.code ?? 'Error',
      message: err.message,
    });
  }
  const name = err instanceof Error ? err.name : '';
  const mapped = ALL_ERRORS[name];
  if (mapped) {
    return json(mapped[0], { error: name, message: mapped[1] });
  }
  console.error('Unhandled error', err);
  return json(500, {
    error: 'InternalServerError',
    message: 'Something went wrong',
  });
}

export async function safely(fn: () => ApiResult): ApiResult {
  try {
    return await fn();
  } catch (error) {
    return toErrorResponse(error);
  }
}
