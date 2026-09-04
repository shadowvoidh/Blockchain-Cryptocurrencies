/**
 * CSRF protection — double-submit cookie pattern.
 *
 * 1. The server sets a `csrf_token` cookie (readable by JS, NOT HttpOnly —
 *    that's intentional for this pattern: JS must read it to echo it back)
 *    on first load of GET /api/csrf-token, alongside an HttpOnly, Secure,
 *    SameSite=Strict session cookie the JS can never touch.
 * 2. Every state-changing request (POST/PUT/PATCH/DELETE) must include the
 *    same value in an `X-CSRF-Token` header.
 * 3. The server rejects the request unless the header value matches the
 *    cookie value AND the session tied to that cookie. A cross-site page
 *    can trigger a cookie-carrying request, but it cannot read the cookie
 *    to put its value in a custom header (blocked by same-origin policy),
 *    so a forged request fails.
 *
 * The server (server/index.ts) additionally validates the Origin/Referer
 * header on state-changing routes as a second, independent layer.
 */

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

export async function ensureCsrfToken(): Promise<string> {
  const existing = readCookie("csrf_token");
  if (existing) return existing;

  const res = await fetch("/api/csrf-token", {
    method: "GET",
    credentials: "same-origin",
  });
  if (!res.ok) throw new Error("Não foi possível preparar o formulário. Recarregue a página.");
  const token = readCookie("csrf_token");
  if (!token) throw new Error("Token de segurança ausente.");
  return token;
}

interface SecurePostOptions {
  path: string;
  body: unknown;
}

/** POST helper that always attaches the CSRF header and same-origin credentials. */
export async function securePost<T>({ path, body }: SecurePostOptions): Promise<T> {
  const token = await ensureCsrfToken();

  const res = await fetch(path, {
    method: "POST",
    credentials: "same-origin", // send cookies, but only to our own origin
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) {
    throw new Error(data?.error ?? "Ocorreu um erro ao enviar. Tente novamente.");
  }
  return data;
}
