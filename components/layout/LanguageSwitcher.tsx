"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { localeOptions } from "@/data/translations";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  className,
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeOption =
    localeOptions.find((option) => option.code === locale) ?? localeOptions[0];

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative text-sm font-semibold",
        compact ? "w-full" : "shrink-0",
        className,
      )}
    >
      <button
        type="button"
        aria-label={`${t.nav.language}: ${activeOption.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 text-silver-200/80 transition hover:border-agritech-emerald/45 hover:bg-white/[0.075] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald",
          compact ? "w-full justify-between" : "min-w-[82px] justify-center",
        )}
      >
        <span className="inline-flex items-center gap-2">
          <Globe2 aria-hidden="true" className="h-4 w-4 text-atlas-sand" />
          <span className="text-agritech-emerald">{activeOption.label}</span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 text-silver-200/55 transition",
            open && "rotate-180 text-perlite-50",
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            role="menu"
            aria-label={t.nav.language}
            className={cn(
              "absolute right-0 z-[80] mt-2 min-w-36 overflow-hidden rounded-md border border-white/10 bg-basalt-950/95 p-1 shadow-glass backdrop-blur-2xl",
              compact && "left-0 right-auto w-full",
            )}
          >
            {localeOptions.map((option) => {
              const active = option.code === locale;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    setLocale(option.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm transition hover:bg-white/[0.07] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald",
                    active
                      ? "bg-agritech-emerald text-basalt-950"
                      : "text-silver-200/70",
                  )}
                >
                  <span>
                    <span className="font-bold">{option.label}</span>
                    <span className="ms-2 text-xs opacity-70">
                      {option.name}
                    </span>
                  </span>
                  {active ? (
                    <Check aria-hidden="true" className="h-4 w-4" />
                  ) : null}
                </button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
