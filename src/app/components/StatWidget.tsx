import { motion } from "motion/react";
import { ReactNode } from "react";

interface StatWidgetProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  color?: "blue" | "red" | "yellow" | "gray";
}

export function StatWidget({ icon, value, label, color = "blue" }: StatWidgetProps) {
  const colors = {
    blue: "border-primary/40 bg-primary/10 text-primary",
    red: "border-secondary/40 bg-secondary/10 text-secondary",
    yellow: "border-accent/40 bg-accent/20 text-accent-foreground",
    gray: "border-muted-foreground/40 bg-muted text-foreground",
  };

  return (
    <motion.div
      className={`relative border-2 p-4 ${colors[color]}
        shadow-[0_4px_0_0_rgba(0,0,0,0.08)]`}
      whileHover={{ y: -2, boxShadow: "0 6px 0 0 rgba(0,0,0,0.12)" }}
    >
      {/* Icon */}
      <div className="mb-2 opacity-60">
        {icon}
      </div>

      {/* Value */}
      <div className="text-3xl font-black mb-1">
        {value}
      </div>

      {/* Label */}
      <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">
        {label}
      </div>

      {/* Corner Detail */}
      <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-current opacity-20" />
    </motion.div>
  );
}
