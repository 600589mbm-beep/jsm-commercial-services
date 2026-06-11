// Post-build sitemap segmentation: core / cities / combos / resources.
// Lets GSC report indexation per segment. lastmod comes from the latest git
// commit touching the source files that generate each URL.
import { execSync } from 'node:child_process';
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://jsmcommercialservice.com';
const DIST = new URL('../dist/', import.meta.url).pathname;
const ROOT = new URL('../', import.meta.url).pathname;

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

// Collect all built pages as site-relative URLs with trailing slash
function collectPages(dir, prefix = '/') {
  const urls = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      urls.push(...collectPages(p, `${prefix}${entry}/`));
    } else if (entry === 'index.html') {
      urls.push(prefix);
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
for (const url of pages) {
  if (/^\/locations\/[^/]+\/[^/]+\/$/.test(url)) segments.combos.push(url);
  else if (/^\/locations\/[^/]+\/$/.test(url)) segments.cities.push(url);
  else if (/^\/resources\//.test(url)) segments.resources.push(url);
  else segments.core.push(url);
}
// /locations/ index belongs with core navigation pages
// (the regex above already leaves it in cities only if it matched city pattern — it doesn't)

const xmlEscape = (s) => s.replace(/&/g, '&amp;');

function writeSitemap(name, urls, lastmod) {
  const body = urls
    .map((u) => `  <url><loc>${xmlEscape(SITE + u)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  writeFileSync(join(DIST, name), xml);
  console.log(`${name}: ${urls.length} urls (lastmod ${lastmod.slice(0, 10)})`);
}

writeSitemap('sitemap-core.xml', segments.core, lastmods.core);
writeSitemap('sitemap-cities.xml', segments.cities, lastmods.cities);
writeSitemap('sitemap-combos.xml', segments.combos, lastmods.combos);
writeSitemap('sitemap-resources.xml', segments.resources, lastmods.resources);

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['core', 'cities', 'combos', 'resources']
  .map((s) => `  <sitemap><loc>${SITE}/sitemap-${s}.xml</loc><lastmod>${lastmods[s]}</lastmod></sitemap>`)
  .join('\n')}
</sitemapindex>
`;
writeFileSync(join(DIST, 'sitemap-index.xml'), index);
console.log(`sitemap-index.xml: 4 segments, ${pages.length} total urls`);

if (existsSync(join(DIST, 'sitemap-0.xml'))) {
  console.warn('WARNING: stale @astrojs/sitemap output present');
}
