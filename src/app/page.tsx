import Image from "next/image";
import Link from "next/link";
import { ArticleGrid } from "@/components/article-grid";
import { FeaturedArticle } from "@/components/featured-article";
import { GoalConstellation } from "@/components/goals/goal-constellation";
import { FanCommunityPreview } from "@/components/home/fan-community-preview";
import { MindsetBand } from "@/components/home/mindset-band";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { NumberCounter } from "@/components/motion/number-counter";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { StatsDashboard } from "@/components/stats-dashboard";
import { SectionHeading } from "@/components/ui/section-heading";
import { externalLinks } from "@/data/external-links";
import { europeanRecords } from "@/data/stats";
import { goalSummary, goalsByYear, milestoneGoals } from "@/data/goals";
import { editorialPillars } from "@/data/site";
import { getAllArticles, getFeaturedArticle } from "@/lib/articles";

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getAllArticles().filter((article) => !article.featured).slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-absolute-black">
        <Image
          src="/brand/photos/highlights/portugal.png"
          alt="Cristiano Ronaldo Portugal career visual"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal variant="clip-reveal">
            <p className="inline-flex border border-brand-orange bg-brand-orange px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
              Official Blog
            </p>
            <TextReveal
              as="h1"
              className="mt-7 max-w-4xl font-display text-6xl uppercase leading-[0.88] text-warm sm:text-8xl lg:text-9xl"
            >
              Inside the Standard.
            </TextReveal>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Stories, records, career milestones and the mindset behind Cristiano Ronaldo&apos;s global football legacy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/blog">Read Latest Stories</MagneticButton>
              <MagneticButton href="/career" variant="ghost">
                Explore Career
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Featured Story" title="The story leading the archive." />
          <div className="mt-8">
            <FeaturedArticle article={featured} />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest Stories"
            title="Latest Stories"
            text="Features and record-led stories from across Cristiano Ronaldo's career."
          />
          <div className="mt-8">
            <ArticleGrid articles={latest} />
          </div>
        </div>
      </Reveal>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Goal Universe"
              title={`${goalSummary.totalGoals.toLocaleString("en-US")} tracked goals.`}
              text="Explore goals by club, country, competition, year and milestone in a visual CR7 scoring archive."
            />
            <p className="mt-6 font-mono text-5xl font-bold leading-none text-brand-orange">
              <NumberCounter value={goalSummary.totalGoals.toLocaleString("en-US")} />
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Open interactive goals experience
            </p>
            <div className="mt-8">
              <MagneticButton
                href={externalLinks.perplexityRonaldoGoals}
                ariaLabel="Open Cristiano Ronaldo interactive goals experience on Perplexity"
              >
                Explore all goals
              </MagneticButton>
            </div>
          </Reveal>
          <ParallaxLayer y={-8}>
            <GoalConstellation years={goalsByYear} milestones={milestoneGoals} compact />
          </ParallaxLayer>
        </div>
      </section>

      <Reveal as="section" className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Record Numbers" title="Numbers that shaped modern football." />
          <div className="mt-8">
            <StatsDashboard />
          </div>
        </div>
      </Reveal>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="European Records" title="European nights, record totals." />
          <Reveal className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {europeanRecords.map((record) => (
              <Link
                key={record.record}
                data-reveal-item
                href="/records"
                className="border border-white/10 bg-card p-5 transition hover:border-brand-orange"
              >
                <p className="font-mono text-4xl font-bold text-brand-orange">
                  <NumberCounter value={record.value} />
                </p>
                <h3 className="mt-4 font-display text-3xl uppercase leading-none text-warm">
                  {record.record}
                </h3>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <MindsetBand />
          <FanCommunityPreview />
        </div>
      </Reveal>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Career Highlights" title="Explore the major chapters." />
          <Reveal className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {editorialPillars.map((pillar) => (
              <Link key={pillar.title} data-reveal-item href={`/${pillar.title.toLowerCase()}`} className="border border-white/10 bg-card p-5 transition hover:border-brand-orange">
                <h3 className="font-display text-3xl uppercase text-warm">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{pillar.text}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="border-y border-white/10 bg-graphite px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <NewsletterCta />
        </div>
      </Reveal>
    </>
  );
}
