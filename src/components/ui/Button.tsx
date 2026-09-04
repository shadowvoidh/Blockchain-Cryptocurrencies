import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { Theme } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  variant?: "solid" | "outline";
  isLoading?: boolean;
}

const THEME_SOLID: Record<Theme, string> = {
  blockchain: "bg-chain-gold text-chain-bg hover:bg-chain-goldLight focus-visible:outline-chain-gold",
  bitcoin: "bg-coin-violet text-white hover:bg-violet-500 focus-visible:outline-coin-violet",
};

const THEME_OUTLINE: Record<Theme, string> = {
  blockchain: "border border-chain-gold text-chain-gold hover:bg-chain-gold/10",
  bitcoin: "border border-coin-violet text-coin-ink hover:bg-coin-violet/10",
};

/**
 * Shared button. `isLoading` disables the control and swaps in a spinner
 * so users get a visible loading state on every async action (form
 * submits, navigation triggers) instead of a control that looks dead.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ theme = "blockchain", variant = "solid", isLoading, disabled, className = "", children, ...rest }, ref) => {
    const palette = variant === "solid" ? THEME_SOLID[theme] : THEME_OUTLINE[theme];
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 ${palette} ${className}`}
        {...rest}
      >
        {isLoading && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
