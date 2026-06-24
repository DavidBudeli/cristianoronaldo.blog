import type { GoalSource } from "@/data/goals";

type GoalSourcesProps = {
  sources: GoalSource[];
  note: string;
};

export function GoalSources({ sources, note }: GoalSourcesProps) {
  return (
    <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Sources
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
              Public record trail.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">{note}</p>
          </div>
          <div className="grid gap-3">
            {sources.map((source) => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid gap-3 border border-white/10 bg-card p-4 transition hover:border-brand-orange/70 md:grid-cols-[1fr_0.6fr_0.45fr]"
              >
                <span>
                  <span className="block font-display text-2xl uppercase leading-none text-warm">
                    {source.label}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-brand-orange">
                    {source.reliability}
                  </span>
                </span>
                <span className="text-sm leading-6 text-muted">{source.publisher}</span>
                <span className="font-mono text-xs text-muted">{source.lastChecked}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
