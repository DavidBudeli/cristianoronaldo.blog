# SEO checklist

## Implemented

- Global `metadataBase`, title template, application name, authors, creator and publisher.
- Canonical URLs through `buildMetadata`.
- Open Graph and Twitter large-image metadata.
- CR7 favicon and app icons in metadata and manifest.
- Environment-aware robots: production can index, local/proposal cannot.
- Sitemap includes the public editorial routes and articles; `/goals` is not listed as an internal page.
- RSS route `/rss.xml` uses real article data.
- Structured data includes `WebSite`, `Person`, `Blog`, `BlogPosting`, `BreadcrumbList`, `CollectionPage`, `ItemList`, `Dataset` where appropriate and `SearchAction`.
- Manifest includes name, short name, description, start URL, display mode, theme color and icons.

## Pre-launch checks

- Add the production domain to `NEXT_PUBLIC_SITE_URL`.
- Set `NEXT_PUBLIC_SITE_MODE=production` only when the site is ready to index.
- Submit `/sitemap.xml` in Google Search Console.
- Verify `/robots.txt`, `/rss.xml`, `/manifest.webmanifest` and favicon URLs in production.
- Monitor Core Web Vitals after launch.
- Keep canonical URLs stable.
- Use Google Search Console URL Inspection for important pages.

## Not promised

This setup prepares the site technically for Google. It does not promise ranking position or instant indexing.

