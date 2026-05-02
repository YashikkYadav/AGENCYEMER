import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#audit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--paper)]/85 backdrop-blur-xl border-b border-[var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" data-testid="navbar-logo">
          <Logo height={38} variant="ink" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-[14px] font-medium text-[var(--ink-soft)] hover:text-[var(--sage)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="/#audit" data-testid="navbar-cta" className="btn-sage">
            Book free audit
            <ArrowRight size={15} />
          </a>
        </div>

        <button
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 rounded-full border border-[var(--line-2)] flex items-center justify-center text-[var(--ink)]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div data-testid="navbar-mobile-menu" className="lg:hidden bg-[var(--paper)] border-t border-[var(--line)]">
          <div className="px-5 py-5 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                className="py-2 text-[15px] font-medium text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#audit"
              onClick={() => setOpen(false)}
              data-testid="mobile-navbar-cta"
              className="btn-sage mt-3 w-full"
            >
              Book free audit <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
