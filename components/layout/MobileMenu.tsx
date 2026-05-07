"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();
  const navItems = t.nav.items;

  return (
    <div className="min-[1180px]:hidden">
      <button
        type="button"
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] text-perlite-50 backdrop-blur-xl transition hover:border-agritech-emerald/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed left-4 right-4 top-24 z-[60] max-h-[calc(100svh-7rem)] overflow-y-auto rounded-lg border border-white/10 bg-basalt-950/95 p-3 shadow-glass backdrop-blur-2xl sm:left-6 sm:right-6"
          >
            <nav aria-label={t.nav.mobileAria} className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-sm font-medium text-silver-100 transition hover:bg-white/[0.07] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald",
                    pathname.startsWith(item.href) &&
                      "bg-white/[0.08] text-perlite-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-3 border-t border-white/10 pt-3">
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                  {t.nav.language}
                </p>
                <LanguageSwitcher compact />
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-agritech-emerald px-4 py-3 text-center text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
              >
                {t.common.quoteRequest}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
