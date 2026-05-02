import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Studio", href: "#manifesto" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="px-3 sm:px-5">
        <div
          className={`mx-auto max-w-[1480px] flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "border border-[rgba(242,237,227,0.12)] bg-[rgba(14,16,18,0.78)] backdrop-blur-xl px-3 sm:px-4 py-2"
              : "px-3 sm:px-4 py-2"
          }`}
          style={{
            boxShadow: scrolled ? "0 12px 40px rgba(0,0,0,0.35)" : "none",
          }}
        >
          {/* Logo lockup */}
          <a href="#top" className="flex items-center gap-2.5 group" data-testid="navbar-logo">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cream)]">
              <Logo size={22} variant="dark" />
            </span>
            <div className="leading-tight hidden sm:block">
              <div className="serif text-[15px] font-semibold tracking-tight text-[var(--cream)]">
                Yashik Yadav <span className="italic-soft text-[var(--acid)]">& Co.</span>
              </div>
              <div className="mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted-on-dark)]">
                Healthcare Growth Studio · Est. 2018
              </div>
            </div>
          </a>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className="text-[13px] tracking-tight text-[var(--cream)]/85 hover:text-[var(--acid)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-on-dark)] flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--acid)] pulse-dot" />
              Booking Q1 ’26
            </span>
            <a
              href="#audit"
              data-testid="navbar-cta"
              className="btn-flip group relative inline-flex items-center gap-1.5 rounded-full border border-[var(--acid)] px-4 py-2 text-[13px] font-medium text-[var(--acid)] transition-colors hover:text-[var(--ink)]"
            >
              Start a project
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile */}
          <button
            data-testid="navbar-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-9 w-9 rounded-full border border-[rgba(242,237,227,0.18)] flex items-center justify-center text-[var(--cream)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            data-testid="navbar-mobile-menu"
            className="lg:hidden mt-2 mx-auto max-w-[1480px] rounded-3xl border border-[rgba(242,237,227,0.12)] bg-[rgba(14,16,18,0.96)] backdrop-blur-xl p-5"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="serif text-3xl text-[var(--cream)] py-1.5"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              data-testid="mobile-navbar-cta"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--acid)] px-5 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              Start a project <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
