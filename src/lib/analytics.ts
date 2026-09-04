/**
 * Privacy-first analytics loading.
 * No analytics script is injected until the user has explicitly accepted
 * the cookie banner (see hooks/useCookieConsent.ts). This keeps the app
 * compliant with LGPD/GDPR-style consent requirements and keeps the CSP
 * script-src tight (see index.html / server Helmet config) — the analytics
 * host must be allow-listed there before this will actually load anything.
 */

const ANALYTICS_SRC = "https://plausible.io/js/script.js"; // swap for your provider
const ANALYTICS_DATA_DOMAIN = "exemplo-blockchain-edu.com.br";

let loaded = false;

export function loadAnalyticsIfConsented(): void {
  if (loaded) return;
  const consent = window.localStorage.getItem("cookie_consent");
  if (consent !== "accepted") return;

  const script = document.createElement("script");
  script.src = ANALYTICS_SRC;
  script.defer = true;
  script.setAttribute("data-domain", ANALYTICS_DATA_DOMAIN);
  // No inline script content — respects the strict script-src CSP (no 'unsafe-inline').
  document.head.appendChild(script);
  loaded = true;
}

export function trackEvent(name: string, props?: Record<string, string>): void {
  const consent = window.localStorage.getItem("cookie_consent");
  if (consent !== "accepted") return;
  const w = window as unknown as { plausible?: (n: string, o?: unknown) => void };
  w.plausible?.(name, { props });
}
