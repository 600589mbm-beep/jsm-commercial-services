import { defineConfig } from 'astro/config';

// Custom domain (set in repo Settings → Pages) serves the site at the root.
// Sitemaps are generated post-build by scripts/gen-sitemaps.mjs (4 segments
// + index) so GSC can report indexation per page type.
export default defineConfig({
  site: 'https://jsmcommercialservice.com',
  base: '/',
  trailingSlash: 'always',
});
