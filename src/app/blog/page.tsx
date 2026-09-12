import BlurFade from "@/components/magicui/blur-fade";
import { BlogPostCard } from "@/components/blog-post-card";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { getBlogPosts } from "@/lib/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and notes from Sanyi on shipping products, building in public, and growing as a young founder.",
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
  openGraph: {
    title: "Blog | Sanyi",
    description:
      "Essays and notes from Sanyi on shipping products, building in public, and growing as a young founder.",
    url: `${DATA.url}/blog`,
    images: [
      {
        url: `${DATA.url}/api/og?title=Blog&type=page`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sanyi",
    description:
      "Essays and notes from Sanyi on shipping products, building in public, and growing as a young founder.",
    images: [`${DATA.url}/api/og?title=Blog&type=page`],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <section className="space-y-10">
      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }]} />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-3">
          <h1 className="font-medium text-2xl tracking-tighter">blog</h1>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Thoughts on shipping products, building in public, and growing as a
            developer — written while still figuring things out.
          </p>
        </div>
      </BlurFade>

      {posts.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="rounded-2xl border border-dashed border-border/60 px-6 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              No posts yet. Check back soon.
            </p>
          </div>
        </BlurFade>
      ) : (
        <>
          {featured && (
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <BlogPostCard post={featured} featured />
            </BlurFade>
          )}

          {rest.length > 0 && (
            <div className="space-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
                    All posts
                  </h2>
                  <div className="h-px flex-1 bg-border/50" />
                  <span className="text-xs tabular-nums text-muted-foreground/60">
                    {posts.length}
                  </span>
                </div>
              </BlurFade>

              <div>
                {rest.map((post, index) => (
                  <BlurFade
                    key={post.slug}
                    delay={BLUR_FADE_DELAY * 3.5 + index * 0.05}
                  >
                    <BlogPostCard post={post} />
                  </BlurFade>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
