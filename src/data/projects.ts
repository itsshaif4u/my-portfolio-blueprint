import financeCover from "@/assets/project-finance.jpg";
import nikahCover from "@/assets/project-nikahkaro.jpg";
import auditCover from "@/assets/project-uxaudit.jpg";

export type Project = {
  slug: "finance-pulse" | "nikahkaro" | "ux-audit";
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  cover: string;
  accent: string;
  overview: string;
  problem: string;
  research: string[];
  insights: string[];
  solution: string[];
  results: { label: string; value: string }[];
  reflection: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "finance-pulse",
    title: "Finance Pulse",
    tagline: "An enterprise dashboard that turns chaos into clarity.",
    category: "Enterprise SaaS",
    year: "2024",
    role: "Lead Product Designer",
    duration: "14 weeks",
    cover: financeCover,
    accent: "from-violet-500 to-fuchsia-500",
    overview:
      "Finance Pulse helps mid-market finance teams monitor cash, budgets, and risk in a single calm interface. I led discovery, IA, and the visual system end-to-end.",
    problem:
      "Finance leaders were stitching together five tools to answer one question: how is the business doing today? The cognitive load was crushing.",
    research: [
      "12 stakeholder interviews across 4 companies",
      "Diary studies with 6 controllers",
      "Competitive teardown of 9 finance products",
    ],
    insights: [
      "Users scanned dashboards in under 7 seconds",
      "Trust dropped when 2+ KPIs disagreed",
      "Mobile glances mattered more than full sessions",
    ],
    solution: [
      "A single source-of-truth Pulse view",
      "Progressive disclosure for deep dives",
      "Annotation layer to capture context next to data",
    ],
    results: [
      { label: "Time to insight", value: "−62%" },
      { label: "Daily active users", value: "+38%" },
      { label: "SUS score", value: "84" },
    ],
    reflection:
      "The biggest unlock wasn't a new chart — it was removing four. Restraint was the feature.",
  },
  {
    slug: "nikahkaro",
    title: "NikahKaro",
    tagline: "A matrimony app that respects culture and people.",
    category: "Consumer Mobile",
    year: "2023",
    role: "Product Designer",
    duration: "10 weeks",
    cover: nikahCover,
    accent: "from-rose-500 to-purple-500",
    overview:
      "NikahKaro reimagines matrimony for a generation that wants agency, dignity, and honest conversations — without abandoning tradition.",
    problem:
      "Existing apps reduced people to spec sheets. Conversations stalled. Trust was low. Families felt sidelined or, worse, weaponized.",
    research: [
      "32 user interviews across 3 cities",
      "Co-design sessions with families",
      "Heuristic review of 5 incumbents",
    ],
    insights: [
      "Profiles needed story, not just stats",
      "Slow, intentional matching beat infinite swiping",
      "Families wanted a respectful, optional role",
    ],
    solution: [
      "Story-first profiles with prompts",
      "Daily curated matches over endless feeds",
      "Family-circle invites with privacy controls",
    ],
    results: [
      { label: "Match → conversation", value: "+71%" },
      { label: "7-day retention", value: "+44%" },
      { label: "Reported scam reports", value: "−58%" },
    ],
    reflection:
      "Designing for marriage taught me that the most ethical UX choice is sometimes friction.",
  },
  {
    slug: "ux-audit",
    title: "UX Audit Framework",
    tagline: "A repeatable lens for diagnosing product debt.",
    category: "Process & Tooling",
    year: "2024",
    role: "Designer & Author",
    duration: "Ongoing",
    cover: auditCover,
    accent: "from-indigo-500 to-violet-500",
    overview:
      "A structured audit method combining heuristics, analytics, and qualitative signals into a single prioritized roadmap.",
    problem:
      "Teams kept asking 'what should we fix first?' and getting vibes-based answers. Audits felt subjective and easy to dismiss.",
    research: [
      "Synthesized 18 published heuristic systems",
      "Audited 4 live products as case material",
      "Validated framework with 3 PMs and 2 founders",
    ],
    insights: [
      "Findings without severity get ignored",
      "Audits land better when paired with effort cost",
      "Stakeholders trust patterns more than one-offs",
    ],
    solution: [
      "Severity × effort prioritization grid",
      "Evidence-tagged findings (data, quote, heuristic)",
      "Templated handoff doc for engineering",
    ],
    results: [
      { label: "Adoption by teams", value: "9 / 12" },
      { label: "Avg. issues actioned", value: "73%" },
      { label: "Time to roadmap", value: "−4 days" },
    ],
    reflection:
      "A good audit is an act of service. It hands the team a sharper lens, not a verdict.",
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
