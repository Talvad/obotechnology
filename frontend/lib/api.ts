import 'server-only';
import { cookies } from 'next/headers';
import { ACCESS_COOKIE } from './auth-cookies';
import { apiUrl } from './config';

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; error: string; message: string };

type Options = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  /** Send the access token from the cookie (default). Set false for public /auth/* routes. */
  auth?: boolean;
};

/**
 * Server-side client for the SAM API. Tokens never reach the browser, so no CORS is involved.
 * Expired access tokens are refreshed by proxy.ts before a request reaches this code.
 */
export async function api<T = unknown>(
  path: string,
  { method = 'GET', body, auth = true }: Options = {},
): Promise<ApiResult<T>> {
  const headers: Record<string, string> = { accept: 'application/json' };
  if (body !== undefined) headers['content-type'] = 'application/json';

  if (auth) {
    const token = (await cookies()).get(ACCESS_COOKIE)?.value;
    if (!token) return { ok: false, status: 401, error: 'Unauthorized', message: 'You are not signed in' };
    headers['authorization'] = `Bearer ${token}`;
  }

  let res: Response;
  try {
    res = await fetch(`${apiUrl()}${path}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      cache: 'no-store',
    });
  } catch {
    return { ok: false, status: 503, error: 'NetworkError', message: 'Could not reach the API' };
  }

  const text = await res.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    // non-JSON body
  }

  if (!res.ok) {
    // Lambda errors are { error, message }; API Gateway authorizer errors are { message }.
    const err = (json ?? {}) as { error?: string; message?: string };
    return {
      ok: false,
      status: res.status,
      error: err.error ?? 'Error',
      message: err.message ?? (res.statusText || 'Request failed'),
    };
  }
  return { ok: true, data: json as T };
}
