"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostMeta;
  featured?: boolean;
  className?: string;
}

export function BlogPostCard({
  post,
  featured = false,
  className,
}: BlogPostCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group relative block overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-6 transition-all duration-300 hover:border-border hover:bg-muted/35 sm:p-8",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-foreground/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-background">
              Featured
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="text-border">·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground sm:text-3xl">
              {post.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              Read article
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col gap-2 border-b border-border/40 py-5 transition-colors last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8",
        className
      )}
    >
      <div className="min-w-0 space-y-1.5">
        <h3 className="text-[15px] font-medium tracking-tight transition-colors group-hover:text-foreground sm:text-base">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {post.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground/80">
        <time dateTime={post.date} className="whitespace-nowrap tabular-nums">
          {formatDate(post.date)}
        </time>
        <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
        <span className="whitespace-nowrap">{post.readingTime}</span>
        <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
