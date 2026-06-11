export const SERVICE_ICONS: Record<string, string> = {
  'office-cleaning': '🏢',
  'janitorial-services': '🧹',
  'floor-care': '✨',
  'carpet-cleaning': '🧼',
  'window-cleaning': '🪟',
  'disinfection-services': '🧴',
  'post-construction-cleaning': '🏗️',
  'day-porter-services': '🛎️',
  'medical-office-cleaning': '🏥',
  'industrial-warehouse-cleaning': '🏭',
};

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    short: 'Nightly, weekly, or custom-schedule cleaning that keeps your office spotless and professional.',
    description:
      'A clean office is the first thing clients and employees notice. We handle desks, common areas, kitchens, restrooms, trash, and high-touch surfaces on a schedule built around your business hours — nightly, weekly, or anything in between.',
    bullets: [
      'Dusting, vacuuming, and mopping of all work areas',
      'Kitchen and breakroom cleaning and restocking',
      'Restroom sanitation and supply restocking',
      'Trash and recycling removal',
      'High-touch surface disinfection (doors, switches, shared equipment)',
    ],
    faq: [
      { q: 'Do you clean after business hours?', a: 'Yes — most of our office clients are cleaned evenings or early mornings so we never disrupt your workday. Daytime service is also available.' },
      { q: 'Do we need to sign a long-term contract?', a: 'No. We earn your business every month. Service agreements are month-to-month with a 30-day notice.' },
    ],
  },
  {
    slug: 'janitorial-services',
    name: 'Janitorial Services',
    short: 'Full-service contract janitorial for buildings that need consistent, accountable daily upkeep.',
    description:
      'For facilities that need more than a once-a-week wipe-down, our contract janitorial programs provide trained, background-checked cleaners on a fixed schedule with documented checklists and supervisor inspections.',
    bullets: [
      'Customized cleaning scope and checklist per facility',
      'Trained, uniformed, background-checked staff',
      'Supervisor quality inspections and reporting',
      'Consumables management (paper, soap, liners)',
      'Single point of contact for all facility cleaning needs',
    ],
    faq: [
      { q: 'Are your employees insured?', a: 'Yes. We carry general liability and workers’ compensation coverage, and we can name your company as additionally insured on request.' },
      { q: 'Can you match our current scope of work?', a: 'Absolutely — send us your existing scope and we’ll quote it line for line, then suggest improvements.' },
    ],
  },
  {
    slug: 'floor-care',
    name: 'Floor Stripping & Waxing',
    short: 'Strip, wax, burnish, and seal — VCT, tile, and hard floors restored to a high-gloss finish.',
    description:
      'Hard floors take the most abuse in any commercial building. Our floor crews strip old finish, apply fresh coats of commercial-grade wax, and set you up on a burnish/recoat cycle that keeps floors glossy year-round.',
    bullets: [
      'Full strip and re-wax of VCT and tile floors',
      'High-speed burnishing programs',
      'Concrete scrubbing and sealing',
      'Grout deep cleaning',
      'Scheduled maintenance cycles to protect your investment',
    ],
    faq: [
      { q: 'How often should floors be stripped and waxed?', a: 'Most facilities do a full strip 1–2 times per year with scrub-and-recoat or burnishing in between. Traffic level drives the schedule — we’ll recommend one after a walkthrough.' },
    ],
  },
  {
    slug: 'carpet-cleaning',
    name: 'Commercial Carpet Cleaning',
    short: 'Hot water extraction and low-moisture encapsulation that lifts traffic lanes and extends carpet life.',
    description:
      'Dirty carpet ages a space fast. We use truck-mount hot water extraction for deep restoration and low-moisture encapsulation for fast-drying interim cleans, keeping high-traffic areas presentable between deep cleans.',
    bullets: [
      'Hot water extraction (deep clean)',
      'Low-moisture encapsulation (dry in ~1 hour)',
      'Spot and stain treatment',
      'Deodorizing and carpet protectant application',
      'Scheduled maintenance programs',
    ],
    faq: [
      { q: 'How long until we can walk on the carpet?', a: 'Encapsulation cleans are walk-ready in about an hour. Hot water extraction typically needs 4–8 hours; we schedule it overnight or on weekends.' },
    ],
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    short: 'Streak-free interior and exterior window cleaning for storefronts, offices, and low-rise buildings.',
    description:
      'Clean glass sells. We clean storefront glass, office partitions, entry doors, and exterior windows up to three stories using water-fed pole systems and traditional squeegee work.',
    bullets: [
      'Interior and exterior glass',
      'Storefronts and entryways',
      'Water-fed pole cleaning up to 3 stories',
      'Frame, track, and sill detailing',
      'Recurring monthly or quarterly schedules',
    ],
    faq: [
      { q: 'Do you clean high-rise windows?', a: 'We service buildings up to three stories. For taller buildings we can refer a trusted high-rise partner.' },
    ],
  },
  {
    slug: 'disinfection-services',
    name: 'Disinfection & Sanitization',
    short: 'EPA-registered disinfectants and electrostatic spraying for offices, gyms, schools, and clinics.',
    description:
      'When germs are the concern, surface wiping isn’t enough. Our disinfection service uses EPA List N registered disinfectants applied by electrostatic sprayer for 360-degree coverage of desks, equipment, and high-touch points.',
    bullets: [
      'Electrostatic spraying for full-surface coverage',
      'EPA-registered, hospital-grade disinfectants',
      'High-touch point wipe-downs',
      'One-time outbreak response or recurring programs',
      'Documentation for compliance records',
    ],
    faq: [
      { q: 'Is the disinfectant safe around food and people?', a: 'We use EPA-registered products applied per label. Areas are ready for re-entry after the labeled dwell time, typically under an hour.' },
    ],
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    short: 'Rough, final, and touch-up cleans that get new builds and remodels turnover-ready.',
    description:
      'General contractors call us when a project needs to hand over clean. We do phased rough and final cleans — dust removal, sticker and debris removal, window and fixture detailing, and floor finishing — so the punch list passes the first time.',
    bullets: [
      'Rough, final, and touch-up phase cleans',
      'Construction dust removal from every surface',
      'Sticker, label, and paint-spot removal',
      'Window, fixture, and millwork detailing',
      'Floor scrub, finish, and protection',
    ],
    faq: [
      { q: 'Can you meet our turnover deadline?', a: 'Yes — we staff post-construction cleans to the schedule, including nights and weekends, and coordinate directly with your site super.' },
    ],
  },
  {
    slug: 'day-porter-services',
    name: 'Day Porter Services',
    short: 'On-site daytime staff keeping lobbies, restrooms, and common areas presentable all day.',
    description:
      'High-traffic buildings get dirty between nightly cleans. A JSM day porter is on-site during business hours handling lobby touch-ups, restroom checks, spill response, conference room turnovers, and tenant requests.',
    bullets: [
      'Lobby and entrance upkeep throughout the day',
      'Restroom checks and restocking',
      'Spill and emergency response',
      'Conference and common room turnovers',
      'Light maintenance and tenant request handling',
    ],
    faq: [
      { q: 'Can we get a porter for just a few hours a day?', a: 'Yes. Porter coverage is flexible — from a 2-hour morning shift to full business-day coverage.' },
    ],
  },
  {
    slug: 'medical-office-cleaning',
    name: 'Medical Office Cleaning',
    short: 'Protocol-driven cleaning for clinics, dental offices, and outpatient facilities.',
    description:
      'Healthcare spaces demand more than standard janitorial. Our teams follow healthcare cleaning protocols — proper disinfectant dwell times, cross-contamination controls, and terminal cleaning standards for exam and procedure rooms.',
    bullets: [
      'Exam and procedure room terminal cleaning',
      'EPA hospital-grade disinfectants with proper dwell times',
      'Color-coded microfiber to prevent cross-contamination',
      'Waiting room and high-touch disinfection',
      'OSHA bloodborne pathogen trained staff',
    ],
    faq: [
      { q: 'Do you follow CDC guidelines?', a: 'Yes. Our medical cleaning protocols follow CDC environmental infection control guidance, and our staff complete bloodborne pathogen training.' },
    ],
  },
  {
    slug: 'industrial-warehouse-cleaning',
    name: 'Industrial & Warehouse Cleaning',
    short: 'Floor scrubbing, high dusting, and breakroom/restroom programs for warehouses and light industrial.',
    description:
      'Warehouses and production facilities need a different kind of clean — ride-on floor scrubbers, high dusting of racking and fixtures, and tough degreasing, plus the office, breakroom, and restroom care your team relies on daily.',
    bullets: [
      'Ride-on auto-scrubbing of warehouse floors',
      'High dusting of racks, beams, and fixtures',
      'Degreasing and spill cleanup',
      'Office, breakroom, and restroom programs',
      'Flexible scheduling around shifts and production',
    ],
    faq: [
      { q: 'Can you clean around our production schedule?', a: 'Yes — we routinely work between shifts, overnights, and weekends, and our staff follow your site safety requirements.' },
    ],
  },
];
