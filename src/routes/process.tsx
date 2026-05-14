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
    methods: ["Stakeholder interviews", "Heuristic & analytics audit", "Competitive teardown", "Field research"],
    deliverables: ["Research plan", "Audit deck", "Interview synthesis"],
    metric: "Reframed problem, agreed",
    out: "A shared understanding of the real problem.",
  },
  {
    n: "02", t: "Define",
    methods: ["Affinity mapping", "Jobs-to-be-done", "Problem statement", "Success metrics"],
    deliverables: ["JTBD map", "1-page brief", "Success metrics doc"],
    metric: "1-page brief, signed off",
    out: "A sharp brief everyone agrees on.",
  },
  {
    n: "03", t: "Design",
    methods: ["IA & flows", "Wireframes", "High-fidelity systems", "Prototypes"],
    deliverables: ["IA map", "Wireflows", "Hi-fi system", "Clickable prototype"],
    metric: "Tested with 5+ users",
    out: "Solutions ready to test, not guess.",
  },
  {
    n: "04", t: "Deliver",
    methods: ["Usability testing", "Dev handoff", "QA pairing", "Post-launch measurement"],
    deliverables: ["Test report", "Spec & tokens", "QA notes", "Impact memo"],
    metric: "Shipped & measured",
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

      <section className="container-page pb-24 grid md:grid-cols-12 gap-10">
        {/* Sticky chapter index */}
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Phases</p>
            <ol className="mt-4 space-y-2">
              {PHASES.map((p) => (
                <li key={p.n}>
                  <a
                    href={`#phase-${p.n}`}
                    className="flex items-baseline gap-3 rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-mono text-xs text-primary">{p.n}</span>
                    {p.t}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Timeline column */}
        <div className="md:col-span-9 relative">
          <div aria-hidden className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-6" />
          <div className="space-y-10">
            {PHASES.map((p) => (
              <article
                key={p.n}
                id={`phase-${p.n}`}
                className="relative pl-12 md:pl-16 scroll-mt-24"
              >
                <span
                  aria-hidden
                  className="absolute left-0 md:left-2 top-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground font-mono text-xs shadow-brand"
                >
                  {p.n}
                </span>
                <div className="rounded-3xl border border-border surface-raised p-8 md:p-10 hover-lift">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-4xl">{p.t}</h2>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                      {p.metric}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-xl text-muted-foreground leading-snug">
                    {p.out}
                  </p>
                  <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Methods</p>
                      <ul className="mt-3 space-y-2">
                        {p.methods.map((b) => (
                          <li key={b} className="rounded-xl border border-border surface px-4 py-2.5 text-sm">{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Deliverables</p>
                      <ul className="mt-3 space-y-2">
                        {p.deliverables.map((b) => (
                          <li key={b} className="rounded-xl border border-border surface px-4 py-2.5 text-sm">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
