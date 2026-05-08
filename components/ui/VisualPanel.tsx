"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type VisualPanelProps = {
  title: string;
  caption: string;
  variant?: "mineral" | "greenhouse" | "factory" | "packaging" | "map";
  className?: string;
};

export function VisualPanel({
  title,
  caption,
  variant = "mineral",
  className,
}: VisualPanelProps) {
  return (
    <figure
      className={cn(
        "placeholder-visual relative min-h-[300px] w-full self-start overflow-hidden rounded-lg border border-white/10 bg-basalt-900 shadow-glass md:min-h-[340px] lg:min-h-[380px]",
        `placeholder-visual--${variant}`,
        className,
      )}
    >
      {/* TODO: Replace this stylized placeholder with real Barakah Perlite photography. */}
      <div className="absolute inset-0 mineral-noise opacity-65" />
      <div className="absolute inset-0 placeholder-visual__light" />
      <div className="absolute left-5 top-5 flex items-center gap-3 md:left-6 md:top-6">
        <Image
          src="/brand/barakah-perlite-logo-transparent.png"
          width={42}
          height={42}
          alt=""
          aria-hidden="true"
          className="h-10 w-10 object-contain"
        />
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-perlite-50/80 backdrop-blur-md">
          Barakah Perlite
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-basalt-950 via-basalt-950/80 to-transparent p-5 pt-20 md:p-6 md:pt-24">
        <figcaption>
          <p className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
            {title}
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-silver-200/75 md:leading-7 md:text-base">
            {caption}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
