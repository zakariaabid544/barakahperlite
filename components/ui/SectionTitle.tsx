"use client";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-perlite-50 md:text-5xl md:leading-[1.06]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-silver-200/75 md:mt-5 md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
