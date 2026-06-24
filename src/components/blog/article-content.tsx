import type { Article } from "@/types/content";

export function ArticleContent({ article }: { article: Article }) {
  return (
    <div className="grid gap-10">
      {article.body.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display text-4xl uppercase text-warm">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-9 text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
