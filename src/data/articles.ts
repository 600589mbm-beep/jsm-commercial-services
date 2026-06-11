export interface ArticleSection {
  h?: string;
  ps: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  updated: string; // ISO date
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'commercial-cleaning-cost-guide',
    title: 'How Much Does Commercial Cleaning Cost in Minnesota? (2026 Guide)',
    description:
      'Real per-square-foot, hourly, and monthly price ranges for commercial cleaning and janitorial service in the Twin Cities — and what makes your quote go up or down.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'The honest answer: it depends on square footage, frequency, and what you need cleaned — which is why any company quoting you a price before seeing your facility is guessing. But "it depends" isn\'t useful when you\'re budgeting, so here are the ranges most Twin Cities businesses actually pay.',
        ],
      },
      {
        h: 'Typical price ranges',
        ps: ['Most commercial cleaning in the Minneapolis–St. Paul metro lands in these bands:'],
        list: [
          'Per square foot: roughly $0.08–$0.25 per visit for routine janitorial, depending on density of restrooms, kitchens, and traffic',
          'Hourly: $35–$60 per cleaner-hour for smaller or irregular jobs',
          'Monthly contracts: small offices (under 5,000 sq ft, 2–3 visits/week) often run $400–$900/month; mid-size facilities $1,000–$3,000/month',
          'Specialty work: floor strip-and-wax typically $0.35–$0.80/sq ft; carpet extraction $0.20–$0.35/sq ft; post-construction cleans quoted per project',
        ],
      },
      {
        h: 'What moves the price up or down',
        ps: ['Two facilities with the same square footage can be quoted very differently. The biggest factors:'],
        list: [
          'Frequency — nightly service costs more in total but less per visit than weekly',
          'Restroom and kitchen count — wet areas take the most labor per square foot',
          'Floor types — carpet vs. VCT vs. polished concrete each have different maintenance cycles',
          'Foot traffic and industry — a medical clinic has stricter protocols than a low-traffic office',
          'Consumables — whether the cleaner stocks paper, soap, and liners or you do',
        ],
      },
      {
        h: 'How to compare quotes fairly',
        ps: [
          'The cheapest bid is usually the one that cut scope. When you compare quotes, compare the written scope of work line by line: how many restroom cleanings per week, whether high-touch disinfection is included, who supplies consumables, and whether inspections are documented. A quote without a written scope isn\'t a quote — it\'s a number.',
          'A good vendor quotes from a walkthrough, puts the full scope in writing, and doesn\'t need a long-term contract to keep your business.',
        ],
      },
    ],
  },
  {
    slug: 'office-cleaning-checklist',
    title: 'The Complete Office Cleaning Checklist (Daily, Weekly, Monthly)',
    description:
      'A printable daily / weekly / monthly / quarterly office cleaning checklist used by professional janitorial crews — what should actually get cleaned and how often.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Whether you\'re auditing your current cleaning company or setting expectations for a new one, this is the checklist professional crews actually work from. If items on the daily list are only happening weekly at your facility, that\'s the conversation to have with your vendor.',
        ],
      },
      {
        h: 'Daily',
        ps: [],
        list: [
          'Empty trash and recycling; replace liners',
          'Clean and disinfect restrooms: toilets, sinks, counters, mirrors, dispensers',
          'Restock paper products, soap, and sanitizer',
          'Wipe and disinfect high-touch points: door handles, light switches, elevator buttons, shared phones',
          'Clean kitchen/breakroom counters, tables, and sink; spot-clean appliance exteriors',
          'Vacuum high-traffic carpet lanes; dust-mop and damp-mop hard floors',
          'Spot-clean entrance glass and lobby surfaces',
        ],
      },
      {
        h: 'Weekly',
        ps: [],
        list: [
          'Full vacuum of all carpeted areas, including edges and under desks',
          'Dust desks, sills, ledges, and horizontal surfaces (around, not on top of, paperwork)',
          'Clean interior glass and partition windows',
          'Disinfect trash bins and replace all liners',
          'Clean microwave and refrigerator exteriors; wipe cabinet fronts',
        ],
      },
      {
        h: 'Monthly',
        ps: [],
        list: [
          'High dusting: vents, ceiling corners, light fixtures, tops of cabinets',
          'Dust blinds and window treatments',
          'Machine-buff or burnish hard floors',
          'Vacuum upholstered furniture; clean under movable furniture',
          'Deep-clean breakroom appliances inside and out (with notice)',
        ],
      },
      {
        h: 'Quarterly / Semi-annual',
        ps: [],
        list: [
          'Carpet extraction or encapsulation cleaning',
          'Strip and re-wax VCT floors (or scrub-and-recoat)',
          'Exterior window cleaning',
          'Wall washing and baseboard detailing',
        ],
      },
      {
        h: 'Holding your vendor to it',
        ps: [
          'The checklist only matters if someone verifies it. Ask your cleaning company two questions: "What\'s your inspection process?" and "Can I see the completed checklists for last month?" Companies that document their work answer instantly. Companies that don\'t, can\'t.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-commercial-cleaning-company',
    title: '10 Questions to Ask Before Hiring a Commercial Cleaning Company',
    description:
      'A practical vetting guide for facility and office managers: the 10 questions that separate professional janitorial companies from the ones that disappear after month two.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'Most commercial cleaning relationships don\'t fail on price — they fail on accountability. The company starts strong, quality drifts, and complaints take a week to fix. These ten questions surface that risk before you sign.',
        ],
      },
      {
        h: 'The 10 questions',
        ps: [],
        list: [
          '1. Are you insured, and can you name my company as additionally insured? (General liability and workers\' comp, in writing.)',
          '2. Are your employees background-checked — and are they employees or subcontractors?',
          '3. Will I have the same crew every visit, or rotating staff?',
          '4. What does your inspection process look like, and is it documented?',
          '5. Can I see the written scope of work before I sign?',
          '6. What happens when a visit misses the mark — is there a re-clean guarantee?',
          '7. How fast do you respond to a service issue, and who do I call?',
          '8. Do you require a long-term contract? (Month-to-month means they have to keep earning it.)',
          '9. Who supplies consumables — paper, soap, liners — and is that in the price?',
          '10. Can you give me two references from facilities like mine?',
        ],
      },
      {
        h: 'Red flags',
        ps: ['Walk away, regardless of price, if you see any of these:'],
        list: [
          'A quote given without ever seeing your facility',
          'No written scope of work — "we clean everything" is not a scope',
          'Multi-year contracts with steep cancellation penalties',
          'Vague or evasive answers about insurance',
          'No named point of contact — just an answering service',
        ],
      },
      {
        h: 'The bottom line',
        ps: [
          'A professional cleaning company will answer all ten questions in one conversation and follow up with the scope and insurance certificate the same week. If getting answers feels like work now, imagine getting a missed clean fixed in month six.',
        ],
      },
    ],
  },
  {
    slug: 'janitorial-vs-commercial-cleaning',
    title: 'Janitorial Services vs. Commercial Cleaning: What\'s the Difference?',
    description:
      'Janitorial service and commercial cleaning aren\'t the same thing. Here\'s the difference, what each covers, and which one your facility actually needs.',
    updated: '2026-06-11',
    sections: [
      {
        ps: [
          'The terms get used interchangeably, but in the industry they mean different things — and knowing the difference helps you buy the right service instead of overpaying for the wrong one.',
        ],
      },
      {
        h: 'Janitorial services: the recurring baseline',
        ps: [
          'Janitorial service is the routine, scheduled work that keeps a facility functioning day to day: trash, restrooms, floors, high-touch disinfection, breakrooms, restocking. It happens nightly, weekly, or somewhere in between, usually under an ongoing service agreement with a fixed scope and a consistent crew.',
        ],
      },
      {
        h: 'Commercial cleaning: the specialty and project work',
        ps: [
          'Commercial cleaning, used precisely, covers the bigger, less frequent jobs: floor stripping and waxing, carpet extraction, window cleaning, post-construction cleanup, deep disinfection. These are project-based or quarterly services that need different equipment and training than nightly janitorial.',
        ],
      },
      {
        h: 'Which one do you need?',
        ps: ['Most facilities need both — and they\'re cheapest bought together:'],
        list: [
          'Office or clinic open 5+ days a week → recurring janitorial, plus quarterly floor and carpet care',
          'Just finished a build-out or remodel → post-construction commercial cleaning, then a janitorial program',
          'Floors look dull but the building is otherwise maintained → one-time strip-and-wax or carpet extraction',
          'No cleaning vendor at all → start with a janitorial scope and add specialty services on a calendar',
        ],
      },
      {
        h: 'Why buying both from one vendor wins',
        ps: [
          'When the same company handles your nightly janitorial and your quarterly floor work, the schedules coordinate themselves, one inspection process covers everything, and there\'s exactly one phone number when something\'s wrong. Split vendors mean split accountability.',
        ],
      },
    ],
  },
];
