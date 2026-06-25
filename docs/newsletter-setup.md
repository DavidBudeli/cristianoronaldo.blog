# Newsletter setup

CR7 Blog uses Brevo to store newsletter contacts, preferences, consent and campaign unsubscribe handling. The frontend must never call Brevo directly; all signups go through `/api/newsletter`.

## Setup

1. Create a Brevo account.
2. Create a newsletter list for CR7 Blog contacts.
3. Create the contact attributes used by the integration: `SOURCE`, `LOCALE`, `PREF_NEWS`, `PREF_RECORDS`, `PREF_CAREER`, `PREF_PORTUGAL`, `PREF_FANS`, `CONSENT_NEWSLETTER` and `CONSENT_DATE`.
4. Get `BREVO_API_KEY` from the Brevo developer/API settings.
5. Get `BREVO_NEWSLETTER_LIST_ID` from the Brevo list details.
6. Configure `.env.local`:

```env
BREVO_API_KEY=your-brevo-api-key
BREVO_NEWSLETTER_LIST_ID=123
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

7. Test the form locally with `npm run dev`, then submit an email with consent and at least one preference selected.
8. Confirm the contact appears in the Brevo list with the CR7 Blog attributes populated.
9. Create a campaign in Brevo and target the CR7 Blog newsletter list.
10. Send the newsletter from Brevo. Do not send bulk campaigns from the CR7 Blog server.
11. Confirm unsubscribe and double opt-in settings in Brevo before production campaigns.
12. Configure the sending domain, SPF, DKIM and DMARC in Brevo for production deliverability.

## Implementation notes

- The client submits to `/api/newsletter`.
- The API validates email, locale, consent and preferences server-side.
- The API creates or updates the Brevo contact and adds it to `BREVO_NEWSLETTER_LIST_ID`.
- The Brevo API key is only read on the server through `process.env.BREVO_API_KEY`.

