const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Record<string, string> };

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  // Strip control characters and cap length before anything else touches this string.
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

/**
 * Server-side validation is the ONLY validation that matters for security.
 * The client's validate.ts exists purely for UX (instant feedback); an
 * attacker can bypass it entirely by calling this endpoint directly, so
 * every rule is re-checked here against the raw request body.
 */
export function validateContactPayload(body: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const b = (body ?? {}) as Record<string, unknown>;

  const name = clean(b.name, 120);
  const email = clean(b.email, 254);
  const subject = clean(b.subject, 150);
  const message = clean(b.message, 4000);

  if (name.length < 2) errors.name = "Nome inválido.";
  if (!EMAIL_RE.test(email)) errors.email = "E-mail inválido.";
  if (subject.length < 3) errors.subject = "Assunto inválido.";
  if (message.length < 10) errors.message = "Mensagem muito curta.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, email, subject, message } };
}
