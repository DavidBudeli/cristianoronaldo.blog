import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { UniversalSearch } from "@/components/search/universal-search";
import {
  goalLog,
  goalsByCompetition,
  goalsByTeam,
  milestoneGoals,
} from "@/data/goals";
import { careerPhases } from "@/data/career";
import { recordItems } from "@/data/records";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Search",
  description: "Search CR7 Blog stories, tags, career chapters and records.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Search the CR7 archive."
        text="Find stories by article, category, tag, career chapter or record."
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="border border-white/10 bg-card p-6 text-muted">Loading search...</div>}>
          <UniversalSearch
            articles={getAllArticles()}
            goalTeams={goalsByTeam}
            goalCompetitions={goalsByCompetition}
            goalLog={goalLog}
            milestones={milestoneGoals}
            records={recordItems}
            career={careerPhases}
          />
        </Suspense>
      </section>
    </>
  );
}
