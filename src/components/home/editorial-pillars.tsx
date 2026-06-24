import { editorialPillars } from "@/data/site";

export function EditorialPillars() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {editorialPillars.map((pillar) => (
        <div key={pillar.title} className="border border-white/10 bg-card p-5">
          <h3 className="font-display text-3xl uppercase text-warm">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{pillar.text}</p>
        </div>
      ))}
    </div>
  );
}
