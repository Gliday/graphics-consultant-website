import clsx from "clsx";
import { site } from "@/content/site";

export function AvailabilityBadge({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2 text-xs uppercase tracking-wider", className)}>
      <span
        className={clsx(
          "h-2 w-2 rounded-full",
          site.availableForWork ? "bg-signal animate-pulse" : "bg-line-light"
        )}
        aria-hidden
      />
      {site.availableForWork ? "Available for new projects" : "Fully booked"}
    </span>
  );
}
