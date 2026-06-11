export interface Location {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  /**
   * Top-opportunity cities only: verifiable public local context (business
   * districts, building stock) + city-specific FAQs. NO invented service
   * history or client claims — facts about the city, not about JSM.
   */
  local?: {
    context: string;
    faqs: { q: string; a: string }[];
  };
}

export const CITY_LOCAL: Record<string, NonNullable<Location['local']>> = {
  minneapolis: {
    context:
      'Minneapolis commercial space splits into distinct cleaning profiles: downtown towers connected by the skyway system (where after-hours access runs through building security and loading docks), converted brick-and-timber warehouse offices in the North Loop, medical and lab space near the riverfront hospitals, and industrial corridors in Northeast. Each building type carries different floor stock — polished concrete and exposed brick in the North Loop take different care than tower-grade carpet and terrazzo.',
    faqs: [
      { q: 'Can you work in downtown Minneapolis towers with building security?', a: 'Yes. We coordinate with property management for badge access, loading-dock scheduling, and certificate-of-insurance requirements — standard practice for downtown buildings, handled before the first visit.' },
      { q: 'Do you clean North Loop offices with exposed brick and polished concrete?', a: 'Yes — those finishes need different products and equipment than standard office carpet and VCT, and our floor program is matched to the surface, not a one-size checklist.' },
    ],
  },
  'st-paul': {
    context:
      'St. Paul\'s commercial stock runs from downtown and Lowertown\'s historic brick-and-timber buildings to the state government complex around the Capitol and the medical corridor along West 7th near the hospitals. Older buildings mean older floor stock — original hardwood, terrazzo, and tile that reward a vendor who adjusts products and pads instead of running the same routine everywhere.',
    faqs: [
      { q: 'Do you handle older Lowertown buildings with original floors?', a: 'Yes. Historic hardwood, terrazzo, and tile each get surface-appropriate products and equipment — aggressive one-size floor programs are how old floors get ruined.' },
      { q: 'Can you meet government-building access requirements?', a: 'Yes — background-checked, badged staff and certificate-of-insurance paperwork are already part of how we operate.' },
    ],
  },
  bloomington: {
    context:
      'Bloomington\'s commercial base concentrates along the I-494 corridor: corporate offices around Normandale Lakes, hospitality and retail density near the Mall of America, and medical offices throughout. High-traffic retail and hotel-adjacent space carries heavier daily soil loads than standard office stock, which changes the right cleaning frequency.',
    faqs: [
      { q: 'Do you serve offices in the Normandale Lakes area?', a: 'Yes — the I-494 corridor including Normandale Lakes is core service area for us, with nightly and multi-week schedules both available.' },
      { q: 'Can you handle high-traffic retail near the Mall of America area?', a: 'Yes. High-traffic retail needs tighter restroom cycles and entrance care than office space; we scope it that way from the walkthrough.' },
    ],
  },
  edina: {
    context:
      'Edina\'s commercial mix is anchored by the Southdale district (home of America\'s first enclosed shopping mall), the 50th & France retail node, and the Centennial Lakes office park — plus one of the metro\'s denser medical-office concentrations around Fairview Southdale. Medical suites and Class A office set a higher finish standard than typical suburban stock.',
    faqs: [
      { q: 'Do you clean medical suites near Fairview Southdale?', a: 'Yes — medical office cleaning with hospital-grade disinfectants, dwell-time discipline, and cross-contamination controls is one of our core services.' },
      { q: 'Can you match Class A office expectations at 50th & France or Centennial Lakes?', a: 'Yes. Class A space is detail-inspected work — documented checklists and supervisor walk-throughs are how we keep it at standard.' },
    ],
  },
  eagan: {
    context:
      'Eagan hosts some of the south metro\'s largest corporate campuses — Thomson Reuters and Blue Cross Blue Shield of Minnesota are both headquartered here — alongside extensive flex and light-industrial space off I-35E and Highway 55. Campus-scale buildings and flex space price and schedule differently than small suburban offices.',
    faqs: [
      { q: 'Can you handle campus-scale or multi-building accounts in Eagan?', a: 'Yes — multi-building scopes get per-building checklists under one account manager and one monthly invoice.' },
      { q: 'Do you clean flex/industrial space along I-35E and Highway 55?', a: 'Yes. Flex space usually means office-grade care up front and warehouse-grade floor work in back; we scope both sides in one walkthrough.' },
    ],
  },
  'eden-prairie': {
    context:
      'Eden Prairie\'s commercial core is the Golden Triangle — one of the southwest metro\'s largest office and light-industrial districts, bounded roughly by Highways 169, 212, and I-494 — plus corporate campuses including Optum\'s headquarters. Tech and corporate tenants here typically want evening service with documented QA.',
    faqs: [
      { q: 'Do you serve the Golden Triangle district?', a: 'Yes — office and light-industrial space in the Golden Triangle is squarely in our service area, on nightly or multi-week schedules.' },
      { q: 'Can you clean around evening shifts and secure areas?', a: 'Yes. Badged, background-checked crews and schedules built around your access windows are standard for corporate accounts.' },
    ],
  },
  burnsville: {
    context:
      'Burnsville\'s commercial activity centers on the Heart of the City district, the big-box and retail corridor along County Road 42, and office/industrial space near the I-35W/35E split. Retail-heavy stock means entrance glass, hard-floor traffic lanes, and restroom cycles dominate the scope.',
    faqs: [
      { q: 'Do you clean retail along County Road 42?', a: 'Yes — high-traffic retail with daily entrance, floor-lane, and restroom attention is a standard Burnsville scope for us.' },
      { q: 'Can you service offices near the 35W/35E interchange?', a: 'Yes, on nightly or multi-week schedules — Burnsville is minutes from our Apple Valley base, which helps response time.' },
    ],
  },
  'apple-valley': {
    context:
      'Apple Valley is our home base. The city\'s commercial stock runs along the Cedar Avenue (Highway 77) and County Road 42 corridors — retail centers, medical and dental suites, and professional offices — plus civic anchors like the Minnesota Zoo and employers including Uponor\'s North American headquarters. Being headquartered here means the shortest response times in our service area.',
    faqs: [
      { q: 'How fast can you start service in Apple Valley?', a: 'Usually fastest of anywhere we serve — we\'re headquartered here, so walkthroughs and starts schedule quickly.' },
      { q: 'Do you clean medical and dental suites in Apple Valley?', a: 'Yes — protocol-driven medical cleaning with hospital-grade disinfectants is one of our core services, and several of the Cedar/42 corridor\'s buildings are medical-heavy.' },
    ],
  },
  lakeville: {
    context:
      'Lakeville pairs one of the metro\'s major industrial concentrations — Airlake Industrial Park, among the largest industrial parks in the Twin Cities — with fast-growing retail and office along the I-35 corridor. Industrial accounts here typically need machine floor scrubbing and shift-aware scheduling rather than standard office janitorial.',
    faqs: [
      { q: 'Do you serve Airlake Industrial Park?', a: 'Yes — warehouse floor scrubbing, high dusting, and office/breakroom programs in industrial facilities are core services, scheduled around shifts.' },
      { q: 'Can you grow with a new Lakeville facility?', a: 'Yes. Month-to-month scopes mean the contract can expand as your footprint does, without renegotiating a long-term agreement.' },
    ],
  },
  woodbury: {
    context:
      'Woodbury\'s commercial growth clusters around the I-94 corridor: the CityPlace and Tamarack Village commercial districts, extensive medical space including the Woodwinds hospital campus, and professional offices throughout. Medical and Class A office stock set the cleaning standard on the east metro side.',
    faqs: [
      { q: 'Do you clean medical offices near the Woodwinds campus?', a: 'Yes — medical-protocol cleaning (hospital-grade disinfectants, dwell times, color-coded systems) is one of our core services.' },
      { q: 'Do you serve CityPlace and Tamarack Village businesses?', a: 'Yes — offices and retail along the I-94 corridor are part of our east-metro coverage, on nightly or multi-week schedules.' },
    ],
  },
};

