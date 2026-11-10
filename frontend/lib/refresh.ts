import { apiUrl } from "./config";
import type { Tokens } from "./auth-cookies";

/** Exchanges a refresh token for new access/id tokens via POST /auth/refresh. */
export async function refreshTokens(
  refreshToken: string,
): Promise<Tokens | null> {
  try {
    const res = await fetch(`${apiUrl()}/auth/refresh-token`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ refreshToken }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Tokens;
    return data.accessToken ? data : null;
  } catch {
    return null;
  }
}
