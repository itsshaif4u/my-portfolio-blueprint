import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Shaif Alam" },
      { name: "description", content: "Resume of Shaif Alam — product designer." },
      { property: "og:title", content: "Resume — Shaif Alam" },
      { property: "og:description", content: "Experience, education, and skills." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

const EXPERIENCE = [
  { y: "2024 — Present", t: "Senior Product Designer", c: "Confidential SaaS",
    p: ["Owned end-to-end design for the core product surface.", "Built the design system used by 14 engineers.", "Led research that reframed the Q4 roadmap."] },
  { y: "2022 — 2024", t: "Product Designer", c: "Fintech Startup",
    p: ["Redesigned the dashboard, lifting DAU by 38%.", "Established the team's research practice.", "Mentored two junior designers."] },
  { y: "2021 — 2022", t: "UX Designer", c: "Agency",
    p: ["Shipped 6 client products across health, finance, and edtech.", "Led usability testing across web and mobile."] },
];

const EDU = [
  { y: "2021", t: "B.Des, Communication Design", c: "NIFT" },
  { y: "2022", t: "Google UX Design Certificate", c: "Coursera" },
];

function ResumePage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Resume</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight">Shaif Alam</h1>
          <p className="mt-3 text-muted-foreground">Product Designer · Based in India · Open to remote</p>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm text-primary-foreground shadow-brand"
        >
          <Download className="h-4 w-4" /> Download PDF
        </a>
      </section>

      <section className="container-page py-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-10">
          <div>
            <h2 className="font-display text-3xl">Experience</h2>
            <ol className="mt-6 space-y-6">
              {EXPERIENCE.map((e) => (
                <li key={e.t + e.y} className="border-t border-border pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl">{e.t}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.y}</span>
                  </div>
                  <p className="text-primary">{e.c}</p>
                  <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                    {e.p.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-3xl">Education</h2>
            <ul className="mt-6 space-y-3">
              {EDU.map((e) => (
                <li key={e.t} className="flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <div>
                    <p className="font-display text-xl">{e.t}</p>
                    <p className="text-muted-foreground">{e.c}</p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.y}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="md:col-span-4 space-y-8">
          <div className="rounded-2xl border border-border surface-raised p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@shaif.design" className="hover:text-primary">hello@shaif.design</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">linkedin.com/in/shaif</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-primary">dribbble.com/shaif</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Skills</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Product Strategy","Design Systems","Research","IA","Prototyping","Workshops","Mentorship"].map((s) =>
                <li key={s} className="rounded-full border border-border px-3 py-1">{s}</li>
              )}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
