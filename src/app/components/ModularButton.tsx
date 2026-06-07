import { motion } from "motion/react";
import { ReactNode } from "react";

interface ModularButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  className?: string;
}

export function ModularButton({ children, variant = "primary", onClick, className = "" }: ModularButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-[0_6px_0_0_#003D8F,0_6px_0_2px_rgba(0,0,0,0.2)]",
    secondary: "bg-secondary text-secondary-foreground shadow-[0_6px_0_0_#8F1407,0_6px_0_2px_rgba(0,0,0,0.2)]",
    accent: "bg-accent text-accent-foreground shadow-[0_6px_0_0_#CCB000,0_6px_0_2px_rgba(0,0,0,0.2)]",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 font-bold uppercase tracking-wider relative
        ${variants[variant]}
        hover:brightness-110 transition-all
        active:translate-y-[4px] active:shadow-[0_2px_0_0_#003D8F,0_2px_0_2px_rgba(0,0,0,0.2)]
        border-t-2 border-white/20
        ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Stud Pattern */}
      <div className="absolute top-1 left-2 right-2 flex gap-2 justify-center opacity-20">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>
      {children}
    </motion.button>
  );
}
