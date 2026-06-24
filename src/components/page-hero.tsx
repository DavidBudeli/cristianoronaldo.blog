type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-[linear-gradient(145deg,#030303_0%,#0e0e0e_58%,#141414_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl uppercase leading-[0.92] text-warm sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
