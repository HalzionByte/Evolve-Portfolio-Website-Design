import { EngineeringBackground } from "./components/EngineeringBackground";
import { ModularButton } from "./components/ModularButton";
import { ModularCard } from "./components/ModularCard";
import { RotatingCube } from "./components/RotatingCube";
import { StatWidget } from "./components/StatWidget";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import { SectionConnector } from "./components/SectionConnector";
import { TerminalOutput } from "./components/TerminalOutput";
import { BuildProgress } from "./components/BuildProgress";
import { SystemMetrics } from "./components/SystemMetrics";
import { EngineeringPanel } from "./components/EngineeringPanel";
import { WarningStripe } from "./components/WarningStripe";
import { StatusBadge } from "./components/StatusBadge";
import { BlueprintOverlay } from "./components/BlueprintOverlay";
import { Navbar } from "./components/Navbar";
import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Zap,
  Database,
  Terminal,
  Layers,
  Github,
  Mail,
  Linkedin
} from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden pt-16 lg:pt-20">
      <Navbar />
      <EngineeringBackground />

      <div className="relative z-10">
        {/* Hero Section - Engineering Control Center */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-12 gap-6">
              {/* Main Title Block */}
              <motion.div
                className="col-span-12 lg:col-span-7"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ModularCard variant="blue" moduleId="HERO-MAIN-001" status="ONLINE">
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <div className="inline-block px-3 py-1 bg-accent border-2 border-accent-foreground/20 mb-4">
                        <span className="text-xs font-mono uppercase font-bold tracking-wider">
                          SOFTWARE ENGINEER
                        </span>
                      </div>
                      <h1 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
                        BUILD.<br />
                        <span className="text-primary">DEPLOY.</span><br />
                        <span className="text-secondary">ITERATE.</span>
                      </h1>
                      <div className="w-24 h-2 bg-accent mb-4" />
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        Full-stack software engineer specializing in modular system architecture
                        and scalable engineering solutions. Building the future one block at a time.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 flex-wrap">
                      <ModularButton
                        variant="primary"
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        VIEW PROJECTS
                      </ModularButton>
                      <ModularButton
                        variant="secondary"
                        onClick={() => window.open("/Zayem_CV.pdf", "_blank")}
                      >
                        DOWNLOAD CV
                      </ModularButton>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="border-l-4 border-primary pl-3">
                        <div className="text-3xl font-black text-primary">8+</div>
                        <div className="text-[10px] font-mono uppercase text-muted-foreground">Projects</div>
                      </div>
                      <div className="border-l-4 border-secondary pl-3">
                        <div className="text-3xl font-black text-secondary">1</div>
                        <div className="text-[10px] font-mono uppercase text-muted-foreground">Years XP</div>
                      </div>
                      <div className="border-l-4 border-accent pl-3">
                        <div className="text-3xl font-black text-accent-foreground">10</div>
                        <div className="text-[10px] font-mono uppercase text-muted-foreground">Tech Stack</div>
                      </div>
                    </div>
                  </div>
                </ModularCard>
              </motion.div>

              {/* Centerpiece - Rotating Cube */}
              <motion.div
                className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center gap-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <RotatingCube />
                <div className="text-center font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  CORE SYSTEM MODULE
                </div>
              </motion.div>

              {/* Telemetry Widgets */}
              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <StatWidget
                  icon={<Code2 className="w-6 h-6" />}
                  value="ACTIVE"
                  label="Build Status"
                  color="blue"
                />
              </motion.div>

              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <StatWidget
                  icon={<Zap className="w-6 h-6" />}
                  value="99.8%"
                  label="Uptime"
                  color="yellow"
                />
              </motion.div>

              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <StatWidget
                  icon={<Database className="w-6 h-6" />}
                  value="24/7"
                  label="Systems Online"
                  color="red"
                />
              </motion.div>

              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <StatWidget
                  icon={<Terminal className="w-6 h-6" />}
                  value="0"
                  label="Bugs Active"
                  color="gray"
                />
              </motion.div>

              {/* Terminal Output */}
              <motion.div
                className="col-span-12 lg:col-span-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <TerminalOutput />
              </motion.div>

              {/* Build Progress + System Metrics */}
              <motion.div
                className="col-span-12 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <ModularCard variant="blue" moduleId="BUILD-001" status="ACTIVE">
                  <BuildProgress />
                </ModularCard>
              </motion.div>

              <motion.div
                className="col-span-12 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <ModularCard variant="red" moduleId="METRICS-001" status="MONITORING">
                  <SystemMetrics />
                </ModularCard>
              </motion.div>

              {/* Engineering Info Panels */}
              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <EngineeringPanel
                  title="Deployment Stats"
                  variant="success"
                  data={[
                    { label: "Last Deploy", value: "2m ago" },
                    { label: "Success Rate", value: "99.2%" },
                    { label: "Avg Time", value: "4.2s" },
                  ]}
                />
              </motion.div>

              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <EngineeringPanel
                  title="Stack Info"
                  variant="info"
                  data={[
                    { label: "Languages", value: "8" },
                    { label: "Frameworks", value: "15" },
                    { label: "Tools", value: "25+" },
                  ]}
                />
              </motion.div>

              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <EngineeringPanel
                  title="Current Sprint"
                  variant="warning"
                  data={[
                    { label: "Tasks", value: "12/20" },
                    { label: "Progress", value: "60%" },
                    { label: "Due", value: "3 days" },
                  ]}
                />
              </motion.div>

              <motion.div
                className="col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <EngineeringPanel
                  title="Code Quality"
                  variant="success"
                  data={[
                    { label: "Coverage", value: "94%" },
                    { label: "Quality", value: "A+" },
                    { label: "Technical Debt", value: "Low" },
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <SectionConnector />

        {/* Warning Stripe */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <WarningStripe />
        </div>

        {/* Skills Section - Modular Engineering Board */}
        <section id="skills" className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 border-2 border-primary/30 mb-4">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-primary">
                  CAPABILITY MATRIX
                </span>
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tight mb-4">
                SKILL MODULES
              </h2>
              <div className="flex gap-4 items-center flex-wrap">
                <div className="w-16 h-1 bg-accent" />
                <p className="text-sm font-mono text-muted-foreground uppercase">
                  VERIFIED ENGINEERING SYSTEMS
                </p>
                <StatusBadge status="VERIFIED" />
                <StatusBadge status="CORE" />
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <SkillCard
                name="Java"
                category="LANGUAGE"
                proficiency={85}
                years={2}
                tools={["Spring Boot", "Hibernate", "Multithreading", "OOP"]}
                status="CORE"
                size="normal"
              />
              <SkillCard
                name="Python"
                category="LANGUAGE"
                proficiency={80}
                years={1.5}
                tools={["FastAPI", "Django", "Data Science", "Pytest"]}
                status="ACTIVE"
                size="normal"
              />
              <SkillCard
                name="HTML"
                category="FRONTEND"
                proficiency={90}
                years={1}
                tools={["HTML5", "Semantic Web", "SEO", "Accessibility"]}
                status="ACTIVE"
                size="normal"
              />
              <SkillCard
                name="CSS"
                category="FRONTEND"
                proficiency={88}
                years={1}
                tools={["CSS3", "Tailwind CSS", "Flexbox", "Grid Layout"]}
                status="ACTIVE"
                size="normal"
              />
              <SkillCard
                name="JavaScript"
                category="LANGUAGE"
                proficiency={75}
                years={0.5}
                tools={["ES6+", "DOM Manipulation", "Async/Await", "JSON"]}
                status="ACTIVE"
                size="normal"
              />
              <SkillCard
                name="PostgreSQL"
                category="DATABASE"
                proficiency={82}
                years={1}
                tools={["SQL", "Relational DB", "Indexing", "Optimization"]}
                status="ACTIVE"
                size="normal"
              />
              <SkillCard
                name="MySQL"
                category="DATABASE"
                proficiency={80}
                years={1}
                tools={["SQL Queries", "Schema Design", "Joins", "Workbench"]}
                status="ACTIVE"
                size="normal"
              />
              <SkillCard
                name="SQLite"
                category="DATABASE"
                proficiency={85}
                years={1.5}
                tools={["Local DB", "Embedded SQL", "Mobile Apps", "Lightweight"]}
                status="ACTIVE"
                size="normal"
              />
            </motion.div>
          </div>
        </section>

        <SectionConnector />

        {/* Projects Section - Engineering Modules */}
        <section id="projects" className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 bg-secondary/10 border-2 border-secondary/30 mb-4">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-secondary">
                  BUILD PORTFOLIO
                </span>
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tight mb-4">
                DEPLOYED SYSTEMS
              </h2>
              <div className="flex gap-4 items-center">
                <div className="w-16 h-1 bg-accent" />
                <p className="text-sm font-mono text-muted-foreground uppercase">
                  PRODUCTION-READY MODULES
                </p>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* === MAJOR PROJECTS === */}
              <ProjectCard
                title="OURO"
                description="A real-time online auctioning platform featuring live bidding via WebSockets, secure user authentication, and a dynamic React frontend backed by a Spring Boot microservices architecture."
                tech={["React", "Java", "Spring Boot", "WebSockets", "PostgreSQL"]}
                status="DEPLOYED"
                featured={true}
              />
              <ProjectCard
                title="ARCHON"
                description="AI-powered PC part picker that intelligently recommends compatible components using advanced data structures and a seamless REST API integration."
                tech={["Java", "Data Structures", "React", "REST API"]}
                status="DEPLOYED"
              />
              <ProjectCard
                title="CLIPTALK"
                description="Peer-to-peer real-time chat application with a rich desktop GUI, supporting instant messaging via WebSockets with a styled CSS/JS web layer."
                tech={["Java", "JavaFX", "CSS", "JavaScript", "WebSockets"]}
                status="DEPLOYED"
              />
              <ProjectCard
                title="AZURABITES"
                description="Online meal subscription platform allowing users to browse, subscribe, and manage customized meal plans with a clean, responsive frontend."
                tech={["Python", "HTML", "CSS", "Flask", "SQLite"]}
                status="DEPLOYED"
              />
              {/* === SMALLER PROJECTS === */}
              <ProjectCard
                title="Student Management"
                description="Desktop application for managing student records, enrollment, and grade tracking using a Swing-based GUI."
                tech={["Java", "Java Swing"]}
                status="DEPLOYED"
              />
              <ProjectCard
                title="Hotel Management"
                description="Full-featured hotel management system for room booking, guest records, and billing — built with a Java Swing desktop interface."
                tech={["Java", "Java Swing"]}
                status="DEPLOYED"
              />
              <ProjectCard
                title="Hotel Reservation"
                description="Low-level hotel reservation system implemented in Assembly language using the MARS simulator, demonstrating systems programming fundamentals."
                tech={["Assembly", "MARS"]}
                status="DEPLOYED"
              />
              <ProjectCard
                title="Gym Website"
                description="Responsive gym promotional website with class schedules, membership info, and a contact form powered by a lightweight Flask backend."
                tech={["Flask", "CSS", "HTML"]}
                status="DEPLOYED"
              />
            </motion.div>

            {/* Additional Engineering Detail */}
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <EngineeringPanel
                title="Project Stats"
                variant="info"
                data={[
                  { label: "Total Projects", value: "8" },
                  { label: "Active Builds", value: "4" },
                  { label: "Deployments", value: "8" },
                ]}
              />
              <EngineeringPanel
                title="Performance"
                variant="success"
                data={[
                  { label: "Avg Load Time", value: "1.2s" },
                  { label: "Error Rate", value: "0.02%" },
                  { label: "Availability", value: "99.9%" },
                ]}
              />
              <EngineeringPanel
                title="Team Metrics"
                variant="warning"
                data={[
                  { label: "Code Reviews", value: "120/mo" },
                  { label: "PRs Merged", value: "85/mo" },
                  { label: "Contributions", value: "500+" },
                ]}
              />
            </motion.div>
          </div>
        </section>

        <SectionConnector />

        {/* Contact Section - Communication Terminal */}
        <section id="contact" className="px-4 py-20 pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Contact Card */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ModularCard variant="yellow" moduleId="CONTACT-TERM-001" status="RECEIVING">
                  <div className="text-center space-y-6">
                    <div className="inline-block px-3 py-1 bg-foreground/10 border-2 border-foreground/20 mb-4">
                      <span className="text-xs font-mono uppercase font-bold tracking-wider">
                        COMMUNICATION TERMINAL
                      </span>
                    </div>

                    <h2 className="text-5xl font-black uppercase tracking-tight mb-4">
                      LET'S BUILD<br />SOMETHING GREAT
                    </h2>

                    <p className="text-muted-foreground max-w-xl mx-auto">
                      Open to new opportunities, collaborations, and engineering challenges.
                      All systems ready for deployment.
                    </p>

                    <div className="flex gap-4 justify-center pt-6 flex-wrap">
                      <a href="mailto:pc11677.zayem@gmail.com">
                        <ModularButton variant="primary">
                          <Mail className="inline w-4 h-4 mr-2" />
                          EMAIL
                        </ModularButton>
                      </a>
                      <a href="https://github.com/HalzionByte" target="_blank" rel="noopener noreferrer">
                        <ModularButton variant="secondary">
                          <Github className="inline w-4 h-4 mr-2" />
                          GITHUB
                        </ModularButton>
                      </a>
                      <a href="https://www.linkedin.com/in/zayem-ur-rahman" target="_blank" rel="noopener noreferrer">
                        <ModularButton variant="accent">
                          <Linkedin className="inline w-4 h-4 mr-2" />
                          LINKEDIN
                        </ModularButton>
                      </a>
                    </div>

                    {/* Terminal Status */}
                    <div className="pt-8 font-mono text-xs text-muted-foreground space-y-1">
                      <div>TERMINAL STATUS: ACTIVE</div>
                      <div>RESPONSE TIME: &lt; 24H</div>
                      <div>AVAILABILITY: READY</div>
                    </div>
                  </div>
                </ModularCard>
              </motion.div>

              {/* Blueprint Technical Specs */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <BlueprintOverlay
                  title="Contact Specifications"
                  specs={[
                    { dimension: "Location", value: "Remote / Global" },
                    { dimension: "Timezone", value: "UTC+0" },
                    { dimension: "Languages", value: "EN, ES" },
                    { dimension: "Response", value: "< 24 hours" },
                    { dimension: "Availability", value: "Mon-Fri" },
                  ]}
                />

                <BlueprintOverlay
                  title="System Requirements"
                  specs={[
                    { dimension: "Contract", value: "Full-time / Contract" },
                    { dimension: "Remote", value: "Preferred" },
                    { dimension: "Notice", value: "2 weeks" },
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="font-mono text-xs text-muted-foreground text-center md:text-left order-3 md:order-1">
                © 2026 MODULAR SYSTEMS. ALL RIGHTS RESERVED.
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 items-center order-1 md:order-2">
                <a
                  href="https://github.com/HalzionByte"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 bg-background border-2 border-border/80 text-muted-foreground hover:text-primary hover:border-primary transition-all flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zayem-ur-rahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 bg-background border-2 border-border/80 text-muted-foreground hover:text-primary hover:border-primary transition-all flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:pc11677.zayem@gmail.com"
                  aria-label="Email"
                  className="p-2 bg-background border-2 border-border/80 text-muted-foreground hover:text-primary hover:border-primary transition-all flex items-center justify-center"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* System Diagnostics */}
              <div className="flex gap-4 md:gap-6 items-center font-mono text-xs text-muted-foreground order-2 md:order-3 flex-wrap justify-center">
                <div>BUILD: v4.2.1</div>
                <div className="hidden sm:block">|</div>
                <div>SYS-ID: A7X-9214</div>
                <div className="hidden sm:block">|</div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  ONLINE
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}