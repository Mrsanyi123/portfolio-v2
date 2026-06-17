"use client";

import { useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DATA } from "@/data/resume";

function LinkedInEmbed({ urn }: { urn: string }) {
  const embedUrl = `https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`;

  return (
    <div className="w-[504px] shrink-0 overflow-hidden rounded-xl border border-border/60 bg-card/40 shadow-sm">
      <iframe
        src={embedUrl}
        height="541"
        width="504"
        frameBorder="0"
        allowFullScreen
        title={`LinkedIn post ${urn}`}
        className="w-full"
      />
    </div>
  );
}

export function LinkedInActivity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 520;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="w-full space-y-4 overflow-hidden">
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <h2 className="text-xl font-bold tracking-tight">LinkedIn Activity</h2>
      </div>

      <div className="group relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] scrollbar-none"
        >
          {DATA.linkedInPosts.map((urn, idx) => (
            <LinkedInEmbed key={`linkedin-${idx}`} urn={urn} />
          ))}
        </div>
      </div>
    </div>
  );
}
