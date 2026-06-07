import { motion } from "motion/react";
import { ProgressBar } from "./ProgressBar";

interface SkillCardProps {
  name: string;
  category: string;
  proficiency: number;
  years: number;
  tools: string[];
  status?: "ACTIVE" | "CORE" | "BUILDING";
  size?: "normal" | "wide" | "tall";
}

export function SkillCard({
  name,
  category,
  proficiency,
  years,
  tools,
  status = "ACTIVE",
  size = "normal"
}: SkillCardProps) {
  const sizeClasses = {
    normal: "col-span-1 row-span-1",
    wide: "col-span-2 row-span-1",
    tall: "col-span-1 row-span-2",
  };

  const statusColors = {
    ACTIVE: "bg-green-500",
    CORE: "bg-primary",
    BUILDING: "bg-accent",
  };

  return (
    <motion.div
      className={`relative bg-card border-2 border-border p-5
        shadow-[0_6px_0_0_rgba(0,0,0,0.08),0_6px_0_2px_rgba(0,0,0,0.04)]
        ${sizeClasses[size]}`}
      whileHover={{
        y: -6,
        boxShadow: "0 10px 0 0 rgba(0,0,0,0.12), 0 10px 0 2px rgba(0,0,0,0.06)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Module ID */}
      <div className="absolute top-2 right-2 font-mono text-[8px] text-muted-foreground/40">
        SKILL-{name.substring(0, 3).toUpperCase()}-{Math.floor(Math.random() * 1000)}
      </div>

      {/* Status Badge */}
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          className={`w-2 h-2 rounded-full ${statusColors[status]}`}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
          {status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-black mb-1 uppercase tracking-tight">
        {name}
      </h3>

      {/* Category Tag */}
      <div className="inline-block px-2 py-0.5 bg-primary/10 border border-primary/30 mb-3">
        <span className="text-[10px] font-mono uppercase text-primary font-bold">
          {category}
        </span>
      </div>

      {/* Years Badge */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-shrink-0 w-8 h-8 bg-accent flex items-center justify-center border-2 border-accent-foreground/20">
          <span className="text-sm font-black">{years}</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">YEARS EXP</span>
      </div>

      {/* Proficiency Bar */}
      <div className="mb-4">
        <ProgressBar value={proficiency} label="BUILD LEVEL" color="blue" />
      </div>

      {/* Tool Chips */}
      <div className="flex flex-wrap gap-1.5">
        {tools.slice(0, size === "wide" ? 6 : 4).map((tool, i) => (
          <div
            key={i}
            className="px-2 py-1 bg-muted border border-border text-[9px] font-mono uppercase"
          >
            {tool}
          </div>
        ))}
        {tools.length > (size === "wide" ? 6 : 4) && (
          <div className="px-2 py-1 bg-secondary/10 border border-secondary/30 text-[9px] font-mono uppercase text-secondary">
            +{tools.length - (size === "wide" ? 6 : 4)}
          </div>
        )}
      </div>

      {/* Corner Connector */}
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-border opacity-20" />
    </motion.div>
  );
}
