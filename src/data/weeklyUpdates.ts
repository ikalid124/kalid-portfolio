// =============================================================
//  WEEKLY UPDATES — src/data/weeklyUpdates.ts
//  Edit this file every Sunday to add your new weekly update.
// =============================================================
//
//  HOW TO ADD A NEW UPDATE:
//  1. Copy the TEMPLATE block below.
//  2. Paste it at the TOP of the `weeklyUpdates` array (before the first item).
//  3. Fill in your details and save.
//  The newest update will automatically appear first on the site.
//
//  TEMPLATE — copy from here ↓
// --------------------------------------------------------------
//  {
//    week: XX,                         // increment by 1 each Sunday
//    date: "Month DD, YYYY",           // e.g., "July 6, 2025"
//    title: "Short title for this week",
//    summary: "1–2 sentence summary of what this week was about.",
//    tags: ["Coding"],                 // pick 1–3 from the list below
//    bullets: [                        // optional — 3–5 short bullets
//      "Did X thing",
//      "Learned Y concept",
//      "Fixed Z issue",
//    ],
//    links: [                          // optional — relevant links
//      { label: "Link Label", href: "https://..." },
//    ],
//  },
// --------------------------------------------------------------
//  Available tags: "Coding" | "School" | "Research" | "Portfolio" | "Internship Prep"
// =============================================================

export type UpdateTag =
  | "Coding"
  | "School"
  | "Research"
  | "Portfolio"
  | "Internship Prep";

export interface WeeklyUpdateLink {
  label: string;
  href: string;
}

export interface WeeklyUpdate {
  week: number;
  date: string;
  title: string;
  summary: string;
  tags?: UpdateTag[];
  bullets?: string[];
  links?: WeeklyUpdateLink[];
}

// =============================================================
//  ADD NEW UPDATES AT THE TOP OF THIS ARRAY ↓
// =============================================================
export const weeklyUpdates: WeeklyUpdate[] = [
  // ← paste your new update here each Sunday

  {
    week: 3,
    date: "June 22, 2025",
    title: "Portfolio live, H2-Rover prep, & ML deep-dive",
    summary:
      "Shipped the first version of this portfolio and started prepping for the H2-Rover competition. Also began a focused ML study sprint on embeddings and similarity search.",
    tags: ["Portfolio", "Coding", "School"],
    bullets: [
      "Deployed portfolio to Vercel — first public version is live",
      "Reviewed H2-Rover autonomous navigation code and tuned PID constants",
      "Read two papers on sentence embeddings for the NLP book recommender",
      "Set up Tailwind v4 and Framer Motion animations from scratch",
      "Updated resume with new projects and internship-ready formatting",
    ],
    links: [
      { label: "Live Portfolio", href: "https://kalid-portfolio.vercel.app" },
    ],
  },
  {
    week: 2,
    date: "June 15, 2025",
    title: "NLP recommender + digital design coursework",
    summary:
      "Made significant progress on the ReadMe NLP book recommender and worked through K-map simplification and Verilog design for my Digital Logic course.",
    tags: ["Coding", "School", "Research"],
    bullets: [
      "Integrated Sentence-BERT embeddings into the recommender pipeline",
      "Implemented cosine similarity ranking and Precision@K evaluation metric",
      "Completed 7-segment display decoder in Verilog and verified on breadboard",
      "Started learning about TF-IDF vs. dense embeddings trade-offs",
    ],
    links: [
      { label: "ReadMe Project", href: "https://nlp-book-rec.vercel.app" },
    ],
  },
  {
    week: 1,
    date: "June 8, 2025",
    title: "Kickoff: setting goals & building foundations",
    summary:
      "First week of summer — set up my dev environment, outlined goals for the semester, and started exploring internship applications and what skills to sharpen.",
    tags: ["Internship Prep", "Portfolio", "Coding"],
    bullets: [
      "Mapped out summer goals: one ML project, one embedded project, internship prep",
      "Started researching companies with strong CE/embedded internship programs",
      "Set up Next.js 15 portfolio project from scratch with TypeScript and Tailwind",
      "Reviewed core data structures in prep for technical interviews",
    ],
  },
];
