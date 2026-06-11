// PLACEHOLDER testimonials — replace with real client reviews (name + company)
// before launch. Real Google reviews convert best; quote them verbatim with permission.
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Our last cleaning company was invisible until something went wrong. JSM checks in, fixes small things before we notice, and the building has never looked better.',
    name: 'Office Manager',
    company: 'Professional services firm, Minneapolis',
  },
  {
    quote:
      'They took over our clinic mid-contract and had protocols, color-coded supplies, and documentation dialed in from week one.',
    name: 'Practice Administrator',
    company: 'Dental clinic, Edina',
  },
  {
    quote:
      'Floors were the thing tenants complained about most. After JSM took over the strip-and-wax cycle, the complaints stopped.',
    name: 'Property Manager',
    company: 'Multi-tenant office building, St. Paul',
  },
];
