"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        required
        type="email"
        placeholder="email@example.com"
        className="min-h-14 border border-white/10 bg-black/40 px-4 text-base text-warm outline-none transition placeholder:text-muted focus:border-gold"
      />
      <fieldset className="sm:col-span-2 grid gap-3 border border-white/10 p-4 sm:grid-cols-5">
        <legend className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
          Preferences
        </legend>
        {["News", "Records", "Career", "Portugal", "Fans"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" value={item} className="h-4 w-4 accent-brand-orange" />
            {item}
          </label>
        ))}
      </fieldset>
      <button
        type="submit"
        className="min-h-14 border border-gold bg-gold px-6 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-gold-light sm:col-span-2"
      >
        Subscribe
      </button>
      {submitted ? (
        <p className="sm:col-span-2 text-sm text-gold-light">
          Thanks. You&apos;re on the list.
        </p>
      ) : null}
    </form>
  );
}
