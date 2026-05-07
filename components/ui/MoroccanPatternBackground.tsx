import { cn } from "@/lib/utils";

type MoroccanPatternBackgroundProps = {
  className?: string;
  density?: "quiet" | "medium";
};

export function MoroccanPatternBackground({
  className,
  density = "quiet",
}: MoroccanPatternBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        density === "medium" ? "opacity-[0.16]" : "opacity-[0.08]",
        className,
      )}
    >
      <div className="moroccan-pattern absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-atlas-sand/40 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-agritech-emerald/30 to-transparent" />
    </div>
  );
}