export const LOCATIONS: Location[] = [
  { slug: 'apple-valley', name: 'Apple Valley', county: 'Dakota County', blurb: 'Our home base — offices, retail, and clinics across Apple Valley get our fastest response.' },
  { slug: 'minneapolis', name: 'Minneapolis', county: 'Hennepin County', blurb: 'From North Loop offices to industrial space along the river, we keep Minneapolis businesses clean.' },
  { slug: 'st-paul', name: 'St. Paul', county: 'Ramsey County', blurb: 'Downtown offices, clinics, and warehouses across St. Paul trust JSM for nightly janitorial.' },
  { slug: 'bloomington', name: 'Bloomington', county: 'Hennepin County', blurb: 'Serving the I-494 corridor — offices, hotels-adjacent retail, and medical suites.' },
  { slug: 'eagan', name: 'Eagan', county: 'Dakota County', blurb: 'Corporate campuses and flex industrial space across Eagan, cleaned on your schedule.' },
  { slug: 'burnsville', name: 'Burnsville', county: 'Dakota County', blurb: 'Retail, office, and warehouse cleaning along the 35W corridor in Burnsville.' },
  { slug: 'eden-prairie', name: 'Eden Prairie', county: 'Hennepin County', blurb: 'Tech offices and corporate parks in Eden Prairie keep a professional shine with JSM.' },
  { slug: 'edina', name: 'Edina', county: 'Hennepin County', blurb: 'Medical offices, retail, and Class A office space across Edina.' },
  { slug: 'minnetonka', name: 'Minnetonka', county: 'Hennepin County', blurb: 'Corporate headquarters and suburban office parks throughout Minnetonka.' },
  { slug: 'plymouth', name: 'Plymouth', county: 'Hennepin County', blurb: 'Office, light industrial, and medical cleaning across Plymouth.' },
  { slug: 'maple-grove', name: 'Maple Grove', county: 'Hennepin County', blurb: 'Retail centers, clinics, and offices in fast-growing Maple Grove.' },
  { slug: 'woodbury', name: 'Woodbury', county: 'Washington County', blurb: 'East-metro offices, medical suites, and retail in Woodbury.' },
  { slug: 'lakeville', name: 'Lakeville', county: 'Dakota County', blurb: 'South-metro warehouses, offices, and retail in Lakeville.' },
  { slug: 'richfield', name: 'Richfield', county: 'Hennepin County', blurb: 'Offices, clinics, and retail along the 494 and Cedar corridors in Richfield.' },
  { slug: 'st-louis-park', name: 'St. Louis Park', county: 'Hennepin County', blurb: 'West End offices, medical buildings, and retail across St. Louis Park.' },
  { slug: 'golden-valley', name: 'Golden Valley', county: 'Hennepin County', blurb: 'Corporate campuses and office parks along Highway 55 in Golden Valley.' },
  { slug: 'hopkins', name: 'Hopkins', county: 'Hennepin County', blurb: 'Mainstreet storefronts, offices, and light industrial space in Hopkins.' },
  { slug: 'brooklyn-park', name: 'Brooklyn Park', county: 'Hennepin County', blurb: 'Distribution centers, manufacturers, and offices across Brooklyn Park.' },
  { slug: 'brooklyn-center', name: 'Brooklyn Center', county: 'Hennepin County', blurb: 'Offices, retail, and industrial facilities throughout Brooklyn Center.' },
  { slug: 'crystal', name: 'Crystal', county: 'Hennepin County', blurb: 'Neighborhood retail, clinics, and small offices across Crystal.' },
  { slug: 'new-hope', name: 'New Hope', county: 'Hennepin County', blurb: 'Light industrial and office space throughout New Hope.' },
  { slug: 'champlin', name: 'Champlin', county: 'Hennepin County', blurb: 'Retail centers and professional offices in Champlin along Highway 169.' },
  { slug: 'roseville', name: 'Roseville', county: 'Ramsey County', blurb: 'Rosedale-area retail, offices, and medical suites across Roseville.' },
  { slug: 'maplewood', name: 'Maplewood', county: 'Ramsey County', blurb: 'Clinics, offices, and retail throughout Maplewood and the east metro.' },
  { slug: 'shoreview', name: 'Shoreview', county: 'Ramsey County', blurb: 'Corporate offices and tech facilities in Shoreview.' },
  { slug: 'new-brighton', name: 'New Brighton', county: 'Ramsey County', blurb: 'Offices and industrial space along the 35W corridor in New Brighton.' },
  { slug: 'white-bear-lake', name: 'White Bear Lake', county: 'Ramsey County', blurb: 'Downtown storefronts, offices, and clinics in White Bear Lake.' },
  { slug: 'coon-rapids', name: 'Coon Rapids', county: 'Anoka County', blurb: 'Medical offices, retail, and industrial space across Coon Rapids.' },
  { slug: 'blaine', name: 'Blaine', county: 'Anoka County', blurb: 'Fast-growing office, retail, and warehouse space throughout Blaine.' },
  { slug: 'fridley', name: 'Fridley', county: 'Anoka County', blurb: 'Manufacturing and industrial facilities along East River Road in Fridley.' },
  { slug: 'anoka', name: 'Anoka', county: 'Anoka County', blurb: 'Historic downtown storefronts and county-seat offices in Anoka.' },
  { slug: 'shakopee', name: 'Shakopee', county: 'Scott County', blurb: 'Distribution centers, manufacturers, and offices across Shakopee.' },
  { slug: 'savage', name: 'Savage', county: 'Scott County', blurb: 'Warehouse and office space in Savage along the Highway 13 corridor.' },
  { slug: 'prior-lake', name: 'Prior Lake', county: 'Scott County', blurb: 'Professional offices and retail across Prior Lake.' },
  { slug: 'chanhassen', name: 'Chanhassen', county: 'Carver County', blurb: 'Corporate campuses and offices throughout Chanhassen.' },
  { slug: 'chaska', name: 'Chaska', county: 'Carver County', blurb: 'Manufacturers, offices, and clinics across Chaska.' },
  { slug: 'inver-grove-heights', name: 'Inver Grove Heights', county: 'Dakota County', blurb: 'Offices, retail, and industrial space across Inver Grove Heights.' },
  { slug: 'rosemount', name: 'Rosemount', county: 'Dakota County', blurb: 'Industrial facilities and local businesses throughout Rosemount.' },
  { slug: 'west-st-paul', name: 'West St. Paul', county: 'Dakota County', blurb: 'Robert Street retail, clinics, and offices in West St. Paul.' },
  { slug: 'mendota-heights', name: 'Mendota Heights', county: 'Dakota County', blurb: 'Corporate office parks along I-494 in Mendota Heights.' },
  { slug: 'oakdale', name: 'Oakdale', county: 'Washington County', blurb: 'Medical and professional offices across Oakdale.' },
  { slug: 'cottage-grove', name: 'Cottage Grove', county: 'Washington County', blurb: 'Retail centers and industrial space in Cottage Grove.' },
  { slug: 'stillwater', name: 'Stillwater', county: 'Washington County', blurb: 'Historic downtown storefronts and offices in Stillwater.' },
];
