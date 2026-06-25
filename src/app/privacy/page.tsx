import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Privacy information for CR7 Blog newsletter and browsing experience.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        text="A simple overview of how this CR7 Blog experience handles newsletter preferences."
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-lg leading-9 text-muted">
          The newsletter form sends your email, language and selected topic
          preferences to Brevo through a server-side CR7 Blog API route. API
          credentials stay on the server, and readers can unsubscribe from
          future campaigns.
        </p>
      </section>
    </>
  );
}
