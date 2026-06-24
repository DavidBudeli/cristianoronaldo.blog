import {
  blogPostingStructuredData,
  globalStructuredData,
  type StructuredData,
} from "@/lib/structured-data";
import type { Article } from "@/types/content";

export function JsonLd({ data }: { data: StructuredData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function blogJsonLd() {
  return globalStructuredData();
}

export function articleJsonLd(article: Article) {
  return blogPostingStructuredData(article);
}
