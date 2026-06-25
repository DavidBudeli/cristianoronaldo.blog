"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import { useLanguage } from "@/components/i18n/language-provider";
import { isValidEmail } from "@/lib/validation";
import {
  newsletterPreferences,
  type NewsletterLocale,
  type NewsletterPreference,
} from "@/types/newsletter";

type SubmitState = "idle" | "loading" | "success" | "error";

const preferenceLabels: Record<
  NewsletterLocale,
  Record<NewsletterPreference, string>
> = {
  "pt-BR": {
    news: "Notícias",
    records: "Recordes",
    career: "Carreira",
    portugal: "Portugal",
    fans: "Fãs",
  },
  en: {
    news: "News",
    records: "Records",
    career: "Career",
    portugal: "Portugal",
    fans: "Fans",
  },
};

const copy = {
  "pt-BR": {
    emailLabel: "E-mail",
    emailPlaceholder: "email@exemplo.com",
    invalidEmail: "Informe um e-mail válido.",
    preferencesLegend: "Preferências",
    preferencesError: "Escolha pelo menos uma preferência.",
    consent:
      "Aceito receber novidades, artigos e comunicações do CR7 Blog por e-mail.",
    consentError: "O consentimento é obrigatório.",
    submit: "Inscrever",
    loading: "Enviando...",
    success:
      "Inscrição confirmada. Você receberá as próximas histórias no seu e-mail.",
    error: "Não foi possível confirmar sua inscrição agora. Tente novamente.",
    compliance:
      "Você pode cancelar a inscrição a qualquer momento. Seus dados serão usados apenas para envio de conteúdos relacionados ao CR7 Blog.",
  },
  en: {
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    invalidEmail: "Enter a valid email address.",
    preferencesLegend: "Preferences",
    preferencesError: "Choose at least one preference.",
    consent:
      "I agree to receive updates, stories and communications from CR7 Blog by email.",
    consentError: "Consent is required.",
    submit: "Subscribe",
    loading: "Submitting...",
    success:
      "Subscription confirmed. You’ll receive the next stories in your inbox.",
    error: "We couldn’t confirm your subscription right now. Please try again.",
    compliance:
      "You can unsubscribe at any time. Your data will only be used to send CR7 Blog related content.",
  },
};

export function NewsletterForm() {
  const { locale } = useLanguage();
  const currentCopy = copy[locale];
  const id = useId();
  const [email, setEmail] = useState("");
  const [preferences, setPreferences] = useState<NewsletterPreference[]>([
    ...newsletterPreferences,
  ]);
  const [consent, setConsent] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const orderedPreferences = useMemo(
    () => newsletterPreferences.filter((preference) => preferences.includes(preference)),
    [preferences],
  );

  const emailIsValid = isValidEmail(email);
  const canSubmit =
    emailIsValid &&
    orderedPreferences.length > 0 &&
    consent &&
    submitState !== "loading";

  function togglePreference(preference: NewsletterPreference) {
    setSubmitState("idle");
    setPreferences((currentPreferences) =>
      currentPreferences.includes(preference)
        ? currentPreferences.filter((item) => item !== preference)
        : [...currentPreferences, preference],
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedOnce(true);

    if (!canSubmit) {
      return;
    }

    setSubmitState("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          preferences: orderedPreferences,
          locale,
          consent,
        }),
      });

      if (!response.ok) {
        throw new Error("Newsletter request failed.");
      }

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const emailErrorId = `${id}-email-error`;
  const preferencesErrorId = `${id}-preferences-error`;
  const consentErrorId = `${id}-consent-error`;
  const statusId = `${id}-status`;
  const showEmailError = submittedOnce && !emailIsValid;
  const showPreferencesError = submittedOnce && orderedPreferences.length === 0;
  const showConsentError = submittedOnce && !consent;

  return (
    <form onSubmit={onSubmit} noValidate className="grid w-full min-w-0 gap-4 overflow-hidden">
      <div className="grid min-w-0 gap-2">
        <label
          className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange"
          htmlFor={`${id}-email`}
        >
          {currentCopy.emailLabel}
        </label>
        <input
          id={`${id}-email`}
          required
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSubmitState("idle");
          }}
          aria-invalid={showEmailError}
          aria-describedby={showEmailError ? emailErrorId : undefined}
          placeholder={currentCopy.emailPlaceholder}
          className="min-h-14 w-full min-w-0 border border-white/10 bg-black/40 px-4 text-base text-warm outline-none transition placeholder:text-muted focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/60"
        />
        {showEmailError ? (
          <p id={emailErrorId} className="text-sm text-red-300">
            {currentCopy.invalidEmail}
          </p>
        ) : null}
      </div>

      <fieldset
        className="grid min-w-0 gap-3 border border-white/10 p-4 sm:grid-cols-2 lg:grid-cols-5"
        aria-describedby={showPreferencesError ? preferencesErrorId : undefined}
      >
        <legend className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
          {currentCopy.preferencesLegend}
        </legend>
        {newsletterPreferences.map((preference) => (
          <label
            key={preference}
            className="flex min-w-0 items-center gap-2 text-sm text-muted"
          >
            <input
              type="checkbox"
              value={preference}
              checked={preferences.includes(preference)}
              onChange={() => togglePreference(preference)}
              className="h-4 w-4 shrink-0 accent-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            />
            <span className="min-w-0 break-words">{preferenceLabels[locale][preference]}</span>
          </label>
        ))}
      </fieldset>
      {showPreferencesError ? (
        <p id={preferencesErrorId} className="text-sm text-red-300">
          {currentCopy.preferencesError}
        </p>
      ) : null}

      <div className="grid min-w-0 gap-2">
        <label className="flex w-full min-w-0 items-start gap-3 text-sm leading-6 text-muted">
          <input
            required
            type="checkbox"
            checked={consent}
            onChange={(event) => {
              setConsent(event.target.checked);
              setSubmitState("idle");
            }}
            aria-invalid={showConsentError}
            aria-describedby={showConsentError ? consentErrorId : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          />
          <span className="min-w-0 break-words">{currentCopy.consent}</span>
        </label>
        {showConsentError ? (
          <p id={consentErrorId} className="text-sm text-red-300">
            {currentCopy.consentError}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="min-h-14 w-full border border-gold bg-gold px-6 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-muted"
      >
        {submitState === "loading" ? currentCopy.loading : currentCopy.submit}
      </button>

      <p className="min-w-0 break-words text-xs leading-6 text-muted">
        {currentCopy.compliance}
      </p>

      <p
        id={statusId}
        aria-live="polite"
        role={submitState === "error" ? "alert" : "status"}
        className={`min-h-6 text-sm ${
          submitState === "success"
            ? "text-gold-light"
            : submitState === "error"
              ? "text-red-300"
              : "text-muted"
        }`}
      >
        {submitState === "success"
          ? currentCopy.success
          : submitState === "error"
            ? currentCopy.error
            : ""}
      </p>
    </form>
  );
}
