interface AchievementCardProps {
  title: string;
  subtitle: string;
  description?: string;
}

export function AchievementCard({
  title,
  subtitle,
  description,
}: AchievementCardProps) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/30 p-4 transition-colors hover:bg-card/50">
      <h3 className="font-semibold leading-snug">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
          {description}
        </p>
      )}
    </div>
  );
}
