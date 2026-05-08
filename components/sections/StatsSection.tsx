"use client";

import { Reveal } from "@/components/ui/Reveal";
import type { Stat } from "@/types/site";

type StatsSectionProps = {
  stats: readonly Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="relative z-10 -mt-8 px-4 pb-12 sm:px-6 md:-mt-10 md:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-stretch gap-2 rounded-lg border border-white/10 bg-basalt-900/80 p-2 shadow-glass backdrop-blur-2xl md:grid-cols-4 md:gap-3 md:p-3">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.05}
            className="rounded-md border border-white/10 bg-white/[0.045] p-4 md:p-5"
          >
            <p className="font-display text-2xl font-semibold text-perlite-50 md:text-4xl">
              {stat.value}
            </p>
            <h3 className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-atlas-sand md:text-sm md:tracking-[0.22em]">
              {stat.label}
            </h3>
            <p className="mt-2 text-xs leading-5 text-silver-200/70 md:mt-3 md:text-sm md:leading-6">
              {stat.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
