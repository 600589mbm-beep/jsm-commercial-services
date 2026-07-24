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

The operating model lives at `/facility-care-program/`. The vendor-replacement journey lives at `/switching-cleaning-companies/`. The high-intent contract page lives at `/janitorial-contracts/`.

## Pages

- Home, About, Contact, Free Quote, Facility Care Program, Janitorial Contracts, and Switch Cleaning Providers
- 12 service pages generated from `src/data/services.ts`, including commercial move-out and tenant-turnover cleaning
- 8 data-driven industry pages plus a standalone stadium/event-venue page and industries hub
- 43 city pages plus 516 generated city-and-service combinations
- Lower-value city/service combinations use `noindex,follow` and are excluded from XML sitemaps
- Resources hub with cost guides, articles, templates, vendor scorecard, and cost calculator
- Segmented sitemaps plus LocalBusiness, WebSite, WebPage, Service, ItemList, FAQPage, and BreadcrumbList structured data

## Google Business Profile alignment

The services hub mirrors the service terminology published on JSM’s Google Business Profile and connects each phrase to the strongest website destination:

- Fitness center and gym cleaning
- Commercial move-out cleaning
- Multi-tenant cleaning
- Office and nightly cleaning
- Post-construction cleaning
- School and campus cleaning
- Stadium and event-venue cleaning
- Commercial janitorial service
- Commercial window cleaning
- Clinic cleaning
- Retail and shopping-center cleaning
- Warehouse and industrial cleaning

Service and industry pages carry customer-facing aliases in copy and structured data. Keep the website service list and Google Business Profile synchronized after future edits.

## Conversion system

- Responsive desktop and mobile navigation with direct call and walkthrough actions
- Mobile persistent conversion bar with separate call and quote choices
- Three-step quote wizard aligned with Google-listed facility and service types
- Facility Care Program for explaining delivery, quality control, and accountability
- Vendor-transition page for organizations actively replacing an incumbent contractor
- RFP template, vendor scorecard, cost calculator, and buying guides for procurement-stage visitors

## Editing

| What to change | Where |
| --- | --- |
| Business name, phone, email, hours, address, and stats | `src/config.ts` |
| Quote-form destination | `formspreeEndpoint` in `src/config.ts` |
| Services and Google-facing aliases | `src/data/services.ts` |
| Cities served | `src/data/locations.ts` |
| Data-driven industry pages | `src/data/industries.ts` |
| Google Business service catalog | `src/pages/services/index.astro` |
| Stadium/event-venue messaging | `src/pages/industries/stadium-event-venue-cleaning.astro` |
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
2. Confirm that every Google Business Profile service is genuinely offered and that staffing capacity matches stadium, event, school, medical, warehouse, and multi-site inquiries.
3. Test the complete quote flow on desktop and mobile after every form change: submit, receiver storage, notification, and thank-you redirect.
4. Test the header menu at phone, tablet, compact laptop, and wide-desktop widths after navigation changes.
5. Add only genuine Google review counts and client testimonials with permission.
6. Replace generic facility imagery with real crew, equipment, and before/after photos as they become available.
7. Keep the callback promise in `src/config.ts` aligned with actual response capacity.

## Conversion priorities

1. Maintain a complete Google Business Profile with consistent name, address, phone, service categories, service names, and service areas.
2. Respond to new leads as quickly as operationally possible.
3. Track calls, quote submissions, and high-intent resource usage with the existing cookieless analytics endpoint.
4. Build proof through real reviews, client references, real photos, and documented case studies.
5. Use the Facility Care Program, Janitorial Contracts, and Switch Cleaning Providers pages in proposals, outbound email, and sales follow-up.

## Develop

```sh
npm install
npm run dev
npm run build
```

## Deploy

The GitHub Actions workflow runs the Astro build on branch pushes and pull requests. Only `main` uploads and deploys the GitHub Pages artifact.
