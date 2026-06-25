"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLanguage } from "@/components/i18n/language-provider";
import { SiteLogo } from "@/components/layout/site-logo";
import { MobileNav } from "@/components/mobile-nav";
import { ExternalLink } from "@/components/ui/external-link";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const goalsAriaLabel =
    locale === "pt-BR"
      ? "Abrir experiência interativa de gols de Cristiano Ronaldo na Perplexity"
      : "Open Cristiano Ronaldo interactive goals experience on Perplexity";

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none ${
        isScrolled
          ? "border-brand-orange/30 bg-absolute-black/95 shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
          : "border-white/10 bg-absolute-black/86"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 xl:grid-cols-[minmax(220px,0.9fr)_minmax(0,auto)_minmax(230px,0.9fr)] ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <SiteLogo />
        <nav
          className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-6"
          aria-label="Main"
        >
          {siteConfig.navigation.map((item) => {
            const navClassName = `relative inline-flex shrink-0 items-center whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.13em] transition after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-brand-orange after:transition-[width] after:duration-300 hover:text-gold 2xl:text-xs 2xl:tracking-[0.16em] ${
              pathname === item.href
                ? "text-gold after:w-full"
                : "text-muted after:w-0 hover:after:w-full"
            }`;

            return item.external ? (
              <ExternalLink
                key={item.href}
                href={item.href}
                ariaLabel={goalsAriaLabel}
                showIndicator={false}
                className={navClassName}
              >
                {item.label}
              </ExternalLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={navClassName}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden min-w-0 items-center justify-end gap-3 xl:flex">
          <Link
            href="/search"
            aria-current={pathname === "/search" ? "page" : undefined}
            className={`text-xs font-semibold uppercase tracking-[0.16em] transition hover:text-warm ${
              pathname === "/search" ? "text-gold" : "text-muted"
            }`}
          >
            Search
          </Link>
          <Link
            href="/newsletter"
            className="rounded-full border border-brand-orange bg-brand-orange px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black 2xl:px-5 2xl:text-xs"
          >
            Subscribe
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center justify-end gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
