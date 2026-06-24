import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "About CR7 Blog and its public coverage of Cristiano Ronaldo's career.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="CR7 Blog."
        text="A public editorial space for Cristiano Ronaldo stories, records, career milestones and fan culture."
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-lg leading-9 text-muted">
          CR7 Blog follows the public record of Cristiano Ronaldo&apos;s football
          life: club chapters, Portugal milestones, European records, goals,
          mindset and fan culture. Important numbers are connected to public
          competition, club, database and news sources.
        </p>
      </section>
    </>
  );
}
