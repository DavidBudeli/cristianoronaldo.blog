import { legacyTimeline } from "@/data/site";

export function LegacyTimeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {legacyTimeline.map((item) => (
        <div key={item.title} className="border-l border-gold/50 bg-card p-5">
          <p className="font-mono text-sm uppercase text-gold-light">
            {item.year}
          </p>
          <h3 className="mt-5 font-display text-3xl uppercase text-warm">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
