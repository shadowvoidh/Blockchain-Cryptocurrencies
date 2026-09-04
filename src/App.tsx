import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CookieBanner from "@/components/layout/CookieBanner";
import Loader from "@/components/ui/Loader";
import SitemapPage from "@/pages/SitemapPage";

// Route-level code splitting: each page loads on demand, showing <Loader />
// while its chunk fetches — this is the "loading state" for navigation.
const HomePage = lazy(() => import("@/pages/HomePage"));
const BlockchainPage = lazy(() => import("@/pages/BlockchainPage"));
const BitcoinPage = lazy(() => import("@/pages/BitcoinPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export default function App() {
  return (
    <>
      {/* Skip link: first focusable element, lets keyboard/screen-reader users jump past the nav */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Suspense fallback={<Loader label="Carregando página…" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          <Route path="/bitcoin" element={<BitcoinPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-de-uso" element={<TermsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          {/* Catch-all → custom 404 page, still rendered inside the app shell */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <CookieBanner />
    </>
  );
}
