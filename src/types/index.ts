export type Theme = "blockchain" | "bitcoin";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** honeypot field — must stay empty; bots fill every input */
  company: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  form?: string;
}

export interface ApiErrorResponse {
  error: string;
  fields?: Record<string, string>;
}
