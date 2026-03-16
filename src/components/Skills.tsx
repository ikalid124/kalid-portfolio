"use client";

import AnimatedSection from "./AnimatedSection";
import { Code2, Cpu, Wrench, BrainCircuit } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "C++", "MATLAB"],
  },
  {
    icon: Cpu,
    title: "Embedded / Digital",
    skills: [
      "Arduino",
      "GPIO / PWM",
      "Analog Sensors",
      "Digital Logic Design",
      "K-Maps & FSMs",
      "Verilog",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      "Linux",
      "Git / GitHub",
      "Docker",
      "Oscilloscope",
      "Breadboard Circuits",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Data & ML",
    skills: ["pandas", "NumPy", "PyTorch", "TF-IDF", "Sentence-BERT"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            What I work with
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.1}>
              <div className="group h-full p-6 rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <group.icon size={18} className="text-accent-light" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border text-muted hover:text-foreground hover:border-accent/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
