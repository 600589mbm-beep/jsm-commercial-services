// Testimonials are HIDDEN until real ones exist — the homepage section only
// renders when this array is non-empty. Add real client quotes (verbatim,
// with permission, name + company). Fake testimonials are an FTC violation.
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [];
