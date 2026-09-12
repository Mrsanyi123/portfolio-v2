import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { BlogMarkdown } from "@/components/blog-markdown";
import { BlogShare } from "@/components/blog-share";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllBlogSlugs, getBlogPost, getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Sanyi`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: `${DATA.url}/api/og?title=${encodeURIComponent(post.title)}&type=blog`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        `${DATA.url}/api/og?title=${encodeURIComponent(post.title)}&type=blog`,
      ],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const posts = getBlogPosts();
  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const previous = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    mainEntityOfPage: `${DATA.url}/blog/${post.slug}`,
  };

  return (
    <article className="space-y-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          blog
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <header className="space-y-5 border-b border-border/50 pb-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="text-border">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-9 border border-border/50">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <div className="leading-tight">
                <p className="text-sm font-medium">{DATA.name}</p>
                <p className="text-xs text-muted-foreground">Developer & founder</p>
              </div>
            </div>
            <BlogShare title={post.title} />
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <BlogMarkdown content={post.content} />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <footer className="space-y-6 border-t border-border/50 pt-8">
          <BlogShare title={post.title} />

          <div className="grid gap-3 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/blog/${previous.slug}`}
                className="group rounded-xl border border-border/50 p-4 transition-colors hover:border-border hover:bg-muted/30"
              >
                <p className="mb-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
                  Previous
                </p>
                <p className="text-sm font-medium transition-colors group-hover:text-foreground">
                  {previous.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group rounded-xl border border-border/50 p-4 text-right transition-colors hover:border-border hover:bg-muted/30 sm:justify-self-end sm:text-right"
              >
                <p className="mb-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
                  Next
                </p>
                <p className="text-sm font-medium transition-colors group-hover:text-foreground">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </footer>
      </BlurFade>
    </article>
  );
}
