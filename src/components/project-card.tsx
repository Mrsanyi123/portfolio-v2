"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, getYouTubeVideoId } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { BorderBeam } from "@/components/magicui/border-beam";
import { VideoPlayerModal } from "./video-player-modal";
import {
  ProjectArtBanner,
  type ProjectBannerVariant,
} from "./project-art-banner";
import { useState, useRef } from "react";
import { Play, ExternalLink } from "lucide-react";

function isYouTubeUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  banner?: ProjectBannerVariant;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  banner,
  links,
  className,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const youtubeId = video && isYouTubeUrl(video) ? getYouTubeVideoId(video) : null;
  const isLocalVideo = Boolean(video && !youtubeId);
  const hasMediaPreview = Boolean(video || image || banner);

  const handleCardClick = (e: React.MouseEvent) => {
    if (video) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleMouseEnter = () => {
    if (youtubeId) {
      setIsPreviewActive(true);
      return;
    }
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (youtubeId) {
      setIsPreviewActive(false);
      return;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const renderMedia = () => {
    if (youtubeId && video) {
      return (
        <div
          className="relative block h-44 cursor-pointer overflow-hidden"
          onClick={handleCardClick}
        >
          {isPreviewActive ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&playsinline=1`}
              title={`${title} preview`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              className="mx-auto h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full border border-white/20 bg-black/50 p-3 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="h-5 w-5 fill-white text-white" />
            </div>
          </div>
        </div>
      );
    }

    if (isLocalVideo && video) {
      return (
        <div
          className="relative block cursor-pointer overflow-hidden"
          onClick={handleCardClick}
        >
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            preload="metadata"
            className="pointer-events-none mx-auto h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full border border-white/20 bg-black/50 p-3 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="h-5 w-5 fill-white text-white" />
            </div>
          </div>
        </div>
      );
    }

    if (banner) {
      return (
        <Link href={href || "#"} className="block cursor-pointer">
          <ProjectArtBanner variant={banner} title={title} />
        </Link>
      );
    }

    if (image) {
      return (
        <Link
          href={href || "#"}
          className="relative block cursor-pointer overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-44 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      );
    }

    return null;
  };

  return (
    <>
      <Card
        className={cn(
          "group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border hover:bg-card/80 hover:shadow-xl",
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hasMediaPreview && renderMedia()}
        <CardHeader className="px-4 pt-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
              {href && !video && (
                <ExternalLink className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
            <time className="font-sans text-xs text-muted-foreground">
              {dates}
            </time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-4">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex max-w-full flex-wrap gap-1 overflow-hidden">
              {tags?.map((tag) => (
                <Badge
                  className="whitespace-nowrap px-1.5 py-0.5 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-4 pb-4">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((linkItem, idx) => (
                <Link href={linkItem?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {linkItem.icon}
                    {linkItem.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
        <BorderBeam
          duration={4}
          size={300}
          reverse
          className="from-transparent via-green-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </Card>

      {video && (
        <VideoPlayerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl={video}
          videoTitle={title}
        />
      )}
    </>
  );
}
