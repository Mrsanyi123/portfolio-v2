"use client";

import { useEffect, useState } from "react";

const calculateYears = () => {
  const birthDate = new Date("2009-09-08T00:00:00");
  const now = new Date();
  const ageInYears =
    (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return ageInYears.toFixed(9);
};

export function AgeCounter() {
  const [years, setYears] = useState<string | null>(null);

  useEffect(() => {
    // Only calculate on client to avoid hydration mismatch
    setYears(calculateYears());

    const interval = setInterval(() => {
      setYears(calculateYears());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // show placeholder until mounted to prevent hydration mismatch
  if (years === null) {
    return (
      <div className="text-sm font-bold min-h-[20px]">
        <span className="tabular-nums opacity-0">
          16.000000000 years old · developer
        </span>
      </div>
    );
  }

  return (
    <div className="text-sm font-bold min-h-[20px]">
      <span className="tabular-nums">{years} years old · developer</span>
    </div>
  );
}
