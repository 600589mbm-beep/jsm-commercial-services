// ============================================================
// EDIT THIS FILE ONLY to rebrand the entire site.
// Every page pulls business identity from here.
// ============================================================

export const BUSINESS = {
  name: 'JSM Commercial Services',
  shortName: 'JSM',
  legalName: 'JSM Commercial Services LLC',
  website: 'https://jsmcommercialservice.com',
  tagline: 'Commercial Cleaning & Janitorial Services in the Twin Cities Metro',
  phone: '(651) 447-8036',
  phoneE164: '+16514478036',
  phoneHref: 'tel:+16514478036',
  email: 'sales@jsmcommercialservices.com',
  infoEmail: 'info@jsmcommercialservices.com',
  // Quote-form POST target. Self-hosted receiver on the VPS (stores to SQLite,
  // shows on the admin launchpad). Swap here only after testing the replacement.
  formspreeEndpoint: 'https://191-101-2-203.sslip.io/forms/jsm',
  hours: 'Mon–Fri 9am–5pm',
  address: {
    street: '7287 153rd St W #240868',
    city: 'Apple Valley',
    state: 'MN',
    zip: '55124',
  },
  serviceArea: 'Minneapolis–St. Paul metro',
  foundingYear: 2018,
  responsePromise: 'We respond within one business day.',
  // Social proof numbers remain hidden until verified values from the Google
  // Business Profile and approved client quotes are available.
  showStats: false,
  stats: {
    facilitiesServed: '',
    yearsInBusiness: '',
    rating: '',
    reviewCount: '',
  },
};

// Prefix internal links with the deploy base path (currently '/' on the
// custom domain jsmcommercialservice.com).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/') && !path.includes('.') && !path.includes('#')) path += '/';
  return base + path;
}
