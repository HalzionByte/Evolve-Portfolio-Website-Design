import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SystemMetrics() {
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memUsage, setMemUsage] = useState(62);
  const [uptime, setUptime] = useState(99.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() - 0.5) * 10)));
      setMemUsage(prev => Math.min(100, Math.max(30, prev + (Math.random() - 0.5) * 8)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-[10px] font-mono uppercase text-muted-foreground mb-3 tracking-wider">
        SYSTEM TELEMETRY
      </div>

      {/* CPU Usage */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-mono">CPU</span>
          <span className="text-xs font-mono font-bold text-primary">{cpuUsage.toFixed(1)}%</span>
        </div>
        <div className="h-2 bg-muted border border-border overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${cpuUsage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Memory Usage */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-mono">MEMORY</span>
          <span className="text-xs font-mono font-bold text-secondary">{memUsage.toFixed(1)}%</span>
        </div>
        <div className="h-2 bg-muted border border-border overflow-hidden">
          <motion.div
            className="h-full bg-secondary"
            animate={{ width: `${memUsage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Uptime */}
      <div className="pt-2 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono">UPTIME</span>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-mono font-bold text-green-500">{uptime}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
