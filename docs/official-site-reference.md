# Referencia Visual Do Site Oficial

Fontes analisadas:
- https://cristianoronaldo.com/#cr7
- https://cristianoronaldo.com/brands
- https://use.typekit.net/dfs5qqw.css

Capturas locais:
- `docs/reference-screenshots/official-cr7-desktop.png`
- `docs/reference-screenshots/official-cr7-mobile.png`
- `docs/reference-screenshots/official-brands-desktop.png`

Nota de browser: o runtime do navegador interno nao estava disponivel neste
ambiente. As capturas foram feitas com Chrome headless local e a pagina/CSS foram
inspecionadas via HTTP.

## 1. Cores Principais Encontradas

- Preto absoluto: `#000000`
- Superficie quase preta: `#0B0B0B`
- Texto/logo branco: `#FFFFFF`
- Cinza quente secundario: aprox. `#B2ACA4`
- CTA laranja de comercio/cookie: aprox. `#FF5A1F`

## 2. Cores Secundarias

- Carvao profundo: aprox. `#101010` a `#171717`
- Bordas finas: aprox. `#2A2A2A`
- Overlays de imagem: gradientes pretos com 40-80 por cento de opacidade

## 3. Fundos

A secao principal CR7 usa fundo preto full viewport com colunas grandes de
imagem. A pagina de marcas usa fotografia full-bleed com overlays e interface
minima.

## 4. Cor De Texto

Texto primario e branco. Labels secundarios usam cinza quente. A enfase de CTA
em areas comerciais usa laranja, nao dourado.

## 5. Tipografia

O CSS Typekit expoe `proxima-nova`, `proxima-nova-condensed` e
`proxima-nova-extra-condensed`. Como este projeto local usa `next/font/google`,
a aproximacao segura e:

- Titulos: `Barlow Condensed`
- Texto: `Inter`
- Mono/metricas: `JetBrains Mono`

## 6. Header

Header minimo e preto. O wordmark oficial fica no topo esquerdo. No desktop, a
navegacao e uppercase, com tracking amplo e espacamento horizontal. No mobile, a
logo permanece e a navegacao colapsa.

## 7. Botoes

Botoes sao diretos e de alto contraste. O ecossistema oficial usa labels
uppercase, peso condensado, pequenas setas e CTAs laranja em acoes comerciais. O
blog replica isso com botoes primarios laranja e secundarios outline branco.

## 8. Grid E Layout

A composicao CR7 usa colunas verticais de imagem e muito espaco negativo. A
pagina de marcas usa hero fotografico full-bleed e navegacao vertical lateral. O
blog adapta isso em cards editoriais com imagem grande, hero amplo e faixas de
secao em alto contraste.

## 9. Espacamentos

O espacamento e generoso. Secoes devem trabalhar com ritmo vertical de 72-144px,
conteudo limitado por volta de 1280px e areas pretas vazias preservadas para tom
premium.

## 10. Cards

Cards quase sem raio, com bordas finas ou sem borda visivel sobre fotografia.
Raio editorial deve ficar em `0px`. Overlays de imagem e tipografia carregam o
peso visual.

## 11. Imagens

Imagens sao grandes, recortadas, full-bleed ou em tiras verticais altas. O blog
usa imagens locais de fonte oficial de `cristianoronaldo.com` e overlays escuros
para manter legibilidade.

## 12. Animacoes E Transicoes

O site oficial usa comportamento fullpage/slide, mudancas de estado por scroll e
transicoes de video/imagem. O blog mantem transicoes leves: lift em cards, escala
sutil de imagem e mudancas de cor.

## 13. Mobile

Mobile usa header simplificado, hero em uma coluna e conteudo empilhado. O blog
deve evitar overflow horizontal em 390px e manter presenca forte de imagem.

## 14. Observacoes De Marca

A linguagem visual e oficial, institucional e pronta para comercio. Evita
gradientes decorativos e privilegia preto, fotografia, tipografia uppercase,
links diretos e UI esparsa.

## 15. Aplicacao No Blog

- Usar fundos pretos e texto branco/cinza como base.
- Usar `Barlow Condensed` em titulos e navegacao uppercase.
- Usar CTAs laranja para Assinar, Ler e Media Kit.
- Usar cards editoriais retos com imagens grandes de fonte oficial.
- Manter logos de clubes/times como pendentes ate arquivos oficiais.
- Manter modo local/proposta com `noindex` via `NEXT_PUBLIC_SITE_MODE=local`.
