import Link from "next/link";
import { formatDisplayDate } from "@/lib/articles";
import type { Article } from "@/types/content";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-3">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/blog/${article.slug}`}
          className="grid gap-2 border border-white/10 bg-card p-4 transition hover:border-white/40 sm:grid-cols-[1fr_auto]"
        >
          <span className="font-display text-xl uppercase text-warm sm:text-2xl">{article.title}</span>
          <span className="font-mono text-xs uppercase text-muted">{formatDisplayDate(article.publishedAt)}</span>
        </Link>
      ))}
    </div>
  );
}
