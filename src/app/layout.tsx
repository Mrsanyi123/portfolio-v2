import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import { CommandPalette } from "@/components/command-palette";
import { SoundProvider } from "@/components/sound-provider";
import { BackToTop } from "@/components/back-to-top";
import { DomainGuardedAnalytics } from "@/components/domain-guarded-analytics";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.name} is a 16 year old developer and founder from Ethiopia, building products like Shiplog and YScroll with React, Next.js, and TypeScript.`,
  keywords: [
    DATA.name,
    "Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Young Developer",
    "Tech Content Creator",
    "Web Developer Ethiopia",
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  publisher: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} | Developer`,
    description:
      "16 year old developer and founder building Shiplog, YScroll, and modern web apps with React, Next.js, and TypeScript.",
    url: DATA.url,
    siteName: `${DATA.name} - Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Developer`,
    description: "16 year old developer and founder building impactful products and tech content.",
    images: [`${DATA.url}/og.png`],
    creator: "@imsanyidiriba",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicons/favicon.ico", sizes: "any" }],
    shortcut: [{ url: "/favicons/favicon.ico" }],
    apple: [{ url: "/favicons/favicon.ico" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: DATA.name,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/favicon.ico",
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, "font-sans antialiased")}>
        {/* Background container */}
        <div className="fixed inset-0 z-[-2]">
          <PageBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto pt-20 sm:pt-24 pb-24 px-6">
          <DomainGuardedAnalytics gaId="G-XVF0SFD4GW" />
          <JsonLd />
          <ScrollProgress />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SoundProvider>
              <TooltipProvider delayDuration={0}>
                {children}
                <Analytics />
                <SpeedInsights />
                <Navbar />
                {/* <CommandPalette /> */}
                <BackToTop />
                <SmoothCursor />
              </TooltipProvider>
            </SoundProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
