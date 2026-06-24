const cmsOptions = [
  {
    name: "Sanity",
    detail: "Studio de conteudo estruturado, previews e schemas editoriais.",
  },
  {
    name: "Contentful",
    detail: "Modelo de conteudo enterprise, localizacao e fluxo por funcoes.",
  },
  {
    name: "Strapi",
    detail: "Controle de API self-hosted com colecoes editoriais customizadas.",
  },
  {
    name: "WordPress Headless",
    detail: "Autoria familiar com entrega front-end em Next.js.",
  },
  {
    name: "Payload CMS",
    detail: "Admin nativo em TypeScript, colecoes e controle de acesso.",
  },
];

export function CmsReadySection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cmsOptions.map((option) => (
        <div key={option.name} className="border border-white/10 bg-card p-5">
          <h3 className="font-display text-3xl uppercase text-warm">
            {option.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{option.detail}</p>
        </div>
      ))}
    </div>
  );
}
