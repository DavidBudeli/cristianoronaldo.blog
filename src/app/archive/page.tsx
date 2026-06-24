import { ArticleList } from "@/components/blog/article-list";
import { PageHero } from "@/components/page-hero";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Archive", path: "/archive" });

export default function ArchivePage() {
  return (
    <>
      <PageHero eyebrow="Archive" title="Story Archive" text="A chronological index of CR7 Blog stories." />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <ArticleList articles={getAllArticles()} />
      </section>
    </>
  );
}
