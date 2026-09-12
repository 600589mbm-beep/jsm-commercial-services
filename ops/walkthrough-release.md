# Walkthrough and visual refresh — September 2026

## Implemented

- Refreshed home page with original inline building illustration, clearer walkthrough calls to action, responsive service cards, cleaning-frequency example and RFP guidance.
- New four-section progressive walkthrough form at `/quote/`: property details; exact 1–7 days/week plus preferred weekdays; preferred/alternate walkthrough dates and Central Time window; RFP links/requirements/deadline; contact and consent.
- No-JavaScript HTML form fallback. Client-side checks for matching weekly counts, required fields, past dates and HTTPS-only document links. Review panel and accessible focus/error handling.
- New indexable `/commercial-cleaning-twin-cities/` service guide with unique title, description, H1, Service/Breadcrumb/FAQ JSON-LD and relevant internal links. Existing sitemap generation includes the page automatically.
- Existing snow form and global business settings remain unchanged.

## Important integration boundaries

The existing self-hosted POST receiver remains configured in `src/config.ts`. Browser tests intercept the POST and verify its payload; they do NOT send a production lead or prove database persistence/email delivery. The receiver source and administrative deployment connection are not part of this repository.

Before relying on new fields in production, verify that the receiver persists and displays the following fields, including repeated checkbox values: `building_name`, `building_address`, `building_description`, `floor_count`, `restroom_count`, `number_of_locations`, `daily_occupants`, `additional_locations`, `frequency`, `cleaning_days`, `cleaning_time`, `services_needed`, `service_goal`, `service_start_date`, `walkthrough_preference`, `walkthrough_date`, `walkthrough_time`, `alternate_date`, `walkthrough_timezone`, `visit_notes`, `document_url`, `rfp_notes`, `rfp_due_date`, `document_delivery`, `contact_method`, `contact_permission`. Existing `facility_type`, `square_footage`, `city_zip`, `current_challenge`, `name`, `company`, `phone`, `email`, and `best_contact_time` names are preserved. Apply server-side validation and output escaping; never trust browser validation alone. Do not automatically fetch submitted URLs.

Walkthrough dates are REQUESTS, not live availability or confirmed reservations. JSM must confirm by contact. No external calendar was connected or appointments created.

The form accepts document LINKS and pasted requirements. Actual attachments are emailed separately to the configured sales address with the building name and address. There is no fake file-upload widget or public document storage. Direct uploads require a private authenticated storage/receiver integration with size/type validation, malware scanning, access controls, retention/deletion policy and rate limiting before enabling them. Do not store client RFPs in this public GitHub repository.

## Tests and release

`Walkthrough UI and SEO QA` builds the site and uses Playwright at 375, 768 and 1440 pixels. It verifies metadata, canonical URLs, JSON-LD, internal destinations, sitemap inclusion, conditional form validation, synthetic/mock POST fields, no-JS fallback and Astro client navigation. It exports screenshots and a test report. External browser requests are blocked during tests. Production receiver storage/notifications require a separate controlled end-to-end check.

SEO metadata does not guarantee Google indexing, rich results, traffic or rankings. Search Console ownership/submission was not changed. After publication, inspect the new URL and sitemap in the verified Search Console property and track impressions, clicks and actual leads.
