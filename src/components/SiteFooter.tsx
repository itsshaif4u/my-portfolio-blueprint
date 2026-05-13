import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl leading-tight">
            Building products <br /> that <span className="text-gradient">create impact</span>.
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Shaif Alam — Product Designer crafting clear, human, and measurable digital products.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground tracking-widest">Sitemap</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/process" className="hover:text-primary">Process</Link></li>
            <li><Link to="/resume" className="hover:text-primary">Resume</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground tracking-widest">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-primary">Dribbble</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a></li>
            <li><a href="mailto:hello@shaif.design" className="hover:text-primary">hello@shaif.design</a></li>
          </ul>
        </div>
      </div>
      <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-border text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Shaif Alam. All rights reserved.</span>
        <span>Designed & built with intent.</span>
      </div>
    </footer>
  );
}
