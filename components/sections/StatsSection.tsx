"use client";

import { Reveal } from "@/components/ui/Reveal";
import type { Stat } from "@/types/site";

type StatsSectionProps = {
  stats: readonly Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="relative z-10 -mt-10 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-3 rounded-lg border border-white/10 bg-basalt-900/80 p-3 shadow-glass backdrop-blur-2xl md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.05}
            className="rounded-md border border-white/10 bg-white/[0.045] p-5"
          >
            <p className="font-display text-3xl font-semibold text-perlite-50 md:text-4xl">
              {stat.value}
            </p>
            <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-atlas-sand">
              {stat.label}
            </h3>
            <p className="mt-3 text-sm leading-6 text-silver-200/70">
              {stat.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
