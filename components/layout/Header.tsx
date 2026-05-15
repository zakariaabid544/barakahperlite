"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const navItems = t.nav.items;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-[5%]",
        scrolled && "pt-3",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[72px] max-w-[1500px] items-center justify-between gap-4 rounded-[0.55rem] border border-white/10 bg-[#020806]/72 px-4 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 lg:h-20",
          scrolled
            ? "lg:rounded-[0.55rem] lg:border-white/10 lg:bg-[#020806]/78 lg:px-5 lg:shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
            : "lg:rounded-none lg:border-transparent lg:bg-transparent lg:px-0 lg:shadow-none",
        )}
      >
        <Link
          href="/"
          aria-label={t.nav.homeLabel}
          className="flex min-w-0 items-center gap-3 lg:gap-4"
        >
          <Image
            src="/brand/barakah-perlite-logo-transparent.png"
            width={52}
            height={52}
            priority
            alt=""
            aria-hidden="true"
            className="h-11 w-11 shrink-0 object-contain sm:hidden"
          />
          <Image
            src="/brand/barakah-perlite-logo-transparent.png"
            width={56}
            height={56}
            alt=""
            aria-hidden="true"
            className="hidden h-12 w-12 shrink-0 object-contain sm:block lg:h-14 lg:w-14"
          />
          <span className="block min-w-0 text-left font-display text-base font-extrabold uppercase leading-[0.96] tracking-[0.055em] min-[380px]:text-lg lg:text-xl">
            <span className="block text-[#16C85F]">Barakah</span>
            <span className="block text-perlite-50">Perlite</span>
          </span>
        </Link>

        <nav
          aria-label={t.nav.aria}
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 min-[1180px]:flex xl:gap-7"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-[0.73rem] font-bold uppercase tracking-[0.075em] text-[#B8C2BD] transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C85F]",
                  active &&
                    "text-[#16C85F] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#16C85F]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 min-[1180px]:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="bp-glass-cta bp-glass-cta--primary px-5 py-3 text-[0.68rem]"
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
