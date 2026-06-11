// Facility-type ("industries we serve") pages. These target searches like
// "gym cleaning services minneapolis" that the generic service pages miss.
// Medical offices and warehouses already have full service pages —
// the industries hub cross-links to those instead of duplicating them.

export const INDUSTRY_ICONS: Record<string, string> = {
  'gym-fitness-cleaning': '🏋️',
  'church-cleaning': '⛪',
  'school-daycare-cleaning': '🎒',
  'restaurant-cleaning': '🍽️',
  'car-dealership-cleaning': '🚗',
  'bank-credit-union-cleaning': '🏦',
  'property-management-cleaning': '🏘️',
  'retail-store-cleaning': '🛍️',
};

export interface Industry {
  slug: string;
  name: string;
  /** Facility noun used in sentences, lowercase ("gym or fitness studio") */
  noun: string;
  short: string;
  description: string;
  /** Why this facility type is different — the problems we solve */
  painPoints: string[];
  /** What a typical scope includes */
  included: string[];
  faq: { q: string; a: string }[];
  /** Related service slugs (must exist in services.ts) */
  relatedServices: string[];
  /** Optional cost guide slug under /resources/ */
  costGuide?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'gym-fitness-cleaning',
    name: 'Gym & Fitness Studio Cleaning',
    noun: 'gym or fitness studio',
    short:
      'Sweat, shared equipment, and locker rooms make gyms the highest-touch facilities we clean. Members notice — and post about — the difference.',
    description:
      'Cleanliness is a top reason members quit a gym, and equipment, mats, and locker rooms are where they judge it. We clean and disinfect touch surfaces with gym-safe products that won’t degrade upholstery or rubber flooring, on schedules that work around your open hours — including early-morning and split shifts for 24-hour facilities.',
    painPoints: [
      'Sweat and skin contact on every machine, bench, and mat — the conditions ringworm, staph, and athlete’s foot spread in',
      'Locker rooms and showers that need daily disinfection, not a weekly once-over',
      'Rubber flooring and turf that’s damaged by the wrong chemicals or equipment',
      'Members working out at 5am and 10pm, leaving narrow cleaning windows',
    ],
    included: [
      'Equipment wipe-down and disinfection (cardio consoles, free weights, benches, mats)',
      'Locker room, shower, and sauna-area sanitation with daily restocking',
      'Rubber, turf, and studio floor care with surface-appropriate products',
      'Mirror and glass cleaning throughout',
      'Trash, towel-bin, and front-desk area upkeep',
      'High-dwell disinfection of door handles, cubbies, and water stations',
    ],
    faq: [
      {
        q: 'Can you clean around our open hours?',
        a: 'Yes. Most gym clients are cleaned overnight or in the early morning before peak hours. For 24-hour facilities we schedule during your slowest verified window and work zone-by-zone so equipment is never all out of service at once.',
      },
      {
        q: 'What do you use on equipment upholstery and rubber floors?',
        a: 'Surface-appropriate disinfectants — we avoid harsh quat or bleach concentrations that crack vinyl upholstery and break down rubber flooring. Product list available on request for your equipment warranty records.',
      },
      {
        q: 'Do you handle daily disinfection or just weekly deep cleans?',
        a: 'Both. Most gyms need a daily or near-daily disinfection pass on touch surfaces plus a weekly deeper clean of floors, vents, and locker areas. We quote each as a line item so you can scale the schedule to your traffic.',
      },
    ],
    relatedServices: ['disinfection-services', 'janitorial-services', 'floor-care'],
  },
  {
    slug: 'church-cleaning',
    name: 'Church & Worship Facility Cleaning',
    noun: 'church or worship facility',
    short:
      'Sanctuaries, fellowship halls, classrooms, and kitchens — cleaned around your service schedule, ready before every gathering.',
    description:
      'Churches are weekend-peak facilities: empty most of the week, then hundreds of people through the doors in a few hours. We schedule the main clean after your last weekday activity and before weekend services, with sanctuary, fellowship hall, nursery, and restroom care matched to your actual calendar — including holidays, weddings, and funerals on short notice.',
    painPoints: [
      'Peak usage compressed into weekends, with the building needing to be perfect by Sunday morning',
      'Nurseries and children’s areas that parents inspect closely',
      'Fellowship-hall kitchens and event messes that vary week to week',
      'Volunteer cleaning crews that are hard to staff consistently',
    ],
    included: [
      'Sanctuary and seating-area dusting, vacuuming, and floor care',
      'Restroom sanitation sized for weekend peak traffic',
      'Nursery and children’s-area cleaning and toy-surface disinfection',
      'Fellowship hall and kitchen cleaning, including post-event resets',
      'Entry, lobby, and glass cleaning so first impressions hold',
      'Seasonal floor work (carpet extraction, hard-floor refinishing) between busy seasons',
    ],
    faq: [
      {
        q: 'Can you clean between a Saturday event and Sunday service?',
        a: 'Yes — overnight Saturday turns are common for us. Tell us your event calendar and we’ll build the standing schedule around it, with one-off event resets quoted as needed.',
      },
      {
        q: 'We currently use volunteers. Where does a service fit?',
        a: 'Many congregations keep volunteers for tidying and have us handle restrooms, floors, and disinfection — the work that needs equipment, products, and consistency. We’ll scope around whatever your volunteers reliably cover.',
      },
      {
        q: 'Are your staff background-checked? Our building has a daycare.',
        a: 'Yes, every JSM cleaner is background-checked before they enter any client building, and we can provide documentation for your child-safety policy requirements.',
      },
    ],
    relatedServices: ['janitorial-services', 'floor-care', 'carpet-cleaning'],
  },
  {
    slug: 'school-daycare-cleaning',
    name: 'School & Daycare Cleaning',
    noun: 'school or daycare',
    short:
      'Licensing-ready cleaning for classrooms, daycares, and learning centers — background-checked staff, child-safe products, documented checklists.',
    description:
      'Schools and daycares answer to parents and licensors at the same time. We clean with child-safe, low-odor products, document the work against a written checklist you can show an inspector, and staff every account with background-checked cleaners. Daily disinfection targets what actually spreads illness in classrooms: desks, cubbies, shared toys, sinks, and restroom fixtures.',
    painPoints: [
      'Licensing inspections that look at sanitation documentation, not just appearances',
      'Illness outbreaks (flu, norovirus, hand-foot-mouth) that close classrooms and anger parents',
      'Strong-smelling chemicals that can’t be used around kids',
      'Tight after-hours windows between dismissal and morning drop-off',
    ],
    included: [
      'Daily classroom cleaning: desks, tables, chairs, cubbies, and floors',
      'Restroom and diaper-area sanitation with supply restocking',
      'Toy and shared-surface disinfection with child-safe products',
      'Cafeteria and kitchen-area cleaning',
      'Entry and hallway care through snow and mud season',
      'Documented checklist per visit for your licensing records',
    ],
    faq: [
      {
        q: 'Are your products safe to use around children?',
        a: 'We use child-safe, low-odor disinfectants applied after hours with proper dwell and ventilation time, so surfaces are dry and safe by morning drop-off. SDS sheets are provided for your licensing binder.',
      },
      {
        q: 'Can you help during an illness outbreak?',
        a: 'Yes — we offer enhanced disinfection service for outbreak response, focusing on high-touch surfaces with EPA List N disinfectants at full dwell time. Existing clients get priority scheduling.',
      },
      {
        q: 'Will the same cleaners come every time?',
        a: 'We assign a consistent crew to every school and daycare account. Any substitute has passed the same background check, and we notify you of staffing changes.',
      },
    ],
    relatedServices: ['janitorial-services', 'disinfection-services', 'carpet-cleaning'],
    costGuide: 'school-daycare-cleaning-cost',
  },
  {
    slug: 'restaurant-cleaning',
    name: 'Restaurant & Food Service Cleaning',
    noun: 'restaurant or food-service facility',
    short:
      'Front-of-house, restrooms, and floor care that protect your health-inspection score and your reviews — scheduled after close.',
    description:
      'Your kitchen staff handles the line; we handle everything customers and health inspectors see. Overnight cleaning after close covers dining rooms, restrooms, entry glass, and the grease-prone floors that make restaurants the hardest floor-care accounts in commercial cleaning. Degreasing matters: grease tracked from the kitchen is the slip hazard and the inspection ding.',
    painPoints: [
      'Health-inspection scores published where every customer can see them',
      'Grease migration from kitchen to dining floors — slip hazards and dull finishes',
      'Restrooms that drive one-star reviews faster than food does',
      'No cleaning window except after close, often past midnight',
    ],
    included: [
      'Dining room cleaning: tables, chairs, booths, floors, and touch points',
      'Restroom deep cleaning and restocking, sized for nightly turnover',
      'Hard-floor degreasing and machine scrubbing on a set rotation',
      'Entry, lobby, and glass cleaning',
      'Bar-area front-of-house cleaning (surfaces, floors, glass)',
      'Hood, kitchen-line, and equipment cleaning quoted separately on request',
    ],
    faq: [
      {
        q: 'Do you clean kitchens and hoods?',
        a: 'Our standard restaurant scope is front-of-house, restrooms, and floors. Kitchen-line and hood cleaning are specialty work we quote separately — tell us what you need and we’ll scope it or refer a certified hood vendor.',
      },
      {
        q: 'Can you clean after midnight when we close?',
        a: 'Yes. Most restaurant accounts are cleaned between close and 6am. Late-close bars and restaurants are routine for our overnight crews.',
      },
      {
        q: 'How do you handle greasy dining-room floors?',
        a: 'Scheduled machine scrubbing with a degreasing agent, not just nightly mopping — mopping alone spreads grease film and leaves floors slick. We set the scrub rotation to your traffic and kitchen layout.',
      },
    ],
    relatedServices: ['floor-care', 'janitorial-services', 'window-cleaning'],
    costGuide: 'restaurant-cleaning-cost',
  },
  {
    slug: 'car-dealership-cleaning',
    name: 'Car Dealership & Showroom Cleaning',
    noun: 'dealership or showroom',
    short:
      'Showroom glass and floors clean enough to sell off of, plus service-area and customer-lounge care that match the price tags on the floor.',
    description:
      'A showroom is a sales floor where the product costs $40,000 — smudged glass and dull floors directly undercut the pitch. We keep showroom glass spotless, polish high-gloss floors, and maintain the customer lounge, restrooms, and sales offices to the same standard. Service-department waiting areas and writing desks get cleaned for the customers who judge your service department by its coffee station.',
    painPoints: [
      'Floor-to-ceiling showroom glass that shows every fingerprint in sunlight',
      'High-gloss floors that demand real floor care, not a dust mop',
      'Customer lounges where people sit for an hour judging your dealership',
      'Showrooms open late and weekends, compressing cleaning windows',
    ],
    included: [
      'Showroom floor care: dust mop, auto-scrub, and burnish rotation for high-gloss finishes',
      'Interior showroom and entry glass cleaning',
      'Customer lounge and coffee-station upkeep',
      'Restroom sanitation and restocking',
      'Sales office and writing-desk cleaning',
      'Service-area customer zones (waiting room, write-up desks, vending)',
    ],
    faq: [
      {
        q: 'Can you keep showroom glass clean with the doors moving all day?',
        a: 'We clean all interior and entry glass in the overnight scope, and day-porter touch-up service is available for high-traffic stores that want glass and floors maintained during open hours.',
      },
      {
        q: 'Do you clean the shop floor in the service department?',
        a: 'We cover customer-facing service areas (lounge, write-up, restrooms) in the standard scope. Shop-bay floor scrubbing is industrial work we can add — see our industrial and warehouse cleaning service.',
      },
    ],
    relatedServices: ['floor-care', 'window-cleaning', 'day-porter-services'],
  },
  {
    slug: 'bank-credit-union-cleaning',
    name: 'Bank & Credit Union Cleaning',
    noun: 'bank or credit union branch',
    short:
      'Security-conscious cleaning for branches: background-checked crews, consistent staffing, and access protocols your operations team can sign off on.',
    description:
      'Branch cleaning is a security decision before it’s a cleaning decision. Every JSM cleaner is background-checked, accounts are staffed with a consistent named crew, and we follow your access procedures — alarm codes, escort requirements, camera-area protocols, restricted zones. The cleaning itself covers lobbies, teller lines, offices, and restrooms to the standard your customers expect from the people holding their money.',
    painPoints: [
      'Vendor access to a facility full of cash, PII, and alarm systems',
      'Compliance teams that require documented vendor credentials and insurance',
      'Lobbies that signal institutional competence — or its absence',
      'Multi-branch consistency when each location cleans differently',
    ],
    included: [
      'Lobby, teller-line, and waiting-area cleaning',
      'Office and conference-room cleaning (desks cleared per your clean-desk policy)',
      'Restroom and breakroom sanitation',
      'Entry glass, ATM-vestibule, and drive-up area cleaning',
      'Floor care for lobby hard floors and carpeted areas',
      'Consistent crew assignment with documented background checks and COI',
    ],
    faq: [
      {
        q: 'How do you handle alarm codes and restricted areas?',
        a: 'We follow your written access protocol — alarm procedures, escort requirements, and no-entry zones (vaults, server rooms, behind the teller line if restricted). Crews are trained on the protocol per branch before first service.',
      },
      {
        q: 'Can you provide certificates of insurance and name us additionally insured?',
        a: 'Yes — general liability and workers’ comp COIs are standard paperwork for our financial clients, with your institution named as additionally insured on request.',
      },
      {
        q: 'Can you service multiple branches under one agreement?',
        a: 'Yes. Multi-branch accounts get one agreement, one invoice, one point of contact, and the same documented scope at every location.',
      },
    ],
    relatedServices: ['janitorial-services', 'office-cleaning', 'day-porter-services'],
  },
  {
    slug: 'property-management-cleaning',
    name: 'Property Management & Common Area Cleaning',
    noun: 'managed property',
    short:
      'Common-area cleaning for office buildings, condos, and multi-tenant properties — one vendor, one invoice, documented service your tenants stop complaining about.',
    description:
      'Property managers don’t buy cleaning, they buy fewer tenant complaints. We maintain lobbies, corridors, elevators, stairwells, shared restrooms, and amenity spaces across your portfolio with documented per-visit checklists, so when a tenant emails about the lobby you have a service record to answer with. One agreement and one invoice can cover multiple buildings.',
    painPoints: [
      'Tenant complaints landing in your inbox every time the lobby slips',
      'Juggling separate cleaning vendors across a portfolio',
      'Turnover cleans needed on tight deadlines between tenants',
      'Winter: salt, slush, and mats that define your lobby for five months',
    ],
    included: [
      'Lobby, corridor, and elevator cleaning on a fixed schedule',
      'Stairwell sweeping and detail rotation',
      'Shared restroom and amenity-space sanitation',
      'Entry matting and winter salt-residue floor care',
      'Trash-room and loading-area upkeep',
      'Tenant turnover and make-ready cleans quoted per unit',
    ],
    faq: [
      {
        q: 'Can you cover multiple buildings under one contract?',
        a: 'Yes — that’s the typical arrangement. One agreement, one consolidated invoice, per-building scopes and schedules, and one account contact for your whole portfolio.',
      },
      {
        q: 'How fast can you turn a vacant unit or suite?',
        a: 'Standard turnover cleans are scheduled within a few business days; tell us your lease-start deadline and we’ll work to it. Portfolio clients get priority slots.',
      },
      {
        q: 'Do you handle winter salt and slush in lobbies?',
        a: 'Yes — Minnesota winters are half the job. We increase hard-floor care frequency in winter to strip salt residue before it etches the finish, and day-porter service is available for buildings that need daytime mat and lobby upkeep.',
      },
    ],
    relatedServices: ['janitorial-services', 'day-porter-services', 'floor-care'],
  },
  {
    slug: 'retail-store-cleaning',
    name: 'Retail Store Cleaning',
    noun: 'retail store',
    short:
      'Sales-floor, fitting-room, and entry cleaning that protects the shopping experience — done before you open, every day you’re open.',
    description:
      'Customers decide in seconds whether a store feels cared for, and floors and entry glass carry most of that judgment. We clean sales floors, fitting rooms, checkout zones, and restrooms before opening, with floor-care rotations matched to your traffic and Minnesota’s salt season. Scope flexes for holiday-season traffic and resets after promotions or remodels.',
    painPoints: [
      'First impressions formed at the entrance — glass, mats, and the first ten feet of floor',
      'Fitting rooms and restrooms that quietly kill repeat visits',
      'Holiday traffic doubling the mess while the cleaning schedule stays flat',
      'Salt and slush season destroying floor finish at the entry',
    ],
    included: [
      'Sales-floor dusting, vacuuming, and hard-floor care before opening',
      'Entry and storefront glass cleaning',
      'Fitting-room cleaning and reset',
      'Checkout-zone and customer-service counter cleaning',
      'Restroom sanitation and restocking',
      'Stockroom and breakroom upkeep, post-remodel and seasonal deep cleans',
    ],
    faq: [
      {
        q: 'Can you finish before we open at 9 or 10am?',
        a: 'Yes — retail accounts are cleaned overnight or in the early morning and done before your team arrives to open. We confirm the schedule against your store hours.',
      },
      {
        q: 'Can you increase service for the holiday season?',
        a: 'Yes. Seasonal frequency bumps are a line-item change, not a contract renegotiation — most retail clients add visits from Black Friday through January.',
      },
    ],
    relatedServices: ['janitorial-services', 'floor-care', 'window-cleaning'],
  },
];
