import { Coffee } from "lucide-react";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

function HandleChip({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: "emerald" | "amber";
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full p-px",
        accent === "emerald"
          ? "bg-gradient-to-r from-emerald-400/80 via-teal-200/50 to-emerald-500/80"
          : "bg-gradient-to-r from-amber-300/90 via-yellow-100/50 to-orange-300/80",
      )}
    >
      <span className="inline-flex items-center gap-1 rounded-full bg-background/95 px-2 py-0.5 text-[11px] font-medium tracking-tight text-foreground">
        {children}
      </span>
    </span>
  );
}

export function HeroCalls({ className }: { className?: string }) {
  const { openToWork, support } = DATA.contact;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <a
        href={openToWork.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${openToWork.label}. DM ${openToWork.handle} on X`}
        className="group inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-emerald-500/25 bg-background/80 py-1 pl-2.5 pr-1 text-xs text-foreground shadow-[0_8px_30px_-18px_rgba(16,185,129,0.9)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[0_10px_28px_-14px_rgba(16,185,129,0.75)]"
      >
        <span className="relative flex size-2 shrink-0" aria-hidden>
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.55)]" />
        </span>
        <span className="font-medium tracking-tight">{openToWork.label}</span>
        <HandleChip accent="emerald">
          <Icons.x className="size-3 opacity-80" />
          {openToWork.handle}
        </HandleChip>
      </a>

      <a
        href={support.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${support.label} on Buy Me a Coffee`}
        className="group inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-background/75 py-1 pl-2.5 pr-1 text-xs text-foreground shadow-[0_8px_30px_-18px_rgba(245,158,11,0.85)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300/55 hover:shadow-[0_10px_28px_-14px_rgba(245,158,11,0.7)]"
      >
        <Coffee className="size-3.5 shrink-0 text-amber-400" aria-hidden />
        <span className="font-medium tracking-tight">{support.label}</span>
        <HandleChip accent="amber">{support.handle}</HandleChip>
      </a>
    </div>
  );
}
