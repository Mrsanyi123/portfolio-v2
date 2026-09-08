import { DATA } from "@/data/resume";

export function PersonSchema() {
  const socialUrls = Object.values(DATA.contact.social)
    .filter((s) => s.navbar !== false)
    .map((s) => s.url);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: DATA.name,
          description: DATA.description,
          image: `${DATA.url}${DATA.avatarUrl}`,
          url: DATA.url,
          sameAs: socialUrls,
          jobTitle: "Developer",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Ethiopia"
          },
          email: DATA.contact.email,
          knowsAbout: DATA.stackCategories.flatMap((category) =>
            category.skills.map((skill) => skill.name),
          ),
        })
      }}
    />
  );
}
