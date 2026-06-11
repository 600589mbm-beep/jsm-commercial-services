export interface Location {
  slug: string;
  name: string;
  county: string;
  blurb: string;
}

export const LOCATIONS: Location[] = [
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
];
