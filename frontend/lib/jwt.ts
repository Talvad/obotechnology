export type AccessClaims = {
  sub: string;
  exp: number;
  scope?: string;
  'cognito:groups'?: string[];
};

/**
 * Decodes a JWT payload WITHOUT verifying the signature. This is only used to decide
 * where to send the user (UX). Every data request goes to the API, where API Gateway's
 * JWT authorizer verifies the token and the route scopes.
 */
export function decodeJwt(token: string | undefined): AccessClaims | null {
  if (!token) return null;
  const payload = token.split('.')[1];
  if (!payload) return null;
  try {
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as AccessClaims;
  } catch {
    return null;
  }
}

export function isFresh(claims: AccessClaims | null, skewSeconds = 10): claims is AccessClaims {
  return !!claims && typeof claims.exp === 'number' && claims.exp * 1000 > Date.now() + skewSeconds * 1000;
}
