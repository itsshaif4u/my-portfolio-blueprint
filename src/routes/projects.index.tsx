import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_GROUPS, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Shaif Alam" },
      { name: "description", content: "UX case studies, UI case studies, and practice projects across dashboards, mobile apps, and web." },
      { property: "og:title", content: "Projects — Shaif Alam" },
      { property: "og:description", content: "Selected UX, UI, and practice projects." },
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
          Eleven projects across UX case studies, UI case studies, and practice work —
          chosen because they best show how I think, not just what I shipped.
        </p>
      </section>

      {PROJECT_GROUPS.map((group) => {
        const items = PROJECTS.filter((p) => p.kind === group.kind);
        if (items.length === 0) return null;
        return (
          <section key={group.kind} className="container-page py-16 border-t border-border">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{group.kind}</p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl">{group.kind}s</h2>
              </div>
              <p className="hidden md:block max-w-md text-sm text-muted-foreground">{group.description}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {items.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="pb-24" />
    </>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="group block overflow-hidden rounded-3xl border border-border surface-raised hover:shadow-elev-3 transition"
    >
      <div className="aspect-[16/10] overflow-hidden">
        {p.cover ? (
          <img
            src={p.cover}
            alt={p.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${p.accent} flex items-end p-6 text-white transition-transform duration-700 group-hover:scale-105`}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">{p.kind}</p>
              <p className="mt-2 font-display text-3xl md:text-4xl drop-shadow">{p.title}</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {String(index + 1).padStart(2, "0")} · {p.category}
        </p>
        <h3 className="mt-3 font-display text-2xl md:text-3xl">{p.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
        <p className="mt-4 text-base text-muted-foreground">{p.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>{p.year}</span><span>·</span><span>{p.role}</span><span>·</span><span>{p.duration}</span>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-primary">
          Read the case study <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
