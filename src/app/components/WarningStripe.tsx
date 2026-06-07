export function WarningStripe() {
  return (
    <div className="relative h-8 overflow-hidden">
      <div
        className="absolute inset-0 flex"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            #FFD700,
            #FFD700 20px,
            #1A1A1A 20px,
            #1A1A1A 40px
          )`
        }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
          CAUTION: ENGINEERING IN PROGRESS
        </span>
      </div>
    </div>
  );
}
