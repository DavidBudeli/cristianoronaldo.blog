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
  const items = getAllArticles()
    .map((article) => {
      const url = absoluteUrl(`/blog/${article.slug}`);
      return `
        <item>
          <title>${escapeXml(article.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(article.excerpt)}</description>
          <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteConfig.visualName)}</title>
        <link>${absoluteUrl("/")}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en</language>
        ${items}
      </channel>
    </rss>`;
}
