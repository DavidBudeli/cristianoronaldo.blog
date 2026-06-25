"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLanguage } from "@/components/i18n/language-provider";
import { ExternalLink } from "@/components/ui/external-link";

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
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${isScrolled ? "h-16" : "h-20"}`}>
        <Link
          href="/"
          className="group flex items-center gap-4"
          aria-label="CR7 Blog home"
        >
          <Image
            src="/brand/logos/cr7.svg"
            alt="Cristiano Ronaldo logo"
            width={118}
            height={30}
            priority
            className="h-7 w-auto brightness-0 invert transition duration-300 group-hover:scale-[1.035] group-hover:brightness-100 sm:h-8"
          />
          <span className="mt-1 hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted sm:inline">
            Blog
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {siteConfig.navigation.map((item) => {
            const navClassName = `relative inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] transition after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-brand-orange after:transition-[width] after:duration-300 hover:text-gold ${
              pathname === item.href
                ? "text-gold after:w-full"
                : "text-muted after:w-0 hover:after:w-full"
            }`;

            return item.external ? (
              <ExternalLink
                key={item.href}
                href={item.href}
                ariaLabel={goalsAriaLabel}
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
        <div className="hidden items-center gap-3 md:flex">
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
            className="rounded-full border border-brand-orange bg-brand-orange px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
          >
            Subscribe
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
