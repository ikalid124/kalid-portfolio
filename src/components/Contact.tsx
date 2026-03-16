"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Ikalid124@gmail.com",
    href: "mailto:Ikalid124@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Kalid I.",
    href: "https://linkedin.com/in/kalid-i",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ikalid124",
    href: "https://github.com/ikalid124",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(301) 768-6249",
    href: "tel:+13017686249",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-12 leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about engineering.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface/50 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <c.icon size={18} className="text-accent-light" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="font-medium text-foreground group-hover:text-accent-light transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
