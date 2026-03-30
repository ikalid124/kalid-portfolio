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
  goals?: string[];
  links?: WeeklyUpdateLink[];
}

// =============================================================
//  ADD NEW UPDATES AT THE TOP OF THIS ARRAY ↓
// =============================================================
export const weeklyUpdates: WeeklyUpdate[] = [
  // ← paste your new update here each Sunday


  {
    week: 2,
    date: "March 30, 2026",
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
    date: "March 30, 2026",
    title: "Computer Vision intro, Calc 3 grind, & systems concepts",
    summary:
      "Focused on learning OpenCV and computer vision fundamentals, while preparing for my Calc 3 exam covering double integrals and optimization. Also explored AI’s impact on cybersecurity and studied low-level systems concepts.",
    tags: ["Coding", "School", "Research"],
    bullets: [
      "Started learning computer vision fundamentals using OpenCV and pushed progress to GitHub",
      "Studied Calc 3 topics: double integrals, max/min in 3D, and directional derivatives for upcoming exam",
      "Researched the impact of AI across industries, with focus on cybersecurity applications and risks",
      "Learned about interrupts in CMPE 310 (System Design & Programming)",
      "Helped set up and run the EESA gala event",
    ],
    goals: [
      "Build a small end-to-end computer vision project (real-time detection or filtering)",
      "Perform strongly on upcoming Calc 3 exam",
      "Deepen understanding of low-level systems concepts (interrupts, memory, execution flow)",
    ],
    links: [
      { label: "Computer Vision Practice Repo", href: "https://github.com/ikalid124/Computer-Vision-Practice" },
    ],
  },
];
