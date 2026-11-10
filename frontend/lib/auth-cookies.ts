// Shared by proxy.ts and the server actions (no server-only import: the proxy needs it too).

export const ACCESS_COOKIE = 'access_token';
export const REFRESH_COOKIE = 'refresh_token';
/** Short-lived cookie that carries the NEW_PASSWORD_REQUIRED challenge between pages. */
export const CHALLENGE_COOKIE = 'auth_challenge';

export const REFRESH_MAX_AGE = 60 * 60 * 24 * 30; // matches RefreshTokenValidity (30 days)
export const CHALLENGE_MAX_AGE = 60 * 3; // Cognito challenge sessions last ~3 minutes

export type Tokens = {
  accessToken: string;
  idToken?: string;
  /** Not returned by /auth/refresh: Cognito keeps the original refresh token valid. */
  refreshToken?: string;
  expiresIn?: number;
};

export function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge,
  };
}
