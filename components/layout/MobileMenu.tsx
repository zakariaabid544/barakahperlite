"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LockKeyhole, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();
  const navItems = t.nav.items;
  const portalLink =
    t.footer.links.find((item) => item.href === "/portal/login") ?? {
      label: "Portail client",
      href: "/portal/login",
    };
  const overlay =
    typeof document === "undefined"
      ? null
      : createPortal(
          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] overflow-y-auto bg-[#080a08]/95 px-4 pb-8 pt-4 shadow-glass backdrop-blur-2xl sm:px-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(22,214,111,0.16),transparent_28%),radial-gradient(circle_at_12%_84%,rgba(214,184,122,0.12),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-0 moroccan-pattern opacity-[0.055]" />

                <div className="relative mx-auto flex min-h-[calc(100svh-2rem)] max-w-lg flex-col">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 shadow-glass">
                    <div>
                      <p className="font-display text-lg uppercase leading-none text-perlite-50">
                        Barakah
                      </p>
                      <p className="font-display text-lg uppercase leading-none text-agritech-emerald">
                        Perlite
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={t.nav.closeMenu}
                      onClick={() => setOpen(false)}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-basalt-950/70 text-perlite-50 transition hover:border-agritech-emerald/50 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
                    >
                      <X aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </div>

                  <nav aria-label={t.nav.mobileAria} className="mt-7 grid gap-2">
                    {navItems.map((item) => {
                      const active =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-5 py-4 text-lg font-medium text-silver-100 shadow-glass transition hover:border-agritech-emerald/35 hover:bg-white/[0.075] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald",
                            active &&
                              "border-agritech-emerald/35 bg-agritech-emerald/10 text-perlite-50",
                          )}
                        >
                          <span>{item.label}</span>
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 text-silver-200/45 transition group-hover:translate-x-1 group-hover:text-agritech-emerald"
                          />
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-5 grid gap-3 rounded-xl border border-white/10 bg-basalt-900/55 p-4 shadow-glass">
                    <Link
                      href={portalLink.href}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-atlas-sand/25 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-perlite-50 transition hover:border-atlas-sand/50 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand"
                    >
                      <LockKeyhole
                        aria-hidden="true"
                        className="h-4 w-4 text-atlas-sand"
                      />
                      {portalLink.label}
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-agritech-emerald px-4 py-3.5 text-center text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
                    >
                      {t.common.quoteRequest}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                      {t.nav.language}
                    </p>
                    <LanguageSwitcher compact />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        );

  return (
    <div className="min-[1180px]:hidden">
      <button
        type="button"
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.065] text-perlite-50 shadow-glass backdrop-blur-xl transition hover:border-agritech-emerald/50 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
      >
        <Menu aria-hidden="true" className="h-6 w-6" />
      </button>
      {overlay}
    </div>
  );
}
