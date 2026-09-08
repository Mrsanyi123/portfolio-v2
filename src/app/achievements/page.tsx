import BlurFade from "@/components/magicui/blur-fade";
import { AchievementCard } from "@/components/achievement-card";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Hackathon victories, certifications, and milestones in Sanyi's journey as a developer.",
  alternates: {
    canonical: `${DATA.url}/achievements`,
  },
  openGraph: {
    title: "Achievements | Sanyi",
    description:
      "Hackathon victories, certifications, and milestones in Sanyi's journey as a developer.",
    url: `${DATA.url}/achievements`,
    images: [
      {
        url: `${DATA.url}/api/og?title=Achievements&type=page`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements | Sanyi",
    description:
      "Hackathon victories, certifications, and milestones in Sanyi's journey as a developer.",
    images: [`${DATA.url}/api/og?title=Achievements&type=page`],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsPage() {
  return (
    <section className="space-y-12">
      <BreadcrumbJsonLd
        items={[{ name: "Achievements", href: "/achievements" }]}
      />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          achievements
        </h1>
        <p className="text-sm text-muted-foreground max-w-lg">
          Hackathon victories and milestones in my journey as a developer.
        </p>
      </BlurFade>

      <div className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-lg font-semibold tracking-tight">Hackathons</h2>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2">
          {DATA.hackathons.map((item, id) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 2.5 + id * 0.05}>
              <AchievementCard
                title={item.title}
                subtitle={item.organization}
                description={item.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-lg font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-muted-foreground">
            Professional certifications and learning achievements.
          </p>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2">
          {DATA.certifications.map((item, id) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 4.5 + id * 0.05}>
              <AchievementCard title={item.title} subtitle={item.issuer} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
