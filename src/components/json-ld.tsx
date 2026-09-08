import { DATA } from "@/data/resume";

export function JsonLd() {
  const socialUrls = Object.values(DATA.contact.social).map((s) => s.url);

  const structuredData = [{
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${DATA.url}/#person`,
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    jobTitle: 'Developer',
    nationality: {
      '@type': 'Country',
      name: 'Ethiopia'
    },
    sameAs: socialUrls,
    knowsAbout: DATA.stackCategories.flatMap((category) =>
      category.skills.map((skill) => skill.name),
    ),
    description: DATA.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${DATA.url}/#website`,
    name: `${DATA.name} - Portfolio`,
    url: DATA.url,
    description: DATA.description,
    publisher: {
      '@id': `${DATA.url}/#person`
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Site Sections',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Projects',
        description: 'Web applications and projects',
        url: `${DATA.url}/projects`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Videos',
        description: 'Videos about software development and tech',
        url: `${DATA.url}/videos`
      },
    ]
  }];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
