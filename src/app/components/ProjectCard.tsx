import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ModularButton } from "./ModularButton";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: "DEPLOYED" | "BUILDING" | "ARCHIVED";
  featured?: boolean;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  status,
  featured = false,
  imageUrl
}: ProjectCardProps) {
  const statusColors = {
    DEPLOYED: "text-green-500 border-green-500",
    BUILDING: "text-accent border-accent",
    ARCHIVED: "text-muted-foreground border-muted-foreground",
  };

  return (
    <motion.div
      className={`relative bg-card border-2 border-border overflow-hidden
        ${featured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}
        shadow-[0_8px_0_0_rgba(0,0,0,0.1),0_8px_0_2px_rgba(0,0,0,0.05)]`}
      whileHover={{
        y: -8,
        boxShadow: "0 14px 0 0 rgba(0,0,0,0.14), 0 14px 0 2px rgba(0,0,0,0.07)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Project Image / Schematic */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 border-b-2 border-border overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Blueprint Style Graphic */}
            <svg className="w-full h-full opacity-10" viewBox="0 0 200 200">
              <rect x="20" y="40" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="90" y="40" width="90" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="20" y="90" width="160" height="80" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="120" y1="40" x2="120" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
            </svg>
          </div>
        )}

        {/* Module Label */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-background/90 border border-border font-mono text-[9px]">
          PROJECT-{title.substring(0, 3).toUpperCase()}
        </div>

        {/* Status Indicator */}
        <div className={`absolute top-2 left-2 px-2 py-1 bg-background/90 border-2 ${statusColors[status]} font-mono text-[10px] font-bold`}>
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-black uppercase tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Grid */}
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase mb-2 tracking-wider">
            STACK MODULES
          </div>
          <div className="grid grid-cols-3 gap-2">
            {tech.map((t, i) => (
              <div
                key={i}
                className="px-2 py-1.5 bg-muted border border-border text-center text-[10px] font-mono uppercase font-bold"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <ModularButton variant="primary" className="flex-1 text-xs py-2">
            <ExternalLink className="inline w-3 h-3 mr-1" />
            DEPLOY
          </ModularButton>
          <motion.button
            className="px-4 py-2 bg-muted border-2 border-border hover:bg-foreground hover:text-background transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Build Progress (for BUILDING status) */}
        {status === "BUILDING" && (
          <div className="pt-2 border-t border-border">
            <div className="flex gap-1 h-2">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 ${i < 7 ? 'bg-accent' : 'bg-muted/30'}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>
            <div className="text-[9px] font-mono text-muted-foreground mt-1">
              BUILD: 58% COMPLETE
            </div>
          </div>
        )}
      </div>

      {/* Corner Connectors */}
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-border opacity-20" />
    </motion.div>
  );
}
