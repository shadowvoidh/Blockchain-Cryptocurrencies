import type { PropsWithChildren } from "react";
import type { Theme } from "@/types";

interface CardProps {
  theme: Theme;
  title: string;
  className?: string;
}

const THEME_STYLES: Record<Theme, string> = {
  blockchain: "border-chain-gold/40 bg-chain-surface shadow-goldGlow",
  bitcoin: "border-coin-violet/40 bg-coin-surface shadow-coinGlow",
};

const TITLE_STYLES: Record<Theme, string> = {
  blockchain: "text-chain-goldLight font-display",
  bitcoin: "text-coin-violet font-mono",
};

export default function Card({ theme, title, className = "", children }: PropsWithChildren<CardProps>) {
  return (
    <div className={`rounded-2xl border p-6 sm:p-7 ${THEME_STYLES[theme]} ${className}`}>
      <h3 className={`mb-3 text-xl ${TITLE_STYLES[theme]}`}>{title}</h3>
      <div className="text-sm leading-relaxed text-white/75">{children}</div>
    </div>
  );
}
