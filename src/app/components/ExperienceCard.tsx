import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface ExperienceImage {
  src: string;
  label: string;
}

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
  status?: "ACTIVE" | "COMPLETED" | "ONGOING";
  images?: ExperienceImage[];
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  tech = [],
  status = "COMPLETED",
  images = [],
}: ExperienceCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const statusColors = {
    ACTIVE: "text-green-500 border-green-500",
    COMPLETED: "text-primary border-primary",
    ONGOING: "text-accent border-accent",
  };

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <motion.div
      className="relative bg-card border-2 border-border overflow-hidden
        shadow-[0_8px_0_0_rgba(0,0,0,0.1),0_8px_0_2px_rgba(0,0,0,0.05)]"
      whileHover={{
        y: -8,
        boxShadow:
          "0 14px 0 0 rgba(0,0,0,0.14), 0 14px 0 2px rgba(0,0,0,0.07)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Image Gallery / Blueprint Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 border-b-2 border-border overflow-hidden">
        {images.length > 0 ? (
          <>
            <img
              src={images[currentImage].src}
              alt={images[currentImage].label}
              className="w-full h-full object-cover"
            />
            {/* Image label */}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/90 border border-border font-mono text-[9px]">
              {images[currentImage].label} ({currentImage + 1}/{images.length})
            </div>
            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/90 border-2 border-border hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/90 border-2 border-border hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 right-2 flex gap-1">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 border border-border transition-colors ${
                      i === currentImage ? "bg-primary" : "bg-background/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Blueprint-style placeholder graphic */}
            <svg
              className="w-full h-full opacity-10"
              viewBox="0 0 200 200"
            >
              <rect x="30" y="30" width="140" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="30" y="70" width="65" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="105" y="70" width="65" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="30" y="130" width="140" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="30" x2="100" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
            </svg>
          </div>
        )}

        {/* Module Label */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-background/90 border border-border font-mono text-[9px]">
          EXP-{company.substring(0, 3).toUpperCase()}
        </div>

        {/* Status Indicator */}
        <div
          className={`absolute top-2 left-2 px-2 py-1 bg-background/90 border-2 ${statusColors[status]} font-mono text-[10px] font-bold`}
        >
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Role Title */}
        <h3 className="text-2xl font-black uppercase tracking-tight">
          {role}
        </h3>

        {/* Company & Period Badges */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 border border-primary/30">
            <Briefcase className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-mono uppercase text-primary font-bold">
              {company}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-secondary/10 border border-secondary/30">
            <Calendar className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-mono uppercase text-secondary font-bold">
              {period}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase mb-2 tracking-wider">
              TECH UTILIZED
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <div
                  key={i}
                  className="px-2 py-1.5 bg-muted border border-border text-[10px] font-mono uppercase font-bold"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Thumbnail strip for attached documents */}
        {images.length > 0 && (
          <div className="border-t border-border pt-3">
            <div className="text-[10px] font-mono text-muted-foreground uppercase mb-2 tracking-wider">
              ATTACHED DOCUMENTS ({images.length})
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`flex-shrink-0 w-12 h-12 border-2 overflow-hidden transition-colors ${
                    i === currentImage ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Corner Connectors */}
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-border opacity-20" />
    </motion.div>
  );
}
