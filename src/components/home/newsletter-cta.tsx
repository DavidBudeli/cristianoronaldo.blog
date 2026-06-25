import { NewsletterForm } from "@/components/newsletter/newsletter-form";

export function NewsletterCta() {
  return (
    <div className="border border-white/10 bg-[linear-gradient(135deg,#111,#000)] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
        Newsletter
      </p>
      <h3 className="mt-4 font-display text-5xl uppercase text-warm">
        Get the latest CR7 stories.
      </h3>
      <div className="mt-6">
        <NewsletterForm />
      </div>
    </div>
  );
}
