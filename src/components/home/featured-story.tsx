import { FeaturedArticle } from "@/components/featured-article";
import { getFeaturedArticle } from "@/lib/articles";

export function FeaturedStory() {
  return <FeaturedArticle article={getFeaturedArticle()} />;
}
