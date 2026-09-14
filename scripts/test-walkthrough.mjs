// Browser regression tests. All external requests are blocked; form POST is mocked.
// Synthetic values only. This does NOT verify production receiver storage/email.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { chromium } from 'playwright';
const root = resolve('dist');
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.xml':'application/xml'};
const server = createServer((req,res) => {
  const path = new URL(req.url || '/', 'http://localhost').pathname;
  let file = resolve(root,'.'+decodeURIComponent(path));
  if(!file.startsWith(root+'/') && file !== root) {res.writeHead(403);res.end();return;}
  if(path.endsWith('/')) file += '/index.html';
  if(!existsSync(file)){res.writeHead(404);res.end('Not found');return;}
  res.setHeader('Content-Type',mime[extname(file)] || 'application/octet-stream');
  try{res.end(readFileSync(file));}catch{res.writeHead(500);res.end();}
});
await new Promise(r=>server.listen(4173,'127.0.0.1',r));
mkdirSync('qa-artifacts',{recursive:true});
const origin = 'http://127.0.0.1:4173';
const routes = ['/','/quote/','/commercial-cleaning-twin-cities/'];
const browser = await chromium.launch({headless:true});
const results = [];
const check = (label,condition) => {assert.ok(condition,label);results.push(label);console.log('PASS:',label);};
async function offline(context){await context.route('**/*',route=>{const u = new URL(route.request().url());return u.origin === origin ? route.continue() : route.abort();});}
try{
  const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  await offline(context);
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror',error=>pageErrors.push(error.message));
  for(const width of [375,768,1440]){
    await page.setViewportSize({width,height:1000});
    for(const route of routes){
      const response = await page.goto(origin+route,{waitUntil:'networkidle'});
      check(`${route} loads at ${width}px`,response.status()===200);
      await page.evaluate(()=>document.fonts.ready);
      check(`${route} has one H1 at ${width}px`,await page.locator('h1').count()===1);
      const overflow = await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth+1);
      check(`${route} has no horizontal overflow at ${width}px`,!overflow);
      if(width !== 768){const slug=route==='/'?'home':route.split('/')[1];await page.screenshot({path:`qa-artifacts/${slug}-${width}.png`,fullPage:true,animations:'disabled'});}
    }
  }
  for(const route of routes){
    await page.goto(origin+route);
    check(`${route} has descriptive title`,(await page.title()).length>20);
    check(`${route} has description`,(await page.locator('meta[name="description"]').getAttribute('content')).length>80);
    check(`${route} canonical is production URL`,await page.locator('link[rel="canonical"]').getAttribute('href')==='https://jsmcommercialservice.com'+route);
    check(`${route} is indexable`,!(await page.locator('meta[name="robots"]').getAttribute('content')).includes('noindex'));
    const schemas=await page.locator('script[type="application/ld+json"]').allTextContents();
    schemas.forEach(text=>JSON.parse(text));check(`${route} has valid JSON-LD`,schemas.length>=2);
    const links=await page.locator('main a[href]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')).filter(h=>h.startsWith('/')));
    for(const link of new Set(links)){const pathname=new URL(link,origin).pathname;const file=resolve(root,'.'+pathname+(pathname.endsWith('/')?'index.html':''));check(`${route} internal link ${pathname}`,existsSync(file));}
  }
  check('SEO landing page is in core XML sitemap',readFileSync('dist/sitemap-core.xml','utf8').includes('https://jsmcommercialservice.com/commercial-cleaning-twin-cities/'));
  await page.goto(origin+'/quote/');
  await page.locator('form[data-ready="true"]').waitFor();
  const field=name=>page.locator(`form[data-walkthrough] [name="${name}"]`);
  const next=page.locator('[data-next]');
  await next.click();check('Required building fields block advancement',await page.locator('[data-step="0"]').isVisible() && await page.locator('.form-errors').isVisible());
  await field('facility_type').selectOption('Other');
  await field('building_name').fill('QA Example Building');
  await field('building_address').fill('100 Test Street');
  await field('city_zip').fill('Example City, MN 55124');
  await next.click();check('Other building type requires description',await field('building_description').getAttribute('aria-invalid')==='true');
  await field('facility_type').selectOption('Office / Professional building');
  await field('square_footage').fill('12500');
  await field('building_description').fill('Synthetic QA office building. Not a customer request.');
  await next.click();check('Building step advances',await page.locator('[data-step="1"]').isVisible());
  await field('frequency').selectOption('3 days per week');
  await page.locator('[name="cleaning_days"][value="Monday"]').locator('..').click();
  await next.click();check('Cleaning day mismatch is rejected',await page.locator('[data-step="1"]').isVisible() && await page.locator('.form-errors').isVisible());
  for(const day of ['Wednesday','Friday']) await page.locator(`[name="cleaning_days"][value="${day}"]`).locator('..').click();
  await field('current_challenge').fill('QA TEST ONLY — no production delivery.');
  await next.click();check('Matching cleaning frequency advances',await page.locator('[data-step="2"]').isVisible());
  const today=await field('walkthrough_date').getAttribute('min');
  check('Date minimum generated dynamically',/^\d{4}-\d{2}-\d{2}$/.test(today));
  await field('walkthrough_date').fill('2000-01-01');
  await field('walkthrough_time').selectOption('Morning: 9 AM–12 PM Central');
  await next.click();check('Past date is rejected',await page.locator('[data-step="2"]').isVisible() && await field('walkthrough_date').getAttribute('aria-invalid')==='true');
  await field('walkthrough_date').fill(today);
  await field('document_url').fill('http://example.invalid/rfp');
  await next.click();check('Non-HTTPS RFP link is rejected',await field('document_url').getAttribute('aria-invalid')==='true');
  await field('document_url').fill('https://example.invalid/rfp');
  await field('rfp_notes').fill('Synthetic test scope. Three days per week.');
  await field('document_delivery').selectOption('Link included above');
  await next.click();check('Visit and RFP step advances',await page.locator('[data-step="3"]').isVisible());
  check('Review displays requested frequency',(await page.locator('[data-review]').innerText()).includes('3 days per week'));
  await page.locator('[data-submit]').click();check('Required contact details block submit',await page.locator('.form-errors').isVisible());
  await field('name').fill('QA Example');await field('company').fill('QA Only');await field('email').fill('qa@example.invalid');await field('phone').fill('2025550100');await field('contact_permission').check();
  let submitted=null;
  await page.route('**/jsm',async route=>{if(route.request().method()==='POST'){submitted=new URLSearchParams(route.request().postData());await route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Mock submission only</title><h1>TEST: not sent to JSM</h1>'});}else await route.abort();});
  await page.locator('[data-submit]').click();await page.waitForLoadState('networkidle');
  check('Native POST includes exact weekly count',submitted?.get('frequency')==='3 days per week');
  check('Native POST retains all weekdays',submitted?.getAll('cleaning_days').length===3);
  check('Native POST includes building address',submitted?.get('building_address')==='100 Test Street');
  check('Native POST includes walkthrough and timezone',submitted?.get('walkthrough_date')===today && submitted?.get('walkthrough_timezone')==='America/Chicago');
  check('Native POST includes RFP link and notes',submitted?.get('document_url')==='https://example.invalid/rfp' && submitted?.get('rfp_notes').includes('Synthetic'));
  check('Legacy notes field remains populated',submitted?.get('current_challenge').includes('QA TEST'));
  await page.goto(origin+'/');await page.locator('main a[href="/quote/"]').first().click();await page.locator('form[data-ready="true"]').waitFor();check('Form initializes after client-side navigation',await page.locator('[data-step="0"]').isVisible());
  const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:900}});await offline(noJS);const fallback=await noJS.newPage();await fallback.goto(origin+'/quote/');
  for(const step of [0,1,2,3]) check(`No-JavaScript section ${step+1} remains visible`,await fallback.locator(`[data-step="${step}"]`).isVisible());
  check('No-JavaScript submit is available',await fallback.locator('[data-submit]').isVisible());await fallback.screenshot({path:'qa-artifacts/quote-no-js-375.png',fullPage:true});
  await noJS.close();
  check('No browser JavaScript errors',pageErrors.length===0);
  await context.close();
}finally{
  writeFileSync('qa-artifacts/results.json',JSON.stringify({passed:results.length,checks:results,note:'Production submission is mocked. Receiver persistence, notifications and direct file uploads are not verified.'},null,2));
  await browser.close();await new Promise(r=>server.close(r));
}