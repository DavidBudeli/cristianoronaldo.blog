import { AuthorCard } from "@/components/blog/author-card";
import { PageHero } from "@/components/page-hero";
import { authors } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Authors", path: "/authors" });

export default function AuthorsPage() {
  return (
    <>
      <PageHero eyebrow="Authors" title="CR7 Blog Authors" text="Editorial teams covering stories, records and fan culture." />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {authors.map((author) => (
          <AuthorCard key={author.slug} author={author} />
        ))}
      </section>
    </>
  );
}
