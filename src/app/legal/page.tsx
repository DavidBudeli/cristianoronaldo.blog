import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Legal", path: "/legal" });

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Legal"
        text="Notes on public records, source attribution and editorial boundaries."
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-9 text-muted">
          <p>
            CR7 Blog is an editorial fan-facing experience about Cristiano
            Ronaldo&apos;s publicly documented football career, records and goals.
          </p>
          <p>
            Club, competition and brand names remain property of their
            respective owners. Source links are provided where public data is
            used to support statistics and records.
          </p>
          <p>
            This site does not publish private conversations, medical details or
            unsourced quotes attributed to Cristiano Ronaldo.
          </p>
        </div>
      </section>
    </>
  );
}
