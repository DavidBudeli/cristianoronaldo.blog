import Image from "next/image";
import { NumberCounter } from "@/components/motion/number-counter";
import { Reveal } from "@/components/motion/reveal";
import { TimelineProgress } from "@/components/motion/timeline-progress";
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
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <TimelineProgress className="absolute bottom-16 left-6 top-16 hidden w-px sm:left-8 md:block lg:left-10" />
        <div className="relative grid gap-5 md:pl-8">
          {careerPhases.map((phase, index) => (
            <Reveal key={phase.id} id={phase.id} as="article" className="grid scroll-mt-28 overflow-hidden border border-white/10 bg-card lg:grid-cols-[0.42fr_0.58fr]">
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
                      <p className="font-mono text-3xl font-bold text-brand-orange">
                        <NumberCounter value={phase.goals} />
                      </p>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Goals</p>
                    </div>
                  ) : null}
                  {phase.appearances ? (
                    <div className="border border-white/10 bg-absolute-black p-4">
                      <p className="font-mono text-3xl font-bold text-warm">
                        <NumberCounter value={phase.appearances} />
                      </p>
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
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
