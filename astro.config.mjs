import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When you add a custom domain, change `site` and set `base` to '/'.
export default defineConfig({
  site: 'https://600589mbm-beep.github.io',
  base: '/jsm-commercial-services',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
