import type { Article } from "@/types/content";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
        {article.category}
      </p>
      <h1 className="mt-4 font-display text-4xl uppercase leading-none text-warm sm:text-6xl">
        {article.title}
      </h1>
    </header>
  );
}
