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
        "group relative h-full overflow-hidden rounded-[0.55rem] border border-white/10 bg-[#07110E]/82 p-5 shadow-[0_26px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#16C85F]/45 hover:bg-[#0B1712] md:p-7",
        className,
      )}
      delay={index * 0.04}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[0.4rem] border border-[#16C85F]/35 bg-[#16C85F]/10 text-[#16C85F] shadow-[0_0_34px_rgba(22,200,95,0.18)] md:mb-6 md:h-14 md:w-14">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.01em] text-perlite-50 md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-silver-200/70 md:leading-7 md:text-base">
        {description}
      </p>
    </Reveal>
  );
}
