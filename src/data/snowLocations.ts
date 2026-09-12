export interface SnowLocal {
  intro: string;
  priorities: string[];
  planningNote: string;
  faqs: { q: string; a: string }[];
}

/**
 * Snow-specific local content for markets with enough real, differentiated
 * commercial-property context to justify indexation. Other generated city/snow
 * routes remain useful for visitors but stay noindex,follow.
 *
 * Keep this factual and property-focused. Do not add unverified route capacity,
 * response times, customer history, certifications, equipment counts or claims
 * that JSM has serviced a named property/district.
 */
export const SNOW_LOCAL: Record<string, SnowLocal> = {
  minneapolis: {
    intro:
      'Minneapolis commercial snow planning varies sharply by property type. Downtown and North Loop sites can combine structured parking, loading access, narrow pedestrian routes and limited snow-storage space, while larger industrial and neighborhood commercial properties may have more room to stack snow but more pavement, dock approaches and drive lanes to keep usable. A site walk should identify the surfaces, entrances, fire exits and snow-storage constraints before trigger terms are finalized.',
    priorities: [
      'Downtown and urban-site sidewalk, entrance and pedestrian access',
      'Loading zones, drive lanes and service entrances',
      'Snow-storage limits and potential relocation or hauling needs',
      'Property-specific trigger depth and de-icing priorities',
    ],
    planningNote:
      'Minneapolis publishes sidewalk-clearing requirements that can vary by property type. Property owners and managers should verify the current rule that applies to their site; JSM can then scope contracted sidewalk and entrance work around the property plan.',
    faqs: [
      { q: 'Can a Minneapolis snow proposal include sidewalks and entrances?', a: 'Yes, when those surfaces are included in the written property scope. The site walk should identify priority entrances, pedestrian routes, fire exits and the service conditions that apply to them.' },
      { q: 'What if a Minneapolis property has limited snow-storage space?', a: 'Identify the available stacking zones during the site walk. Snow relocation or hauling can be evaluated as part of the proposal when on-site storage would interfere with parking, visibility or operations.' },
    ],
  },
  'st-paul': {
    intro:
      'St. Paul combines dense downtown and Lowertown blocks, institutional and government-area properties, medical corridors and suburban-style commercial sites farther from the core. Those settings create different winter priorities: pedestrian access and constrained stacking in denser areas, versus larger parking fields, drives and loading access on more open properties.',
    priorities: [
      'Pedestrian routes, entrances and public-facing walkways',
      'Parking areas, service drives and loading access',
      'Defined snow-stacking areas before winter',
      'Ice-management priorities documented in the scope',
    ],
    planningNote:
      'A St. Paul proposal should separate what is included in recurring plowing from sidewalks, de-icing, stacking and any hauling so the property manager can compare bids on the same scope.',
    faqs: [
      { q: 'Can JSM quote a St. Paul snow RFP line by line?', a: 'Yes. Share the existing scope, property requirements and bid deadline. JSM can review the requested lots, sidewalks, de-icing and snow-storage work and prepare a property-specific proposal.' },
      { q: 'How is the snow trigger handled for a St. Paul property?', a: 'The requested trigger depth or event condition should be documented in the property agreement before service begins rather than assumed during a storm.' },
    ],
  },
  'apple-valley': {
    intro:
      'Apple Valley commercial properties include retail centers, medical and professional offices, civic uses and multi-tenant sites concentrated around the Cedar Avenue and County Road 42 corridors. Winter plans for these properties often need to balance parking capacity, customer-facing entrances, sidewalks and visibility around drive approaches.',
    priorities: [
      'Retail and office parking-lot plowing',
      'Customer, employee and patient entrances',
      'Sidewalk and walkway treatment where included',
      'Snow-pile placement that protects parking and sight lines',
    ],
    planningNote:
      'JSM is based in Apple Valley, but snow-route availability still depends on the property, requested scope and seasonal capacity. A site review is the right first step before contract terms are offered.',
    faqs: [
      { q: 'Do you provide commercial—not residential—snow service in Apple Valley?', a: 'JSM is positioning this program for commercial properties. Submit the business or managed-property address and requested scope so route availability and contract options can be reviewed.' },
      { q: 'Can an Apple Valley proposal include plowing and de-icing?', a: 'Yes, those services can be scoped together when appropriate for the property. The agreement should identify surfaces, priorities, materials and service conditions.' },
    ],
  },
  eagan: {
    intro:
      'Eagan has large corporate campuses, office properties, hotels, flex-industrial buildings and warehouse/light-industrial sites near I-35E, Highway 55 and major employment corridors. Snow planning can therefore involve large parking fields, multiple entrances, loading approaches, shift changes and different open-by priorities across one property.',
    priorities: [
      'Large parking fields and internal drive lanes',
      'Loading, delivery and employee access',
      'Multiple-building or campus priority mapping',
      'Operating-hour and open-by requirements captured before winter',
    ],
    planningNote:
      'For larger Eagan sites, list each building, lot or operational zone separately so the proposal can distinguish common trigger terms from site-specific priorities.',
    faqs: [
      { q: 'Can the snow request cover more than one Eagan building?', a: 'Yes. List the locations or zones and explain the priorities for each. Multi-building properties should not be treated as one generic parking lot.' },
      { q: 'Can loading and shift access be included in the snow plan?', a: 'Yes, when included in the agreed scope. Share operating hours, loading areas and critical access windows during the site-walk request.' },
    ],
  },
  bloomington: {
    intro:
      'Bloomington has dense retail, hospitality, corporate-office and medical activity along the I-494 corridor and around major destinations. Commercial snow plans can involve heavy customer traffic, large parking fields, multiple pedestrian approaches and limited tolerance for losing usable parking to poorly planned snow piles.',
    priorities: [
      'High-traffic commercial parking areas',
      'Customer and employee pedestrian routes',
      'Entrance and curb-zone priorities',
      'Snow-storage planning that preserves usable parking',
    ],
    planningNote:
      'A Bloomington walkthrough should identify which entrances and parking zones matter most during operating hours and which areas can be used for snow storage without blocking visibility or normal circulation.',
    faqs: [
      { q: 'Can retail and office properties in Bloomington request seasonal snow pricing?', a: 'Seasonal pricing may be available depending on route capacity, property location, requested trigger and scope. The site review establishes the information needed for that decision.' },
      { q: 'Can snow hauling be considered for a Bloomington commercial lot?', a: 'Yes, when storage space becomes a property constraint. Hauling or relocation should be specifically priced and authorized rather than assumed to be part of basic plowing.' },
    ],
  },
  burnsville: {
    intro:
      'Burnsville combines retail concentration along County Road 42 with office, medical and industrial properties near the I-35W/I-35E corridors. A useful snow scope should account for customer-facing parking, employee access, pedestrian routes, loading/service areas and the specific places snow can be stacked without reducing safe circulation.',
    priorities: [
      'Retail parking and customer-facing access',
      'Office and medical entrances and sidewalks',
      'Service drives and delivery areas',
      'Written trigger depth and ice-management priorities',
    ],
    planningNote:
      'For busy commercial sites, define priority zones before winter rather than trying to decide them during an event.',
    faqs: [
      { q: 'Can a Burnsville snow scope separate parking-lot and sidewalk service?', a: 'Yes. Lots, walks, entrances, de-icing and hauling should be broken out clearly enough that the property manager knows what is included and can compare proposals fairly.' },
      { q: 'Can I submit an existing Burnsville snow scope?', a: 'Yes. Share an HTTPS document link, paste the requirements into the form, or email the RFP separately with the property name and address.' },
    ],
  },
  lakeville: {
    intro:
      'Lakeville has a substantial industrial and distribution presence along with retail and office growth. Warehouse and industrial snow plans can prioritize truck circulation, employee parking, dock approaches and early-shift access differently from customer-facing retail or professional-office properties.',
    priorities: [
      'Truck circulation and loading-dock approaches',
      'Shift-change and employee parking access',
      'Large paved areas with defined stacking zones',
      'Ice-management priorities around pedestrian and loading areas',
    ],
    planningNote:
      'Industrial sites should identify restricted areas, traffic patterns and loading priorities during the walk so plowing and snow placement do not conflict with normal operations.',
    faqs: [
      { q: 'Can a Lakeville warehouse snow plan include dock approaches?', a: 'Yes, when those areas are included in the written scope. Tell JSM which loading and truck-access zones are operationally critical.' },
      { q: 'Can a property request an open-by time?', a: 'You can provide an operating or preferred open-by requirement for proposal planning. The actual service expectations must be accepted and documented in the final agreement; the request form itself does not create a response guarantee.' },
    ],
  },
  woodbury: {
    intro:
      'Woodbury commercial growth includes retail districts, medical properties and professional offices around the I-94 corridor. These properties can have multiple public entrances, large parking areas and pedestrian zones that need separate winter priorities rather than one generic plowing instruction.',
    priorities: [
      'Public-facing entrances and pedestrian routes',
      'Commercial parking and drive-lane circulation',
      'Medical/office access priorities where applicable',
      'Snow-storage and de-icing requirements documented by zone',
    ],
    planningNote:
      'A site walk is useful for mapping entrance priority and snow-storage areas before the season, especially on multi-building or retail-oriented properties.',
    faqs: [
      { q: 'Can a Woodbury property combine plowing and ice management in one proposal?', a: 'Yes. Parking-lot plowing, walks, entrances, de-icing and snow-storage work can be addressed under one written property scope when those services are available for the site.' },
      { q: 'Does submitting a preferred walkthrough date book the appointment?', a: 'No. It is a requested time only. JSM confirms availability before the visit is considered scheduled.' },
    ],
  },
  'eden-prairie': {
    intro:
      'Eden Prairie includes large corporate campuses, offices and light-industrial properties in and around the Golden Triangle as well as retail and mixed commercial areas. Larger sites often benefit from a zone-based snow plan that distinguishes visitor entrances, employee lots, internal drives, loading/service access and snow-storage locations.',
    priorities: [
      'Campus and multi-building snow-zone planning',
      'Visitor and employee access priorities',
      'Internal drives, service areas and loading access',
      'Snow-storage or hauling needs evaluated before winter',
    ],
    planningNote:
      'For campus-style properties, include a marked site plan or written priority list with the RFP so vendors are pricing the same operational requirements.',
    faqs: [
      { q: 'Can an Eden Prairie campus submit a portfolio-style snow RFP?', a: 'Yes. Provide each building or address, the common contract requirements and any site-specific addenda so the scope can be reviewed consistently.' },
      { q: 'Can seasonal and per-event options both be discussed?', a: 'Yes, where available. The appropriate structure depends on property scope, requested trigger, route capacity and location.' },
    ],
  },
  edina: {
    intro:
      'Edina commercial properties range from major retail and mixed-use areas around Southdale to offices, medical properties and neighborhood retail nodes such as 50th & France. Winter planning can require careful attention to public entrances, high pedestrian activity, parking capacity and the limited snow-storage space common on more developed sites.',
    priorities: [
      'High-pedestrian entrances and sidewalks',
      'Retail, medical and office parking access',
      'Snow-pile placement where site space is constrained',
      'De-icing priorities by surface and traffic level',
    ],
    planningNote:
      'Dense commercial sites should establish where snow can be stored and when relocation or hauling would require separate authorization so the winter plan does not erode parking or visibility.',
    faqs: [
      { q: 'Can an Edina commercial snow plan include sidewalk and entrance work?', a: 'Yes, when those surfaces are part of the written scope. Priority areas and service conditions should be identified during the site review.' },
      { q: 'How should snow hauling be handled in the agreement?', a: 'If hauling may be needed, define how it is authorized and priced. Basic plowing should not be assumed to include off-site snow removal unless the agreement says so.' },
    ],
  },
};

export const PRIORITY_SNOW_SLUGS = Object.keys(SNOW_LOCAL);
