const mediaKitBlocks = [
  "Visao geral do produto",
  "Arquitetura editorial",
  "Base de SEO",
  "Base de performance",
  "Prontidao de assets",
  "Caminho de integracao CMS",
  "Expansao comercial",
  "Opcoes de deploy",
  "Processo de handoff",
];

export function MediaKitSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? mediaKitBlocks.slice(0, 4) : mediaKitBlocks;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div key={item} className="border border-white/10 bg-card p-5">
          <p className="font-mono text-sm text-gold-light">
            {(index + 1).toString().padStart(2, "0")}
          </p>
          <h3 className="mt-5 font-display text-3xl uppercase text-warm">
            {item}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Um modulo pronto para proposta, explicando como esta engine se
            transforma em uma operacao editorial oficial, aprovada e comercial.
          </p>
        </div>
      ))}
    </div>
  );
}
