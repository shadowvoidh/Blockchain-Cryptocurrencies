import type { ContactFormErrors, ContactFormValues } from "@/types";
import { normalizeText } from "./sanitize";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Client-side validation is a UX convenience only. The server in
 * server/index.ts repeats every one of these checks — the client can
 * always be bypassed (devtools, curl, a modified request), so it is
 * never the source of truth for what is "valid".
 */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = normalizeText(values.name, 120);
  const email = normalizeText(values.email, 254);
  const subject = normalizeText(values.subject, 150);
  const message = normalizeText(values.message, 4000);

  if (!name || name.length < 2) errors.name = "Informe seu nome completo.";
  if (!email || !EMAIL_RE.test(email)) errors.email = "Informe um e-mail válido.";
  if (!subject || subject.length < 3) errors.subject = "Informe um assunto.";
  if (!message || message.length < 10) {
    errors.message = "Sua mensagem precisa ter pelo menos 10 caracteres.";
  }

  // Honeypot: real users never fill this hidden field. If it's filled, treat as bot.
  if (values.company) {
    errors.form = "Não foi possível validar o envio.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
