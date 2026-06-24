import Link from "next/link";
import { ClubBreakdownTable } from "@/components/stats/club-breakdown-table";
import { MainStatGrid } from "@/components/stats/main-stat-grid";
import { RecordsSection } from "@/components/stats/records-section";
import { SourcePanel } from "@/components/stats/source-panel";
import { StatsHero } from "@/components/stats/stats-hero";
import { UpdatePolicy } from "@/components/stats/update-policy";
import {
  awardsHonors,
  clubBreakdown,
  europeanRecords,
  heroStats,
  mainStats,
  portugalRecords,
  statSources,
  statsUpdateNote,
  statsValidationCopy,
} from "@/data/stats";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "CR7 Statistics | Career Goals, Records and Milestones",
  description:
    "Explore Cristiano Ronaldo’s career statistics, European records, Portugal milestones and performance numbers in the CR7 Blog official editorial platform.",
  path: "/stats",
  absoluteTitle: true,
});

export default function StatsPage() {
  return (
    <>
      <StatsHero
        badge="Official Stats Hub"
        title="CR7 Statistics"
        subtitle="Career numbers, records and performance milestones across clubs, Portugal and European competitions."
        phrase="Numbers that shaped modern football."
        quickStats={heroStats}
        updateNote={statsUpdateNote}
      />
      <section className="border-b border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Want the scoring archive behind the headline total?
          </p>
          <Link
            href="/goals"
            className="inline-flex w-fit rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
          >
            Open Goal Universe
          </Link>
        </div>
      </section>
      <MainStatGrid
        eyebrow="Main Numbers"
        title="Main Numbers"
        text="A high-level view of the totals and honors that define Cristiano Ronaldo's career profile."
        stats={mainStats}
      />
      <RecordsSection
        eyebrow="European Records"
        title="European Records"
        text="Champions League and UEFA club competition records that remain central to the CR7 legacy."
        records={europeanRecords}
        tone="graphite"
      />
      <RecordsSection
        eyebrow="Portugal"
        title="Portugal"
        text="International numbers across caps, goals and major tournament milestones."
        records={portugalRecords}
      />
      <ClubBreakdownTable rows={clubBreakdown} />
      <MainStatGrid
        eyebrow="Awards & Honors"
        title="Awards & Honors"
        text="Major individual, club and international honors from a career built across football's biggest stages."
        stats={awardsHonors}
      />
      <SourcePanel sources={statSources} />
      <UpdatePolicy copy={statsValidationCopy} />
    </>
  );
}
