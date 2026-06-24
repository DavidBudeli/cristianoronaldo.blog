import { Reveal } from "@/components/motion/reveal";
import type { StatSource } from "@/data/stats";

type SourcePanelProps = {
  sources: StatSource[];
};

export function SourcePanel({ sources }: SourcePanelProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="border border-white/10 bg-card p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                Sources & Validation
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
                Verified trail.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                Public source links are kept with publisher and review date so the page can be updated cleanly as totals move.
              </p>
            </div>

            <Reveal className="grid gap-3" stagger={0.05}>
              {sources.map((source) => (
                <a
                  key={source.id}
                  data-reveal-item
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-3 border border-white/10 bg-absolute-black p-4 transition hover:border-brand-orange/70 hover:bg-card-elevated md:grid-cols-[1fr_0.7fr_0.45fr]"
                >
                  <span>
                    <span className="block font-display text-2xl uppercase leading-none text-warm">
                      {source.label}
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-brand-orange">
                      Open source
                    </span>
                  </span>
                  <span className="text-sm leading-6 text-muted">
                    {source.publisher}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {source.lastChecked}
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
