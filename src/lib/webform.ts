import type { ContactFormValues } from "@/types";

/**
 * Contact form submission — no backend required.
 *
 * Uses Web3Forms (https://web3forms.com): the browser POSTs directly to
 * their API with a public "access key". This key is safe to ship in the
 * client bundle — Web3Forms is designed for exactly this (like a
 * reCAPTCHA site key). To prevent abuse from other sites reusing your
 * key, restrict it to your domain in the Web3Forms dashboard
 * (Settings → Allowed Domains) once you have a real domain.
 *
 * Anti-spam layers already in place:
 *  - Our own honeypot field (`company`, hidden from real users) — see validate.ts
 *  - Web3Forms' own honeypot field (`botcheck`) sent below
 *  - Web3Forms' server-side spam filtering on their end
 *
 * If you outgrow this (need to store messages in your own database, send
 * from your own domain's SMTP, etc.), a small Node/Express backend with
 * CSRF protection + Postgres is the natural next step — this file is the
 * only one you'd need to swap out.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Set VITE_WEB3FORMS_ACCESS_KEY in your .env (see .env.example).
// Get a free key at https://web3forms.com — no account/login required,
// they just email you a key.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export class ContactFormNotConfiguredError extends Error {
  constructor() {
    super("O formulário de contato ainda não foi configurado (chave do Web3Forms ausente).");
    this.name = "ContactFormNotConfiguredError";
  }
}

export async function sendContactForm(values: ContactFormValues): Promise<void> {
  if (!ACCESS_KEY) {
    // Fails loudly in dev instead of silently pretending to succeed.
    throw new ContactFormNotConfiguredError();
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name: values.name,
      email: values.email,
      subject: `[Guia Cripto] ${values.subject}`,
      message: values.message,
      botcheck: "", // Web3Forms' own honeypot — must stay empty
      from_name: "Guia Cripto — Formulário de contato",
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    throw new Error(
      data.message ?? "Não foi possível enviar sua mensagem agora. Tente novamente em instantes."
    );
  }
}
