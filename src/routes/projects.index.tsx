import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { PROJECTS, PROJECT_GROUPS, type Project, type ProjectKind } from "@/data/projects";

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

type Filter = "All" | ProjectKind;

const FILTERS: Filter[] = ["All", "UX Case Study", "UI Case Study", "Practice Project"];

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const visibleGroups = useMemo(() => {
    return PROJECT_GROUPS.map((g) => ({
      ...g,
      items: PROJECTS.filter((p) => p.kind === g.kind),
    })).filter((g) => g.items.length > 0 && (filter === "All" || g.kind === filter));
  }, [filter]);

  const counts = useMemo(() => {
    const m = new Map<Filter, number>();
    m.set("All", PROJECTS.length);
    PROJECT_GROUPS.forEach((g) => m.set(g.kind, PROJECTS.filter((p) => p.kind === g.kind).length));
    return m;
  }, []);

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

        {/* Filter chips */}
        <div role="tablist" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-gradient-brand text-primary-foreground border-transparent shadow-brand"
                    : "border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {f}
                <span className="ml-2 font-mono text-[10px] opacity-70">{counts.get(f) ?? 0}</span>
              </button>
            );
          })}
        </div>
      </section>

      {visibleGroups.map((group) => (
        <section key={group.kind} className="container-page py-16 border-t border-border">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{group.kind}</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">{group.kind}s</h2>
            </div>
            <p className="hidden md:block max-w-md text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {group.items.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>
      ))}

      <div className="pb-24" />
    </>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="group block overflow-hidden rounded-3xl border border-border surface-raised hover-lift"
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
          <div className={`w-full h-full bg-gradient-to-br ${p.accent} flex items-end p-6 text-white transition-transform duration-700 group-hover:scale-105`}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">{p.kind}</p>
              <p className="mt-2 font-display text-3xl md:text-4xl drop-shadow">{p.title}</p>
            </div>
          </div>
        )}
        {p.results?.[0] && (
          <span className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-mono uppercase tracking-widest border border-border">
            {p.results[0].value} {p.results[0].label}
          </span>
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
