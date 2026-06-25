import Link from "next/link";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { ExternalLink } from "@/components/ui/external-link";

const hyperagUrl = "https://hyperag.com.br/pt-BR";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-deep-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Image
            src="/brand/logos/cr7.svg"
            alt="Logo oficial Cristiano Ronaldo"
            width={130}
            height={34}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-5 font-display text-3xl uppercase text-warm">
            {siteConfig.visualName}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            Stories, records, career milestones and the mindset behind Cristiano Ronaldo&apos;s global football legacy.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Explore
          </p>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            {siteConfig.navigation.slice(0, 5).map((item) =>
              item.external ? (
                <ExternalLink
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-gold"
                >
                  {item.label}
                </ExternalLink>
              ) : (
                <Link key={item.href} href={item.href} className="transition hover:text-gold">
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            More
          </p>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            <Link href="/search" className="transition hover:text-gold">
              Search
            </Link>
            <Link href="/newsletter" className="transition hover:text-gold">
              Subscribe
            </Link>
            <Link href="/privacy" className="transition hover:text-gold">
              Privacy
            </Link>
            <Link href="/legal" className="transition hover:text-gold">
              Legal
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-absolute-black px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 text-xs font-semibold text-muted sm:grid-cols-3 sm:items-center">
          <Link href="/privacy" className="text-warm transition hover:text-brand-orange">
            Privacy Policy
          </Link>
          <p className="text-left sm:text-center">
            &copy; Cristiano Ronaldo, All Rights Reserved
          </p>
          <p className="text-left sm:text-right">
            Developed by{" "}
            <a
              href={hyperagUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm transition hover:text-brand-orange"
            >
              Hyperag Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
