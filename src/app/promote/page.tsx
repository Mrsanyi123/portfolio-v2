import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  CreditCard,
  Mail,
  Package,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Promote",
  description:
    "Partner with Sanyi to reach a 40K+ high-trust B2B and tech audience across LinkedIn, X, and YouTube.",
  alternates: {
    canonical: `${DATA.url}/promote`,
  },
  openGraph: {
    title: "Promote | Sanyi",
    description:
      "Sponsorship and partnership packages for tech brands — LinkedIn, X, and YouTube integrations.",
    url: `${DATA.url}/promote`,
    images: [{ url: `${DATA.url}/api/og?title=Promote&type=page`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promote | Sanyi",
    description:
      "Sponsorship and partnership packages for tech brands — LinkedIn, X, and YouTube integrations.",
    images: [`${DATA.url}/api/og?title=Promote&type=page`],
  },
};

const BLUR_FADE_DELAY = 0.04;

const platformIcons = {
  LinkedIn: Icons.linkedin,
  X: Icons.x,
  YouTube: Icons.youtube,
} as const;

function SectionHeading({
  icon: Icon,
  title,
  className,
}: {
  icon: React.ElementType;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2 mb-5", className)}>
      <Icon className="size-4 text-muted-foreground" />
      <h2 className="text-sm font-medium tracking-tight">{title}</h2>
    </div>
  );
}

export default function PromotePage() {
  const { partnerships } = DATA;

  return (
    <section className="pb-24">
      <BreadcrumbJsonLd items={[{ name: "Promote", href: "/promote" }]} />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">promote</h1>
        <p className="text-sm text-muted-foreground mb-2">
          Sponsorships & Partnerships
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-10">
          {partnerships.intro}{" "}
          <Link href="/" className="underline hover:text-foreground transition-colors">
            Back home
          </Link>
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <SectionHeading icon={Package} title="Partnership Packages" />
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {partnerships.packages.map((pkg, id) => (
          <BlurFade key={pkg.name} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
            <div
              className={cn(
                "relative h-full overflow-hidden rounded-xl border border-border bg-card/50",
                pkg.featured && "border-primary/20",
              )}
            >
              {pkg.featured && (
                <>
                  <BorderBeam
                    duration={4}
                    size={300}
                    className="from-transparent via-purple-500 to-transparent"
                  />
                  <BorderBeam
                    duration={4}
                    delay={2}
                    size={300}
                    reverse
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </>
              )}
              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden>
                      {pkg.emoji}
                    </span>
                    <h3 className="font-medium text-base tracking-tight">{pkg.name}</h3>
                  </div>
                  {pkg.featured && (
                    <Badge variant="secondary" className="shrink-0 text-[10px]">
                      <Sparkles className="size-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-4">
                  <p className="text-2xl font-semibold tracking-tight">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.platforms}</p>
                </div>

                <ul className="space-y-2.5 mt-auto">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-primary/70" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/50">
                  {pkg.platformList.map((platform) => {
                    const Icon = platformIcons[platform as keyof typeof platformIcons];
                    return (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1.5 rounded-md bg-muted/60 px-2 py-1 text-[11px] text-muted-foreground"
                      >
                        {Icon && <Icon className="size-3" />}
                        {platform}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <SectionHeading icon={Wrench} title="Partnership Requirements & Guidelines" />
        <div className="rounded-xl border border-border bg-card/40 p-6 mb-14">
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            To ensure the highest quality results for your brand and to maintain absolute trust with
            my audience, all campaigns must follow these guardrails:
          </p>
          <ul className="space-y-4">
            {partnerships.guidelines.map((guideline) => (
              <li key={guideline.title} className="flex items-start gap-3">
                <Shield className="size-4 shrink-0 mt-0.5 text-muted-foreground/70" />
                <div>
                  <p className="text-sm font-medium mb-0.5">{guideline.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guideline.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <SectionHeading icon={CreditCard} title="Payment Terms" />
        <div className="rounded-xl border border-border bg-card/40 p-6 mb-14">
          <ul className="space-y-3">
            {partnerships.paymentTerms.map((term) => (
              <li key={term.title} className="flex items-start gap-3">
                <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-primary/70" />
                <div>
                  <p className="text-sm font-medium mb-0.5">{term.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {term.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="relative overflow-hidden rounded-xl border border-border bg-card/50 p-6">
          <BorderBeam
            duration={5}
            size={350}
            className="from-transparent via-emerald-500 to-transparent"
          />
          <div className="relative text-center">
            <p className="text-sm font-medium mb-2">Ready to partner?</p>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto leading-relaxed">
              Send me a message with your product details and which package you&apos;re interested
              in. I&apos;ll get back to you within 48 hours.
            </p>
            <a
              href={`mailto:${DATA.contact.email}?subject=Partnership%20Inquiry`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted/60"
            >
              <Mail className="size-4" />
              {DATA.contact.email}
            </a>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}