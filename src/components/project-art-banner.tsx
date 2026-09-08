"use client";

import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  Chrome,
  GraduationCap,
  MessageSquareQuote,
} from "lucide-react";

export type ProjectBannerVariant =
  | "extension"
  | "education"
  | "ai"
  | "feedback";

const bannerConfig: Record<
  ProjectBannerVariant,
  {
    gradient: string;
    accent: string;
    Icon: typeof Chrome;
    pattern: string;
  }
> = {
  extension: {
    gradient: "from-violet-600/25 via-indigo-500/10 to-card/40",
    accent: "text-violet-400/80",
    Icon: Chrome,
    pattern:
      "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(270 60% 50% / 0.12) 0%, transparent 45%)",
  },
  education: {
    gradient: "from-emerald-600/25 via-teal-500/10 to-card/40",
    accent: "text-emerald-400/80",
    Icon: GraduationCap,
    pattern:
      "radial-gradient(circle at 15% 50%, hsl(160 60% 40% / 0.1) 0%, transparent 50%), radial-gradient(circle at 85% 30%, hsl(180 50% 45% / 0.08) 0%, transparent 40%)",
  },
  ai: {
    gradient: "from-amber-500/25 via-orange-500/10 to-card/40",
    accent: "text-amber-400/80",
    Icon: BrainCircuit,
    pattern:
      "radial-gradient(circle at 30% 30%, hsl(35 90% 55% / 0.1) 0%, transparent 45%), radial-gradient(circle at 70% 70%, hsl(25 80% 50% / 0.08) 0%, transparent 40%)",
  },
  feedback: {
    gradient: "from-rose-500/25 via-pink-500/10 to-card/40",
    accent: "text-rose-400/80",
    Icon: MessageSquareQuote,
    pattern:
      "radial-gradient(circle at 25% 75%, hsl(350 70% 55% / 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 25%, hsl(330 60% 50% / 0.08) 0%, transparent 45%)",
  },
};

interface ProjectArtBannerProps {
  variant: ProjectBannerVariant;
  title: string;
  className?: string;
}

export function ProjectArtBanner({
  variant,
  title,
  className,
}: ProjectArtBannerProps) {
  const { gradient, accent, Icon, pattern } = bannerConfig[variant];
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative flex h-44 w-full items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className,
      )}
      style={{ backgroundImage: pattern }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-2xl border border-border/40 bg-background/40 backdrop-blur-sm shadow-sm",
            accent,
          )}
        >
          <Icon className="size-6" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
          {title}        </span>
      </div>
    </div>
  );
}
