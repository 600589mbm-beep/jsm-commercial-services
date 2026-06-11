// ============================================================
// EDIT THIS FILE ONLY to rebrand the entire site.
// Every page pulls business identity from here.
// ============================================================

export const BUSINESS = {
  name: 'JSM Commercial Services',
  legalName: 'JSM Commercial Services LLC',
  tagline: 'Commercial Cleaning & Janitorial Services in the Twin Cities Metro',
  phone: '(612) 555-0123',                        // <-- your phone
  phoneHref: 'tel:+16125550123',                  // <-- tel: link (digits only)
  email: 'sales@jsmcommercialservices.com',
  infoEmail: 'info@jsmcommercialservices.com',
  // Create a free form at https://formspree.io, paste your endpoint here:
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  hours: 'Mon–Sat 7am–7pm · 24/7 for emergencies',
  serviceArea: 'Minneapolis–St. Paul metro',
  foundingYear: 2018,
  // Social proof numbers shown on the site — keep them honest.
  stats: {
    facilitiesServed: '150+',
    yearsInBusiness: '8+',
    rating: '4.9',
    reviewCount: '87',
  },
};

// Prefix internal links with the deploy base path (GitHub Pages serves
// the site from /jsm-commercial-services/).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/') && !path.includes('.') && !path.includes('#')) path += '/';
  return base + path;
}
