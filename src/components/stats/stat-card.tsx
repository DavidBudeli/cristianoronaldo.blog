import type { StatCard as StatCardData } from "@/data/stats";

const categoryLabels: Record<StatCardData["category"], string> = {
  awards: "Honors",
  career: "Career",
  champions: "Champions",
  clubs: "Clubs",
  portugal: "Portugal",
  records: "Records",
};

type StatCardProps = {
  stat: StatCardData;
  index?: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  return (
    <article className="group flex min-h-64 flex-col justify-between border border-white/10 bg-card p-5 transition hover:border-brand-orange/70 hover:bg-card-elevated sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {categoryLabels[stat.category]}
        </p>
        {typeof index === "number" ? (
          <p className="font-mono text-xs text-muted-dark">
            {(index + 1).toString().padStart(2, "0")}
          </p>
        ) : null}
      </div>
      <div className="mt-8">
        <p className="font-mono text-5xl font-bold leading-none text-warm sm:text-6xl">
          {stat.value}
        </p>
        <h3 className="mt-5 font-display text-3xl uppercase leading-none text-warm">
          {stat.label}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">{stat.description}</p>
      </div>
    </article>
  );
}
