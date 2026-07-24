export const SERVICE_ICONS: Record<string, string> = {
  'office-cleaning': '🏢',
  'janitorial-services': '🧹',
  'floor-care': '✨',
  'carpet-cleaning': '🧼',
  'window-cleaning': '🪟',
  'disinfection-services': '🧴',
  'post-construction-cleaning': '🏗️',
  'commercial-move-out-cleaning': '📦',
  'day-porter-services': '🛎️',
  'medical-office-cleaning': '🏥',
  'industrial-warehouse-cleaning': '🏭',
  'snow-removal': '❄️',
};

export interface Service {
  slug: string;
  name: string;
  /** Exact or near-exact customer phrases used in Google Business Profile. */
  aliases?: string[];
  short: string;
  description: string;
  bullets: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    aliases: ['Office cleaning', 'Nightly cleaning service'],
    short: 'Nightly, weekly, or custom-schedule commercial office cleaning that keeps workplaces professional and ready for business.',
    description:
      'A clean office is one of the first things employees, clients, and visitors notice. JSM handles work areas, common spaces, kitchens, restrooms, trash, floors, and high-touch surfaces on a schedule built around your operating hours—including nightly commercial cleaning when daytime disruption is not an option.',
    bullets: [
      'Dusting, vacuuming, and mopping of work areas and common spaces',
      'Kitchen and breakroom cleaning and restocking',
      'Restroom sanitation and supply restocking',
      'Trash and recycling removal',
      'High-touch surface disinfection for doors, switches, and shared equipment',
    ],
    faq: [
      { q: 'Do you provide nightly office cleaning?', a: 'Yes. Most office accounts are cleaned in the evening or early morning so service does not interrupt the workday. Weekly and customized schedules are also available.' },
      { q: 'Do we need to sign a long-term contract?', a: 'No. Recurring service agreements are month-to-month with a 30-day notice.' },
    ],
  },
  {
    slug: 'janitorial-services',
    name: 'Commercial Janitorial Services',
    aliases: ['Janitorial Services', 'Commercial cleaning service', 'Nightly cleaning service'],
    short: 'Recurring commercial cleaning and contract janitorial service for facilities that need consistent, accountable upkeep.',
    description:
      'JSM commercial janitorial programs provide an assigned, background-checked cleaning team on a defined schedule with a written scope, site checklist, supervisor quality inspections, and one accountable local contact. Service can cover nightly cleaning, several visits per week, daytime porter support, or a custom facility schedule.',
    bullets: [
      'Customized cleaning scope and facility checklist',
      'Trained, uniformed, background-checked staff',
      'Supervisor quality inspections and corrective follow-up',
      'Consumables management for paper, soap, and liners',
      'One local point of contact for recurring cleaning needs',
    ],
    faq: [
      { q: 'Are your employees insured?', a: 'Yes. JSM carries general liability and workers’ compensation coverage and can provide certificate-of-insurance documentation on request.' },
      { q: 'Can you match our current janitorial scope?', a: 'Yes. Send JSM the existing scope or RFP and we can price the requested work line by line, with recommended changes shown separately.' },
    ],
  },
  {
    slug: 'floor-care',
    name: 'Floor Stripping & Waxing',
    aliases: ['Commercial floor care', 'Floor stripping and waxing'],
    short: 'Strip, wax, burnish, scrub, and seal commercial hard floors to restore appearance and extend surface life.',
    description:
      'Hard floors absorb daily traffic, salt, grit, spills, and cart movement. JSM strips worn finish, applies new commercial floor finish, and can build a scrub, burnish, and recoat cycle around traffic levels and the flooring installed in your facility.',
    bullets: [
      'Full strip and re-wax of VCT and compatible hard floors',
      'High-speed burnishing programs',
      'Concrete scrubbing and sealing',
      'Grout deep cleaning',
      'Scheduled maintenance cycles to protect floor condition',
    ],
    faq: [
      { q: 'How often should floors be stripped and waxed?', a: 'Many facilities schedule a full strip once or twice per year with scrub-and-recoat or burnishing between projects. The correct frequency depends on traffic, winter salt, matting, and the current finish condition.' },
    ],
  },
  {
    slug: 'carpet-cleaning',
    name: 'Commercial Carpet Cleaning',
    aliases: ['Commercial carpet cleaning'],
    short: 'Hot-water extraction and low-moisture carpet cleaning for traffic lanes, stains, and scheduled facility maintenance.',
    description:
      'Commercial carpet collects soil in entrances, hallways, conference rooms, and high-use areas. JSM uses deep extraction and low-moisture methods based on the carpet, drying window, soil level, and facility schedule.',
    bullets: [
      'Hot-water extraction for deep cleaning',
      'Low-moisture encapsulation for faster drying',
      'Spot and stain treatment',
      'Deodorizing and carpet protectant options',
      'Scheduled maintenance programs',
    ],
    faq: [
      { q: 'How long until we can walk on the carpet?', a: 'Low-moisture cleaning may be ready in about an hour. Hot-water extraction commonly requires several hours, so JSM plans the work around evenings, weekends, or low-occupancy periods.' },
    ],
  },
  {
    slug: 'window-cleaning',
    name: 'Commercial Window Cleaning',
    aliases: ['Window Cleaning', 'Commercial window cleaning'],
    short: 'Interior and exterior commercial window cleaning for storefronts, offices, entries, and low-rise buildings.',
    description:
      'JSM cleans storefront glass, office partitions, entrance doors, and exterior windows up to three stories using water-fed pole systems and traditional detail work. Recurring routes can be coordinated with janitorial or retail cleaning schedules.',
    bullets: [
      'Interior and exterior commercial glass',
      'Storefronts, entrances, and glass doors',
      'Water-fed pole cleaning up to three stories',
      'Frame, track, and sill detailing',
      'Recurring monthly or quarterly schedules',
    ],
    faq: [
      { q: 'Do you clean high-rise windows?', a: 'JSM services buildings up to three stories. Taller properties require a qualified high-rise window provider.' },
    ],
  },
  {
    slug: 'disinfection-services',
    name: 'Commercial Disinfection & Sanitization',
    aliases: ['Commercial disinfection service', 'Sanitization service'],
    short: 'Targeted commercial disinfection for offices, fitness centers, schools, clinics, and shared facilities.',
    description:
      'JSM uses EPA-registered disinfectants according to product labels and required dwell times. Service may be included in recurring cleaning scopes or scheduled for high-touch areas, illness response, and facility-specific sanitation needs.',
    bullets: [
      'High-touch point disinfection',
      'EPA-registered products applied according to label',
      'Facility-specific dwell-time procedures',
      'One-time response or recurring programs',
      'Service documentation when requested',
    ],
    faq: [
      { q: 'Is the disinfectant safe around people?', a: 'Products are applied according to their labels, including dwell time, ventilation, and re-entry instructions. JSM reviews the selected product and access requirements before service.' },
    ],
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    aliases: ['Post-construction cleaning'],
    short: 'Rough, final, and touch-up commercial construction cleaning for new builds, remodels, and tenant improvements.',
    description:
      'JSM coordinates phased post-construction cleaning around the turnover schedule. Scope can include construction dust, labels, surface detailing, interior glass, fixtures, millwork, floors, and final touch-up work before occupancy or owner handoff.',
    bullets: [
      'Rough, final, and touch-up cleaning phases',
      'Construction dust removal from reachable surfaces',
      'Sticker, label, and paint-spot removal where appropriate',
      'Window, fixture, and millwork detailing',
      'Floor scrubbing, finish work, and final presentation cleaning',
    ],
    faq: [
      { q: 'Can you work around a construction turnover deadline?', a: 'Yes. JSM reviews the site schedule, access, remaining trades, and required cleaning phases before confirming staffing and completion expectations.' },
    ],
  },
  {
    slug: 'commercial-move-out-cleaning',
    name: 'Commercial Move-Out & Tenant Turnover Cleaning',
    aliases: ['Move-out cleaning', 'Commercial move-out cleaning', 'Tenant turnover cleaning'],
    short: 'Commercial move-out and make-ready cleaning for offices, retail suites, managed properties, and tenant turnovers.',
    description:
      'JSM provides commercial move-out cleaning for vacant offices, retail spaces, common areas, and managed properties. The written turnover scope is built around lease requirements, property-management expectations, the condition of the space, and the deadline for inspection, listing, construction, or the next tenant.',
    bullets: [
      'Vacant office, retail, and commercial-suite cleaning',
      'Cabinet, breakroom, restroom, and interior-detail cleaning',
      'Floor vacuuming, scrubbing, carpet cleaning, or finish work as scoped',
      'Interior glass, doors, frames, ledges, and reachable fixtures',
      'Move-out, make-ready, and tenant-turnover scheduling',
    ],
    faq: [
      { q: 'Do you provide residential move-out cleaning?', a: 'JSM focuses on commercial properties. The move-out service is intended for offices, retail suites, managed buildings, and other commercial tenant turnovers.' },
      { q: 'Can you follow a landlord or lease turnover checklist?', a: 'Yes. Send the checklist before the walkthrough and JSM can build the proposal around the required items, with floor or specialty work listed separately.' },
      { q: 'Can move-out cleaning be combined with post-construction cleaning?', a: 'Yes. Vacated suites often need both turnover cleaning and cleaning after repairs or tenant improvements. JSM can separate those phases in the written scope.' },
    ],
  },
  {
    slug: 'day-porter-services',
    name: 'Day Porter Services',
    aliases: ['Day porter service', 'Daytime cleaning service'],
    short: 'On-site daytime cleaning staff for lobbies, restrooms, common areas, spills, and visible facility needs.',
    description:
      'High-traffic facilities can lose their clean appearance between nightly visits. A JSM day porter can perform scheduled lobby touch-ups, restroom checks, spill response, conference-room resets, common-area care, and defined tenant or facility requests during business hours.',
    bullets: [
      'Lobby and entrance upkeep throughout the day',
      'Restroom checks and supply restocking',
      'Spill and immediate cleaning response',
      'Conference and common-room resets',
      'Defined tenant and facility cleaning requests',
    ],
    faq: [
      { q: 'Can we schedule a porter for part of the day?', a: 'Yes. Coverage can be scoped for a defined block of time or a full business day based on traffic and facility requirements.' },
    ],
  },
  {
    slug: 'medical-office-cleaning',
    name: 'Medical Office & Clinic Cleaning',
    aliases: ['Clinic cleaning service', 'Medical office cleaning'],
    short: 'Protocol-driven commercial cleaning for clinics, dental offices, and outpatient medical facilities.',
    description:
      'Medical offices require careful product use, documented procedures, proper disinfectant dwell times, and cross-contamination controls. JSM scopes exam rooms, waiting rooms, restrooms, staff areas, offices, and shared surfaces according to the facility’s requirements.',
    bullets: [
      'Exam and procedure-room cleaning as defined in the scope',
      'Hospital-grade disinfectants used according to label dwell times',
      'Color-coded microfiber procedures to limit cross-contamination',
      'Waiting-room and high-touch surface disinfection',
      'Background-checked staff and facility access coordination',
    ],
    faq: [
      { q: 'Do you provide clinic cleaning service?', a: 'Yes. JSM serves medical offices, dental practices, clinics, and outpatient facilities with a written scope based on the rooms, surfaces, schedule, and sanitation requirements.' },
    ],
  },
  {
    slug: 'industrial-warehouse-cleaning',
    name: 'Warehouse & Industrial Cleaning',
    aliases: ['Warehouse cleaning', 'Industrial cleaning'],
    short: 'Commercial warehouse cleaning, floor scrubbing, high dusting, and office-area janitorial service scheduled around operations.',
    description:
      'Warehouses and light-industrial facilities combine large floor areas with offices, breakrooms, restrooms, loading zones, and shift schedules. JSM builds the scope around production access, safety rules, floor condition, equipment needs, and the areas employees and visitors use every day.',
    bullets: [
      'Machine scrubbing of warehouse and commercial floors',
      'High dusting of reachable racks, beams, and fixtures',
      'Degreasing and defined spill-cleanup work',
      'Office, breakroom, and restroom janitorial programs',
      'Scheduling around shifts and facility operations',
    ],
    faq: [
      { q: 'Can you clean around our production schedule?', a: 'Yes. JSM reviews shift changes, access windows, traffic, safety requirements, and restricted areas before building the cleaning schedule.' },
    ],
  },
  {
    slug: 'snow-removal',
    name: 'Commercial Snow Removal & Ice Management',
    aliases: ['Snow Removal', 'Commercial snow removal', 'Commercial de-icing'],
    short: 'Commercial snow plowing, sidewalk clearing, and ice management for Twin Cities properties.',
    description:
      'JSM commercial snow service can include parking-lot plowing, sidewalk and entrance clearing, salting, de-icing, and documented service activity under the trigger depth and response terms written into the agreement.',
    bullets: [
      'Parking-lot plowing with a defined trigger depth',
      'Sidewalk, entrance, and fire-exit clearing',
      'Salting and de-icing for lots and walkways',
      'Documented service activity',
      'Seasonal or per-event pricing where available',
    ],
    faq: [
      { q: 'Do you offer seasonal snow contracts?', a: 'Seasonal and per-event structures may be available based on route capacity, property location, scope, and requested trigger depth.' },
      { q: 'When do crews deploy?', a: 'Deployment follows the trigger depth and service terms written into the property agreement.' },
      { q: 'Do you handle salting and ice management?', a: 'Yes, when included in the property scope. Materials, service triggers, and priority areas are documented in the agreement.' },
      { q: 'When should I request snow pricing?', a: 'Commercial properties should request pricing before winter routes fill so there is enough time for a site review and service planning.' },
    ],
  },
];
