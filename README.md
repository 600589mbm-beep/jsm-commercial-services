# JSM Commercial Services — Website

Static marketing site for JSM Commercial Services, an owner-led commercial cleaning and janitorial company serving the Twin Cities metro. Built with Astro and deployed to GitHub Pages.

**Live:** https://jsmcommercialservice.com/

## Positioning

The site positions JSM as a local alternative to large national facility-service providers:

- Enterprise-style written scopes and startup planning
- Assigned, background-checked crews
- Supervisor quality inspections
- One accountable local contact
- Multi-site support across the Twin Cities
- Free re-clean guarantee and month-to-month agreements

The detailed operating model lives at `/facility-care-program/`. The high-intent vendor-replacement journey lives at `/switching-cleaning-companies/`.

## Pages

- Home, About, Contact, Free Quote, Facility Care Program, and Switch Cleaning Providers
- 11 service pages generated from `src/data/services.ts`
- 8 industry pages plus hub generated from `src/data/industries.ts`
- 43 city pages plus 473 city-and-service combination pages generated from `src/data/locations.ts`
- Resources hub with cost guides, articles, templates, vendor scorecard, and cost calculator
- Segmented sitemaps plus LocalBusiness, Service, FAQPage, and BreadcrumbList structured data

## Conversion system

- Responsive desktop and mobile navigation with direct call and walkthrough actions
- Mobile persistent conversion bar with separate call and quote choices
- Three-step quote wizard with provider-replacement, multi-site, current-challenge, and contact-time fields
- Facility Care Program for explaining delivery, quality control, and accountability
- Vendor-transition page for organizations actively replacing an incumbent contractor
- RFP template, vendor scorecard, cost calculator, and buying guides for procurement-stage visitors

## Editing

| What to change | Where |
| --- | --- |
| Business name, phone, email, hours, address, and stats | `src/config.ts` |
| Quote-form destination | `formspreeEndpoint` in `src/config.ts` |
| Services offered | `src/data/services.ts` |
| Cities served | `src/data/locations.ts` |
| Industry pages | `src/data/industries.ts` |
| Colors and global styling | `src/styles/global.css` |
| Header navigation and mobile menu | `src/components/Header.astro` |
| Mobile conversion bar | `src/components/StickyCall.astro` |
| Facility-care positioning and process | `src/pages/facility-care-program.astro` |
| Vendor transition messaging | `src/pages/switching-cleaning-companies.astro` |

## Current launch status

- Custom domain is active at `jsmcommercialservice.com`.
- Phone number `(651) 447-8036` is configured sitewide.
- Quote forms post to the self-hosted receiver configured in `src/config.ts` and redirect to `/thank-you/`.
- Trust statistics and testimonials remain hidden until verified values and approved client quotes are added.

## Important content checks

1. Confirm the legal business name, address, founding year, insurance statements, background-check policy, multi-site capacity, and every operational promise before paid traffic.
2. Test the complete quote flow on desktop and mobile after every form change: submit, receiver storage, notification, and thank-you redirect.
3. Test the header menu at phone, tablet, compact laptop, and wide-desktop widths after navigation changes.
4. Add only genuine Google review counts and client testimonials with permission.
5. Replace generic facility imagery with real crew, equipment, and before/after photos as they become available.
6. Keep the callback promise in `src/config.ts` aligned with actual response capacity.

## Conversion priorities

1. Maintain a complete Google Business Profile with consistent name, address, phone, service categories, and service areas.
2. Respond to new leads as quickly as operationally possible.
3. Track calls, quote submissions, and high-intent resource usage with the existing cookieless analytics endpoint.
4. Build proof through real reviews, client references, real photos, and documented case studies.
5. Use the Facility Care Program and Switch Cleaning Providers pages in proposals, outbound email, and sales follow-up.

## Develop

```sh
npm install
npm run dev
npm run build
```

## Deploy

The GitHub Actions workflow runs the Astro build on branch pushes and pull requests. Only `main` uploads and deploys the GitHub Pages artifact.
