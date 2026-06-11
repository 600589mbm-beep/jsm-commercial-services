import { url } from '../config';

// BreadcrumbList JSON-LD. Pass [name, path] pairs; use a null path for the
// final crumb (current page — Google doesn't need an item URL for it).
export function breadcrumbList(site: URL | undefined, crumbs: [string, string | null][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(path ? { item: new URL(url(path), site).href } : {}),
    })),
  };
}
