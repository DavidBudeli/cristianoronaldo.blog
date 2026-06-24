import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-absolute-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            className="h-7 w-auto brightness-0 invert sm:h-8"
          />
          <span className="mt-1 hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted sm:inline">
            Blog
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/search"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-warm"
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
