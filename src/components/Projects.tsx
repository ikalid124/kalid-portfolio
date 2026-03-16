"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ReadMe — NLP Book Recommender",
    tech: ["Python", "Flask", "React", "NLP"],
    description:
      "Content-based book recommender combining k-NN with TF-IDF and Sentence-BERT embeddings. Features cosine similarity ranking, a React frontend, and Precision@K evaluation — all versioned in Git.",
    highlight: "ML / NLP",
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "H2-ROVER Autonomous Vehicle",
    tech: ["Arduino", "C++", "Sensors"],
    description:
      "Hydrogen fuel cell-powered line-following rover with motor driver and environmental sensors. Tuned for highest cost-effectiveness and top raw score in lab section.",
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
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-all duration-300">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-accent-light px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
                    {projects[0].highlight}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted group-hover:text-accent-light transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{projects[0].title}</h3>
                <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-background/80 border border-border text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Other projects - grid */}
          {projects.slice(1).map((project, i) => (
            <AnimatedSection key={project.title} delay={(i + 1) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-all duration-300">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-accent-light px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
                      {project.highlight}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-accent-light transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-mono rounded-md bg-background/80 border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
