"use client";

import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-4 pb-12 pt-28 sm:px-6 md:pb-16 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,10,8,0.96),rgba(20,24,19,0.88),rgba(6,59,36,0.62))]" />
      <MoroccanPatternBackground density="medium" />
      <AnimatedParticles />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-atlas-sand md:mb-5 md:tracking-[0.34em]">
            {eyebrow}
          </p>
          <h1 className="text-balance font-display text-[2.15rem] font-semibold leading-[1.06] text-perlite-50 md:text-5xl md:leading-[1.06] lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-silver-200/75 md:mt-6 md:text-lg md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
