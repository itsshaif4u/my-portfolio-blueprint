import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-border bg-background/70">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 font-display text-lg">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand shadow-brand">
            <span className="font-display text-sm text-primary-foreground">S</span>
          </span>
          <span className="tracking-tight">Shaif<span className="text-primary">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-accent/40" }}
              className="px-3 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setLight((v) => !v)}
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent transition-colors"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-brand hover:opacity-95 transition-opacity"
          >
            Let's talk
          </Link>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground bg-accent/40" }}
                className="px-3 py-3 rounded-lg text-muted-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
