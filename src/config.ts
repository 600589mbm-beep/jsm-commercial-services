// ============================================================
// EDIT THIS FILE ONLY to rebrand the entire site.
// Every page pulls business identity from here.
// ============================================================

export const BUSINESS = {
  name: 'JSM Commercial Services',
  legalName: 'JSM Commercial Services LLC',
  tagline: 'Commercial Cleaning & Janitorial Services in the Twin Cities Metro',
  phone: '(651) 447-8036',
  phoneHref: 'tel:+16514478036',
  email: 'sales@jsmcommercialservices.com',
  infoEmail: 'info@jsmcommercialservices.com',
  // Create a free form at https://formspree.io, paste your endpoint here:
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  hours: 'Mon–Fri 9am–5pm',
  address: {
    street: '7287 153rd St W #240868',
    city: 'Apple Valley',
    state: 'MN',
    zip: '55124',
  },
  serviceArea: 'Minneapolis–St. Paul metro',
  foundingYear: 2018,                             // <-- your real founding year
  // What we promise on the quote form. Only promise what you can keep —
  // tighten to "we'll call you back within the hour during business hours"
  // once the lead-alert pipeline is tested.
  responsePromise: 'We respond within one business day.',
  // Social proof numbers — NOT shown anywhere until you fill in REAL values
  // from your Google Business Profile and set showStats to true. Fabricated
  // review counts are checkable in two clicks and an FTC problem.
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
