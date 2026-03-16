"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Pantry Worker",
    company: "Retriever Essentials — UMBC",
    period: "Aug 2025 - Present",
    description:
      "Support campus food access: inventory management, customer service, and data tracking in a fast-paced student-facing environment.",
    current: true,
  },
  {
    role: "Camp Counselor",
    company: "Coffield Rec Center",
    period: "Jun 2024 - Aug 2025",
    description:
      "Led daily activities for 16 campers. Ensured safety, resolved conflicts, and collaborated with staff on schedules and programming.",
    current: false,
  },
  {
    role: "Sales Associate",
    company: "Hallmark",
    period: "Apr 2023 - May 2024",
    description:
      "Assisted customers, handled register operations, trained new staff, and managed restocking and merchandise displays.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.role} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-16`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-2 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 ${
                        exp.current
                          ? "border-accent bg-accent shadow-lg shadow-accent/30"
                          : "border-border bg-surface"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      i % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="p-6 rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-colors duration-300">
                      <div
                        className={`flex items-center gap-3 mb-2 ${
                          i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                        <span className="text-xs font-mono text-muted">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-sm text-accent-light mb-3">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
