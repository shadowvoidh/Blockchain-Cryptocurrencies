import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookieBanner() {
  const { consent, accept, reject, isResolved } = useCookieConsent();

  if (isResolved && consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 px-5 py-4 backdrop-blur sm:px-8"
    >
      <div className="container-edu flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/75">
          Usamos cookies essenciais para o funcionamento do site e, mediante seu consentimento,
          cookies de análise para entender o uso do conteúdo. Veja nossa{" "}
          <Link to="/politica-de-privacidade" className="underline hover:text-white">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-white/90"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
