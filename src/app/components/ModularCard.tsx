import { motion } from "motion/react";
import { ReactNode } from "react";

interface ModularCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "blue" | "red" | "yellow";
  moduleId?: string;
  status?: string;
}

export function ModularCard({
  children,
  className = "",
  variant = "default",
  moduleId,
  status = "ACTIVE"
}: ModularCardProps) {
  const variants = {
    default: "bg-card border-gray-300",
    blue: "bg-primary/5 border-primary/30",
    red: "bg-secondary/5 border-secondary/30",
    yellow: "bg-accent/10 border-accent/40",
  };

  return (
    <motion.div
      className={`relative p-6 border-2
        shadow-[0_8px_0_0_rgba(0,0,0,0.1),0_8px_0_2px_rgba(0,0,0,0.05)]
        ${variants[variant]}
        ${className}`}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 0 0 rgba(0,0,0,0.12), 0 12px 0 2px rgba(0,0,0,0.06)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Serial Label */}
      {moduleId && (
        <div className="absolute top-2 right-2 font-mono text-[9px] text-muted-foreground/40 tracking-wider">
          {moduleId}
        </div>
      )}

      {/* Status Indicator */}
      {status && (
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${
              status === "ACTIVE" ? "bg-green-500" :
              status === "BUILDING" ? "bg-accent" :
              "bg-muted-foreground"
            }`}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[9px] text-muted-foreground/60 uppercase">{status}</span>
        </div>
      )}

      {/* Embossed Studs */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-foreground" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Recessed Groove */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/5" />
    </motion.div>
  );
}
