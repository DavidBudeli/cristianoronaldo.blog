import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { careerPhases } from "@/data/career";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cristiano Ronaldo Career Timeline",
  description:
    "From Madeira and Sporting CP to Manchester, Madrid, Turin, Riyadh and Portugal.",
  path: "/career",
});

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Cristiano Ronaldo Career Timeline"
        text="From Madeira and Sporting CP to Manchester, Madrid, Turin, Riyadh and Portugal."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {careerPhases.map((phase, index) => (
            <article key={phase.id} className="grid overflow-hidden border border-white/10 bg-card lg:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-72">
                <Image
                  src={phase.image}
                  alt={`${phase.title} career chapter`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-mono text-sm text-brand-orange">{(index + 1).toString().padStart(2, "0")} / {phase.period}</p>
                <h2 className="mt-4 font-display text-5xl uppercase leading-none text-warm">
                  {phase.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">{phase.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {phase.goals ? (
                    <div className="border border-white/10 bg-absolute-black p-4">
                      <p className="font-mono text-3xl font-bold text-brand-orange">{phase.goals}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Goals</p>
                    </div>
                  ) : null}
                  {phase.appearances ? (
                    <div className="border border-white/10 bg-absolute-black p-4">
                      <p className="font-mono text-3xl font-bold text-warm">{phase.appearances}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Appearances</p>
                    </div>
                  ) : null}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {phase.honors.map((honor) => (
                    <span key={honor} className="border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted">
                      {honor}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
