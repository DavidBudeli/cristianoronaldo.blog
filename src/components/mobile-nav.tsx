"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-warm transition hover:border-gold hover:text-gold"
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          className="mobile-menu-enter absolute left-4 right-4 top-[78px] z-40 border border-white/12 bg-deep-black/95 p-4 shadow-2xl shadow-black/50"
        >
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-warm transition hover:border-gold hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/search"
              onClick={() => setOpen(false)}
              className="border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-warm transition hover:border-brand-orange hover:text-brand-orange"
            >
              Search
            </Link>
            <Link
              href="/newsletter"
              onClick={() => setOpen(false)}
              className="border border-brand-orange bg-brand-orange px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
            >
              Subscribe
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
