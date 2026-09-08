import BlurFade from "@/components/magicui/blur-fade";
import { LinkedInActivity } from "@/components/linkedin-activity";
import { XActivity } from "@/components/x-activity";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
  description:
    "Recent posts and activity from Sanyi on X and LinkedIn.",
  alternates: {
    canonical: `${DATA.url}/activity`,
  },
  openGraph: {
    title: "Activity | Sanyi",
    description:
      "Recent posts and activity from Sanyi on X and LinkedIn.",
    url: `${DATA.url}/activity`,
    images: [
      {
        url: `${DATA.url}/api/og?title=Activity&type=page`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activity | Sanyi",
    description:
      "Recent posts and activity from Sanyi on X and LinkedIn.",
    images: [`${DATA.url}/api/og?title=Activity&type=page`],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ActivityPage() {
  return (
    <section className="space-y-12">
      <BreadcrumbJsonLd items={[{ name: "Activity", href: "/activity" }]} />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">activity</h1>
        <p className="text-sm text-muted-foreground max-w-lg">
          Recent posts and updates from X and LinkedIn.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <XActivity />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <LinkedInActivity />
      </BlurFade>
    </section>
  );
}
