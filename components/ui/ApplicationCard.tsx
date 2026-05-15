"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IconKey } from "@/types/i18n";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type ApplicationAccent = "emerald" | "sand" | "clay" | "silver";

const accentClasses: Record<ApplicationAccent, string> = {
  emerald: "from-agritech-emerald/20 text-agritech-emerald",
  sand: "from-atlas-sand/20 text-atlas-sand",
  clay: "from-atlas-clay/20 text-atlas-copper",
  silver: "from-silver-200/20 text-silver-200",
};

type ApplicationCardProps = {
  title: string;
  description: string;
  icon: IconKey;
  href: string;
  accent: ApplicationAccent;
  index?: number;
};

export function ApplicationCard({
  title,
  description,
  icon,
  href,
  accent,
  index = 0,
}: ApplicationCardProps) {
  const Icon = iconMap[icon];

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <Link
        href={href}
        className={cn(
          "group relative flex h-full min-h-[220px] overflow-hidden rounded-[0.55rem] border border-white/10 bg-[#07110E]/82 p-5 shadow-[0_26px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-current/35 hover:bg-[#0B1712] focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald md:min-h-[260px] md:p-7",
          accentClasses[accent],
        )}
      >
        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent" />
          <div className="absolute -right-16 top-10 h-44 w-44 rounded-full border border-current/20" />
        </div>
        <div className="relative flex h-full flex-col">
          <div className="mb-6 flex items-center justify-between md:mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-[0.4rem] border border-current/25 bg-current/10 md:h-14 md:w-14">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.01em] text-perlite-50 md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-silver-200/70 md:mt-4 md:leading-7 md:text-base">
            {description}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
