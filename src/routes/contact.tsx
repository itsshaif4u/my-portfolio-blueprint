import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shaif Alam" },
      { name: "description", content: "Start a project, ask a question, or just say hello." },
      { property: "og:title", content: "Contact — Shaif Alam" },
      { property: "og:description", content: "Let's build something worth using." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-page pt-20 pb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight max-w-3xl">
          Let's build something <span className="text-gradient">worth using</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I take on a small number of focused engagements each quarter — full
          product work, design system builds, and audits.
        </p>
      </section>

      <section className="container-page py-12 grid md:grid-cols-12 gap-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 rounded-3xl border border-border surface-raised p-8 space-y-5"
        >
          <Field label="Your name" name="name" placeholder="Ada Lovelace" />
          <Field label="Email" name="email" type="email" placeholder="ada@company.com" />
          <Field label="Company (optional)" name="company" placeholder="Acme Inc." />
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
            <textarea
              required rows={5}
              placeholder="What are you building? Timeline? Anything else I should know?"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-brand"
          >
            <Send className="h-4 w-4" /> {sent ? "Sent — I'll be in touch" : "Send message"}
          </button>
        </form>

        <aside className="md:col-span-5 space-y-4">
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="hello@shaif.design" href="mailto:hello@shaif.design" />
          <ContactCard icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="linkedin.com/in/shaif" href="https://linkedin.com" />
          <ContactCard icon={<Github className="h-5 w-5" />} label="GitHub" value="github.com/shaif" href="https://github.com" />
          <div className="rounded-2xl border border-border bg-gradient-brand p-6 text-primary-foreground shadow-brand">
            <p className="font-mono text-xs uppercase tracking-widest opacity-80">Response time</p>
            <p className="mt-2 font-display text-2xl">Within 24 hours.</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={type !== "text" || name !== "company"}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border surface-raised p-5 hover:shadow-brand transition"
    >
      <span className="grid place-items-center h-11 w-11 rounded-full bg-gradient-brand text-primary-foreground">{icon}</span>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 group-hover:text-primary">{value}</p>
      </div>
    </a>
  );
}
