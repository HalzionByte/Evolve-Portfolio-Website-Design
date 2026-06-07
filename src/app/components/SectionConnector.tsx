import { motion } from "motion/react";

export function SectionConnector() {
  return (
    <div className="relative h-24 flex items-center justify-center my-8">
      {/* Horizontal Rail */}
      <div className="absolute w-full h-1 bg-border" />

      {/* Connector Nodes */}
      <div className="relative flex gap-16">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Node */}
            <div className="w-6 h-6 bg-primary border-4 border-background rounded-full relative z-10">
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </div>

            {/* Vertical Pipe */}
            <motion.div
              className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 bg-border"
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              transition={{ delay: i * 0.1 + 0.2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Serial Label */}
      <div className="absolute -bottom-2 right-4 font-mono text-[8px] text-muted-foreground/40">
        CONNECTOR-RAIL-01
      </div>
    </div>
  );
}
