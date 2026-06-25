import Image from "next/image";
import Link from "next/link";
import { ArticleGrid } from "@/components/article-grid";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Reveal } from "@/components/motion/reveal";
import {
  formatDisplayDate,
  getAuthorBySlug,
  getCategoryTitle,
  getRelatedArticles,
} from "@/lib/articles";
import { externalLinks } from "@/data/external-links";
import { getSourcesByIds } from "@/data/sources";
import type { Article } from "@/types/content";

function headingId(heading: string, index: number) {
  const slug = heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${slug || "section"}-${index + 1}`;
}

export function ArticleLayout({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  const sources = getSourcesByIds(article.sourceIds);
  const author = getAuthorBySlug(article.author);
  const headings = article.body.map((section, index) => ({
    id: headingId(section.heading, index),
    title: section.heading,
  }));

  return (
    <article>
      <ReadingProgress />
      <header className="border-b border-white/10 bg-[linear-gradient(145deg,#030303,#101010)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal variant="clip-reveal">
            <Link
              href={`/categories/${article.category}`}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              {getCategoryTitle(article.category)}
            </Link>
            <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] text-warm sm:text-7xl">
              {article.title}
            </h1>
            <p className="mt-5 text-xl leading-8 text-gold-light">
              {article.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-muted">
              <span>{formatDisplayDate(article.publishedAt)}</span>
              <span>{article.readTime}</span>
              <span>{author?.name ?? article.author}</span>
            </div>
          </Reveal>
          <Reveal className="relative min-h-[360px] overflow-hidden border border-white/10 bg-card">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </Reveal>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
        <div data-article-body className="max-w-3xl">
          {article.body.map((section, index) => (
            <Reveal key={section.heading} as="section" className="mb-12 scroll-mt-28">
              <h2 id={headings[index].id} className="font-display text-4xl uppercase text-warm">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-9 text-muted">
                  {paragraph}
                </p>
              ))}
              {section.quote ? (
                <blockquote className="mt-8 border-l-2 border-gold bg-card px-6 py-5 font-display text-3xl uppercase leading-tight text-gold-light">
                  {section.quote}
                </blockquote>
              ) : null}
            </Reveal>
          ))}
          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          {article.tags.includes("goals") ? (
            <div className="mt-8">
              <MagneticButton
                href={externalLinks.perplexityRonaldoGoals}
                className="px-5 py-3"
                ariaLabel="Open Cristiano Ronaldo interactive goals experience on Perplexity"
              >
                Explore all goals
              </MagneticButton>
            </div>
          ) : null}
          {sources.length > 0 ? (
            <section className="mt-14 border-t border-white/10 pt-8">
              <h2 className="font-display text-4xl uppercase text-warm">
                Sources
              </h2>
              <div className="mt-5 grid gap-3">
                {sources.map((source) => (
                  <a
                    key={source.id}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/10 bg-card p-4 transition hover:border-brand-orange"
                  >
                    <span className="block font-display text-2xl uppercase text-warm">
                      {source.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {source.publisher} - checked {source.lastChecked}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>
        <TableOfContents headings={headings} />
      </div>
      {related.length > 0 ? (
        <section className="border-t border-white/10 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Related Stories
            </p>
            <div className="mt-6">
              <ArticleGrid articles={related} />
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
