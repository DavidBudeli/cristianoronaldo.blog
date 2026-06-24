"use client";

import { useEffect, useState } from "react";

type TocHeading = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  headings: TocHeading[];
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-28 hidden self-start border border-white/10 bg-card p-5 lg:block">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-orange">
        Article Guide
      </p>
      <nav className="mt-4 grid gap-2" aria-label="Article table of contents">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            aria-current={activeId === heading.id ? "true" : undefined}
            className={`border-l px-3 py-2 text-sm leading-6 transition ${
              activeId === heading.id
                ? "border-brand-orange text-warm"
                : "border-white/10 text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
