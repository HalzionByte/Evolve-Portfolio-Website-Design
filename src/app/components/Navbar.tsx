import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, FileText, Cpu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "HOME", target: "home" },
    { label: "SKILLS", target: "skills" },
    { label: "PROJECTS", target: "projects" },
    { label: "CONTACT", target: "contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/HalzionByte", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/zayem-ur-rahman", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:pc11677.zayem@gmail.com", label: "Email" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const link of navLinks) {
        const element = document.getElementById(link.target);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.target);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId: string) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Warning/Stripe for that Lego Technic industrial feel */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-50" />

      <header className="fixed top-1.5 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b-2 border-border/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo / Brand Status */}
          <div className="flex items-center gap-3 select-none">
            {/* Lego Technic Gear Icon / Cpu */}
            <div className="p-1.5 bg-primary border-2 border-black/20 text-white rounded-none flex items-center justify-center">
              <Cpu className="w-4 h-4 animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-black tracking-widest text-foreground flex items-center gap-2">
                SYS_CTRL // PORTFOLIO
                <motion.span
                  className="inline-block w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </span>
              <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                Status: ONLINE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleScrollTo(link.target)}
                className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider relative transition-all duration-200 border border-transparent hover:border-border hover:bg-card
                  ${activeSection === link.target 
                    ? "text-primary bg-card border-border border-b-primary/80 border-b-2" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Section: Socials + Resume (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2 border-r border-border/60 pr-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-1.5 text-muted-foreground hover:text-primary hover:bg-card border border-transparent hover:border-border transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Lego Styled Resume Button */}
            <a
              href="/Zayem_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono font-black uppercase tracking-wider bg-accent text-accent-foreground border-2 border-accent-foreground/20 hover:brightness-110 active:translate-y-[2px] transition-all flex items-center gap-2 shadow-[0_4px_0_0_#CCB000,0_4px_0_2px_rgba(0,0,0,0.1)] active:shadow-[0_2px_0_0_#CCB000]"
            >
              <FileText className="w-3.5 h-3.5" />
              RESUME
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 border-2 border-border hover:bg-card hover:text-primary transition-all rounded-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-80 max-w-full bg-card border-l-4 border-primary z-50 p-6 flex flex-col justify-between shadow-[-10px_0_30px_rgba(0,0,0,0.3)] lg:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center pb-6 border-b-2 border-border mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs font-black tracking-wider uppercase">
                      SYSTEM PANEL
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 border border-border hover:bg-muted"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-3">
                  <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-4">
                    Navigation Nodes:
                  </div>
                  {navLinks.map((link) => (
                    <button
                      key={link.target}
                      onClick={() => handleScrollTo(link.target)}
                      className={`w-full text-left px-4 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all border-l-4
                        ${activeSection === link.target
                          ? "bg-primary/5 text-primary border-primary"
                          : "text-muted-foreground border-transparent hover:bg-muted/50 hover:text-foreground"
                        }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Details: Resume + Socials */}
              <div className="space-y-6 pt-6 border-t-2 border-border">
                {/* Resume Button */}
                <a
                  href="/Zayem_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-3 text-sm font-mono font-black uppercase tracking-wider bg-accent text-accent-foreground border-2 border-accent-foreground/20 hover:brightness-110 active:translate-y-[2px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_0_0_#CCB000,0_4px_0_2px_rgba(0,0,0,0.1)] active:shadow-[0_2px_0_0_#CCB000]"
                >
                  <FileText className="w-4 h-4" />
                  DOWNLOAD RESUME
                </a>

                {/* Social media icons */}
                <div className="flex justify-around items-center pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted hover:bg-primary/10 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all flex items-center justify-center rounded-none"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Diagnostic stats */}
                <div className="text-center font-mono text-[9px] text-muted-foreground/60">
                  SYS ID: A7X-9214 // BUILD v4.2.1
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
