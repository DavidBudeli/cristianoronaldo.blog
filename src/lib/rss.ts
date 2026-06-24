import { getAllArticles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildRssFeed() {
  const articles = getAllArticles();
  const items = articles
    .slice(0, 20)
    .map((article) => {
      const url = absoluteUrl(`/blog/${article.slug}`);
      return `
        <item>
          <title>${escapeXml(article.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(article.excerpt)}</description>
          <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
          <category>${escapeXml(article.category)}</category>
        </item>`;
    })
    .join("");
  const latestDate = articles[0]?.updatedAt ?? new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${escapeXml(siteConfig.visualName)}</title>
        <link>${absoluteUrl("/")}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>pt-BR</language>
        <lastBuildDate>${new Date(latestDate).toUTCString()}</lastBuildDate>
        <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml" />
        ${items}
      </channel>
    </rss>`;
}
