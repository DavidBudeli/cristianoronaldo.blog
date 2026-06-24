# Hostinger Deploy Checklist

Use Hostinger **Node.js Apps** hosting, not static `public_html` upload.

## Build Settings

- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm run start -- -p $PORT`
- Node.js version: `20`
- Framework: `Next.js`
- Output directory, if requested: `.next`

## Environment Variables

Set this in Hostinger app settings:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

No private API keys are required for the current version.

## GitHub Import

1. Push the project to `DavidBudeli/cristianoronaldo.blog`.
2. In Hostinger hPanel, create a Node.js App.
3. Choose **Import Git Repository**.
4. Select `DavidBudeli/cristianoronaldo.blog`.
5. Use the commands above.
6. Deploy and wait for the preview screenshot.

## Local Production Smoke Test

```bash
npm ci
npm run build
npm run start -- -p 3000
```

Then open `http://localhost:3000`.
