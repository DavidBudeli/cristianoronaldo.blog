# CR7 Blog

Premium Cristiano Ronaldo blog built with Next.js, TypeScript and Tailwind CSS.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Local structured data for articles, goals, stats, records and sources
- RSS and sitemap routes

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run check:i18n
npm run build
```

## Brand icons

CR7 favicon, PWA icons, Apple touch icon and OG image are generated from `public/brand/cr7-logo.svg`.

```bash
npm run generate:icons
```

## Newsletter setup

Newsletter signups are handled through the server-side route `/api/newsletter` and synced to Brevo. Configure these environment variables before testing or deploying:

```bash
BREVO_API_KEY=
BREVO_NEWSLETTER_LIST_ID=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

See `docs/newsletter-setup.md` for the Brevo list, attributes, campaign and domain-authentication checklist.

## Hostinger Node.js Web App Deployment

This project is ready for Hostinger Node.js Web Apps hosting.

Recommended Hostinger settings:

- Framework: `Next.js`
- Node.js version: `20`
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm run start -- -p $PORT`
- Output directory: `.next` if Hostinger asks for it

Recommended production environment variable:

```bash
BREVO_API_KEY=your-production-brevo-api-key
BREVO_NEWSLETTER_LIST_ID=123
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Hostinger flow:

1. Push this repository to GitHub.
2. Open Hostinger hPanel.
3. Go to Websites and choose Node.js Apps.
4. Select Import Git Repository.
5. Authorize GitHub and select this repository.
6. Confirm the build settings above.
7. Deploy.

Hostinger references:

- Node.js Web Apps support: https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
- Hostinger Next.js starter settings: https://github.com/hostinger/deploy-nextjs

## Public Routes

- `/`
- `/blog`
- `/blog/[slug]`
- `/career`
- `/goals`
- `/stats`
- `/records`
- `/mindset`
- `/fans`
- `/search`
- `/newsletter`
- `/rss.xml`
- `/sitemap.xml`

## Notes

Important statistics and records are connected to public source IDs in the local data files. Dynamic totals should be reviewed after new matches.
