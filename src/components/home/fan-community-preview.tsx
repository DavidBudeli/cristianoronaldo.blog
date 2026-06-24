import Link from "next/link";

export function FanCommunityPreview() {
  return (
    <div className="border border-white/10 bg-card p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
        For the Fans
      </p>
      <h3 className="mt-4 font-display text-5xl uppercase text-warm">
        Built around a global football community.
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
        From Portugal pride to club memories, the CR7 story is followed by fans
        across eras, leagues and continents.
      </p>
      <Link
        href="/fans"
        className="mt-7 inline-flex rounded-full border border-white/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-warm transition hover:bg-white hover:text-black"
      >
        Explore fans
      </Link>
    </div>
  );
}
