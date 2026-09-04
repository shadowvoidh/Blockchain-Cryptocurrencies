import { useId } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  error?: string;
  as?: "input" | "textarea";
};

type FieldProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, "id">;

/**
 * Accessible form field: label is programmatically tied to the control,
 * and errors are announced via aria-live + aria-describedby / aria-invalid
 * so assistive tech users get the same feedback sighted users see in red.
 */
export default function FormField({ label, error, as = "input", className = "", ...rest }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const shared =
    "w-full rounded-lg border bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-2 transition-colors " +
    (error ? "border-red-500" : "border-white/15 focus:border-white/40");

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/80">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`${shared} min-h-[140px] resize-y ${className}`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`${shared} ${className}`}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
