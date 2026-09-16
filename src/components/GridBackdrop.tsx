import clsx from "clsx";

type GridBackdropProps = {
  tone?: "dark" | "light";
  broken?: boolean;
  className?: string;
};

/**
 * The "loose grid" signature motif: a hairline grid that is deliberately
 * offset in one corner. Purely decorative -- aria-hidden.
 */
export function GridBackdrop({ tone = "dark", broken = true, className }: GridBackdropProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        tone === "dark" ? "loose-grid-bg" : "loose-grid-bg-light",
        className
      )}
    >
      {broken && (
        <div
          className={clsx(
            "absolute -right-8 top-1/3 h-40 w-[140%] -rotate-3 border-y",
            tone === "dark" ? "border-amber/60" : "border-amber"
          )}
        />
      )}
    </div>
  );
}
