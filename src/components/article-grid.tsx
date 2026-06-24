import { ArticleCard } from "@/components/article-card";
import { Reveal } from "@/components/motion/reveal";
import type { Article } from "@/types/content";

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {articles.map((article) => (
        <div key={article.slug} data-reveal-item>
          <ArticleCard article={article} />
        </div>
      ))}
    </Reveal>
  );
}
