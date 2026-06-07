import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface BuildStep {
  name: string;
  status: "complete" | "active" | "pending";
}

export function BuildProgress() {
  const [steps, setSteps] = useState<BuildStep[]>([
    { name: "Dependencies", status: "complete" },
    { name: "Type Check", status: "complete" },
    { name: "Build", status: "active" },
    { name: "Test", status: "pending" },
    { name: "Deploy", status: "pending" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps(prev => {
        const activeIndex = prev.findIndex(s => s.status === "active");
        if (activeIndex === -1 || activeIndex === prev.length - 1) return prev;

        return prev.map((step, i) => {
          if (i === activeIndex) return { ...step, status: "complete" as const };
          if (i === activeIndex + 1) return { ...step, status: "active" as const };
          return step;
        });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    complete: "bg-green-500 border-green-600",
    active: "bg-accent border-accent animate-pulse",
    pending: "bg-muted border-border",
  };

  const statusIcons = {
    complete: "✓",
    active: "◆",
    pending: "○",
  };

  return (
    <div className="space-y-2">
      <div className="text-[10px] font-mono uppercase text-muted-foreground mb-3 tracking-wider">
        BUILD PIPELINE
      </div>
      {steps.map((step, i) => (
        <motion.div
          key={step.name}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={`w-5 h-5 border-2 flex items-center justify-center text-[10px] font-bold ${statusColors[step.status]}`}>
            {statusIcons[step.status]}
          </div>
          <div className="flex-1">
            <div className="text-xs font-mono">{step.name}</div>
          </div>
          {step.status === "active" && (
            <div className="flex gap-0.5">
              {[...Array(3)].map((_, j) => (
                <motion.div
                  key={j}
                  className="w-1 h-3 bg-accent"
                  animate={{ scaleY: [1, 0.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.2 }}
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
