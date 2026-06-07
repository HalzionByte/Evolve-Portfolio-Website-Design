import { motion } from "motion/react";

interface StatusBadgeProps {
  status: "VERIFIED" | "ACTIVE" | "CORE" | "LOCKED" | "ONLINE";
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const statusConfig = {
    VERIFIED: { bg: "bg-green-500", text: "text-white", icon: "✓" },
    ACTIVE: { bg: "bg-primary", text: "text-white", icon: "●" },
    CORE: { bg: "bg-secondary", text: "text-white", icon: "◆" },
    LOCKED: { bg: "bg-accent", text: "text-foreground", icon: "🔒" },
    ONLINE: { bg: "bg-green-500", text: "text-white", icon: "●" },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1.5 ${config.bg} ${config.text} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="text-xs"
        animate={{ opacity: status === "ONLINE" || status === "ACTIVE" ? [1, 0.5, 1] : 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {config.icon}
      </motion.span>
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
        {status}
      </span>
    </motion.div>
  );
}
