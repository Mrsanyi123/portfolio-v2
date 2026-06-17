// components/meteors-background.tsx

export function MeteorsBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20" />
    </div>
  );
}