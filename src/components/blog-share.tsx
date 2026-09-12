"use client";

import { usePathname } from "next/navigation";
import { Link2, Check } from "lucide-react";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

interface BlogShareProps {
  title: string;
  className?: string;
}

export function BlogShare({ title, className }: BlogShareProps) {
  const pathname = usePathname();
  const url = `${DATA.url}${pathname}`;
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="mr-1 text-xs text-muted-foreground">Share</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex size-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground"
        aria-label="Share on X"
      >
        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.227-8.26L1.254 2.25H8.08l4.413 5.719L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex size-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground"
        aria-label="Share on LinkedIn"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
          <path d="M7 10v7" />
          <path d="M11 10v7" />
          <path d="M11 13a3 3 0 0 1 6 0v4" />
        </svg>
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex size-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground"
        aria-label="Copy link"
      >
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
      </button>
    </div>
  );
}
