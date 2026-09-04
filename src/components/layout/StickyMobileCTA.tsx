import { Link } from "react-router-dom";
import type { Theme } from "@/types";

interface StickyMobileCTAProps {
  theme: Theme;
  label: string;
  to: string;
}

const THEME_BAR: Record<Theme, string> = {
  blockchain: "bg-chain-gold text-chain-bg",
  bitcoin: "bg-coin-violet text-white",
};

/**
 * Fixed bottom CTA shown only on mobile (sm:hidden), so the primary action
 * is always one thumb-tap away without competing with the desktop header CTA.
 * pb-[env(safe-area-inset-bottom)] keeps it clear of iOS home-indicator area.
 */
export default function StickyMobileCTA({ theme, label, to }: StickyMobileCTAProps) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 sm:hidden ${THEME_BAR[theme]}`}
    >
      <Link to={to} className="w-full max-w-sm rounded-full py-3 text-center text-sm font-semibold">
        {label}
      </Link>
    </div>
  );
}
