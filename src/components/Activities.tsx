"use client";

import AnimatedSection from "./AnimatedSection";
import { Users } from "lucide-react";

const clubs = [
  { name: "EESA", role: "Cabinet Officer" },
  { name: "NSBE", role: "Events" },
  { name: "MIF", role: "Public Relations" },
  { name: "IEEE", role: "Student Member" },
];

export default function Activities() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Involvement
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Clubs & Organizations
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clubs.map((club, i) => (
            <AnimatedSection key={club.name} delay={i * 0.1}>
              <div className="group text-center p-6 rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <Users size={20} className="text-accent-light" />
                </div>
                <h3 className="font-bold text-lg">{club.name}</h3>
                <p className="text-sm text-muted mt-1">{club.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
