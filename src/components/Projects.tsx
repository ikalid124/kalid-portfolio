"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight, Trophy, DollarSign, Target, Image as ImageIcon } from "lucide-react";

interface Project {
  title: string;
  tech: string[];
  description: string;
  highlight: string;
  color: string;
  href?: string;
}

const projects: Project[] = [
  {
    title: "ReadMe — NLP Book Recommender",
    tech: ["Python", "Flask", "React", "NLP"],
    description:
      "Content-based book recommender combining k-NN with TF-IDF and Sentence-BERT embeddings. Features cosine similarity ranking, a React frontend, and Precision@K evaluation — all versioned in Git.",
    highlight: "ML / NLP",
    color: "from-violet-500/20 to-indigo-500/20",
    href: "https://nlp-book-rec.vercel.app/",
  },
  {
    title: "H2-ROVER Autonomous Vehicle",
    tech: ["Arduino", "C++", "Sensors", "H₂ Fuel Cell"],
    description:
      "Hydrogen fuel cell-powered autonomous line-following rover engineered for maximum cost-effectiveness. Integrated motor driver control, environmental sensors, and PID tuning to optimize path accuracy and energy efficiency under competition constraints.",
    highlight: "Embedded",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "7-Segment Display Decoder",
    tech: ["Verilog", "Digital Logic", "K-Maps"],
    description:
      "3-bit binary to 7-segment display decoder designed from truth tables, simplified with Karnaugh maps, implemented in structural Verilog, and verified on breadboard hardware.",
    highlight: "Digital Design",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Song Player",
    tech: ["C++", "Linked List", "Templates"],
    description:
      "Music playlist manager using a templated linked-list. Supports search, add, and sort by Spotify streams with safe dynamic memory management.",
    highlight: "Data Structures",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "RetrieverBell Network",
    tech: ["Python", "Graphs", "BFS/DFS"],
    description:
      "Switch-network graph simulator with add/remove nodes, trunk connections, call routing via BFS/DFS, and JSON persistence for save/load.",
    highlight: "Algorithms",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group relative ${featured ? "" : "h-full"} overflow-hidden rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-all duration-300 block`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className={`relative ${featured ? "p-8" : "p-6"}`}>
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-mono text-accent-light px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            {project.highlight}
          </span>
          <ArrowUpRight
            size={featured ? 20 : 16}
            className="text-muted group-hover:text-accent-light transition-colors"
          />
        </div>
        <h3 className={`${featured ? "text-2xl" : "text-lg"} font-bold mb-2`}>
          {project.title}
        </h3>
        <p className={`text-muted leading-relaxed ${featured ? "mb-6 max-w-2xl" : "mb-4 text-sm"}`}>
          {project.description}
        </p>
        {project.href && (
          <p className="text-xs text-accent-light mb-4 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            View live project →
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`${featured ? "px-3 py-1" : "px-2 py-1"} text-xs font-mono rounded-md bg-background/80 border border-border text-muted`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function H2RoverShowcase() {
  return (
    <AnimatedSection delay={0.2}>
      <div className="mt-8 rounded-2xl border border-border bg-surface/50 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-border bg-gradient-to-r from-emerald-500/5 to-teal-500/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Trophy size={20} className="text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold">H2-ROVER Competition Results</h3>
              <p className="text-sm text-muted">Hydrogen Fuel Cell Autonomous Vehicle Challenge</p>
            </div>
          </div>
          <p className="text-muted leading-relaxed max-w-3xl">
            Designed, built, and optimized a hydrogen fuel cell-powered autonomous rover for a university engineering competition.
            The vehicle combined line-following algorithms, real-time sensor feedback, and PID motor control to navigate a timed course
            while maximizing energy efficiency under strict budget constraints.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-3 gap-px bg-border">
          <div className="bg-surface/80 p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Trophy size={18} className="text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-foreground">1st Place</p>
            <p className="text-sm text-muted mt-1">Tuesday 10 AM Section</p>
          </div>
          <div className="bg-surface/80 p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <DollarSign size={18} className="text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-foreground">4th Overall</p>
            <p className="text-sm text-muted mt-1">Cost Effectiveness</p>
          </div>
          <div className="bg-surface/80 p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-violet-500/10 flex items-center justify-center">
              <Target size={18} className="text-violet-400" />
            </div>
            <p className="text-2xl font-bold text-foreground">1,200</p>
            <p className="text-sm text-muted mt-1">Raw Performance Score</p>
          </div>
        </div>

        {/* Metrics detail */}
        <div className="p-8 border-t border-border">
          <h4 className="text-sm font-mono text-accent-light uppercase tracking-wider mb-4">
            Performance Metrics
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
              <span className="text-sm text-muted">Raw Score</span>
              <span className="font-bold font-mono">1,200</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
              <span className="text-sm text-muted">Total Build Cost</span>
              <span className="font-bold font-mono">$104.10</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
              <span className="text-sm text-muted">Cost-Effectiveness Score</span>
              <span className="font-bold font-mono">11.53</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
              <span className="text-sm text-muted">Section Ranking</span>
              <span className="font-bold font-mono">1st / Tuesday 10 AM</span>
            </div>
          </div>
        </div>

        {/* Photo gallery placeholder */}
        <div className="p-8 border-t border-border">
          <h4 className="text-sm font-mono text-accent-light uppercase tracking-wider mb-4">
            Project Gallery
          </h4>
          {/* TODO: Replace these placeholders with actual H2Rover photos.
               Add images to /public/h2rover/ (e.g., h2rover-1.jpg, h2rover-2.jpg, h2rover-3.jpg)
               then replace the placeholder divs below with <Image> components. */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Rover assembly & wiring",
              "Competition day — track run",
              "Team with finished rover",
            ].map((caption) => (
              <div
                key={caption}
                className="aspect-video rounded-xl border border-dashed border-border bg-background/50 flex flex-col items-center justify-center gap-2 text-muted"
              >
                <ImageIcon size={24} className="opacity-40" />
                <p className="text-xs text-center px-2">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Things I&apos;ve built
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured project - full width */}
          <AnimatedSection delay={0.1} className="md:col-span-2">
            <ProjectCard project={projects[0]} featured />
          </AnimatedSection>

          {/* H2Rover card */}
          <AnimatedSection delay={0.15}>
            <ProjectCard project={projects[1]} />
          </AnimatedSection>

          {/* Other projects - grid */}
          {projects.slice(2).map((project, i) => (
            <AnimatedSection key={project.title} delay={(i + 2) * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* H2Rover detailed showcase */}
        <H2RoverShowcase />
      </div>
    </section>
  );
}
