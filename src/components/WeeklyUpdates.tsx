"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { weeklyUpdates, type UpdateTag, type WeeklyUpdate } from "@/data/weeklyUpdates";

// ─── Tag color map ────────────────────────────────────────────────────────────
const tagStyles: Record<UpdateTag, string> = {
  Coding: "text-violet-400 border-violet-400/25 bg-violet-400/8",
  School: "text-amber-400 border-amber-400/25 bg-amber-400/8",
  Research: "text-emerald-400 border-emerald-400/25 bg-emerald-400/8",
  Portfolio: "text-rose-400 border-rose-400/25 bg-rose-400/8",
  "Internship Prep": "text-cyan-400 border-cyan-400/25 bg-cyan-400/8",
};

// ─── Single update card ───────────────────────────────────────────────────────
function UpdateCard({ update }: { update: WeeklyUpdate }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 hover:border-accent/25 transition-all duration-300">
      {/* Hover gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 sm:p-7">
        {/* Top row: tags + week label */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {update.tags?.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-mono px-3 py-1 rounded-full border ${tagStyles[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-mono text-muted shrink-0">
            Week {update.week} · {update.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 leading-snug">{update.title}</h3>

        {/* Summary */}
        <p className="text-sm text-muted leading-relaxed mb-4">{update.summary}</p>

        {/* Bullets */}
        {update.bullets && update.bullets.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {update.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        {update.links && update.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {update.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-light hover:text-foreground transition-colors duration-200"
              >
                {link.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Timeline entry (dot + card) ─────────────────────────────────────────────
function TimelineEntry({
  update,
  index,
  isLast,
}: {
  update: WeeklyUpdate;
  index: number;
  isLast: boolean;
}) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="relative flex gap-5 sm:gap-7">
        {/* Timeline spine */}
        <div className="flex flex-col items-center">
          {/* Dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.2, type: "spring" }}
            className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 bg-background text-accent font-mono text-xs font-bold shrink-0 mt-0.5"
          >
            {update.week}
          </motion.div>
          {/* Connector line */}
          {!isLast && (
            <div className="w-px flex-1 mt-2 bg-gradient-to-b from-border to-transparent min-h-[1.5rem]" />
          )}
        </div>

        {/* Card */}
        <div className="flex-1 pb-6">
          <UpdateCard update={update} />
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function WeeklyUpdates() {
  // Data is already sorted newest-first in weeklyUpdates.ts (highest week number at top)
  const updates = weeklyUpdates;

  return (
    <section id="updates" className="py-32 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Weekly Updates
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              What I&apos;ve been up to
            </h2>
            {/* "Updated weekly" badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs text-muted self-start sm:self-auto shrink-0">
              <RefreshCw size={11} className="text-accent" />
              Updated every Sunday
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div>
          {updates.map((update, i) => (
            <TimelineEntry
              key={update.week}
              update={update}
              index={i}
              isLast={i === updates.length - 1}
            />
          ))}
        </div>

        {/* Footer note */}
        <AnimatedSection delay={updates.length * 0.08 + 0.1}>
          <p className="text-xs text-muted text-center mt-4 font-mono">
            — more updates coming every Sunday —
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
