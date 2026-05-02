import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LeadMagnet from "@/components/sections/LeadMagnet";

export default function ServiceDetailLayout({
  eyebrow,
  title,
  intro,
  heroImage,
  sections,
}) {
  return (
    <div className="min-h-screen bg-[var(--paper)]" data-testid="service-detail">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative pt-28 lg:pt-32 pb-14 lg:pb-20">
          <div
            aria-hidden
            className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, #FFD4BD 0%, transparent 70%)" }}
          />
          <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
            {/* Breadcrumb */}
            <nav className="rise flex items-center gap-2 text-[12px] font-medium text-[var(--muted)]">
              <Link to="/" className="hover:text-[var(--sage)]">Home</Link>
              <ChevronRight size={13} />
              <Link to="/#services" className="hover:text-[var(--sage)]">Services</Link>
              <ChevronRight size={13} />
              <span className="text-[var(--ink-soft)] truncate">{title}</span>
            </nav>

            <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="rise-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)]">
                  {eyebrow}
                </div>
                <h1 className="rise-2 mt-4 text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.02] tracking-[-0.02em] font-semibold text-[var(--ink)]">
                  {title}
                </h1>
                <p className="rise-3 mt-6 text-[16.5px] leading-[1.6] text-[var(--muted)] max-w-xl">
                  {intro}
                </p>
                <div className="rise-3 mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#audit" className="btn-sage px-6 py-[14px] text-[15px]">
                    Book a free audit <ArrowRight size={16} />
                  </a>
                  <Link to="/#services" className="btn-secondary px-6 py-[14px] text-[15px]">
                    All services
                  </Link>
                </div>
              </div>

              {/* Hero image card */}
              <div className="col-span-12 lg:col-span-5 rise-4">
                <div
                  className="relative rounded-3xl overflow-hidden bg-[var(--paper-2)] border border-[var(--line)]"
                  style={{ aspectRatio: "4/5", boxShadow: "0 40px 80px -40px rgba(15,20,25,0.22)" }}
                >
                  <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="eager" />
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(245,240,230,0) 40%, rgba(15,20,25,0.45) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BODY SECTIONS */}
        {sections.map((s, i) => (
          <Section key={i} {...s} alt={i % 2 === 1} index={i} />
        ))}

        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}

function Section({ kind, eyebrow, title, body, items, alt }) {
  const bg = alt ? "bg-[var(--paper-2)]/50" : "bg-[var(--paper)]";
  return (
    <section className={`py-16 lg:py-24 ${bg}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
              {eyebrow}
            </div>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] tracking-[-0.02em] font-light text-[var(--ink)]">
              {title}
            </h2>
            {body && (
              <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--muted)] max-w-md">
                {body}
              </p>
            )}
          </div>

          <div className="col-span-12 lg:col-span-8">
            {kind === "checklist" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((it) => (
                  <div key={it.title} className="card p-6 flex gap-4">
                    <span className="h-8 w-8 rounded-full bg-[var(--sage-soft)] flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} className="text-[var(--sage-deep)]" />
                    </span>
                    <div>
                      <div className="font-semibold text-[15px] text-[var(--ink)]">{it.title}</div>
                      {it.desc && (
                        <div className="mt-1 text-[13.5px] leading-relaxed text-[var(--muted)]">
                          {it.desc}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {kind === "steps" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((it, i) => (
                  <div key={it.title} className="card p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--sage)]">/{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-[19px] font-semibold tracking-tight text-[var(--ink)]">{it.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">{it.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {kind === "pills" && (
              <div className="flex flex-wrap gap-2.5">
                {items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-4 py-2 text-[13.5px] font-medium text-[var(--ink)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
                    {it}
                  </span>
                ))}
              </div>
            )}

            {kind === "kpis" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((it) => (
                  <div key={it.label} className="card p-6">
                    <div className="text-[32px] lg:text-[40px] font-light leading-none tracking-tight text-[var(--sage)]">
                      {it.value}
                    </div>
                    <div className="mt-2 text-[11.5px] uppercase tracking-[0.16em] font-semibold text-[var(--muted)]">
                      {it.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {kind === "faq" && (
              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {items.map((it, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-[16px] font-medium text-[var(--ink)] group-hover:text-[var(--sage)]">
                        {it.q}
                      </span>
                      <span className="h-7 w-7 rounded-full border border-[var(--line-2)] flex items-center justify-center text-[var(--ink)] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)] pr-12">{it.a}</p>
                  </details>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
