import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function RotatingCube() {
  const [rotation, setRotation] = useState({ x: 20, y: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x + 0.5,
        y: prev.y + 0.3,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-primary border-4 border-primary-foreground/20 flex items-center justify-center"
          style={{ transform: 'translateZ(96px)' }}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-white/40" />
            ))}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-secondary border-4 border-secondary-foreground/20 flex items-center justify-center"
          style={{ transform: 'translateZ(-96px) rotateY(180deg)' }}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-white/40" />
            ))}
          </div>
        </div>

        {/* Right Face */}
        <div className="absolute inset-0 bg-accent border-4 border-accent-foreground/20 flex items-center justify-center"
          style={{ transform: 'rotateY(90deg) translateZ(96px)' }}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-foreground/40" />
            ))}
          </div>
        </div>

        {/* Left Face */}
        <div className="absolute inset-0 bg-card border-4 border-foreground/20 flex items-center justify-center"
          style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-foreground/40" />
            ))}
          </div>
        </div>

        {/* Top Face */}
        <div className="absolute inset-0 bg-muted border-4 border-foreground/20 flex items-center justify-center"
          style={{ transform: 'rotateX(90deg) translateZ(96px)' }}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-foreground/40" />
            ))}
          </div>
        </div>

        {/* Bottom Face */}
        <div className="absolute inset-0 bg-foreground border-4 border-white/20 flex items-center justify-center"
          style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-white/40" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
