import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/metadata";
import type { Article } from "@/types/content";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: siteConfig.visualName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    inLanguage: "en",
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.visualName,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
    image: absoluteUrl(article.coverImage),
  };
}
