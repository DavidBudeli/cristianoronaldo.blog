# SEO e Motion Audit

## SEO implementado

- Metadata global com title template, description, applicationName, authors, creator, publisher, canonical, robots por ambiente, Open Graph e Twitter Card.
- Metadata dinamica para artigos com title, description, canonical, imagem, publishedTime, modifiedTime, authors e tags.
- JSON-LD em `src/lib/structured-data.ts` para WebSite, Organization, Person, Blog, BlogPosting, BreadcrumbList, CollectionPage, ItemList e Dataset.
- JSON-LD aplicado em layout, artigos, `/blog`, `/goals`, `/stats` e `/records`.
- Sitemap com rotas publicas, artigos, categorias, tags, lastModified, changeFrequency e priority.
- Robots controlado por ambiente: indexa apenas quando `NEXT_PUBLIC_SITE_MODE=production` e `NEXT_PUBLIC_SITE_URL` nao for local.
- RSS em `/rss.xml` com titulo, descricao, link, idioma, lastBuildDate e posts recentes.
- OG image global em `src/app/opengraph-image.tsx`.
- Manifest leve em `src/app/manifest.ts`.

## Motion implementado

- GSAP isolado em client components com dynamic import.
- Arquitetura criada em:
  - `src/lib/motion.ts`
  - `src/hooks/use-gsap-reveal.ts`
  - `src/components/motion/reveal.tsx`
  - `src/components/motion/parallax-layer.tsx`
  - `src/components/motion/magnetic-button.tsx`
  - `src/components/motion/number-counter.tsx`
  - `src/components/motion/scroll-progress.tsx`
  - `src/components/motion/motion-provider.tsx`
- `prefers-reduced-motion` respeitado nos componentes de animacao.
- Cleanup implementado via `gsap.context().revert()`, `kill()` e remocao de listeners.
- Motion aplicado em header, home, `/goals`, `/stats`, `/career`, `/records`, `/blog` e artigos.
- `/goals` recebeu contador animado, constelacao animada, parallax leve, reveals em cards e numeros com count-up.
- Artigos receberam `ReadingProgress` e `TableOfContents` desktop.

## Mobile

- Componentes mantem conteudo renderizado no HTML inicial.
- Tabelas usam scroll horizontal controlado.
- Grids quebram para 1 coluna em mobile.
- CTAs mantem area de toque adequada.
- Motion usa transform/opacity e desativa com preferencia de movimento reduzido.
- Busca usa debounce para evitar trabalho excessivo em datasets maiores.

## Como testar Lighthouse

1. Rode `npm run build`.
2. Rode `npm run start -- -p 3000`.
3. Abra `http://127.0.0.1:3000`.
4. No Chrome DevTools, execute Lighthouse em mobile.
5. Teste principalmente:
   - `/`
   - `/goals`
   - `/stats`
   - `/blog`
   - um artigo em `/blog/[slug]`

## Producao

Configure na Hostinger:

- Node.js 20 ou superior.
- Install command: `npm ci`.
- Build command: `npm run build`.
- Start command: `npm run start -- -p $PORT`.
- `NEXT_PUBLIC_SITE_MODE=production`.
- `NEXT_PUBLIC_SITE_URL=https://dominio-final`.

## Search Console

1. Publique o dominio final em producao.
2. Cadastre a propriedade no Google Search Console.
3. Envie `https://dominio-final/sitemap.xml`.
4. Verifique se `robots.txt` permite indexacao.
5. Use a inspeccao de URL para `/`, `/goals`, `/stats`, `/records` e artigos principais.
6. Acompanhe cobertura, Core Web Vitals e melhorias de dados estruturados.

## Pre-publicacao

- Confirmar dominio final e HTTPS.
- Confirmar assets oficiais/licenciados.
- Revisar fontes e datas dos dados.
- Rodar `npm run audit`.
- Fazer Lighthouse mobile.
- Revisar legal, privacidade e uso de marca.
