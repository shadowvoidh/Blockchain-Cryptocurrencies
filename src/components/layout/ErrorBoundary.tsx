import { Component } from "react";
import type { ErrorInfo, PropsWithChildren } from "react";

interface State {
  hasError: boolean;
}

/**
 * Top-level error boundary. Catches render-time errors anywhere below it
 * and shows a generic, safe message — never the raw error/stack trace,
 * which could leak implementation details to an attacker probing the app.
 */
export default class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production, wire this to your error-tracking service (e.g. Sentry)
    // rather than printing to console.
    console.error("Unhandled UI error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-black px-6 text-center text-white">
          <h1 className="font-display text-3xl">Algo deu errado.</h1>
          <p className="max-w-sm text-white/60">
            Encontramos um problema inesperado. Tente recarregar a página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            Recarregar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
