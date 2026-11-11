import { NextResponse, type NextRequest } from 'next/server';
import {
  ACCESS_COOKIE,
  CHALLENGE_COOKIE,
  REFRESH_COOKIE,
  REFRESH_MAX_AGE,
  cookieOptions,
  type Tokens,
} from '@/lib/auth-cookies';
import { decodeJwt, isFresh, type AccessClaims } from '@/lib/jwt';
import { refreshTokens } from '@/lib/refresh';
import {
  AUTH_PAGES,
  dashboardPathFor,
  isPublicPage,
  requiredRolesFor,
} from '@/lib/roles';

// Next.js 16: proxy.ts replaces middleware.ts and runs on the Node.js runtime.
//
// For every page request it:
//  1. silently refreshes an expired access token using the refresh-token cookie,
//  2. sends signed-out users to /login,
//  3. sends signed-in users away from the auth pages to their own dashboard,
//  4. keeps users out of areas their group does not allow.
// This is a UX gate; the API enforces real authorization on every call.

function writeTokens(res: NextResponse, tokens: Tokens) {
  res.cookies.set(
    ACCESS_COOKIE,
    tokens.accessToken,
    cookieOptions(tokens.expiresIn ?? 3600),
  );
  if (tokens.refreshToken) {
    res.cookies.set(
      REFRESH_COOKIE,
      tokens.refreshToken,
      cookieOptions(REFRESH_MAX_AGE),
    );
  }
}

function clearTokens(res: NextResponse) {
  for (const name of [ACCESS_COOKIE, REFRESH_COOKIE, CHALLENGE_COOKIE])
    res.cookies.delete(name);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let claims: AccessClaims | null = decodeJwt(
    request.cookies.get(ACCESS_COOKIE)?.value,
  );
  if (!isFresh(claims)) claims = null;

  let refreshed: Tokens | null = null;
  let sessionDead = false;

  // The access-token cookie expires with the token, so "no access token + refresh token" means refresh.
  const refreshToken = request.cookies.get(REFRESH_COOKIE)?.value;
  if (!claims && refreshToken) {
    refreshed = await refreshTokens(refreshToken);
    if (refreshed) {
      claims = decodeJwt(refreshed.accessToken);
      // Make the new token visible to Server Components in this same request.
      request.cookies.set(ACCESS_COOKIE, refreshed.accessToken);
    } else {
      sessionDead = true;
    }
  }

  const finish = (res: NextResponse) => {
    if (refreshed) writeTokens(res, refreshed);
    if (sessionDead) clearTokens(res);
    return res;
  };
  const redirectTo = (path: string) =>
    finish(NextResponse.redirect(new URL(path, request.url)));

  if (isPublicPage(pathname)) return finish(NextResponse.next({ request }));
  const isAuthPage = AUTH_PAGES.includes(pathname);

  if (!claims) {
    return isAuthPage
      ? finish(NextResponse.next({ request }))
      : redirectTo('/login');
  }

  const groups = claims['cognito:groups'] ?? [];

  if (isAuthPage) return redirectTo(dashboardPathFor(groups));

  const allowed = requiredRolesFor(pathname);
  if (allowed && !allowed.some((role) => groups.includes(role))) {
    return redirectTo(dashboardPathFor(groups));
  }

  return finish(NextResponse.next({ request }));
}

export const config = {
  // Skip Next internals and any path with a file extension (images, fonts, ...).
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
