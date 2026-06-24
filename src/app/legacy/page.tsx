import Image from "next/image";
import { LegacyTimeline } from "@/components/legacy-timeline";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamHighlightImages } from "@/data/brand-assets";
import { careerPhases } from "@/data/legacy";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Legacy",
  description:
    "Records, moments and milestones that shaped Cristiano Ronaldo's place in football history.",
  path: "/legacy",
});

export default function LegacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legacy"
        title="Legacy"
        text="Records, moments and milestones that shaped Cristiano Ronaldo's place in football history."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LegacyTimeline />
        <div className="mt-14">
          <SectionHeading eyebrow="Chapters" title="Records that define an era." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamHighlightImages.map((item, index) => (
              <div key={item.name} className="overflow-hidden border border-white/10 bg-card">
                <div className="relative min-h-72">
                <Image src={item.src} alt={`${item.name} career highlight`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-80" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-sm text-brand-orange">{(index + 1).toString().padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-3xl uppercase text-warm">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted">{careerPhases[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
