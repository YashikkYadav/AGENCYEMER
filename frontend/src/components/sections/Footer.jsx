import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      try {
        const d = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setTime(d);
      } catch {
        setTime("");
      }
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      data-testid="site-footer"
      className="relative pt-20 lg:pt-28 pb-8"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Massive wordmark */}
        <div className="border-t border-[rgba(242,237,227,0.10)] pt-12 mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h3
              data-testid="footer-wordmark"
              className="serif text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-[-0.04em] text-[var(--cream)] font-light"
            >
              Yashik <span className="italic-soft text-[var(--acid)]">Yadav</span> & Co.
            </h3>
            <div className="hidden md:block text-right">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
                Jaipur · India
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--cream)]/65 mt-1">
                IST · {time || "—"}
              </div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 border-t border-[rgba(242,237,227,0.10)] pt-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cream)]">
                <Logo size={24} variant="dark" />
              </span>
              <div className="leading-tight">
                <div className="serif text-base text-[var(--cream)]">Yashik Yadav & Co.</div>
                <div className="mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted-on-dark)]">
                  Healthcare Growth Studio
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--cream)]/60 leading-relaxed max-w-sm">
              An independent studio for ambitious doctors and clinics across India.
              Specialists in patient acquisition, brand and marketing systems that compound.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, label: "instagram" },
                { Icon: Linkedin, label: "linkedin" },
                { Icon: Youtube, label: "youtube" },
                { Icon: MessageCircle, label: "whatsapp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-testid={`footer-social-${label}`}
                  className="inline-flex h-9 w-9 rounded-full items-center justify-center border border-[rgba(242,237,227,0.18)] text-[var(--cream)]/80 hover:bg-[var(--acid)] hover:text-[var(--ink)] hover:border-[var(--acid)] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap groups */}
          {[
            {
              title: "Studio",
              items: ["Manifesto", "Team", "Press", "Careers", "Journal"],
            },
            {
              title: "Capabilities",
              items: ["SEO", "Performance ads", "WhatsApp", "Brand", "Web build"],
            },
            {
              title: "Sectors",
              items: ["IVF & Fertility", "Dental", "Cosmetic & Derma", "Ortho", "Multi-spec hospitals"],
            },
          ].map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] mb-5">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      data-testid={`footer-${c.title.toLowerCase()}-${i.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                      className="text-sm text-[var(--cream)]/80 hover:text-[var(--acid)] transition-colors"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact card */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] mb-5">
              Begin
            </h4>
            <a
              href="#audit"
              data-testid="footer-cta"
              className="group inline-flex items-center gap-2 serif text-2xl text-[var(--cream)] hover:text-[var(--acid)] transition-colors"
            >
              Start a project
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <div className="mt-6 space-y-1 text-sm text-[var(--cream)]/65">
              <div>hello@yashikyadav.co</div>
              <div>+91 98 ___ ___ __</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[rgba(242,237,227,0.10)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
            © 2025 Yashik Yadav & Co. · An independent healthcare studio.
          </p>
          <div className="flex items-center gap-5 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
            <a href="#" data-testid="footer-privacy" className="hover:text-[var(--cream)]">Privacy</a>
            <a href="#" data-testid="footer-terms" className="hover:text-[var(--cream)]">Terms</a>
            <a href="#" data-testid="footer-colophon" className="hover:text-[var(--cream)]">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
