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
      <h2 className="text-balance font-display text-3xl font-semibold leading-[1.14] text-perlite-50 md:text-4xl md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-7 text-silver-200/75 md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
