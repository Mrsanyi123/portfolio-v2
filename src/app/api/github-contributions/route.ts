import { NextResponse } from "next/server";

const GITHUB_USERNAME = "mrsanyi123";
const CACHE_MAX_AGE = 1800; // 30 minutes

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=300`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
