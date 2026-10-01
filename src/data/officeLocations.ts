export interface OfficeLocation {
  intro: string;
  context: string;
  source: { label: string; url: string };
  examples: { title: string; scope: string[] }[];
  faqs: { q: string; a: string }[];
}

export const OFFICE_LOCAL: Record<string, OfficeLocation> = {
  'apple-valley': {
    intro: 'Office cleaning in Apple Valley starts with the spaces your staff and visitors use every day: reception, workstations, meeting rooms, restrooms and breakrooms. JSM is based in Apple Valley. Share your office address, access hours and cleaning priorities so we can review the scope and confirm availability.',
    context: 'Cedar Avenue and County Road 42 anchor Apple Valley’s commercial center. For an office in this area, a useful walkthrough separates visitor-facing spaces from staff-only areas and identifies whether entrance mats, shared restrooms or common corridors are the tenant’s responsibility or the property manager’s.',
    source: { label: 'Apple Valley economic development', url: 'https://www.ci.apple-valley.mn.us/108/Economic-Development' },
    examples: [
      { title: 'Professional office with a reception area', scope: ['Reception: entrance glass, visitor seating, entry mats and floor traffic lanes.', 'Work areas: waste removal, accessible surfaces and floor care, with desks and documents handled only as agreed.', 'Meeting rooms: table surfaces, touchpoints and cleaning around scheduled meetings.', 'Restrooms and breakroom: fixtures, sinks, counters and floors; agree who supplies consumables.'] },
      { title: 'Office suite in a shared commercial building', scope: ['Mark the boundary between the leased suite and shared lobby, hallways and restrooms.', 'Identify hard floors and carpet separately, including periodic floor-care needs.', 'Agree on keys or badges, alarm procedures and the approved cleaning window before startup.', 'Separate routine visits from tenant turnover, interior glass or occasional deep cleaning.'] },
    ],
    faqs: [
      { q: 'Can I start with a callback instead of a full Apple Valley office walkthrough request?', a: 'Yes. Use the short callback form with your name and phone number. JSM responds within one business day and can discuss the office details with you.' },
      { q: 'Who is responsible for shared spaces in my office building?', a: 'Bring your lease or property manager’s cleaning scope to the walkthrough. The proposal should name the spaces JSM would clean so tenant and landlord work does not overlap or leave a gap.' },
      { q: 'How do we choose cleaning frequency for a smaller office?', a: 'Review attendance, visitor traffic, restroom use, food areas and floor conditions. You can request one through seven days per week or a custom schedule; JSM reviews the frequency with the scope before confirming service.' },
      { q: 'Does being based in Apple Valley guarantee an immediate start?', a: 'A local base does not confirm a service slot. JSM reviews your address, scope and access requirements, then confirms walkthrough and startup availability with you.' },
    ],
  },
  eagan: {
    intro: 'Office cleaning in Eagan can involve a single tenant suite, multiple office floors or office space attached to a warehouse. JSM reviews each area separately so the written proposal identifies what is included, how often it is cleaned and when the crew can enter.',
    context: 'Eagan’s planning documents identify office, business park and industrial uses around its major transport corridors, including Highway 55. For an office connected to operational space, define the office boundary, staff entrances and shared employee facilities before comparing cleaning proposals.',
    source: { label: 'Eagan land-use planning', url: 'https://cityofeagan.com/images/CommunityDevelopment/Planning/CompPlan2030/3%20-%20Land%20Use_low.pdf' },
    examples: [
      { title: 'Office attached to a warehouse or flex facility', scope: ['Office: reception, desks, conference rooms and office flooring.', 'Shared employee areas: breakrooms, restrooms and entrances used across shifts.', 'Identify tracked-in soil at the office-to-warehouse boundary and the surfaces needing separate floor care.', 'List warehouse floor work separately; office cleaning does not automatically include production or storage areas.'] },
      { title: 'Office with several departments or buildings', scope: ['Use a checklist for each floor or building rather than one undifferentiated square-foot total.', 'Record occupancy and operating hours for each area, including meeting rooms with variable use.', 'Identify restricted rooms, approved entry routes and the person who can authorize access.', 'Agree on service frequency by area and how inspections and concerns will be reported.'] },
    ],
    faqs: [
      { q: 'Does an Eagan office quote include the attached warehouse?', a: 'Only if it appears in the agreed scope. Identify office and warehouse square footage separately and describe the flooring, operations and access restrictions in each area.' },
      { q: 'Can cleaning be planned around multiple employee shifts?', a: 'Share the shift times, busiest entrances and any areas that remain occupied. JSM reviews the available cleaning windows during scope planning before confirming a schedule.' },
      { q: 'What should I send for a multi-building office proposal?', a: 'Provide the address, approximate cleanable area, facility contact, access hours and desired frequency for each building. A floor plan or existing scope helps JSM separate shared requirements from building-specific tasks.' },
      { q: 'When will my Eagan office proposal be ready?', a: 'JSM responds to your inquiry within one business day. Walkthrough availability is confirmed separately. After the walkthrough and scope agreement, JSM confirms the written proposal delivery timing with you.' },
    ],
  },
};
