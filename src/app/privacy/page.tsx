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
          The newsletter form presents a local sign-up interaction in this
          demo experience. It asks for an email address and topic preferences so
          readers can choose the CR7 stories they want to follow.
        </p>
      </section>
    </>
  );
}
