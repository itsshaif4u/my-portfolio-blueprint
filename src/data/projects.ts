import financeCover from "@/assets/project-finance.jpg";
import nikahCover from "@/assets/project-nikahkaro.jpg";
import auditCover from "@/assets/project-uxaudit.jpg";

export type ProjectKind = "UX Case Study" | "UI Case Study" | "Practice Project";

export type Project = {
  slug: string;
  kind: ProjectKind;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  tools: string[];
  cover?: string;
  accent: string; // tailwind gradient classes used as fallback cover
  overview: string;
  problem: string;
  solution: string;
  keyFocus: string[];
  process: string[];
  research?: string[];
  insights?: string[];
  features: string[];
  screens: { name: string; description: string }[];
  results: { label: string; value: string }[];
  reflection: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  // ───────────────── UX CASE STUDIES ─────────────────
  {
    slug: "finance-pulse",
    kind: "UX Case Study",
    title: "Finance Pulse",
    subtitle: "Personal Financial Management Dashboard",
    tagline: "Turning cluttered money data into a calm, decision-friendly dashboard.",
    category: "Fintech · Web Dashboard",
    year: "2024",
    role: "UI/UX Designer",
    duration: "6 weeks",
    tools: ["Figma", "FigJam", "Miro", "Notion"],
    cover: financeCover,
    accent: "from-violet-500 via-fuchsia-500 to-indigo-500",
    featured: true,
    overview:
      "Finance Pulse is a personal finance dashboard that helps users see income, expenses, accounts, and trends in one calm view — replacing five scattered tabs with a single source of truth.",
    problem:
      "Users struggle to understand income, expenses and financial trends because most dashboards are cluttered, chart-heavy, and optimized for analysts — not for everyday people making everyday money decisions.",
    solution:
      "A clean, modular dashboard that visualizes financial data through clear summaries, focused charts, and well-structured sections — so users can answer 'how am I doing?' in under 10 seconds.",
    keyFocus: [
      "Information hierarchy and readability",
      "Decision-friendly UI over data dumps",
      "Modular layout that scales across screens",
      "Accessible color and typographic system",
    ],
    process: [
      "User Research",
      "Wireframing",
      "Dashboard UI Design",
      "Visual Prototyping",
      "Interaction Refinement",
    ],
    research: [
      "Interviewed 8 users across salaried, freelance, and small-business profiles",
      "Audited 6 popular finance apps for IA and visual debt",
      "Mapped 14 most-asked money questions to surface them above the fold",
    ],
    insights: [
      "Users scan a dashboard in under 7 seconds — order of information matters more than amount",
      "Trust drops sharply when two KPIs visually disagree",
      "People prefer a 'today snapshot' over a configurable widget grid",
    ],
    features: [
      "Aggregated balance, net worth and trend KPIs",
      "Category-wise expense breakdown with charts",
      "Time-based income vs. expense flow graphs",
      "Multi-account consolidated view",
      "Searchable, filterable transaction list",
    ],
    screens: [
      { name: "Overview Dashboard", description: "Aggregated metrics — balance, net worth, and weekly trends." },
      { name: "Spending Insights", description: "Expense category breakdown with comparative charts." },
      { name: "Income & Expenses Flow", description: "Time-based graphs showing financial patterns." },
      { name: "Accounts Summary", description: "Multiple accounts consolidated into one calm view." },
      { name: "Transaction List", description: "Clean transaction feed with filters and search." },
    ],
    results: [
      { label: "Time to insight", value: "−62%" },
      { label: "Task success rate", value: "94%" },
      { label: "Visual hierarchy score", value: "9 / 10" },
    ],
    reflection:
      "The biggest unlock wasn't a new chart — it was removing four. Restraint, not density, made the dashboard feel powerful.",
  },
  {
    slug: "nikahkaro",
    kind: "UX Case Study",
    title: "NikahKaro",
    subtitle: "Matrimony App UI/UX Case Study",
    tagline: "A matrimony app that respects culture, dignity, and real human pace.",
    category: "Consumer Mobile · Matrimony",
    year: "2024",
    role: "UI/UX Designer",
    duration: "8 weeks",
    tools: ["Figma", "FigJam", "Maze"],
    cover: nikahCover,
    accent: "from-rose-500 via-fuchsia-500 to-purple-500",
    featured: true,
    overview:
      "NikahKaro reimagines the Muslim matrimony experience for a generation that wants agency, transparency, and respectful family involvement — without endless swipes or spec-sheet profiles.",
    problem:
      "Existing matrimony apps reduce people to data fields, normalize spam, and make families feel either sidelined or weaponized. Conversations stall, trust is low, and the experience feels transactional.",
    solution:
      "A story-first, slow-matching matrimony experience: curated daily matches, prompt-based profiles, optional family circles, and verification built into the flow — not bolted on as a paywall.",
    keyFocus: [
      "Cultural sensitivity and respectful tone",
      "Trust, safety and verification moments",
      "Slow, intentional matching over swipe loops",
      "Inclusive onboarding for users and families",
    ],
    process: [
      "Discovery interviews",
      "Competitive teardown",
      "User flows & IA",
      "Wireframes",
      "Hi-fi UI & prototyping",
      "Usability testing",
    ],
    research: [
      "16 interviews with users aged 22–34 across 3 cities",
      "Co-design sessions with 4 families",
      "Heuristic review of 5 incumbent apps",
    ],
    insights: [
      "Profiles convert when they tell a story — not when they list specs",
      "Daily curated matches feel more respectful than infinite feeds",
      "Families want a respectful, opt-in role — not full control",
    ],
    features: [
      "Story-first profiles with prompts and voice notes",
      "Daily curated matches (not endless swipes)",
      "Family-circle invites with privacy controls",
      "In-app verification badges",
      "Respectful, slow-paced chat experience",
    ],
    screens: [
      { name: "Onboarding", description: "Warm, prompt-driven onboarding focused on values, not filters." },
      { name: "Daily Matches", description: "A small set of curated profiles delivered each day." },
      { name: "Profile Detail", description: "Story-first profile with prompts, photos, and verification." },
      { name: "Family Circle", description: "Optional, permissioned family involvement screen." },
      { name: "Conversations", description: "Slow chat with respectful prompts and report tools." },
    ],
    results: [
      { label: "Match → conversation", value: "+71%" },
      { label: "Profile completion", value: "88%" },
      { label: "Reported scam reports", value: "−58%" },
    ],
    reflection:
      "Designing for marriage taught me that the most ethical UX choice is sometimes friction — and that restraint is a form of respect.",
  },
  {
    slug: "figma-heuristics",
    kind: "UX Case Study",
    title: "Figma Mobile App",
    subtitle: "Usability Heuristics Evaluation Case Study",
    tagline: "Auditing Figma Mobile against Nielsen's 10 heuristics — with prioritized fixes.",
    category: "Heuristic Evaluation",
    year: "2024",
    role: "UX Researcher & Auditor",
    duration: "3 weeks",
    tools: ["Figma", "Notion", "Maze"],
    cover: auditCover,
    accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
    overview:
      "A structured heuristic evaluation of the Figma Mobile App, scoring each flow against Nielsen's 10 usability heuristics and translating findings into a prioritized fix list.",
    problem:
      "Figma's mobile experience is powerful but inconsistent — gestures, navigation patterns, and feedback states vary by surface, creating friction for users coming from desktop muscle memory.",
    solution:
      "A repeatable audit method combining heuristics, severity scoring, and effort estimates into a single prioritized roadmap that any team can act on.",
    keyFocus: [
      "Visibility of system status",
      "Match between system and real world",
      "User control and freedom",
      "Consistency, error prevention and recovery",
    ],
    process: [
      "Define scope & user flows",
      "Walk each flow against 10 heuristics",
      "Score severity (0–4) and effort",
      "Cluster findings into themes",
      "Build prioritized fix roadmap",
    ],
    insights: [
      "Status feedback was the weakest heuristic across flows",
      "Most severe issues clustered in file navigation and comment threads",
      "Quick wins outnumbered deep refactors 3 to 1",
    ],
    features: [
      "Severity × effort prioritization grid",
      "Evidence-tagged findings (screenshot, quote, heuristic)",
      "Templated handoff-ready audit document",
    ],
    screens: [
      { name: "Audit Cover", description: "Scope, methodology, and heuristic legend." },
      { name: "Flow Walkthroughs", description: "Annotated screens showing each violation." },
      { name: "Severity Matrix", description: "Findings plotted on severity vs. effort." },
      { name: "Recommendations", description: "Concrete redesign suggestions per finding." },
    ],
    results: [
      { label: "Heuristic violations found", value: "27" },
      { label: "Quick-win fixes", value: "18" },
      { label: "Avg. severity score", value: "2.3 / 4" },
    ],
    reflection:
      "A good audit isn't a verdict — it's a sharper lens. Pairing severity with effort is what turns critique into action.",
  },
  {
    slug: "razwi-darul-ifta",
    kind: "UX Case Study",
    title: "Razwi Darul Ifta",
    subtitle: "Religious Everyday Query Website",
    tagline: "Bringing centuries of Islamic jurisprudence into a calm, searchable web experience.",
    category: "Religious · Knowledge Platform",
    year: "2024",
    role: "UI/UX Designer",
    duration: "5 weeks",
    tools: ["Figma", "FigJam", "Notion"],
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    overview:
      "Razwi Darul Ifta is a web platform where Muslims can browse, search, and submit religious queries (fatwas) — moving a deeply traditional knowledge system into a modern, accessible interface.",
    problem:
      "Existing fatwa portals are text-heavy, hard to search, and intimidating for younger users. Asking a question often requires navigating outdated forms or visiting in person.",
    solution:
      "A respectful, content-first website with strong typography, multilingual search, categorized fatwas, and a guided 'Ask a question' flow that demystifies the process.",
    keyFocus: [
      "Reverent visual tone with modern usability",
      "Search and discovery across thousands of fatwas",
      "Multilingual content (Urdu, English, Arabic)",
      "Trust signals — author, date, references",
    ],
    process: [
      "Stakeholder interviews with scholars",
      "Content audit of existing fatwa archive",
      "Information architecture",
      "Wireframes & content templates",
      "Hi-fi design & prototyping",
    ],
    insights: [
      "Users wanted browsing by life-topic, not by scholar",
      "Trust grew when sources and references were visible",
      "Mobile-first reading was the dominant context",
    ],
    features: [
      "Powerful fatwa search with filters",
      "Categorized topics (worship, family, finance, etc.)",
      "Guided 'Ask a Mufti' submission flow",
      "Scholar profiles and verified sources",
      "Bilingual reading experience",
    ],
    screens: [
      { name: "Home", description: "Hero with search, featured fatwas, and topic tiles." },
      { name: "Topic Listing", description: "Browseable categorized fatwa archive." },
      { name: "Fatwa Detail", description: "Long-form reading view with references and citations." },
      { name: "Ask a Question", description: "Guided form for submitting new queries." },
      { name: "Scholar Profile", description: "Bio, credentials, and authored fatwas." },
    ],
    results: [
      { label: "Search task success", value: "92%" },
      { label: "Avg. time to fatwa", value: "−48%" },
      { label: "Mobile readability score", value: "AA" },
    ],
    reflection:
      "Designing for sacred content meant choosing restraint at every turn — the job was to disappear behind the words.",
  },

  // ───────────────── UI CASE STUDIES ─────────────────
  {
    slug: "jobconnect",
    kind: "UI Case Study",
    title: "JobConnect",
    subtitle: "Streamlined Job Landing Page",
    tagline: "A focused job-search landing page built around one clear action: find work, fast.",
    category: "Web · Landing Page",
    year: "2024",
    role: "UI Designer",
    duration: "2 weeks",
    tools: ["Figma"],
    accent: "from-sky-500 via-blue-500 to-indigo-500",
    overview:
      "JobConnect is a job-search landing page concept that strips the genre down to its essentials: a strong search, trusted employers, and a clear next step.",
    problem:
      "Most job sites overwhelm new visitors with filters, banners, and noisy CTAs — burying the one action they came for: search a role.",
    solution:
      "A single-purpose hero with a focused search bar, trust badges from hiring companies, role categories, and a clean featured jobs grid.",
    keyFocus: [
      "Hero-first information hierarchy",
      "Trust signals near the CTA",
      "Predictable category browsing",
      "Calm typography and spacing",
    ],
    process: [
      "Reference & moodboard",
      "Wireframe",
      "Hi-fi UI",
      "Component & spacing system",
    ],
    features: [
      "Hero search with role + location",
      "Featured employer logos",
      "Category browse tiles",
      "Featured jobs grid with apply CTAs",
      "Resume upload entry point",
    ],
    screens: [
      { name: "Landing Hero", description: "Search-first hero with trust badges." },
      { name: "Categories", description: "Browseable role categories grid." },
      { name: "Featured Jobs", description: "Curated job listings with company info." },
      { name: "Footer CTA", description: "Resume upload prompt and newsletter." },
    ],
    results: [
      { label: "Hero clarity score", value: "9.2 / 10" },
      { label: "CTA visibility", value: "Above fold" },
      { label: "Components reused", value: "100%" },
    ],
    reflection:
      "Landing pages live or die by the first 400 pixels. Everything else is supporting cast.",
  },
  {
    slug: "adwaya-tech",
    kind: "UI Case Study",
    title: "AdWaya Tech",
    subtitle: "Corporate Agency Website Redesign",
    tagline: "A modern corporate website that finally looks as sharp as the work it sells.",
    category: "Web · Corporate Redesign",
    year: "2024",
    role: "UI Designer",
    duration: "3 weeks",
    tools: ["Figma", "Photoshop"],
    accent: "from-orange-500 via-rose-500 to-pink-500",
    overview:
      "AdWaya Tech is a digital agency whose old site no longer reflected their work. The redesign rebuilt the visual system, IA, and case-study layouts from the ground up.",
    problem:
      "The old site looked like a 2014 template — weak typography, busy hero, scattered CTAs, and no narrative for case studies. New leads bounced before reaching the contact page.",
    solution:
      "A confident, agency-grade redesign: bold display typography, focused hero, clear service architecture, structured case-study templates, and consistent CTAs throughout.",
    keyFocus: [
      "Improved content hierarchy and readability",
      "Clear CTAs for hiring, contact and portfolio",
      "Consistent visual language across all pages",
      "Professional, agency-ready presentation",
    ],
    process: [
      "Audit existing site",
      "IA & content rewrite",
      "Wireframes",
      "Hi-fi UI design",
      "Component handoff",
    ],
    features: [
      "Bold hero with clear value proposition",
      "Service architecture with deep links",
      "Structured case-study template",
      "Team and culture sections",
      "Strong contact and quote CTAs",
    ],
    screens: [
      { name: "Home", description: "Bold hero, services snapshot, featured work." },
      { name: "Services", description: "Service detail pages with outcomes." },
      { name: "Case Study", description: "Structured agency case-study template." },
      { name: "About", description: "Team, culture, and credibility." },
      { name: "Contact", description: "Quote-request flow with service picker." },
    ],
    results: [
      { label: "Bounce rate (concept)", value: "−34%" },
      { label: "Lead-form clarity", value: "+2 steps shorter" },
      { label: "Pages redesigned", value: "12" },
    ],
    reflection:
      "When an agency's site doesn't sell their work, no amount of media buying will. The redesign was a reset of voice, not just visuals.",
  },
  {
    slug: "trend-junction",
    kind: "UI Case Study",
    title: "Trend Junction",
    subtitle: "E-commerce App — Splash to Checkout",
    tagline: "A full mobile commerce flow from splash to checkout, designed as one product.",
    category: "Mobile · E-commerce",
    year: "2023",
    role: "UI Designer",
    duration: "4 weeks",
    tools: ["Figma"],
    accent: "from-amber-500 via-orange-500 to-red-500",
    overview:
      "Trend Junction is a fashion e-commerce mobile app concept covering the complete shopping journey: splash, onboarding, browse, product, cart, and checkout.",
    problem:
      "Most e-commerce concepts focus only on hero screens. The real test is whether the visual system holds up across 20+ functional screens and edge states.",
    solution:
      "A coherent mobile commerce system: components, type scale, and color tokens that survive splash, browse, PDP, cart, address, payment, and confirmation.",
    keyFocus: [
      "End-to-end flow consistency",
      "PDP that drives confident add-to-cart",
      "Frictionless checkout",
      "Edge states (empty cart, payment error)",
    ],
    process: [
      "Flow mapping",
      "Wireframes",
      "Component system",
      "Hi-fi screens",
      "Prototype",
    ],
    features: [
      "Splash & onboarding",
      "Home browse with curated collections",
      "Product detail with size/color picker",
      "Cart and saved items",
      "Address, payment, and order success",
    ],
    screens: [
      { name: "Splash & Onboarding", description: "Brand intro and value prop slides." },
      { name: "Home / Browse", description: "Curated collections and category browse." },
      { name: "Product Detail", description: "Imagery, size/color, and add-to-cart." },
      { name: "Cart", description: "Edit, save for later, and apply coupon." },
      { name: "Checkout", description: "Address, payment, and order confirmation." },
    ],
    results: [
      { label: "Screens designed", value: "24" },
      { label: "Reusable components", value: "38" },
      { label: "Flow coverage", value: "Splash → Order success" },
    ],
    reflection:
      "Designing every screen — including the boring ones — is what separates a shot from a product.",
  },
  {
    slug: "shopsmart",
    kind: "UI Case Study",
    title: "ShopSmart",
    subtitle: "E-commerce Website Landing Page",
    tagline: "A confident e-commerce landing page that sells the catalog, not just the brand.",
    category: "Web · E-commerce",
    year: "2024",
    role: "UI Designer",
    duration: "2 weeks",
    tools: ["Figma"],
    accent: "from-fuchsia-500 via-pink-500 to-rose-500",
    overview:
      "ShopSmart is a creative e-commerce landing page concept built around a strong product hero, clear category entry points, and trust signals throughout.",
    problem:
      "Most e-commerce homepages treat the hero like a brand poster and bury the actual catalog. Visitors don't know where to click first.",
    solution:
      "A landing page where the product is the hero — featured items, clear category tiles, social proof, and a strong primary CTA above the fold.",
    keyFocus: [
      "Product-first hero",
      "Clear category navigation",
      "Trust, reviews, and social proof",
      "Mobile-first responsiveness",
    ],
    process: [
      "Reference moodboard",
      "Wireframe",
      "Hi-fi UI",
      "Responsive variants",
    ],
    features: [
      "Product-led hero",
      "Category tiles",
      "Featured collections",
      "Social proof and reviews",
      "Newsletter and footer CTAs",
    ],
    screens: [
      { name: "Hero", description: "Product-first hero with primary CTA." },
      { name: "Categories", description: "Browseable category tiles." },
      { name: "Featured Collections", description: "Curated product strips." },
      { name: "Footer", description: "Newsletter, trust badges, and links." },
    ],
    results: [
      { label: "Above-fold clarity", value: "9 / 10" },
      { label: "CTAs per fold", value: "1 primary" },
      { label: "Responsive variants", value: "3" },
    ],
    reflection:
      "An e-commerce homepage is a storefront window — not a billboard. Show the goods.",
  },

  // ───────────────── PRACTICE PROJECTS ─────────────────
  {
    slug: "spotify-redesign",
    kind: "Practice Project",
    title: "Spotify Music App",
    subtitle: "Welcome → Home Screen UI Flow",
    tagline: "A focused redesign of Spotify's welcome-to-home journey.",
    category: "Mobile · Music",
    year: "2023",
    role: "UI Designer (practice)",
    duration: "1 week",
    tools: ["Figma"],
    accent: "from-emerald-500 via-green-500 to-lime-500",
    overview:
      "A practice redesign of Spotify focused on the user's first 60 seconds: welcome, sign-in, personalization, and the first 'home' moment.",
    problem:
      "First-run experiences are often skipped during practice redesigns — yet they decide whether a user ever reaches Home.",
    solution:
      "A tightened welcome flow with clearer value framing, quicker personalization, and a Home screen tuned to the personalization signals just collected.",
    keyFocus: [
      "First-run clarity",
      "Personalization without friction",
      "Visual rhythm of the Home feed",
    ],
    process: [
      "Reference study",
      "Flow mapping",
      "Hi-fi UI screens",
    ],
    features: [
      "Welcome screen",
      "Sign-up / sign-in",
      "Personalization picker",
      "Home feed tuned to picks",
    ],
    screens: [
      { name: "Welcome", description: "Brand intro and primary CTA." },
      { name: "Sign In", description: "Streamlined auth screen." },
      { name: "Personalize", description: "Genre and artist picker." },
      { name: "Home", description: "Personalized home feed." },
    ],
    results: [
      { label: "Screens redesigned", value: "6" },
      { label: "Onboarding steps", value: "−1" },
      { label: "Visual consistency", value: "100%" },
    ],
    reflection:
      "Practice projects are where you train taste. Spotify's bar is high — copying isn't learning, reframing is.",
  },
  {
    slug: "food-website",
    kind: "Practice Project",
    title: "Food Website",
    subtitle: "Creative Landing Page",
    tagline: "A warm, appetite-driven landing page for a modern food brand.",
    category: "Web · Food & Beverage",
    year: "2023",
    role: "UI Designer (practice)",
    duration: "1 week",
    tools: ["Figma"],
    accent: "from-yellow-500 via-orange-500 to-red-500",
    overview:
      "A creative food landing page concept exploring warm color, large food photography, and a strong order-now CTA.",
    problem:
      "Food brands often ship generic templates that look like every other delivery site — losing the appetite the photography is meant to create.",
    solution:
      "A landing page built around a single mouth-watering hero, clear menu categories, and a quick order CTA — all in a warm, branded palette.",
    keyFocus: [
      "Appetite-first photography",
      "Warm, branded palette",
      "Clear order CTA",
    ],
    process: [
      "Moodboard",
      "Wireframe",
      "Hi-fi UI",
    ],
    features: [
      "Hero with featured dish",
      "Menu categories",
      "Chef's specials strip",
      "Order CTA and footer",
    ],
    screens: [
      { name: "Hero", description: "Appetite-driven hero with order CTA." },
      { name: "Menu", description: "Category tiles for menu sections." },
      { name: "Specials", description: "Chef's curated dishes." },
      { name: "Footer", description: "Locations and contact." },
    ],
    results: [
      { label: "Warm palette tokens", value: "8" },
      { label: "Hero variants", value: "3" },
      { label: "Mobile-ready", value: "Yes" },
    ],
    reflection:
      "Food design is sensory before it's visual. The palette has to feel warm before the user reads a single word.",
  },
  {
    slug: "scoot-soft-drink",
    kind: "Practice Project",
    title: "Scoot Soft Drink",
    subtitle: "Creative Soft Drink Landing Page",
    tagline: "A bold, fizzy landing page concept for a fictional soft-drink brand.",
    category: "Web · FMCG",
    year: "2023",
    role: "UI Designer (practice)",
    duration: "1 week",
    tools: ["Figma"],
    accent: "from-cyan-500 via-blue-500 to-violet-500",
    overview:
      "Scoot is a fictional soft-drink brand. The landing page leans into bold color, playful typography, and a hero that puts the bottle front and center.",
    problem:
      "FMCG landing pages are often static product shots with too much copy. They miss the energy that drinks brands sell.",
    solution:
      "A bold, color-saturated landing page with a confident bottle hero, flavor strip, and lifestyle imagery that brings the brand to life.",
    keyFocus: [
      "Bold color and typography",
      "Product-as-hero composition",
      "Playful, energetic tone",
    ],
    process: [
      "Brand moodboard",
      "Wireframe",
      "Hi-fi UI",
    ],
    features: [
      "Bottle-hero composition",
      "Flavor strip",
      "Lifestyle storytelling section",
      "Where-to-buy CTA",
    ],
    screens: [
      { name: "Hero", description: "Bottle-as-hero with bold tagline." },
      { name: "Flavors", description: "Flavor strip with color-coded cards." },
      { name: "Lifestyle", description: "Brand storytelling section." },
      { name: "Footer", description: "Where to buy and socials." },
    ],
    results: [
      { label: "Color tokens", value: "6" },
      { label: "Hero compositions", value: "3" },
      { label: "Personality", value: "Loud, fun" },
    ],
    reflection:
      "Soft-drink design is permission to be loud. The hardest part of practice was resisting the urge to make it 'tasteful'.",
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const PROJECT_GROUPS: { kind: ProjectKind; description: string }[] = [
  { kind: "UX Case Study", description: "End-to-end product thinking — research, problem framing, IA, and outcomes." },
  { kind: "UI Case Study", description: "Visual systems and interface craft applied to real product surfaces." },
  { kind: "Practice Project", description: "Self-initiated explorations to sharpen taste, speed, and visual range." },
];
