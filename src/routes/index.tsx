import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";
import { PROJECTS } from "@/data/projects";
import { useCountUp } from "@/hooks/use-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaif Alam — Product Designer" },
      { name: "description", content: "Product designer building clear, human, measurably better digital products. UX & UI case studies, process, and resume." },
      { property: "og:title", content: "Shaif Alam — Product Designer" },
      { property: "og:description", content: "He thinks like a product designer." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const METRICS: { n: number; suffix: string; l: string }[] = [
  { n: 120, suffix: "+", l: "Research participants" },
  { n: 350, suffix: "+", l: "Screens designed" },
  { n: 40, suffix: "+", l: "Iterations shipped" },
  { n: 94, suffix: "%", l: "Usability success rate" },
];

const SKILLS = [
  "Product Strategy", "Design Systems", "User Research", "Information Architecture",
  "Interaction Design", "Prototyping", "Usability Testing", "Design Ops",
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Interviews, audits, and competitive teardowns to map the real problem." },
  { n: "02", t: "Define", d: "Synthesis into insights, jobs-to-be-done, and a sharp problem statement." },
  { n: "03", t: "Design", d: "Flows, wireframes, and high-fidelity systems built to scale." },
  { n: "04", t: "Deliver", d: "Tested prototypes, dev handoff, and measurement post-launch." },
];

const TESTIMONIALS = [
  { q: "Shaif doesn't just deliver pixels — he reframes the problem.", a: "Aarav Mehta", r: "Head of Product, Fintech" },
  { q: "Rare blend of taste, rigor, and stakeholder empathy.", a: "Sara Khan", r: "Engineering Manager" },
  { q: "Our roadmap got 2× sharper after he joined.", a: "Devansh Roy", r: "Founder & CEO" },
];

const TRUSTED_BY = ["Finance Pulse", "NikahKaro", "AdWaya Tech", "JobConnect", "TrendJunction", "ShopSmart"];

function CounterTile({ n, suffix, l }: { n: number; suffix: string; l: string }) {
  const { ref, value } = useCountUp(n);
  return (
    <div>
      <dt
        ref={ref as React.RefObject<HTMLElement>}
        className="font-display text-3xl md:text-4xl text-gradient tabular-nums"
      >
        {value}{suffix}
      </dt>
      <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{l}</dd>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 anim-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" /> Available for Q3 2026
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              He thinks like a <span className="text-gradient">product designer</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm Shaif Alam — a product designer building digital products that are clear,
              human, and measurably better. Currently shaping enterprise SaaS and consumer mobile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-brand hover:opacity-95 transition"
              >
                View my work <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-accent transition"
              >
                Let's design together
              </Link>
              <a
                href="/Resume_Shaif_Alam.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground hover:text-primary transition"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {METRICS.map((m) => (
                <CounterTile key={m.l} {...m} />
              ))}
            </dl>
          </div>

          <div className="md:col-span-5 relative anim-fade">
            <div className="absolute -inset-6 bg-gradient-glow blur-2xl animate-pulse-glow pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elev-3">
              <img
                src={heroImg}
                alt="Portrait of Shaif Alam, product designer"
                width={1024}
                height={1280}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — TRUSTED-BY STRIP */}
      <section aria-label="Selected work and clients" className="border-y border-border surface">
        <div className="container-page py-6 flex flex-wrap items-center gap-x-10 gap-y-3 justify-between">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground shrink-0">Selected work for</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {TRUSTED_BY.map((b) => (
              <li
                key={b}
                className="font-display text-base md:text-lg text-muted-foreground/70 hover:text-primary transition-colors"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="work" className="container-page py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Selected work</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Featured projects</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:underline">
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.filter((p) => p.cover).slice(0, 3).map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group relative block overflow-hidden rounded-3xl border border-border surface-raised hover-lift ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={`${p.title} case study cover`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${p.accent}`} />
                )}
                {p.results?.[0] && (
                  <span className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-mono uppercase tracking-widest border border-border">
                    {p.results[0].value} {p.results[0].label}
                  </span>
                )}
              </div>
              <div className="p-6 md:p-8 flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {p.kind} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-lg">{p.tagline}</p>
                </div>
                <div className="shrink-0 rounded-full border border-border p-3 group-hover:bg-gradient-brand group-hover:text-primary-foreground transition">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT SNAPSHOT + SKILLS */}
      <section className="container-page py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">About</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">A designer for the messy middle.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I work where strategy meets craft — between the whiteboard and the pixel.
            My favorite problems are the ones that make a team go "wait, what are we
            actually building?"
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-primary hover:underline">
            Read my story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="md:col-span-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Skills</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <li key={s} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">How I work</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">A calm, deliberate process.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {PROCESS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border surface p-6 hover-lift">
              <p className="font-mono text-xs text-primary">{s.n}</p>
              <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Kind words</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">From people I've shipped with.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.a} className="rounded-2xl border border-border surface-raised p-6 hover-lift">
              <blockquote className="font-display text-xl leading-snug">"{t.q}"</blockquote>
              <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.a} · {t.r}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-brand p-10 md:p-16 text-center text-primary-foreground shadow-brand">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl">Have a problem worth solving?</h2>
            <p className="mt-4 max-w-xl mx-auto opacity-90">
              I take on a small number of focused engagements each quarter. Tell me what you're building.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
