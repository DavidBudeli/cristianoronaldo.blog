import Image from "next/image";
import Link from "next/link";
import { formatDisplayDate, getCategoryTitle } from "@/lib/articles";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex min-h-[420px] flex-col justify-between overflow-hidden border border-white/10 bg-card transition hover:-translate-y-1 hover:border-white/40 hover:bg-card-elevated">
      <div className="relative min-h-48 overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-75 transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
      <div>
        <div className="flex items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          <span>{getCategoryTitle(article.category)}</span>
          <span className="font-mono">{article.readTime}</span>
        </div>
        <h3 className="mt-8 font-display text-2xl uppercase leading-none text-warm transition group-hover:text-gold-light sm:text-4xl">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">{article.excerpt}</p>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-xs text-muted">
          {formatDisplayDate(article.publishedAt)}
        </span>
        <Link
          href={`/blog/${article.slug}`}
          className="text-xs font-bold uppercase tracking-[0.16em] text-gold transition hover:text-gold-light"
        >
          Read
        </Link>
      </div>
      </div>
    </article>
  );
}
