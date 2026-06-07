import { motion } from "motion/react";

interface EngineeringPanelProps {
  title: string;
  data: Array<{ label: string; value: string | number }>;
  variant?: "info" | "warning" | "success";
}

export function EngineeringPanel({ title, data, variant = "info" }: EngineeringPanelProps) {
  const variantStyles = {
    info: "border-primary/40 bg-primary/5",
    warning: "border-accent/40 bg-accent/10",
    success: "border-green-500/40 bg-green-500/5",
  };

  const variantIndicator = {
    info: "bg-primary",
    warning: "bg-accent",
    success: "bg-green-500",
  };

  return (
    <motion.div
      className={`relative border-2 p-4 ${variantStyles[variant]}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-current/20">
        <motion.div
          className={`w-1.5 h-1.5 rounded-full ${variantIndicator[variant]}`}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="text-[10px] font-mono uppercase tracking-wider font-bold">
          {title}
        </div>
      </div>

      {/* Data Grid */}
      <div className="space-y-2">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="flex justify-between items-center text-xs"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <span className="font-mono text-muted-foreground uppercase text-[10px]">
              {item.label}
            </span>
            <span className="font-mono font-bold">{item.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Corner Detail */}
      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-current/20" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-current/20" />
    </motion.div>
  );
}
