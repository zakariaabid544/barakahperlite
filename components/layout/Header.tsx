"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const navItems = t.nav.items;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-lg border border-white/10 bg-basalt-950/70 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Link
          href="/"
          aria-label={t.nav.homeLabel}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/brand/barakah-perlite-logo-transparent.png"
            width={42}
            height={42}
            preload
            loading="eager"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 object-contain sm:hidden"
          />
          <Image
            src="/brand/barakah-perlite-logo-transparent.png"
            width={42}
            height={42}
            alt=""
            aria-hidden="true"
            className="hidden h-10 w-10 shrink-0 object-contain sm:block"
          />
          <span className="hidden text-left font-display text-base font-bold uppercase leading-[0.95] tracking-wide sm:block">
            <span className="block text-agritech-emerald">Barakah</span>
            <span className="block text-perlite-50">Perlite</span>
          </span>
        </Link>

        <nav
          aria-label={t.nav.aria}
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 min-[1180px]:flex xl:gap-1"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-2 text-sm font-medium text-silver-200/70 transition hover:bg-white/[0.06] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald xl:px-3",
                  active && "bg-white/[0.08] text-perlite-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 min-[1180px]:flex xl:gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-agritech-emerald px-3 py-2.5 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-basalt-950 xl:px-4"
          >
            {t.nav.quoteShort}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
