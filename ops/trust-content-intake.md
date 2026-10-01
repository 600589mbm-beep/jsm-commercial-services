# Verified trust content for JSM

The homepage and About page are ready to display approved crew photos and documented facility projects. The About page can also display a named owner biography. These sections remain hidden until genuine material is supplied. The existing customer quote section renders only approved quotes from `src/data/testimonials.ts`.

## Owner
- Full name:
- Role:
- Relevant experience:
- Why you started JSM:
- Approved headshot and caption:

## Facility project 1
- Facility type and city:
- Approximate area cleaned:
- Work completed and frequency:
- Completion date or period:
- Actual outcome and how it was checked:
- Approved project photos and captions:
- Permission to identify the client or facility:

## Facility project 2
- Facility type and city:
- Approximate area cleaned:
- Work completed and frequency:
- Completion date or period:
- Actual outcome and how it was checked:
- Approved project photos and captions:
- Permission to identify the client or facility:

## Customer feedback
- Exact quote:
- Approved name and company attribution:
- Confirmation the quote may be published:

## Photos
- Genuine crew or project photos, with descriptive captions and alt text.
- Location of the original files and confirmation of approval for website use.
- Keep confidential paperwork, access codes and unapproved people out of public images.

## Publishing
Put approved photos in `public/photos/`. Fill `OWNER_PROFILE`, `CREW_PHOTOS` and `FACILITY_PROJECTS` in `src/data/trustEvidence.ts`; photo paths begin with `/photos/` and include actual image width and height. Fill approved feedback in `src/data/testimonials.ts`. No illustrative local scope example should be presented as a completed project.

Build and review the populated homepage and About page at phone and desktop widths before publishing.
