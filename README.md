# JSM Commercial Services — Website

Static marketing site for JSM Commercial Services (commercial cleaning & janitorial, Twin Cities metro). Built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live:** https://600589mbm-beep.github.io/jsm-commercial-services/

## Pages

- Home, About, Contact, Free Quote
- 10 service pages (generated from `src/data/services.ts`)
- 12 city pages (generated from `src/data/locations.ts`)
- Sitemap + LocalBusiness JSON-LD on every page

## Editing

| What to change | Where |
| --- | --- |
| Business name, phone, email, hours, stats | `src/config.ts` (single source of truth) |
| Quote form destination | `formspreeEndpoint` in `src/config.ts` — create a free form at [formspree.io](https://formspree.io) |
| Services offered | `src/data/services.ts` |
| Cities served | `src/data/locations.ts` |
| Colors / styling | `src/styles/global.css` |

> **TODO before launch:** replace the placeholder phone number, email, and Formspree form ID in `src/config.ts`.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

For a custom domain: set `site` to the domain and `base` to `'/'` in `astro.config.mjs`, update `public/robots.txt`, and add the domain in repo Settings → Pages.
