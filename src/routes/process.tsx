import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Shaif Alam" },
      { name: "description", content: "How I work — discovery, definition, design, and delivery." },
      { property: "og:title", content: "Process — Shaif Alam" },
      { property: "og:description", content: "A calm, deliberate product design process." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const PHASES = [
  {
    n: "01", t: "Discover",
    bullets: ["Stakeholder interviews", "Heuristic & analytics audit", "Competitive teardown", "Field research"],
    out: "A shared understanding of the real problem.",
  },
  {
    n: "02", t: "Define",
    bullets: ["Affinity mapping", "Jobs-to-be-done", "Problem statement", "Success metrics"],
    out: "A sharp brief everyone agrees on.",
  },
  {
    n: "03", t: "Design",
    bullets: ["IA & flows", "Wireframes", "High-fidelity systems", "Prototypes"],
    out: "Solutions ready to test, not guess.",
  },
  {
    n: "04", t: "Deliver",
    bullets: ["Usability testing", "Dev handoff", "QA pairing", "Post-launch measurement"],
    out: "Shipped work that proves itself.",
  },
];

function ProcessPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Process</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
          Calm, deliberate, repeatable.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The process is a scaffold, not a script. It bends to the problem, but
          it never disappears.
        </p>
      </section>

      <section className="container-page pb-24 space-y-6">
        {PHASES.map((p) => (
          <article key={p.n} className="grid md:grid-cols-12 gap-6 rounded-3xl border border-border surface-raised p-8 md:p-10">
            <div className="md:col-span-3">
              <p className="font-mono text-sm text-primary">{p.n}</p>
              <h2 className="mt-3 font-display text-4xl">{p.t}</h2>
            </div>
            <div className="md:col-span-6">
              <ul className="grid sm:grid-cols-2 gap-2">
                {p.bullets.map((b) => (
                  <li key={b} className="rounded-xl border border-border surface px-4 py-3 text-sm">{b}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Outcome</p>
              <p className="mt-2 font-display text-xl leading-snug">{p.out}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
