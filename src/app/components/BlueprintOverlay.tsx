import { motion } from "motion/react";

interface TechSpec {
  dimension: string;
  value: string;
}

interface BlueprintOverlayProps {
  title: string;
  specs: TechSpec[];
  className?: string;
}

export function BlueprintOverlay({ title, specs, className = "" }: BlueprintOverlayProps) {
  return (
    <motion.div
      className={`relative bg-primary/5 border-2 border-primary/30 p-6 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 85, 191, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 85, 191, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Title */}
      <div className="relative z-10 mb-4 pb-3 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 border-2 border-primary bg-primary/20" />
          <h3 className="text-sm font-mono uppercase font-bold text-primary tracking-wider">
            {title}
          </h3>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="relative z-10 space-y-3">
        {specs.map((spec, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Dimension Line */}
            <div className="flex-shrink-0 flex items-center gap-2 w-32">
              <div className="w-2 h-px bg-primary/40" />
              <span className="text-[10px] font-mono uppercase text-primary/70">
                {spec.dimension}
              </span>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 text-primary/40 text-xs">→</div>

            {/* Value */}
            <div className="flex-1">
              <div className="text-xs font-mono font-bold text-foreground">
                {spec.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Corner Measurements */}
      <div className="absolute top-2 right-2 flex gap-1">
        <div className="w-1 h-1 bg-primary/30" />
        <div className="w-1 h-1 bg-primary/30" />
        <div className="w-1 h-1 bg-primary/30" />
      </div>
      <div className="absolute bottom-2 left-2 flex gap-1">
        <div className="w-1 h-1 bg-primary/30" />
        <div className="w-1 h-1 bg-primary/30" />
        <div className="w-1 h-1 bg-primary/30" />
      </div>

      {/* Measurement Marks */}
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-12 border-l-2 border-t-2 border-b-2 border-primary/20" />
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-12 border-r-2 border-t-2 border-b-2 border-primary/20" />
    </motion.div>
  );
}
