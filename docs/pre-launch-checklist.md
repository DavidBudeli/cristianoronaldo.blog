# Pre-launch Checklist

## Dominio e deploy

- [ ] Dominio final configurado.
- [ ] HTTPS ativo.
- [ ] Hostinger usando Node.js 20 ou superior.
- [ ] `NEXT_PUBLIC_SITE_MODE=production`.
- [ ] `NEXT_PUBLIC_SITE_URL` apontando para o dominio final.
- [ ] `npm run audit` executado com sucesso.

## SEO

- [ ] `/sitemap.xml` abre corretamente.
- [ ] `/robots.txt` permite indexacao em producao.
- [ ] Canonicals usam o dominio final.
- [ ] Metadata revisada em Home, Blog, artigos, Career, Goals, Stats, Records, Mindset, Fans, Search e Newsletter.
- [ ] OG image global validada.
- [ ] RSS validado em `/rss.xml`.
- [ ] JSON-LD testado no Rich Results Test.
- [ ] Search Console configurado.

## Performance e mobile

- [ ] Lighthouse mobile executado.
- [ ] Sem overflow horizontal em 390px.
- [ ] Header mobile abre e fecha corretamente.
- [ ] `/goals` carrega e filtros funcionam.
- [ ] `/stats` carrega com tabelas responsivas.
- [ ] `/blog` e artigos carregam com leitura confortavel.
- [ ] Imagens principais revisadas para LCP.
- [ ] `prefers-reduced-motion` testado.

## Conteudo e marca

- [ ] Logo oficial aprovada.
- [ ] Fotos oficiais ou licenciadas aprovadas.
- [ ] Dados de gols revisados.
- [ ] Dados de estatisticas revisados.
- [ ] Fontes e links externos revisados.
- [ ] Textos publicos sem linguagem tecnica, proposta, placeholder ou pendencias.
- [ ] Revisao juridica concluida.

## Analytics futuro

- [ ] Google Analytics 4 decidido.
- [ ] Consent banner definido se necessario.
- [ ] Vercel Analytics ou alternativa avaliada.
