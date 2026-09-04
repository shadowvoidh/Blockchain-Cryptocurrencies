import { Link, useLocation } from "react-router-dom";
import type { Theme } from "@/types";

const THEME_BAR: Record<Theme | "neutral", string> = {
  blockchain: "border-chain-gold/25 bg-chain-bg/90 text-chain-ink",
  bitcoin: "border-coin-violet/25 bg-coin-bg/90 text-coin-ink",
  neutral: "border-white/10 bg-black/90 text-white",
};

const THEME_ACCENT: Record<Theme | "neutral", string> = {
  blockchain: "text-chain-gold",
  bitcoin: "text-coin-violet",
  neutral: "text-white",
};

interface HeaderProps {
  theme?: Theme | "neutral";
}

export default function Header({ theme = "neutral" }: HeaderProps) {
  const location = useLocation();

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur ${THEME_BAR[theme]}`}>
      <div className="container-edu flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <span className={`text-lg ${THEME_ACCENT[theme]}`} aria-hidden="true">
            ◆
          </span>
          <span>Guia Cripto</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-sm sm:flex">
          <Link
            to="/blockchain"
            className={location.pathname.startsWith("/blockchain") ? THEME_ACCENT.blockchain : "text-white/70 hover:text-white"}
          >
            Blockchain
          </Link>
          <Link
            to="/bitcoin"
            className={location.pathname.startsWith("/bitcoin") ? THEME_ACCENT.bitcoin : "text-white/70 hover:text-white"}
          >
            Bitcoin
          </Link>
        </nav>


      </div>
    </header>
  );
}
