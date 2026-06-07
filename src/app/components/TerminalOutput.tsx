import { motion } from "motion/react";
import { useEffect, useState } from "react";

const terminalLines = [
  "$ initializing system modules...",
  "> loading core dependencies... [OK]",
  "> compiling skill matrix... [OK]",
  "> deploying project modules... [OK]",
  "> system status: ONLINE",
  "$ ready for engineering tasks",
];

export function TerminalOutput() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < terminalLines.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-foreground/95 border-2 border-primary p-4 font-mono text-xs overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="text-primary/60 uppercase tracking-wider">SYSTEM TERMINAL</div>
      </div>

      {/* Terminal Output */}
      <div className="space-y-1 text-green-400">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {line}
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && (
          <motion.span
            className="inline-block w-2 h-3 bg-green-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>
    </div>
  );
}
