"use client";

import type { ProcessStep } from "@/types/site";
import { Reveal } from "@/components/ui/Reveal";

type ProcessTimelineProps = {
  steps: readonly ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-4">
      {steps.map((item, index) => (
        <Reveal
          key={item.step}
          delay={index * 0.06}
          className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-5xl font-semibold text-white/10">
              {item.step}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-atlas-sand/50 to-transparent" />
          </div>
          <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
            {item.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
