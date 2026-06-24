export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl uppercase leading-none text-warm sm:text-6xl">{title}</h2>
      {text ? <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
