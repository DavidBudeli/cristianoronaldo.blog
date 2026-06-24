"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/types/content";

export function SearchBox({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return articles;
    }

    return articles.filter((article) => {
      const haystack = [
        article.title,
        article.subtitle,
        article.excerpt,
        article.category,
        ...article.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [articles, normalizedQuery]);

  return (
    <div>
      <label
        htmlFor="search"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-gold"
      >
        Search stories
      </label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search articles, categories, tags, teams or records"
        className="mt-4 w-full border border-white/10 bg-card px-4 py-4 text-base text-warm outline-none transition placeholder:text-muted focus:border-gold"
      />
      <div className="mt-8 grid gap-4">
        {results.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="border border-white/10 bg-card p-5 transition hover:border-gold"
          >
            <p className="font-display text-3xl uppercase text-warm">
              {article.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {article.excerpt}
            </p>
          </Link>
        ))}
        {results.length === 0 ? (
          <p className="border border-white/10 bg-card p-5 text-muted">
            No matching stories found.
          </p>
        ) : null}
      </div>
    </div>
  );
}
