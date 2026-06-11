// Internal-link audit over the built site:
//  - zero orphan pages (every page reachable from /)
//  - every page within 3 clicks of home
//  - every combo page linked from BOTH its city hub and its service hub
// Outputs a click-depth report.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

function collectPages(dir, prefix = '/') {
  const urls = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) urls.push(...collectPages(p, `${prefix}${entry}/`));
    else if (entry === 'index.html') urls.push(prefix);
  }
  return urls;
}

const pages = new Set(collectPages(DIST));

function normalize(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return null;
  if (/^https?:\/\//.test(href)) {
    if (!href.includes('jsmcommercialservice.com')) return null;
    href = new URL(href).pathname;
  }
  href = href.split('#')[0].split('?')[0];
  if (!href.startsWith('/')) return null;
  if (/\.(xml|svg|txt|png|jpg|pdf|css|js)$/.test(href)) return null;
  if (!href.endsWith('/')) href += '/';
  return href;
}

function linksOf(url) {
  const html = readFileSync(join(DIST, url.slice(1), 'index.html'), 'utf8');
  const out = new Set();
  for (const m of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const n = normalize(m[1]);
    if (n && pages.has(n)) out.add(n);
  }
  return out;
}

// BFS from home
const depth = new Map([['/', 0]]);
let frontier = ['/'];
while (frontier.length) {
  const next = [];
  for (const u of frontier) {
    for (const link of linksOf(u)) {
      if (!depth.has(link)) {
        depth.set(link, depth.get(u) + 1);
        next.push(link);
      }
    }
  }
  frontier = next;
}

const orphans = [...pages].filter((p) => !depth.has(p));
const tooDeep = [...depth].filter(([, d]) => d > 3).map(([u, d]) => `${u} (depth ${d})`);

// Combo coverage: each /locations/{city}/{service}/ must be linked from
// /locations/{city}/ AND /services/{service}/
const combos = [...pages].filter((p) => /^\/locations\/[^/]+\/[^/]+\/$/.test(p));
const hubCache = new Map();
const hubLinks = (hub) => {
  if (!hubCache.has(hub)) hubCache.set(hub, linksOf(hub));
  return hubCache.get(hub);
};
const missing = [];
for (const combo of combos) {
  const [, , city, service] = combo.split('/');
  if (!hubLinks(`/locations/${city}/`).has(combo)) missing.push(`${combo} NOT linked from city hub`);
  if (!hubLinks(`/services/${service}/`).has(combo)) missing.push(`${combo} NOT linked from service hub`);
}

// Report
const dist = {};
for (const [, d] of depth) dist[d] = (dist[d] ?? 0) + 1;
console.log('=== INTERNAL LINK AUDIT ===');
console.log(`pages: ${pages.size}, reachable: ${depth.size}, orphans: ${orphans.length}`);
console.log('click-depth distribution:');
for (const d of Object.keys(dist).sort((a, b) => a - b)) console.log(`  depth ${d}: ${dist[d]} pages`);
console.log(`pages deeper than 3 clicks: ${tooDeep.length}`);
tooDeep.slice(0, 10).forEach((x) => console.log('  ' + x));
console.log(`combo hub-link gaps: ${missing.length}`);
missing.slice(0, 10).forEach((x) => console.log('  ' + x));
orphans.slice(0, 10).forEach((x) => console.log('  ORPHAN: ' + x));
if (orphans.length || tooDeep.length || missing.length) {
  console.error('AUDIT FAIL');
  process.exit(1);
}
console.log('AUDIT PASS');
