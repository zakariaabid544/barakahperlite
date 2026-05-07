"use client";

import type { IconKey } from "@/types/i18n";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: IconKey;
  className?: string;
  index?: number;
};

export function FeatureCard({
  title,
  description,
  icon,
  className,
  index = 0,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <Reveal
      className={cn(
        "group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-agritech-emerald/40 hover:bg-white/[0.075]",
        className,
      )}
      delay={index * 0.04}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-atlas-sand/25 bg-basalt-950/70 text-atlas-sand shadow-bronze">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
        {description}
      </p>
    </Reveal>
  );
}
