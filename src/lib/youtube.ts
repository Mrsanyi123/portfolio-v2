export interface YouTubeVideo {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  date: string;
  videoId: string;
  durationSeconds?: number;
}

interface YouTubePlaylistItem {
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      maxres?: { url: string };
      standard?: { url: string };
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubePlaylistResponse {
  items: YouTubePlaylistItem[];
  nextPageToken?: string;
}

const DEFAULT_CHANNEL_ID = "UCDzaFsQJzkL5606KlsfbKQg";
const SHORTS_MAX_DURATION_SECONDS = 60;

function parseIsoDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const seconds = Number(match[3] ?? 0);

  return hours * 3600 + minutes * 60 + seconds;
}

function isLikelyShort(title: string, durationSeconds?: number): boolean {
  if (durationSeconds !== undefined) {
    return durationSeconds <= SHORTS_MAX_DURATION_SECONDS;
  }

  const lowerTitle = title.toLowerCase();
  if (/#shorts\b/.test(lowerTitle)) return true;

  const hashtagCount = (title.match(/#\w+/g) ?? []).length;
  return hashtagCount >= 3 && title.length < 80;
}

function filterOutShorts(videos: YouTubeVideo[]): YouTubeVideo[] {
  return videos.filter((video) => !isLikelyShort(video.title, video.durationSeconds));
}

async function attachVideoDurations(
  apiKey: string,
  videos: YouTubeVideo[],
): Promise<YouTubeVideo[]> {
  if (videos.length === 0) return videos;

  const enriched = [...videos];

  for (let index = 0; index < enriched.length; index += 50) {
    const batch = enriched.slice(index, index + 50);
    const ids = batch.map((video) => video.videoId).join(",");
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "contentDetails");
    url.searchParams.set("id", ids);
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) continue;

    const data: {
      items?: Array<{
        id: string;
        contentDetails?: { duration?: string };
      }>;
    } = await res.json();

    const durations = new Map(
      (data.items ?? []).map((item) => [
        item.id,
        parseIsoDuration(item.contentDetails?.duration ?? "PT0S"),
      ]),
    );

    batch.forEach((video) => {
      const durationSeconds = durations.get(video.videoId);
      if (durationSeconds !== undefined) {
        video.durationSeconds = durationSeconds;
      }
    });
  }

  return enriched;
}

function getBestThumbnail(
  thumbnails: YouTubePlaylistItem["snippet"]["thumbnails"],
): string {
  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    ""
  );
}

function getUploadsPlaylistId(channelId: string): string {
  return "UU" + channelId.slice(2);
}

function truncateDescription(desc: string, maxLength = 150): string {
  const firstLine = desc.split("\n")[0];
  if (firstLine.length <= maxLength) return firstLine;
  return firstLine.slice(0, maxLength).trimEnd() + "...";
}

function decodeXml(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function fetchYouTubeVideosFromRss(
  channelId: string,
  maxResults = 50,
): Promise<YouTubeVideo[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(feedUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.error(`YouTube RSS error: ${res.status} ${res.statusText}`);
    return [];
  }

  const xml = await res.text();
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries.slice(0, maxResults).map((entry) => {
    const videoId =
      entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? "";
    const title = decodeXml(
      entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? "Untitled",
    );
    const published =
      entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
    const description = decodeXml(
      entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ??
        "",
    );
    const thumbnail =
      entry.match(/<media:thumbnail url="([^"]+)"/)?.[1]?.replace(
        /i\d\.ytimg\.com/,
        "i.ytimg.com",
      ) ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    return {
      title,
      description: truncateDescription(description),
      thumbnail,
      url: `https://youtu.be/${videoId}`,
      date: published.split("T")[0],
      videoId,
    };
  });
}

async function fetchYouTubeVideosFromApi(
  apiKey: string,
  channelId: string,
  maxResults = 50,
): Promise<YouTubeVideo[]> {
  const playlistId = getUploadsPlaylistId(channelId);
  const allItems: YouTubePlaylistItem[] = [];
  let pageToken: string | undefined;

  while (allItems.length < maxResults) {
    const perPage = Math.min(50, maxResults - allItems.length);
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", String(perPage));
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error(`YouTube API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const data: YouTubePlaylistResponse = await res.json();
    if (!data.items?.length) break;

    allItems.push(...data.items);
    pageToken = data.nextPageToken;
    if (!pageToken) break;
  }

  return allItems
    .filter(
      (item) =>
        item.snippet.title !== "Private video" &&
        item.snippet.title !== "Deleted video",
    )
    .map((item) => ({
      title: item.snippet.title,
      description: truncateDescription(item.snippet.description),
      thumbnail: getBestThumbnail(item.snippet.thumbnails),
      url: `https://youtu.be/${item.snippet.resourceId.videoId}`,
      date: item.snippet.publishedAt.split("T")[0],
      videoId: item.snippet.resourceId.videoId,
    }));
}

export async function fetchYouTubeVideos(
  maxResults = 50,
): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? DEFAULT_CHANNEL_ID;

  try {
    let videos: YouTubeVideo[] = [];

    if (apiKey) {
      const apiVideos = await fetchYouTubeVideosFromApi(
        apiKey,
        channelId,
        maxResults,
      );
      if (apiVideos.length > 0) {
        videos = await attachVideoDurations(apiKey, apiVideos);
      }
    }

    if (videos.length === 0) {
      videos = await fetchYouTubeVideosFromRss(channelId, maxResults);
    }

    return filterOutShorts(videos);
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    return [];
  }
}
