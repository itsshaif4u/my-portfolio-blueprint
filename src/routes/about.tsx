import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shaif Alam" },
      { name: "description", content: "The story, philosophy, skills and tools behind Shaif Alam's product design practice." },
      { property: "og:title", content: "About — Shaif Alam" },
      { property: "og:description", content: "Story, philosophy, and tools behind the practice." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { y: "2026", t: "Senior Product Designer", d: "Leading design for an enterprise SaaS suite." },
  { y: "2024", t: "Product Designer", d: "Shipped two zero-to-one consumer products." },
  { y: "2022", t: "UX Designer", d: "Joined a fintech team; led the redesign of the core dashboard." },
  { y: "2021", t: "Started designing", d: "Self-taught, then formal training. Fell in love with the craft." },
];

const TOOLS = ["Figma", "FigJam", "Framer", "Notion", "Linear", "Maze", "Dovetail", "Webflow", "Lovable"];
const CERTS = ["Google UX Design", "IDF Interaction Design", "NN/g Research Methods"];

function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">About</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
          I design products with the patience of a researcher and the bias of a builder.
        </h1>
      </section>

      <section className="container-page py-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-5 text-lg text-muted-foreground">
          <p>
            I started designing because I couldn't stand watching good ideas get
            buried in bad interfaces. Five years in, that's still the thing that
            gets me out of bed.
          </p>
          <p>
            I've worked with fintechs, consumer apps, and early-stage founders.
            The throughline: complex products that need to feel obvious. I treat
            every project as a system — the screens are just where it's visible.
          </p>
          <p>
            I believe design is a conversation, not a deliverable. The best work
            I've shipped came from teams that argued well and trusted each other
            to be right enough.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-2xl border border-border surface-raised p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Philosophy</p>
            <ul className="mt-4 space-y-3 font-display text-2xl leading-snug">
              <li>Clarity beats cleverness.</li>
              <li>Restraint is a feature.</li>
              <li>Ship the simplest thing that teaches you the most.</li>
              <li>Respect the user's attention.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Timeline</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">Five years, one obsession.</h2>
        <ol className="mt-12 space-y-6">
          {TIMELINE.map((item) => (
            <li key={item.y} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 border-t border-border pt-6">
              <span className="font-mono text-sm text-primary">{item.y}</span>
              <div>
                <h3 className="font-display text-2xl">{item.t}</h3>
                <p className="mt-1 text-muted-foreground">{item.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tools</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <li key={t} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Certifications</p>
          <ul className="mt-4 space-y-2">
            {CERTS.map((c) => (
              <li key={c} className="rounded-xl border border-border surface px-4 py-3">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-3xl border border-border surface-raised p-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Want the long version?</h2>
          <p className="mt-3 text-muted-foreground">Grab my resume or send a note.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link to="/resume" className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm text-primary-foreground shadow-brand">View resume</Link>
            <Link to="/contact" className="rounded-full border border-border px-5 py-2.5 text-sm">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
