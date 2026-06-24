import Link from "next/link";
import type { Author } from "@/types/content";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <Link href={`/authors/${author.slug}`} className="block border border-white/10 bg-card p-5 transition hover:border-white/40">
      <h3 className="font-display text-3xl uppercase text-warm">{author.name}</h3>
      <p className="mt-2 text-sm uppercase tracking-[0.16em] text-brand-orange">{author.role}</p>
      <p className="mt-4 text-sm leading-7 text-muted">{author.bio}</p>
    </Link>
  );
}
