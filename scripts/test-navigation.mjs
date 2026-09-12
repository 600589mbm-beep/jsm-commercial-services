import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFileSync,existsSync,writeFileSync} from 'node:fs';
import {resolve,extname} from 'node:path';
import {chromium} from 'playwright';
const root=resolve('dist');const origin='http://127.0.0.1:4174';
const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2'};
const server=createServer((req,res)=>{let path=new URL(req.url,origin).pathname;let file=resolve(root,'.'+path+(path.endsWith('/')?'index.html':''));if(!file.startsWith(root+'/')||!existsSync(file)){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.end(readFileSync(file));});
await new Promise(r=>server.listen(4174,'127.0.0.1',r));const browser=await chromium.launch();const checks=[];
const check=(label,condition)=>{assert.ok(condition,label);checks.push(label);console.log('PASS:',label);};
async function offline(context){await context.route('**/*',r=>new URL(r.request().url()).origin===origin?r.continue():r.abort());}
try{
const context=await browser.newContext({reducedMotion:'reduce'});await offline(context);const page=await context.newPage();
for(const width of [320,375,768,1024,1440]){await page.setViewportSize({width,height:900});await page.goto(origin+'/',{waitUntil:'networkidle'});check(`No page overflow at ${width}px`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));const brand=await page.locator('.jsm-brand').boundingBox();const next=await page.locator(width>1100?'.jsm-desktop-nav':'.jsm-mobile-menu').boundingBox();check(`Navigation does not collide with logo at ${width}px`,brand.x+brand.width+5<=next.x);if(width<=1100){await page.locator('.jsm-mobile-menu summary').click();check(`Menu opens at ${width}px`,await page.locator('.jsm-menu-panel').isVisible());await page.keyboard.press('Escape');check(`Escape closes menu at ${width}px`,!await page.locator('.jsm-menu-panel').isVisible());}}
await page.goto(origin+'/thank-you/');check('Thank-you page has noindex',await page.locator('meta[name="robots"]').getAttribute('content')==='noindex,follow');check('Thank-you page excluded from core sitemap',!readFileSync('dist/sitemap-core.xml','utf8').includes('<loc>https://jsmcommercialservice.com/thank-you/</loc>'));check('Thank-you page explains date confirmation',(await page.locator('main').innerText()).includes('not a confirmed booking'));
const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:900}});await offline(noJS);const fallback=await noJS.newPage();await fallback.goto(origin+'/');await fallback.locator('.jsm-mobile-menu summary').click();check('Mobile menu works without JavaScript',await fallback.locator('.jsm-menu-panel').isVisible());await fallback.screenshot({path:'qa-artifacts/mobile-menu-375.png'});await noJS.close();await context.close();
}finally{writeFileSync('qa-artifacts/navigation-results.json',JSON.stringify({passed:checks.length,checks},null,2));await browser.close();await new Promise(r=>server.close(r));}
