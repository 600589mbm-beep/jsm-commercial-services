// Cost pillar + cluster guides. PILLAR_SLUG is the hub; every cluster guide
// links back to it and it links to all of them (bidirectional).
// HONESTY RULE: all dollar figures are industry-typical Twin Cities market
// ranges, framed as such — never JSM quoted prices. The one verified market
// stat: IBISWorld, "Janitorial Services in the US" (Feb 2026): US market
// $112.0B across ~1M businesses. No other market stats may be cited.
import type { ArticleSection } from './articles';

export interface CostGuide {
  slug: string;
  title: string;
  description: string;
  updated: string;
  /** short label used in cluster link lists */
  label: string;
  sections: ArticleSection[];
  /** contextual internal links rendered after the body: [text, path] */
  related: [string, string][];
}

export const PILLAR_SLUG = 'commercial-cleaning-cost-minneapolis';

export const COST_GUIDES: CostGuide[] = [
  {
    slug: PILLAR_SLUG,
    label: 'Commercial cleaning cost (pillar guide)',
    title: 'Commercial Cleaning Cost in Minneapolis–St. Paul: 2026 Price Guide',
    description:
      'What commercial cleaning costs in the Twin Cities: per-square-foot ranges, monthly contract math by frequency, and what moves a quote up or down.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Routine commercial cleaning in the Minneapolis–St. Paul market typically runs $0.08–$0.25 per square foot per visit. For a 10,000 sq ft office cleaned three nights a week, that works out to roughly $1,000–$3,000 per month; a small office under 5,000 sq ft on twice-weekly service usually lands between $400 and $900 per month. Hourly work runs $35–$60 per cleaner-hour.',
          'Those are market ranges for the metro, not any one company\'s rate card — every legitimate quote is built from a walkthrough of your specific facility. Here\'s how the math works so you can sanity-check any bid you receive.',
        ],
      },
      {
        h: 'The frequency math',
        ps: [
          'Per-visit pricing falls as frequency rises, because a building cleaned nightly never gets far from clean. Typical metro patterns:',
        ],
        list: [
          '1×/week: highest per-visit rate — each visit is heavier work',
          '2–3×/week: the sweet spot for most offices; per-visit cost drops 15–30% vs. weekly',
          '5×/week (nightly): lowest per-visit rate, highest monthly total; standard for medical, food service, and high-traffic buildings',
          'Day porter add-on: typically billed hourly on top of the base janitorial contract',
        ],
      },
      {
        h: 'What moves the price',
        ps: ['Two same-size buildings can be quoted very differently. The drivers:'],
        list: [
          'Restroom and kitchen density — wet areas take the most labor per square foot',
          'Floor mix — carpet vs. VCT vs. polished concrete each carry different maintenance cycles',
          'Industry requirements — medical protocols, food-safety standards, or security clearances add cost',
          'Consumables — whether the vendor stocks paper, soap, and liners',
          'Specialty cycles — strip-and-wax ($0.35–$0.80/sq ft) and carpet extraction ($0.20–$0.35/sq ft) are usually quoted separately',
        ],
      },
      {
        h: 'How big this industry is (and why quotes vary so much)',
        ps: [
          'Janitorial services in the US is a $112.0 billion market spread across roughly one million businesses (IBISWorld, "Janitorial Services in the US," February 2026). That fragmentation is why quotes for the same building can vary 2–3×: you\'re comparing everything from solo operators to national franchises, each with different overhead, insurance, and quality systems. The written scope of work — not the bottom-line number — is the only fair basis for comparison.',
        ],
      },
      {
        h: 'Getting a real number',
        ps: [
          'Ranges budget; walkthroughs price. A legitimate vendor tours your facility, counts the restrooms, looks at the floors, and gives you a written scope with a fixed monthly price. If you\'re in the Twin Cities, JSM does that walkthrough free with pricing within 24 hours — and our cost calculator below gives you a starting estimate in 30 seconds.',
        ],
      },
    ],
    related: [
      ['Try the free cleaning cost calculator', '/resources/cleaning-cost-calculator'],
      ['Office cleaning services', '/services/office-cleaning'],
      ['Janitorial services', '/services/janitorial-services'],
      ['Commercial cleaning in Minneapolis', '/locations/minneapolis'],
      ['Commercial cleaning in St. Paul', '/locations/st-paul'],
    ],
  },
  {
    slug: 'medical-office-cleaning-cost',
    label: 'Medical office cleaning cost',
    title: 'Medical Office Cleaning Cost & Frequency Guide (Minnesota, 2026)',
    description:
      'What clinics and dental offices pay for cleaning in the Twin Cities, why medical runs above standard office rates, and the right cleaning frequency by room type.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Medical office cleaning in the Twin Cities typically prices 20–50% above standard office cleaning — commonly $0.12–$0.30+ per square foot per visit — because protocols, products, and training requirements are stricter. Most clinics need nightly service for patient areas regardless of size.',
          'The premium isn\'t padding: it pays for EPA hospital-grade disinfectants with proper dwell times, color-coded microfiber to prevent cross-contamination, bloodborne-pathogen-trained staff, and terminal cleaning procedures in exam and procedure rooms.',
        ],
      },
      {
        h: 'Frequency by area',
        ps: [],
        list: [
          'Exam/procedure rooms: disinfected daily, terminal-cleaned per your protocol schedule',
          'Waiting rooms and reception: daily minimum — highest pathogen traffic in the building',
          'Restrooms: daily, often mid-day porter checks in busy clinics',
          'Admin/office areas: 2–3×/week is usually sufficient',
        ],
      },
      {
        h: 'What to require from any medical cleaning vendor',
        ps: [],
        list: [
          'EPA List N / hospital-grade disinfectants with documented dwell times',
          'OSHA bloodborne pathogen training certificates for every cleaner on your account',
          'Color-coded cloth/mop systems separating restrooms, clinical, and office zones',
          'Documented checklists you can produce for compliance audits',
        ],
      },
    ],
    related: [
      ['Medical office cleaning services', '/services/medical-office-cleaning'],
      ['Disinfection & sanitization', '/services/disinfection-services'],
      ['Commercial cleaning in Edina', '/locations/edina'],
      ['Commercial cleaning in Woodbury', '/locations/woodbury'],
    ],
  },
  {
    slug: 'warehouse-cleaning-cost',
    label: 'Warehouse & industrial cleaning cost',
    title: 'Warehouse & Industrial Cleaning Cost Guide (Twin Cities, 2026)',
    description:
      'Per-square-foot and per-project ranges for warehouse floor scrubbing, high dusting, and recurring industrial cleaning programs in the Minneapolis–St. Paul metro.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Warehouse cleaning prices differently than office work: the per-square-foot rate is much lower — often $0.03–$0.10 per square foot for machine-scrubbed open floor — but the square footage is much larger, and specialty work like high dusting is quoted per project. A recurring program for a 100,000 sq ft facility commonly lands in the $1,500–$4,000/month band depending on scope.',
        ],
      },
      {
        h: 'Typical line items',
        ps: [],
        list: [
          'Ride-on auto-scrubbing of open warehouse floor: $0.03–$0.10/sq ft per pass',
          'High dusting of racking, beams, and fixtures: project-quoted, driven by lift access and height',
          'Office/breakroom/restroom areas inside the facility: priced like standard janitorial ($0.08–$0.25/sq ft)',
          'Degreasing and spill response: hourly or per-incident',
        ],
      },
      {
        h: 'What drives industrial quotes',
        ps: [],
        list: [
          'Floor condition and coating — sealed concrete scrubs fast; worn or oily floor doesn\'t',
          'Obstruction density — open floor is cheap, dense racking aisles are not',
          'Shift schedule — cleaning around 24/7 operations costs more than empty-building access',
          'Safety requirements — site-specific training and PPE time is billable time',
        ],
      },
    ],
    related: [
      ['Industrial & warehouse cleaning services', '/services/industrial-warehouse-cleaning'],
      ['Floor stripping & waxing', '/services/floor-care'],
      ['Commercial cleaning in Shakopee', '/locations/shakopee'],
      ['Commercial cleaning in Brooklyn Park', '/locations/brooklyn-park'],
    ],
  },
  {
    slug: 'post-construction-cleaning-cost',
    label: 'Post-construction cleaning cost',
    title: 'Post-Construction Cleaning Cost Guide (Minnesota, 2026)',
    description:
      'What contractors and owners pay for rough, final, and touch-up construction cleans in the Twin Cities, priced per square foot by phase.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Post-construction cleaning in the Twin Cities market typically runs $0.15–$0.60 per square foot for a full final clean, with the spread driven by debris level, glass area, and detail expectations. Phased projects usually price rough + final + touch-up separately, totaling toward the upper half of that range.',
        ],
      },
      {
        h: 'The three phases',
        ps: [],
        list: [
          'Rough clean (after framing/drywall, before finishes): debris removal, sweep-down, sticker scrape — the cheapest phase',
          'Final clean (before walkthrough): every surface, fixture, and glass pane detailed — the bulk of the budget',
          'Touch-up clean (after punch-list trades): re-detailing high-visibility surfaces — often hourly',
        ],
      },
      {
        h: 'What moves the number',
        ps: [],
        list: [
          'Glass: window and partition detailing is the most labor-dense line item',
          'Floor protection removal and first-pass floor finishing',
          'Construction dust load — drywall-heavy remodels take more passes',
          'Schedule compression — overnight or weekend turnarounds to hit a CO date carry premiums',
        ],
      },
    ],
    related: [
      ['Post-construction cleaning services', '/services/post-construction-cleaning'],
      ['Window cleaning', '/services/window-cleaning'],
      ['Commercial cleaning in Minneapolis', '/locations/minneapolis'],
      ['Commercial cleaning in Maple Grove', '/locations/maple-grove'],
    ],
  },
  {
    slug: 'school-daycare-cleaning-cost',
    label: 'School & daycare cleaning cost',
    title: 'School & Daycare Cleaning Cost & Frequency Guide (Minnesota, 2026)',
    description:
      'Cleaning cost ranges and the right frequencies for schools, preschools, and daycare centers in the Twin Cities — where disinfection cadence matters more than shine.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Schools and daycares in the Twin Cities typically see cleaning quotes of $0.10–$0.25 per square foot per visit, with daily service effectively mandatory during the school year. The cost driver isn\'t square footage so much as disinfection cadence: high-touch and child-contact surfaces need daily attention, and illness-outbreak response needs to be in the contract before you need it.',
        ],
      },
      {
        h: 'Frequency that actually matters',
        ps: [],
        list: [
          'Daily: restrooms, drinking fountains, door hardware, desks/tables, toy and play surfaces (daycare), cafeteria',
          'Weekly: full floor care, dusting, interior glass',
          'Monthly/seasonal: high dusting, carpet extraction in classrooms, gym floor programs',
          'On-demand: electrostatic disinfection during illness outbreaks — pre-price this',
        ],
      },
      {
        h: 'Daycare-specific requirements',
        ps: [],
        list: [
          'Product safety: disinfectants must be appropriate for child-contact surfaces with proper rinse/dwell procedures',
          'Background checks: verify every cleaner on the account, in writing',
          'Schedule discipline: cleaning must finish before opening — late crews are a licensing risk',
        ],
      },
    ],
    related: [
      ['Disinfection & sanitization services', '/services/disinfection-services'],
      ['Janitorial services', '/services/janitorial-services'],
      ['Commercial cleaning in Apple Valley', '/locations/apple-valley'],
      ['Commercial cleaning in Lakeville', '/locations/lakeville'],
    ],
  },
  {
    slug: 'restaurant-cleaning-cost',
    label: 'Restaurant cleaning cost',
    title: 'Restaurant Cleaning Cost & Frequency Guide (Twin Cities, 2026)',
    description:
      'What restaurants pay for commercial cleaning in the Minneapolis–St. Paul market: front-of-house janitorial, floor care, and how kitchen scope changes the quote.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Restaurant cleaning in the Twin Cities typically prices at $0.12–$0.30+ per square foot per visit for front-of-house and restroom service — above standard office rates because grease, food soil, and nightly schedules make every visit heavier. Most full-service restaurants need 5–7 nights a week; the quote swings most on whether back-of-house floor care is in scope.',
        ],
      },
      {
        h: 'Typical scope split',
        ps: [],
        list: [
          'Front of house (nightly): dining floors, tables/booths detail-wiped, entrance glass, restrooms sanitized and restocked',
          'Back of house floors (nightly): degreasing and machine-scrubbing kitchen floors — priced separately from FOH',
          'Periodic: carpet extraction in dining areas, tile/grout deep cleans, high dusting of vents and fixtures',
          'Usually excluded: hood/exhaust cleaning (a licensed fire-code specialty) and equipment interiors',
        ],
      },
      {
        h: 'What drives restaurant quotes',
        ps: [],
        list: [
          'Service window — most restaurant cleaning happens midnight–6am, and tight windows cost more',
          'Floor types — quarry tile with grease vs. polished concrete vs. dining carpet',
          'Bar service — bars add glass, sticky-floor, and restroom load',
          'Health-inspection posture — documented checklists matter when the inspector asks',
        ],
      },
    ],
    related: [
      ['Janitorial services', '/services/janitorial-services'],
      ['Floor stripping & waxing', '/services/floor-care'],
      ['Carpet cleaning', '/services/carpet-cleaning'],
      ['Commercial cleaning in St. Louis Park', '/locations/st-louis-park'],
    ],
  },
];
