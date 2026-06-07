import { motion } from "motion/react";

export function EngineeringBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Stud Pattern Base */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A1A 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Blueprint Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0055BF" strokeWidth="0.5"/>
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0055BF" strokeWidth="0.25" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Connector Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/20 border-2 border-primary/40"
          style={{
            left: `${10 + (i * 8)}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Serial Numbers */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/30 space-y-1">
        <div>SYS-ID: A7X-9214</div>
        <div>BUILD: 2026.05.20</div>
        <div>REVISION: 4.2.1</div>
      </div>

      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground/30 space-y-1">
        <div>GRID: 12-COL</div>
        <div>UNIT: MODULAR</div>
        <div>STATUS: ACTIVE</div>
      </div>

      {/* Coordinate Labels */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 font-mono text-[8px] text-muted-foreground/20 space-y-8">
        {['A', 'B', 'C', 'D', 'E'].map((letter) => (
          <div key={letter}>{letter}</div>
        ))}
      </div>

      {/* Animated Circuit Paths */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 0 100 L 200 100 L 200 200 L 400 200"
          fill="none"
          stroke="#0055BF"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 800 50 L 600 50 L 600 150 L 400 150"
          fill="none"
          stroke="#C91A09"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
