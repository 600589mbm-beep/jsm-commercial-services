import assert from 'node:assert/strict';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const results = [];
const check = (label, condition) => { assert.ok(condition, label); results.push(label); console.log('PASS:', label); };
const read = (relative) => readFileSync(resolve(dist, relative), 'utf8');
const htmlPath = (route) => resolve(dist, route.replace(/^\//,'') + (route.endsWith('/') ? 'index.html' : '/index.html'));
const page = (route) => readFileSync(htmlPath(route), 'utf8');
const meta = (html, name) => html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)`, 'i'))?.[1] || '';
const title = (html) => html.match(/<title>([^<]*)<\/title>/i)?.[1] || '';
const h1 = (html) => html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim() || '';
const canonical = (html) => html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)/i)?.[1] || html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i)?.[1] || '';

mkdirSync('qa-artifacts',{recursive:true});

const snowRoute = '/services/snow-removal/';
check('Snow pillar is generated', existsSync(htmlPath(snowRoute)));
const snow = page(snowRoute);
check('Snow pillar has Minneapolis–St. Paul commercial SEO title', title(snow).includes('Commercial Snow Removal Minneapolis–St. Paul'));
check('Snow pillar has commercial snow meta description', meta(snow,'description').toLowerCase().includes('commercial snow plowing'));
check('Snow pillar has focused H1', h1(snow).includes('Commercial Snow Removal & Ice Management'));
check('Snow pillar canonical is production URL', canonical(snow) === 'https://jsmcommercialservice.com/services/snow-removal/');
check('Snow pillar is indexable', !meta(snow,'robots').toLowerCase().includes('noindex'));
check('Snow pillar mentions trigger depth', snow.toLowerCase().includes('trigger depth'));
check('Snow pillar links commercial contracts', snow.includes('/resources/commercial-snow-removal-contract-minnesota/'));
check('Snow pillar links RFP guide', snow.includes('/resources/commercial-snow-removal-rfp-checklist/'));
check('Snow pillar links trigger guide', snow.includes('/resources/snow-removal-trigger-depth-guide/'));
check('Snow pillar links ice guide', snow.includes('/resources/commercial-ice-management-minnesota/'));

const jsonld = [...snow.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m=>JSON.parse(m[1]));
const flatTypes = jsonld.flatMap(obj => obj['@graph'] ? obj['@graph'].map(x=>x['@type']) : [obj['@type']]);
check('Snow pillar JSON-LD includes Service', flatTypes.includes('Service'));
check('Snow pillar JSON-LD includes BreadcrumbList', flatTypes.includes('BreadcrumbList'));
check('Snow pillar JSON-LD includes FAQPage', flatTypes.includes('FAQPage'));

for (const field of ['trigger_depth','walkthrough_date','walkthrough_time','rfp_due_date','document_url','priority_areas','business_hours']) {
  check(`Snow form contains ${field}`, snow.includes(`name=\"${field}\"`) || snow.includes(`name="${field}"`));
}
check('Snow form explains requested date is not confirmed', snow.toLowerCase().includes('preferred date only') && snow.toLowerCase().includes('confirm availability'));
check('Snow form does not expose public file upload input', !/type=["']file["']/i.test(snow));

const priority = ['minneapolis','st-paul','apple-valley','eagan','bloomington','burnsville','lakeville','woodbury','eden-prairie','edina'];
for (const city of priority) {
  const route = `/locations/${city}/snow-removal/`;
  check(`${city} snow page exists`, existsSync(htmlPath(route)));
  const html = page(route);
  check(`${city} snow page is indexable`, !meta(html,'robots').toLowerCase().includes('noindex'));
  check(`${city} snow page has commercial snow title`, title(html).includes('Commercial Snow Removal'));
  check(`${city} snow page links snow pillar`, html.includes('/services/snow-removal/'));
}

for (const city of ['minnetonka','plymouth','maple-grove']) {
  const route = `/locations/${city}/snow-removal/`;
  check(`${city} snow page still exists for visitors`, existsSync(htmlPath(route)));
  const html = page(route);
  check(`${city} snow page remains noindex`, meta(html,'robots').toLowerCase().includes('noindex'));
}

const resources = [
  'commercial-snow-removal-minnesota',
  'commercial-snow-removal-contract-minnesota',
  'commercial-snow-removal-rfp-checklist',
  'snow-removal-trigger-depth-guide',
  'commercial-ice-management-minnesota'
];
for (const slug of resources) {
  const route = `/resources/${slug}/`;
  check(`${slug} resource exists`, existsSync(htmlPath(route)));
  const html = page(route);
  check(`${slug} resource is indexable`, !meta(html,'robots').toLowerCase().includes('noindex'));
  check(`${slug} resource links main snow service`, html.includes('/services/snow-removal'));
}

const combos = read('sitemap-combos.xml');
const core = read('sitemap-core.xml');
const resourceMap = read('sitemap-resources.xml');
check('Main snow pillar is in core sitemap', core.includes('https://jsmcommercialservice.com/services/snow-removal/'));
for (const city of priority) check(`${city} snow URL is in combo sitemap`, combos.includes(`https://jsmcommercialservice.com/locations/${city}/snow-removal/`));
for (const city of ['minnetonka','plymouth','maple-grove']) check(`${city} noindex snow URL is excluded from combo sitemap`, !combos.includes(`https://jsmcommercialservice.com/locations/${city}/snow-removal/`));
for (const slug of resources) check(`${slug} is in resource sitemap`, resourceMap.includes(`https://jsmcommercialservice.com/resources/${slug}/`));

const nav = readFileSync(resolve('dist/index.html'),'utf8');
check('Homepage navigation links Snow & Ice', nav.includes('/services/snow-removal/') || nav.includes('/services/snow-removal'));
check('Resources hub features snow procurement guides', page('/resources/').includes('Commercial Snow Removal &amp; Ice Management Resources') || page('/resources/').includes('Commercial Snow Removal & Ice Management Resources'));

const bannedClaims = ['GPS tracked','24/7 command center','one-hour dispatch','Smart Salting certified','30 years of experience'];
for (const claim of bannedClaims) check(`No unsupported snow claim: ${claim}`, !snow.toLowerCase().includes(claim.toLowerCase()));

writeFileSync('qa-artifacts/snow-seo-results.json', JSON.stringify({passed:results.length,checks:results},null,2));
console.log(`Snow SEO QA passed: ${results.length} checks`);
