import office from '../assets/illustrations/office-vacuuming.png';
import clinic from '../assets/illustrations/clinic-cleaning.png';
import restroom from '../assets/illustrations/restroom-cleaning.png';
import breakroom from '../assets/illustrations/breakroom-cleaning.png';
import lobby from '../assets/illustrations/lobby-floor-cleaning.png';
import retail from '../assets/illustrations/retail-cleaning.png';
import warehouse from '../assets/illustrations/warehouse-floor-cleaning.png';
import windows from '../assets/illustrations/commercial-window-cleaning.png';

// User-supplied generated visuals illustrate services. They are separate from
// genuine staff photos and documented customer projects in trustEvidence.ts.
export const SERVICE_ILLUSTRATIONS = {
  office: { image: office, title: 'Office cleaning', alt: 'AI-generated illustration of a cleaner vacuuming carpet in an office.' },
  clinic: { image: clinic, title: 'Clinic reception cleaning', alt: 'AI-generated illustration of a cleaner wiping a clinic reception counter.' },
  restroom: { image: restroom, title: 'Restroom cleaning', alt: 'AI-generated illustration of a cleaner wiping a commercial restroom counter.' },
  breakroom: { image: breakroom, title: 'Breakroom cleaning', alt: 'AI-generated illustration of a cleaner wiping a table in an employee breakroom.' },
  lobby: { image: lobby, title: 'Lobby and entrance care', alt: 'AI-generated illustration of a cleaner mopping a lobby floor beside a wet-floor sign.' },
  retail: { image: retail, title: 'Retail store cleaning', alt: 'AI-generated illustration of a cleaner mopping the floor of a retail store.' },
  warehouse: { image: warehouse, title: 'Warehouse floor care', alt: 'AI-generated illustration of a cleaner operating a floor scrubber in a warehouse.' },
  windows: { image: windows, title: 'Commercial window cleaning', alt: 'AI-generated illustration of a cleaner using a squeegee on commercial entrance glass.' },
};
export type IllustrationKey = keyof typeof SERVICE_ILLUSTRATIONS;
export const SERVICE_ILLUSTRATION_KEYS: Record<string, IllustrationKey> = {
  'office-cleaning': 'office',
  'janitorial-services': 'restroom',
  'floor-care': 'lobby',
  'carpet-cleaning': 'office',
  'window-cleaning': 'windows',
  'disinfection-services': 'breakroom',
  'day-porter-services': 'lobby',
  'medical-office-cleaning': 'clinic',
  'industrial-warehouse-cleaning': 'warehouse',
};
export const INDUSTRY_ILLUSTRATION_KEYS: Record<string, IllustrationKey> = {
  'retail-store-cleaning': 'retail',
  'property-management-cleaning': 'lobby',
};
