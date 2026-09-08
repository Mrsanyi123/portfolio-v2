"use client";

import React from "react";
import ActivityCalendar, { Skeleton } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  contributions: ContributionDay[];
  total: { lastYear: number };
}

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<ContributionsResponse | null>(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    fetch("/api/github-contributions", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, [mounted]);

  const containerHeight = "min-h-[200px]";

  return (
    <div className={`relative overflow-hidden rounded-xl ${containerHeight}`}>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-zinc-400 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-slate-300 to-transparent"
      />
      <motion.div
        className={`w-full overflow-hidden rounded-xl border border-border/60 bg-card/40 p-4 transition-all duration-300 hover:border-border hover:bg-card/70 hover:shadow-lg ${containerHeight}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {!mounted || (!data && !error) ? (
          <Skeleton loading />
        ) : error || !data ? (
          <p className="p-4 text-sm text-muted-foreground">
            Unable to load GitHub contributions right now.
          </p>
        ) : (
          <div className="overflow-x-auto p-4 -mx-1">
            <ActivityCalendar
              data={data.contributions}
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              maxLevel={4}
              totalCount={data.total.lastYear}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
