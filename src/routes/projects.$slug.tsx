import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { PROJECTS, getProject, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — Shaif Alam` : "Case Study" },
        { name: "description", content: p?.tagline ?? "Case study" },
        { property: "og:title", content: p ? `${p.title} — Shaif Alam` : "Case Study" },
        { property: "og:description", content: p?.tagline ?? "Case study" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: p ? `/projects/${p.slug}` : "/projects" },
        { property: "og:image", content: p?.cover ?? "" },
      ],
      links: p ? [{ rel: "canonical", href: `/projects/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-4xl">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary">Back to projects</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl">Couldn't load this case study</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article>
      <section className="container-page pt-12">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
      </section>

      <header className="container-page pt-10 pb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {p.kind} · {p.category} · {p.year}
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">{p.title}</h1>
        <p className="mt-3 font-display text-xl md:text-2xl text-muted-foreground">{p.subtitle}</p>
        <p className="mt-6 max-w-3xl text-lg">{p.tagline}</p>
        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
          <Meta label="Role" value={p.role} />
          <Meta label="Duration" value={p.duration} />
          <Meta label="Year" value={p.year} />
          <Meta label="Tools" value={p.tools.join(", ")} />
        </dl>
      </header>

      <section className="container-page">
        <Cover project={p} />
      </section>

      <Section title="Overview"><p className="text-lg text-muted-foreground">{p.overview}</p></Section>

      <Section title="Problem" bordered><p className="text-lg text-muted-foreground">{p.problem}</p></Section>

      <Section title="Solution" bordered><p className="text-lg text-muted-foreground">{p.solution}</p></Section>

      <Section title="Key Focus" bordered>
        <ul className="grid sm:grid-cols-2 gap-3">
          {p.keyFocus.map((k) => (
            <li key={k} className="rounded-xl border border-border surface px-4 py-3">{k}</li>
          ))}
        </ul>
      </Section>

      <Section title="Design Process" bordered>
        <ol className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {p.process.map((step, i) => (
            <li key={step} className="rounded-xl border border-border surface-raised p-4">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <p className="mt-2">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      {p.research && p.research.length > 0 && (
        <Section title="Research" bordered>
          <ul className="space-y-3">
            {p.research.map((r) => (
              <li key={r} className="rounded-xl border border-border surface px-4 py-3">{r}</li>
            ))}
          </ul>
        </Section>
      )}

      {p.insights && p.insights.length > 0 && (
        <Section title="Insights" bordered>
          <ol className="space-y-4">
            {p.insights.map((it, i) => (
              <li key={it} className="flex gap-4">
                <span className="font-mono text-sm text-primary shrink-0 mt-1">0{i + 1}</span>
                <p className="text-lg">{it}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section title="Features" bordered>
        <ul className="grid sm:grid-cols-2 gap-4">
          {p.features.map((f) => (
            <li key={f} className="rounded-2xl border border-border surface-raised p-5">{f}</li>
          ))}
        </ul>
      </Section>

      <Section title="Key Screens" bordered>
        <ul className="grid sm:grid-cols-2 gap-4">
          {p.screens.map((s) => (
            <li key={s.name} className="rounded-2xl border border-border surface-raised p-5">
              <p className="font-display text-lg">{s.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="container-page py-16 border-t border-border">
        <h2 className="font-display text-3xl">Outcome &amp; Impact</h2>
        <dl className="mt-8 grid sm:grid-cols-3 gap-6">
          {p.results.map((r) => (
            <div key={r.label} className="rounded-2xl border border-border bg-gradient-brand p-6 text-primary-foreground shadow-brand">
              <dt className="font-mono text-xs uppercase tracking-widest opacity-80">{r.label}</dt>
              <dd className="mt-3 font-display text-5xl">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section title="Reflection" bordered>
        <p className="font-display text-2xl leading-snug">{p.reflection}</p>
      </Section>

      <section className="container-page py-16">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between gap-6 rounded-3xl border border-border surface-raised p-8 hover:shadow-elev-3 transition"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Next project</p>
            <p className="mt-2 font-display text-3xl md:text-4xl">{next.title}</p>
          </div>
          <ArrowUpRight className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </section>
    </article>
  );
}

function Section({ title, children, bordered }: { title: string; children: React.ReactNode; bordered?: boolean }) {
  return (
    <section className={`container-page py-12 grid md:grid-cols-12 gap-12 ${bordered ? "border-t border-border" : ""}`}>
      <h2 className="md:col-span-4 font-display text-3xl">{title}</h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-2">{value}</dd>
    </div>
  );
}

function Cover({ project: p }: { project: Project }) {
  if (p.cover) {
    return (
      <div className="rounded-3xl overflow-hidden border border-border shadow-elev-3">
        <img src={p.cover} alt={p.title} className="w-full h-auto" />
      </div>
    );
  }
  return (
    <div className={`rounded-3xl overflow-hidden border border-border shadow-elev-3 aspect-[16/9] bg-gradient-to-br ${p.accent} flex items-end p-10`}>
      <div className="text-white">
        <p className="font-mono text-xs uppercase tracking-widest opacity-80">{p.kind}</p>
        <p className="mt-2 font-display text-4xl md:text-6xl drop-shadow">{p.title}</p>
        <p className="mt-2 opacity-90 max-w-xl">{p.subtitle}</p>
      </div>
    </div>
  );
}
