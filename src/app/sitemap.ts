import { MetadataRoute } from 'next';
import { DATA } from "@/data/resume";
import fs from 'fs';
import path from 'path';

const baseUrl = DATA.url;
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getFileModDate = (filePath: string) => {
    try {
      const stats = fs.statSync(path.join(process.cwd(), filePath));
      return new Date(stats.mtime);
    } catch {
      return new Date();
    }
  };

  return [
    {
      url: baseUrl,
      lastModified: getFileModDate('src/app/page.tsx'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: getFileModDate('src/app/videos/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: getFileModDate('src/app/projects/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/activity`,
      lastModified: getFileModDate('src/app/activity/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: getFileModDate('src/app/achievements/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/promote`,
      lastModified: getFileModDate('src/app/promote/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
