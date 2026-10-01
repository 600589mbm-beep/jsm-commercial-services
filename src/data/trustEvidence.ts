// Publish only owner-provided facts, genuine photos and approved project details.
// Empty records stay hidden on the website. Customer quotes live in testimonials.ts.
export interface ApprovedPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}
export interface OwnerProfile {
  name: string;
  role: string;
  biography: string;
  photo?: ApprovedPhoto;
}
export interface FacilityProject {
  title: string;
  city: string;
  facilityType: string;
  completed: string;
  size?: string;
  scope: string[];
  outcome: string;
  photo?: ApprovedPhoto;
}
export const OWNER_PROFILE: OwnerProfile | null = null;
export const CREW_PHOTOS: ApprovedPhoto[] = [];
export const FACILITY_PROJECTS: FacilityProject[] = [];
