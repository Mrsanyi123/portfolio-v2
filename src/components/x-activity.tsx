"use client";

import { useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DATA } from "@/data/resume";

function TweetEmbed({ id }: { id: string }) {
  return (
    <div className="w-[320px] shrink-0 overflow-hidden rounded-xl border border-border/60 bg-card/40 shadow-sm">
      <iframe
        src={`https://platform.twitter.com/embed/Tweet.html?id=${id}&theme=auto`}
        width="320"
        height="420"
        frameBorder="0"
        scrolling="no"
        allowTransparency
        title={`Tweet ${id}`}
        className="w-full"
      />
    </div>
  );
}

export function XActivity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
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
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <h2 className="text-xl font-bold tracking-tight">X Activity</h2>
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
          {DATA.xPosts.map((id, idx) => (
            <TweetEmbed key={`x-${idx}`} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
