"use client";

import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

interface BlogMarkdownProps {
  content: string;
  className?: string;
}

export function BlogMarkdown({ content, className }: BlogMarkdownProps) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl",
        "prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-lg",
        "prose-p:leading-relaxed prose-p:text-muted-foreground",
        "prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-border hover:prose-a:decoration-foreground",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-li:text-muted-foreground prose-li:marker:text-muted-foreground/60",
        "prose-blockquote:border-l-border prose-blockquote:text-muted-foreground",
        "prose-hr:border-border/60",
        "prose-code:rounded-md prose-code:bg-muted/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:rounded-xl prose-pre:border prose-pre:border-border/50 prose-pre:bg-muted/30",
        className
      )}
    >
      <Markdown>{content}</Markdown>
    </div>
  );
}
