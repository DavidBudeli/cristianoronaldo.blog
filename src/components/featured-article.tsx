import Image from "next/image";
import Link from "next/link";
import { formatDisplayDate, getCategoryTitle } from "@/lib/articles";
import type { Article } from "@/types/content";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="grid gap-6 border border-gold/25 bg-card p-5 transition hover:border-gold/60 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[linear-gradient(135deg,#0e0e0e,#1a1a1a)] p-6">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <span className="w-fit border border-gold/40 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
          Featured
        </span>
        <div className="relative mt-12">
          <p className="font-mono text-sm uppercase text-muted">
            {formatDisplayDate(article.publishedAt)}
          </p>
          <p className="mt-2 text-sm text-gold">
            {getCategoryTitle(article.category)}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-display text-3xl uppercase leading-none text-warm sm:text-6xl">
          {article.title}
        </h2>
        <p className="mt-4 text-xl text-gold-light">{article.subtitle}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          {article.excerpt}
        </p>
        <Link
          href={`/blog/${article.slug}`}
          className="mt-8 w-fit border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-warm transition hover:border-gold hover:text-gold"
        >
          Read Story
        </Link>
      </div>
    </article>
  );
}
