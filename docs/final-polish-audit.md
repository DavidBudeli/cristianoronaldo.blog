# Final polish audit

## Header and links

- Header layout uses a non-shrinking logo column, centered desktop navigation and right-side actions.
- Desktop nav is shown at `xl` and above; smaller widths use mobile navigation before overlap happens.
- Header logo opens `https://cristianoronaldo.com/#cr7` in a new tab.
- `Gols` / `Goals` opens `https://www.perplexity.ai/ronaldo/pt-br` in a new tab.
- External URLs are centralized in `src/data/external-links.ts`.

## i18n

- Dictionaries live in `src/i18n/dictionaries/pt-BR.ts` and `src/i18n/dictionaries/en.ts`.
- The language provider translates visible text plus `placeholder`, `aria-label`, `title` and `alt`.
- The language switcher persists the selected locale and does not expose `LOCAL`.
- `scripts/check-i18n-mixed-language.ts` validates required translations and external-link rules.

## Motion

- GSAP motion remains client-only.
- Reduced motion is respected.
- Home hero, page heroes, article grids, stats cards, counters, timeline and scroll progress have visible but lightweight motion.

## SEO and brand icons

- Metadata, Open Graph, Twitter cards, canonical URLs, robots, sitemap, RSS, structured data and manifest are configured.
- CR7 favicon, PNG icons, Apple touch icon and OG image were generated from the local CR7 SVG.
- `/goals` is not listed in the sitemap.

## Pending before production

- Configure real production `NEXT_PUBLIC_SITE_URL`.
- Set `NEXT_PUBLIC_SITE_MODE=production` only after final legal/brand approval.
- Submit the sitemap in Google Search Console after deployment.

