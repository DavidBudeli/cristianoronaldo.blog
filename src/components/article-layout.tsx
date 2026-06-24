import Image from "next/image";
import Link from "next/link";
import { ArticleGrid } from "@/components/article-grid";
import {
  formatDisplayDate,
  getAuthorBySlug,
  getCategoryTitle,
  getRelatedArticles,
} from "@/lib/articles";
import { getSourcesByIds } from "@/data/sources";
import type { Article } from "@/types/content";

export function ArticleLayout({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  const sources = getSourcesByIds(article.sourceIds);
  const author = getAuthorBySlug(article.author);

  return (
    <article>
      <header className="border-b border-white/10 bg-[linear-gradient(145deg,#030303,#101010)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
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
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-card">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {article.body.map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="font-display text-4xl uppercase text-warm">
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
          </section>
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
          <Link
            href="/goals"
            className="mt-8 inline-flex rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
          >
            Open Goal Universe
          </Link>
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
