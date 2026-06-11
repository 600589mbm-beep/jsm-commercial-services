# JSM Commercial Services — Website

Static marketing site for JSM Commercial Services (commercial cleaning & janitorial, Twin Cities metro). Built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live:** https://jsmcommercialservice.com/

## Pages

- Home, About, Contact, Free Quote
- 11 service pages (generated from `src/data/services.ts`)
- 8 industry pages + hub (generated from `src/data/industries.ts`)
- 43 city pages + 473 city×service combo pages (generated from `src/data/locations.ts`)
- Resources hub: cost-guide cluster, articles, templates, cost calculator
- Segmented sitemaps + LocalBusiness/Service/FAQPage/BreadcrumbList JSON-LD

## Editing

| What to change | Where |
| --- | --- |
| Business name, phone, email, hours, stats | `src/config.ts` (single source of truth) |
| Quote form destination | `formspreeEndpoint` in `src/config.ts` — create a free form at [formspree.io](https://formspree.io) |
| Services offered | `src/data/services.ts` |
| Cities served | `src/data/locations.ts` |
| Colors / styling | `src/styles/global.css` |

## 🚫 Launch blockers — do these before pointing any traffic at the site

1. ~~Real phone number~~ ✅ Done — `(651) 447-8036` is live everywhere. Tap-test the "Call Now" links on a phone to confirm.
2. **Real Formspree endpoint** in `src/config.ts`, then fire a **test submission end-to-end**: form → Formspree → instant email/SMS alert on your phone. The 5-minute callback habit is worth more than anything on the page.
3. **Trust content stays hidden until real.** Stats (facilities served, years, star rating) render only when `showStats: true` in `src/config.ts`, and testimonials render only when `src/data/testimonials.ts` is non-empty. Fill them with **real numbers from your Google Business Profile** and real client quotes (verbatim, with permission) — fabricated reviews are checkable in two clicks and an FTC violation. Until then the site leads with what's true: bonded & insured, background-checked, re-clean guarantee.
4. **Verify `foundingYear`** in `src/config.ts` — it drives the "founded in…" line on the About page.
5. **Custom domain (~$10/yr)** — `600589mbm-beep.github.io` in the address bar undercuts every trust signal, and you'll want a clean domain for the Google Business Profile link. Buy a domain, add a `CNAME` DNS record pointing to `600589mbm-beep.github.io`, set the domain in repo Settings → Pages, then set `site` to the domain and `base` to `'/'` in `astro.config.mjs` and update `public/robots.txt`.
6. **Response promise** — `responsePromise` in `src/config.ts` is used on every quote form. It ships as "within one business day"; once the lead-alert pipeline is tested, tighten it to "we'll call you back within the hour during business hours" (or whatever you can actually keep — the promise converts, but only set it where you can deliver).

## Conversion playbook (operational — not code)

These out-rank any design change, in priority order:

1. **Google Business Profile** — set up as a service-area business (hide street address, list service cities), local phone number, identical Name/Address/Phone everywhere, and relentlessly collect Google reviews. #1 free lead source for a local cleaner.
   - Set the GBP **website link with a UTM tag** so profile clicks are measurable in analytics: `https://<your-domain>/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
   - ~40% of profile views come from **Google Maps** — photos, reviews, and correct categories drive that surface far more than the website does. Add real photos (crews, before/after, trucks) and aim for steady review velocity.
2. **5-minute speed-to-lead** — in Formspree, turn on instant email notifications (and forward to SMS via your carrier's email-to-text gateway). Call every lead back within 5 minutes during business hours. Responding in 5 min vs 30 min makes contact ~100x more likely (MIT/HBR, 2.24M leads).
3. **Track calls + form submits** — add [Plausible](https://plausible.io) (~$9/mo, no cookie banner) or GA4; track `tel:` clicks and form submissions as conversions. Target ≥8% on the quote page; below 3% means fix message-match/trust first.
4. **Update the real review numbers** — once Google reviews exist, put the real rating + count in `src/config.ts` (the hero trust bar reads from there). A visible real review count is the most imitable edge over competitors (cf. Stratus's review widget).
5. **Optional:** Calendly free-plan inline embed on the quote page as a secondary "book a free walkthrough" CTA.

## Conversion features already built in

- 3-step quote wizard with progress bar (button-click first step, contact info last) — the ServiceMaster pattern; multi-step lifts lead-gen completion ~21%
- Sticky mobile "Call Now" bar + `tel:` links everywhere (phone leads convert ~10x better than forms for service businesses)
- First-person CTAs ("Get My Free Quote"), one primary CTA per page, repeated down-page
- Hero trust micro-bar: star rating + review count, bonded & insured, years in business
- Static Astro build: no JS framework, sub-2s loads, mobile-first CSS

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

For a custom domain: set `site` to the domain and `base` to `'/'` in `astro.config.mjs`, update `public/robots.txt`, and add the domain in repo Settings → Pages.
