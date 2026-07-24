// Post-build sitemap segmentation: core / cities / combos / resources.
// Only indexable HTML pages are included. Pages carrying a noindex directive
// remain usable and crawlable through internal links but are omitted from XML.
import { execSync } from 'node:child_process';
import { readdirSync, statSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://jsmcommercialservice.com';
const DIST = new URL('../dist/', import.meta.url).pathname;
const ROOT = new URL('../', import.meta.url).pathname;
let skippedNoindex = 0;

function gitDate(...files) {
  let latest = null;
  for (const f of files) {
    try {
      const d = execSync(`git log -1 --format=%cI -- "${f}"`, { cwd: ROOT }).toString().trim();
      if (d && (!latest || d > latest)) latest = d;
    } catch {}
  }
  return latest ?? new Date().toISOString();
}

function collectPages(dir, prefix = '/') {
  const urls = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      urls.push(...collectPages(path, `${prefix}${entry}/`));
    } else if (entry === 'index.html') {
      const html = readFileSync(path, 'utf8');
      const noindex = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(html);
      if (noindex) skippedNoindex += 1;
      else urls.push(prefix);
    }
  }
  return urls;
}

const pages = collectPages(DIST).sort();

const lastmods = {
  core: gitDate('src/pages', 'src/config.ts', 'src/data/services.ts', 'src/layouts', 'src/components'),
  cities: gitDate('src/pages/locations/[slug].astro', 'src/data/locations.ts'),
  combos: gitDate('src/pages/locations/[slug]/[service].astro', 'src/data/locations.ts', 'src/data/services.ts'),
  resources: gitDate('src/pages/resources', 'src/data/articles.ts'),
};

const segments = { core: [], cities: [], combos: [], resources: [] };
for (const pageUrl of pages) {
  if (/^\/locations\/[^/]+\/[^/]+\/$/.test(pageUrl)) segments.combos.push(pageUrl);
  else if (/^\/locations\/[^/]+\/$/.test(pageUrl)) segments.cities.push(pageUrl);
  else if (/^\/resources\//.test(pageUrl)) segments.resources.push(pageUrl);
  else segments.core.push(pageUrl);
}

const xmlEscape = (value) => value.replace(/&/g, '&amp;');

function writeSitemap(name, urls, lastmod) {
  const body = urls
    .map((pageUrl) => `  <url><loc>${xmlEscape(SITE + pageUrl)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  writeFileSync(join(DIST, name), xml);
  console.log(`${name}: ${urls.length} indexable URLs (lastmod ${lastmod.slice(0, 10)})`);
}

writeSitemap('sitemap-core.xml', segments.core, lastmods.core);
writeSitemap('sitemap-cities.xml', segments.cities, lastmods.cities);
writeSitemap('sitemap-combos.xml', segments.combos, lastmods.combos);
writeSitemap('sitemap-resources.xml', segments.resources, lastmods.resources);

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['core', 'cities', 'combos', 'resources']
  .map((segment) => `  <sitemap><loc>${SITE}/sitemap-${segment}.xml</loc><lastmod>${lastmods[segment]}</lastmod></sitemap>`)
  .join('\n')}
</sitemapindex>
`;
writeFileSync(join(DIST, 'sitemap-index.xml'), index);
console.log(`sitemap-index.xml: 4 segments, ${pages.length} indexable URLs, ${skippedNoindex} noindex URLs omitted`);

if (existsSync(join(DIST, 'sitemap-0.xml'))) {
  console.warn('WARNING: stale @astrojs/sitemap output present');
}
