import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_f610debc-ef05-476f-91fb-c01e8a987022/artifacts/eegoeqk7_image.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#audit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" data-testid="navbar-logo">
          <span
            className="inline-flex h-9 w-9 rounded-lg items-center justify-center"
            style={{ backgroundColor: "#2F3A3D" }}
          >
            <img src={LOGO_URL} alt="Yashik Yadav & Co." className="h-6 w-6 object-contain invert" />
          </span>
          <div className="leading-tight">
            <div className="font-bold text-[15px] sm:text-base" style={{ color: "#2F3A3D" }}>
              Yashik Yadav & Co.
            </div>
            <div className="hidden sm:block text-[11px]" style={{ color: "#6D6D6D" }}>
              Healthcare Digital Marketing
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-[15px] font-medium transition-colors hover:text-[#F15A29]"
              style={{ color: "#2F3A3D" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex">
          <a
            href="#audit"
            data-testid="navbar-cta-get-free-audit"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white font-semibold text-sm shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "#F15A29" }}
          >
            Get Free Audit
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          data-testid="navbar-mobile-toggle"
          className="lg:hidden p-2 rounded-md"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} color="#2F3A3D" /> : <Menu size={22} color="#2F3A3D" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white" data-testid="navbar-mobile-menu">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
                className="text-[15px] font-medium py-1.5"
                style={{ color: "#2F3A3D" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-navbar-cta"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: "#F15A29" }}
            >
              Get Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
