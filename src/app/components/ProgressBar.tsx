import { motion } from "motion/react";

interface ProgressBarProps {
  value: number;
  label?: string;
  color?: "blue" | "red" | "yellow";
}

export function ProgressBar({ value, label, color = "blue" }: ProgressBarProps) {
  const colors = {
    blue: "bg-primary",
    red: "bg-secondary",
    yellow: "bg-accent",
  };

  const segments = Math.ceil(value / 5);

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono uppercase text-muted-foreground">{label}</span>
          <span className="text-xs font-mono font-bold">{value}%</span>
        </div>
      )}
      <div className="flex gap-0.5 h-4 bg-muted/30 border-2 border-border p-0.5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`flex-1 ${i < segments ? colors[color] : 'bg-transparent'}
              border-r border-background/20`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: i < segments ? 1 : 0 }}
            transition={{ delay: i * 0.02, duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
