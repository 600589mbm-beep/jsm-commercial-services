import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (set in repo Settings → Pages) serves the site at the root.
export default defineConfig({
  site: 'https://jsmcommercialservice.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
