import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  image?: string;
  content: string;
  readingMinutes: number;
  readingTime: string;
  headings: BlogHeading[];
};

export type BlogPostMeta = Omit<BlogPost, "content" | "headings">;

type BlogFrontmatter = {
  title?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  featured?: boolean;
  published?: boolean;
  draft?: boolean;
  image?: string;
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatCompactDate(date: string) {
  const parsed = parseBlogDate(date);
  const day = String(parsed.getDate()).padStart(2, "0");
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const year = String(parsed.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
}

export function formatLongDate(date: string) {
  return parseBlogDate(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.published);
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => getPostFromFile(file))
    .filter((post): post is BlogPost => Boolean(post))
    .sort(
      (a, b) =>
        parseBlogDate(b.publishedAt).getTime() -
        parseBlogDate(a.publishedAt).getTime(),
    );
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((post) => post.slug === slug) ?? null;
}

export function getBlogTags(posts: BlogPostMeta[] = getPublishedPosts()) {
  return [...new Set(posts.flatMap((post) => post.tags))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getAdjacentPosts(slug: string) {
  const posts = getPublishedPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export function getRelatedPosts(slug: string, limit = 2) {
  const posts = getPublishedPosts();
  const current = posts.find((post) => post.slug === slug);
  if (!current) return [];

  return posts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      overlap: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map(({ post }) => post);
}

export function toPostMeta(post: BlogPost): BlogPostMeta {
  const { content: _content, headings: _headings, ...meta } = post;
  return meta;
}

function getPostFromFile(file: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;

  if (!frontmatter.title || !frontmatter.publishedAt) {
    return null;
  }

  const published = frontmatter.draft ? false : frontmatter.published !== false;
  const readingMinutes = getReadingMinutes(content);

  return {
    slug: path.basename(file, path.extname(file)),
    title: frontmatter.title,
    summary: frontmatter.summary ?? "",
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    tags: frontmatter.tags ?? [],
    featured: Boolean(frontmatter.featured),
    published,
    image: frontmatter.image,
    content,
    readingMinutes,
    readingTime: `${readingMinutes} min read`,
    headings: getHeadings(content),
  };
}

function getReadingMinutes(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 238));
}

function getHeadings(content: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const pattern = /^(#{2,3})\s+(.+)$/gm;

  for (const match of content.matchAll(pattern)) {
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    headings.push({ id: slugify(text), text, level });
  }

  return headings;
}

function parseBlogDate(date: string) {
  return new Date(date.includes("T") ? date : `${date}T00:00:00`);
}
