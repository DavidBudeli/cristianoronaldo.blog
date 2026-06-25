"use client";

import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { externalLinks } from "@/data/external-links";

type SiteLogoProps = {
  compact?: boolean;
  className?: string;
};

export function SiteLogo({ compact = false, className = "" }: SiteLogoProps) {
  const { locale } = useLanguage();
  const ariaLabel =
    locale === "pt-BR"
      ? "Abrir site oficial de Cristiano Ronaldo"
      : "Open Cristiano Ronaldo official website";

  return (
    <a
      href={externalLinks.officialCristianoRonaldo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group flex min-w-0 shrink-0 items-center gap-3 ${className}`}
    >
      <Image
        src="/brand/logos/cr7.svg"
        alt="Cristiano Ronaldo"
        width={169}
        height={30}
        priority={!compact}
        className={`w-auto shrink-0 brightness-0 invert transition duration-300 group-hover:scale-[1.035] group-hover:brightness-100 ${
          compact ? "h-7" : "h-8 sm:h-9"
        }`}
      />
      <span
        className={`shrink-0 border-l border-white/15 pl-3 font-semibold uppercase tracking-[0.24em] text-muted transition group-hover:text-brand-orange ${
          compact ? "hidden text-[0.58rem] sm:inline" : "hidden text-[0.62rem] md:inline"
        }`}
      >
        Blog
      </span>
    </a>
  );
}
