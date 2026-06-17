import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import Link from "next/link";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from "next";
import ShinyButton from "@/components/ui/shiny-button";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import { LinkedInActivity } from "@/components/linkedin-activity";
import { XActivity } from "@/components/x-activity";
import { AgeCounter } from "@/components/age-counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlipAvatar } from "@/components/flip-avatar";
import { GitHubHoverCard } from "@/components/github-hover-card";
import { XHoverCard } from "@/components/x-hover-card";
import { LinkedInHoverCard } from "@/components/linkedin-hover-card";

const BLUR_FADE_DELAY = 0.04;
export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.summary,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: `${DATA.url}/portfolio.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.summary,
    creator: "@sanyi",
    images: [`${DATA.url}/portfolio.png`],
  },
};

const GithubContributions = dynamic(
  () =>
    import("@/components/github-calendar").then(
      (mod) => mod.GithubContributions,
    ),
  {
    ssr: false,
    loading: () => <GithubSkeleton />,
  },
);

function SectionLabel({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
      <span className="h-px w-4 bg-border" />
      {label}
    </span>
  );
}

export default function Page() {
  const featuredProjects = DATA.projects.slice(0, 3);

  return (
    <>
      <main className="flex min-h-[100dvh] flex-col space-y-12 sm:space-y-14">
        <PersonSchema />

        {/* ─── HERO ─── */}
        <section id="hero">
          <div className="mx-auto w-full">
            <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <div className="flex min-w-0 flex-1 flex-col gap-5 sm:gap-6">
                <div className="space-y-4">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`hi, i'm ${DATA.name.toLowerCase()}`}
                  />
                  <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                    <AgeCounter />
                  </BlurFade>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {DATA.heroIntro.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < DATA.heroIntro.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 3.6}>
                  <div className="flex flex-wrap items-center gap-3">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar !== false)
                  .map(([name, social]) => {
                    const socialLink = (
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border/60 bg-card/40 p-2.5 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-card hover:text-foreground"
                        aria-label={name}
                      >
                        <social.icon className="size-5" />
                      </a>
                    );

                    if (name === "GitHub") {
                      return (
                        <GitHubHoverCard key={name}>
                          {socialLink}
                        </GitHubHoverCard>
                      );
                    }

                    if (name === "X") {
                      return <XHoverCard key={name}>{socialLink}</XHoverCard>;
                    }

                    if (name === "LinkedIn") {
                      return (
                        <LinkedInHoverCard key={name}>
                          {socialLink}
                        </LinkedInHoverCard>
                      );
                    }

                    return (
                      <Tooltip key={name}>
                        <TooltipTrigger asChild>{socialLink}</TooltipTrigger>
                        <TooltipContent>
                          <p>{social.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={BLUR_FADE_DELAY * 0.8} className="shrink-0 self-center sm:self-auto">
                <div className="profile-wrapper">
                  <FlipAvatar
                    src={DATA.avatarUrl}
                    hoverSrc="/sanyi1.jpg"
                    alt={DATA.name}
                    fallback={DATA.initials}
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <SectionLabel label="Stack" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">
                What I Work With
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="inline-flex items-center gap-1.5 border border-border/50 px-3 py-1.5 text-sm"
                  >
                    {"customIcon" in skill ? (
                      <skill.customIcon className="size-4" />
                    ) : (
                      <FontAwesomeIcon icon={skill.icon} className="size-4" />
                    )}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <SectionLabel label="Builds" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">
                Featured Projects
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                  <div
                    key={project.title}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <ProjectCard
                      {...project}
                      tags={Array.from(project.technologies)}
                    />
                  </div>
                ))}
              </div>
              <Link href="/projects" className="mt-4 block">
                <ShinyButton className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold">
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>

        {/* ─── WORK ─── */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <SectionLabel label="Experience" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Work</h2>
            </BlurFade>
            <div className="space-y-3">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 11.5 + id * 0.05}
                >
                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end}`}
                    description={work.description}
                    redacted={(work as { redacted?: boolean }).redacted}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── X ─── */}
        <section id="x-activity">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <XActivity />
          </BlurFade>
        </section>

        {/* ─── LINKEDIN ─── */}
        <section id="linkedin">
          <BlurFade delay={BLUR_FADE_DELAY * 12.5}>
            <LinkedInActivity />
          </BlurFade>
        </section>

        {/* ─── GITHUB (moved down) ─── */}
        <section id="contributions">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <SectionLabel label="Open Source" />
            <h2 className="mt-1.5 text-xl font-bold tracking-tight">
              GitHub Contributions
            </h2>
            <div className="mt-3">
              <GithubContributions />
            </div>
          </BlurFade>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/70 via-card/40 to-transparent py-12 text-center">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.12) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                <SectionLabel label="Contact" />
                <p className="text-xl text-muted-foreground">
                  Got a project or just want to chat?
                </p>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-background/70 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-background"
                >
                  <Avatar className="size-6">
                    <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                  Say hello
                </a>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-border/40 pt-8 pb-4">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">{DATA.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  16 y.o developer & founder
                  <br />
                  Building Shiplog & YScroll
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                  Links
                </p>
                <div className="flex flex-col gap-1.5">
                  {DATA.navbar.slice(1).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                  Social
                </p>
                <div className="flex flex-col gap-1.5">
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar !== false)
                    .map(([name, social]) => (
                      <a
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
                      >
                        {social.name}
                      </a>
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border/30 pt-6">
              <p className="text-xs text-muted-foreground/60">
                © {new Date().getFullYear()} {DATA.name}. Built with Next.js.
              </p>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}
