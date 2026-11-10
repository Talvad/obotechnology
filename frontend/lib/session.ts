import 'server-only';
import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ACCESS_COOKIE } from './auth-cookies';
import { decodeJwt, isFresh } from './jwt';

export type Session = { sub: string; groups: string[] };

/** Reads the signed-in user's id and groups from the access-token cookie. */
export const getSession = cache(async (): Promise<Session | null> => {
  const claims = decodeJwt((await cookies()).get(ACCESS_COOKIE)?.value);
  if (!isFresh(claims)) return null;
  return { sub: claims.sub, groups: claims['cognito:groups'] ?? [] };
});

export async function requireSession(): Promise<Session> {
  const session = await getSession();
  if (!session) redirect('/login');
  return session;
}
