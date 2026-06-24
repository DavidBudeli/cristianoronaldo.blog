import { PageHero } from "@/components/page-hero";
import { SearchBox } from "@/components/search-box";
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
        <SearchBox articles={getAllArticles()} />
      </section>
    </>
  );
}
