import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ArrowRight, ArrowUpRight, Star, Share2, Globe, Youtube,
  Users, Repeat, MapPin, Search, FileText, Megaphone, ChevronDown, Sparkles,
} from "lucide-react";
import Logo from "./Logo";

const servicesMega = [
  {
    group: "Acquisition",
    items: [
      { icon: Search, title: "Healthcare SEO", desc: "Rank #1 for every treatment in your city.", href: "/#services" },
      { icon: Megaphone, title: "Google Ads for Doctors", desc: "Patient leads in 48 hours from paid search.", href: "/#services" },
      { icon: MapPin, title: "Google Business Profile", desc: "Win the local 3-pack on Google Maps.", href: "/#services" },
      { icon: Users, title: "Patient Acquisition System", desc: "20–100 new patients per month, integrated.", href: "/#services" },
    ],
  },
  {
    group: "Content & Brand",
    items: [
      { icon: Share2, title: "Social Media Management", desc: "100 posts/month across IG, LinkedIn, YT.", href: "/services/social-media-management", tag: "Popular" },
      { icon: Youtube, title: "YouTube Marketing", desc: "Authority and patients from video.", href: "/#services" },
      { icon: FileText, title: "Content Marketing", desc: "Blog, videos, newsletters that convert.", href: "/#services" },
      { icon: Globe, title: "Website Management", desc: "High-converting doctor websites.", href: "/#services" },
    ],
  },
  {
    group: "Trust & Retention",
    items: [
      { icon: Star, title: "Online Reputation Management", desc: "5-star presence across every platform.", href: "/services/online-reputation-management", tag: "Flagship" },
      { icon: Repeat, title: "Patient Retention Marketing", desc: "WhatsApp & reminder systems that compound.", href: "/#services" },
    ],
  },
];

const linksLeft = [
  { label: "About", href: "/#about" },
];
const linksRight = [
  { label: "Contact", href: "/#audit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef(null);
  const openMega = () => { clearTimeout(closeTimer.current); setMega(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMega(false), 140); };

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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {linksLeft.map((l) => (
            <a key={l.href} href={l.href} data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-[14px] font-medium text-[var(--ink-soft)] hover:text-[var(--sage)] transition-colors">
              {l.label}
            </a>
          ))}

          {/* Services mega-menu trigger */}
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              data-testid="nav-services"
              className="inline-flex items-center gap-1 text-[14px] font-medium text-[var(--ink-soft)] hover:text-[var(--sage)] transition-colors"
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${mega ? "rotate-180" : ""}`} />
            </button>

            {mega && (
              <div
                data-testid="services-mega-menu"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3"
              >
                {/* Hover bridge */}
                <div className="h-3 w-full absolute -top-3" />
                <div
                  className="w-[min(96vw,980px)] bg-white rounded-3xl border border-[var(--line)] p-6 grid grid-cols-12 gap-6 rise"
                  style={{ boxShadow: "0 40px 80px -30px rgba(15,20,25,0.22)" }}
                >
                  {/* Columns */}
                  <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                    {servicesMega.map((col) => (
                      <div key={col.group}>
                        <div className="mb-3 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
                          {col.group}
                        </div>
                        <ul className="space-y-1">
                          {col.items.map((s) => {
                            const isLink = s.href.startsWith("/services");
                            const Cmp = isLink ? Link : "a";
                            const props = isLink ? { to: s.href } : { href: s.href };
                            return (
                              <li key={s.title}>
                                <Cmp
                                  {...props}
                                  data-testid={`mega-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="group flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 hover:bg-[var(--paper-2)]/60 transition-colors"
                                  onClick={() => setMega(false)}
                                >
                                  <span className="shrink-0 h-9 w-9 rounded-lg bg-[var(--sage-soft)] flex items-center justify-center">
                                    <s.icon size={16} className="text-[var(--sage-deep)]" strokeWidth={2} />
                                  </span>
                                  <span className="flex-1 min-w-0">
                                    <span className="flex items-center gap-2">
                                      <span className="text-[13.5px] font-semibold text-[var(--ink)] leading-tight">
                                        {s.title}
                                      </span>
                                      {s.tag && (
                                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[var(--sage-soft)] text-[var(--sage-deep)]">
                                          {s.tag}
                                        </span>
                                      )}
                                    </span>
                                    <span className="block mt-0.5 text-[12px] text-[var(--muted)] leading-snug truncate">
                                      {s.desc}
                                    </span>
                                  </span>
                                  <ArrowUpRight size={14} className="shrink-0 mt-1.5 text-[var(--muted-2)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Cmp>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Promo panel */}
                  <aside
                    className="col-span-12 md:col-span-4 rounded-2xl p-5 flex flex-col justify-between text-white"
                    style={{
                      background: "linear-gradient(160deg, #1A1714 0%, #0F1419 100%)",
                      backgroundImage:
                        "radial-gradient(circle at top right, rgba(241,90,41,0.25) 0%, transparent 50%), linear-gradient(160deg, #1A1714 0%, #0F1419 100%)",
                    }}
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[var(--sage)]">
                        <Sparkles size={12} />
                        Free · Worth ₹5,000
                      </div>
                      <h4 className="mt-3 text-[22px] font-semibold leading-[1.12] tracking-tight">
                        Get your clinic<br />growth audit.
                      </h4>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-white/70">
                        A 45-minute teardown of your Google presence, ads, website and
                        reviews — with a written action plan.
                      </p>
                    </div>
                    <a
                      href="/#audit"
                      onClick={() => setMega(false)}
                      data-testid="mega-cta"
                      className="mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-[var(--sage)] hover:bg-[var(--sage-deep)] px-4 py-3 text-[13px] font-semibold text-white transition-colors"
                    >
                      Book a free audit
                      <ArrowRight size={14} />
                    </a>
                  </aside>
                </div>
              </div>
            )}
          </div>

          {linksRight.map((l) => (
            <a key={l.href} href={l.href} data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-[14px] font-medium text-[var(--ink-soft)] hover:text-[var(--sage)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="/#audit" data-testid="navbar-cta" className="btn-sage">
            Book free audit <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button data-testid="navbar-mobile-toggle" onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 rounded-full border border-[var(--line-2)] flex items-center justify-center text-[var(--ink)]">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div data-testid="navbar-mobile-menu" className="lg:hidden bg-[var(--paper)] border-t border-[var(--line)]">
          <div className="px-5 py-5 flex flex-col gap-2 max-h-[75vh] overflow-y-auto">
            <a href="/#about" onClick={() => setOpen(false)} className="py-2 text-[15px] font-medium text-[var(--ink)]">About</a>
            <div className="py-2">
              <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--muted)] mb-2">Services</div>
              <div className="grid grid-cols-1 gap-1">
                {servicesMega.flatMap((c) => c.items).map((s) => {
                  const isLink = s.href.startsWith("/services");
                  const Cmp = isLink ? Link : "a";
                  const props = isLink ? { to: s.href } : { href: s.href };
                  return (
                    <Cmp key={s.title} {...props} onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2 text-[14px] text-[var(--ink-soft)]">
                      <s.icon size={15} className="text-[var(--sage)]" />
                      {s.title}
                    </Cmp>
                  );
                })}
              </div>
            </div>
            <a href="/#audit" onClick={() => setOpen(false)} className="py-2 text-[15px] font-medium text-[var(--ink)]">Contact</a>
            <a href="/#audit" onClick={() => setOpen(false)} data-testid="mobile-navbar-cta" className="btn-sage mt-3 w-full">
              Book free audit <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
