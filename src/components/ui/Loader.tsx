interface LoaderProps {
  label?: string;
}

export default function Loader({ label = "Carregando…" }: LoaderProps) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-16 text-white/60">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

/** Skeleton block for content that is still loading — avoids layout jump when content arrives. */
export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-white/10 ${className}`} aria-hidden="true" />;
}
