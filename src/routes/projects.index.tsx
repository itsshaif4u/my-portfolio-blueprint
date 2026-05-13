import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Shaif Alam" },
      { name: "description", content: "Selected case studies in enterprise SaaS, consumer mobile, and design tooling." },
      { property: "og:title", content: "Projects — Shaif Alam" },
      { property: "og:description", content: "Case studies and selected work." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="container-page pt-20 pb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Selected work</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
          Projects, end to end.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A small set of case studies — chosen because they best show how I think,
          not just what I shipped.
        </p>
      </section>

      <section className="container-page pb-24 space-y-10">
        {PROJECTS.map((p, i) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group block overflow-hidden rounded-3xl border border-border surface-raised hover:shadow-elev-3 transition"
          >
            <div className="grid md:grid-cols-2">
              <div className={`aspect-[16/10] md:aspect-auto overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {p.category}
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-5xl">{p.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <span>{p.year}</span><span>·</span><span>{p.role}</span><span>·</span><span>{p.duration}</span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-primary">
                  Read the case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
