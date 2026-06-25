import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Newsletter",
  description: "Subscribe for the latest CR7 stories, records and career updates.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Get the latest CR7 stories."
        text="Choose the updates you want: news, records, career chapters, Portugal and fan stories."
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <NewsletterForm />
      </section>
    </>
  );
}
