import { useCallback, useEffect, useState } from "react";
import { loadAnalyticsIfConsented } from "@/lib/analytics";

export type ConsentState = "accepted" | "rejected" | null;

const STORAGE_KEY = "cookie_consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState;
    setConsent(stored);
    if (stored === "accepted") loadAnalyticsIfConsented();
  }, []);

  const accept = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    loadAnalyticsIfConsented();
  }, []);

  const reject = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  }, []);

  return { consent, accept, reject, isResolved: consent !== null };
}
