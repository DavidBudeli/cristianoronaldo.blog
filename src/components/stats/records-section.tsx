import type { CompetitionRecord } from "@/data/stats";

type RecordsSectionProps = {
  eyebrow: string;
  title: string;
  text: string;
  records: CompetitionRecord[];
  tone?: "default" | "graphite";
};

export function RecordsSection({
  eyebrow,
  title,
  text,
  records,
  tone = "default",
}: RecordsSectionProps) {
  const background = tone === "graphite" ? "border-y border-white/10 bg-graphite" : "";

  return (
    <section className={`${background} px-4 py-16 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-warm sm:text-7xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">{text}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {records.map((record) => (
              <article
                key={`${record.competition}-${record.record}`}
                className="border border-white/10 bg-card p-5 transition hover:border-brand-orange/70 hover:bg-card-elevated sm:p-6"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  {record.competition}
                </p>
                <p className="mt-5 font-mono text-4xl font-bold leading-none text-brand-orange sm:text-5xl">
                  {record.value}
                </p>
                <h3 className="mt-5 font-display text-3xl uppercase leading-none text-warm">
                  {record.record}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {record.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
