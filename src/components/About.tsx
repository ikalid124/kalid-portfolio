"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap, MapPin, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            A bit about who I am
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m a sophomore at the University of Maryland, Baltimore County
              studying Computer Engineering with a 3.8 GPA. I love working where
              hardware meets software — from programming microcontrollers and
              designing digital logic in Verilog to building full-stack web apps
              and ML models.
            </p>
            <p className="text-muted leading-relaxed">
              I&apos;m currently seeking an embedded/software engineering internship
              where I can contribute to real-world systems and learn from
              experienced teams. Outside of class, you&apos;ll find me working on
              side projects, volunteering at the campus food pantry, or
              participating in engineering clubs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  detail: "B.S. Computer Engineering — UMBC",
                  sub: "Expected May 2028 | GPA: 3.8/4.0",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  detail: "Silver Spring, Maryland",
                  sub: "Open to relocation for internships",
                },
                {
                  icon: Cpu,
                  title: "Interests",
                  detail: "Embedded Systems & Computer Architecture",
                  sub: "Digital design, PCB/FPGA, ML systems",
                },
              ].map(({ icon: Icon, title, detail, sub }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon size={18} className="text-accent-light" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">
                      {title}
                    </p>
                    <p className="font-medium text-foreground">{detail}</p>
                    <p className="text-sm text-muted">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
