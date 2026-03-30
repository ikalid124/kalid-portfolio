"use client";

import AnimatedSection from "./AnimatedSection";
import { Users, Megaphone, Cpu, HandHeart } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Club {
  name: string;
  fullName: string;
  role: string;
  icon: LucideIcon;
  description: string;
}

const clubs: Club[] = [
  {
    name: "EESA",
    fullName: "Ethiopian Eritrean Student Association",
    role: "Cabinet Member",
    icon: HandHeart,
    description:
      "Serve as a Cabinet Member supporting event planning, community outreach, and organizational logistics. Assist across multiple areas including cultural programming, membership engagement, and cross-campus collaboration to strengthen the East African student community.",
  },
  {
    name: "NSBE",
    fullName: "National Society of Black Engineers",
    role: "Active Volunteer",
    icon: Users,
    description:
      "Participate in professional development workshops, volunteer at chapter-hosted events, and contribute to outreach efforts that promote STEM opportunities for underrepresented communities. Engage with industry professionals through networking events and career fairs.",
  },
  {
    name: "MIF",
    fullName: "Minorities in Finance",
    role: "Public Relations Chair",
    icon: Megaphone,
    description:
      "Lead the organization's communications strategy as Public Relations Chair, managing social media presence, crafting promotional materials, and increasing event visibility. Drive member engagement through targeted outreach and brand-consistent messaging across platforms.",
  },
  {
    name: "IEEE",
    fullName: "Institute of Electrical and Electronics Engineers",
    role: "Active Member",
    icon: Cpu,
    description:
      "Engage in technical workshops, project showcases, and industry speaker events focused on electrical engineering and emerging technologies. Contribute to hands-on learning initiatives and stay connected with IEEE's global network of engineering professionals.",
  },
];

export default function Activities() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Involvement
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Clubs & Organizations
          </h2>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            Leadership, community building, and professional development through active involvement in student organizations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {clubs.map((club, i) => (
            <AnimatedSection key={club.name} delay={i * 0.1}>
              <div className="group h-full p-6 rounded-2xl border border-border bg-surface/50 hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <club.icon size={22} className="text-accent-light" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{club.name}</h3>
                    <p className="text-sm text-accent-light">{club.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-2 font-mono">
                  {club.fullName}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {club.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
