import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Check, X, Star, Sparkles, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LeadMagnet from "@/components/sections/LeadMagnet";

export default function ServiceDetailLayout({
  eyebrow,
  title,
  intro,
  heroImage,
  heroStats,
  sections,
}) {
  return (
    <div className="min-h-screen bg-[var(--paper)]" data-testid="service-detail">
      <Navbar />
      <main>
        {/* ================= HERO ================= */}
        <section className="relative pt-28 lg:pt-32 pb-10 lg:pb-14 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-45 pointer-events-none"
            style={{ background: "radial-gradient(circle, #FFD4BD 0%, transparent 70%)" }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
            <nav className="rise flex items-center gap-2 text-[12px] font-medium text-[var(--muted)]">
              <Link to="/" className="hover:text-[var(--sage)]">Home</Link>
              <ChevronRight size={13} />
              <Link to="/#services" className="hover:text-[var(--sage)]">Services</Link>
              <ChevronRight size={13} />
              <span className="text-[var(--ink-soft)] truncate">{eyebrow}</span>
            </nav>

            <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="rise inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-3 py-1.5">
                  <Sparkles size={12} className="text-[var(--sage)]" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ink-soft)]">
                    {eyebrow}
                  </span>
                </div>
                <h1 className="rise-2 mt-5 text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.02] tracking-[-0.02em] font-semibold text-[var(--ink)]">
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

                {/* Inline hero stats */}
                {heroStats && (
                  <div className="rise-4 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-[var(--line)]">
                    {heroStats.map((s, i) => (
                      <div key={i}>
                        <div className="text-[28px] lg:text-[32px] font-light leading-none tracking-tight text-[var(--ink)]">
                          {s.value}
                        </div>
                        <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-span-12 lg:col-span-5 rise-4">
                <div
                  className="relative rounded-[28px] overflow-hidden bg-[var(--paper-2)] border border-[var(--line)]"
                  style={{ aspectRatio: "4/5", boxShadow: "0 40px 80px -40px rgba(15,20,25,0.22)" }}
                >
                  <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="eager" />
                  <div aria-hidden className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, rgba(245,240,230,0) 35%, rgba(15,20,25,0.45) 100%)" }}
                  />
                  <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl border border-[var(--line)] rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={11} fill="#E2A84B" stroke="#E2A84B" />)}
                    </div>
                    <div className="text-[11.5px] text-[var(--ink)] leading-tight">
                      <div className="font-semibold">Trusted by 100+ doctors</div>
                      <div className="text-[var(--muted)] text-[10.5px]">4.9/5 average satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BODY SECTIONS ================= */}
        {sections.map((s, i) => (
          <Section key={i} {...s} alt={i % 2 === 1} />
        ))}

        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}

/* ============================================================= */
function Section({ kind, eyebrow, title, body, items, alt, preview, cta }) {
  const bg = alt ? "bg-[var(--paper-2)]/50" : "bg-[var(--paper)]";
  return (
    <section className={`py-16 lg:py-24 ${bg}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
              {eyebrow}
            </div>
            <h2 className="text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.08] tracking-[-0.02em] font-light text-[var(--ink)]">
              {title}
            </h2>
          </div>
          {body && (
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-10">
              <p className="text-[15.5px] leading-relaxed text-[var(--muted)]">{body}</p>
            </div>
          )}
        </div>

        {/* ------- Rendering variants ------- */}
        {kind === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((it) => (
              <div key={it.title} className="card p-7 flex flex-col gap-4">
                <div className="h-11 w-11 rounded-xl bg-[var(--sage-soft)] flex items-center justify-center">
                  <it.icon size={20} className="text-[var(--sage-deep)]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[17.5px] font-semibold tracking-tight text-[var(--ink)]">{it.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {kind === "checklist" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((it) => (
              <div key={it.title} className="card p-6 flex gap-4">
                <span className="h-8 w-8 rounded-full bg-[var(--sage-soft)] flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={3} className="text-[var(--sage-deep)]" />
                </span>
                <div>
                  <div className="font-semibold text-[15px] text-[var(--ink)]">{it.title}</div>
                  {it.desc && <div className="mt-1 text-[13.5px] leading-relaxed text-[var(--muted)]">{it.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {kind === "steps" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it, i) => (
              <div key={it.title} className="card p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[28px] font-light text-[var(--sage)] leading-none">/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight text-[var(--ink)]">{it.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">{it.desc}</p>
              </div>
            ))}
          </div>
        )}

        {kind === "pills" && (
          <div className="flex flex-wrap gap-2.5">
            {items.map((it) => (
              <span key={it} className="inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-4 py-2 text-[13.5px] font-medium text-[var(--ink)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
                {it}
              </span>
            ))}
          </div>
        )}

        {kind === "kpis" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((it) => (
              <div key={it.label} className="card p-7">
                <div className="text-[36px] lg:text-[44px] font-light leading-none tracking-tight text-[var(--sage)]">
                  {it.value}
                </div>
                <div className="mt-3 text-[11.5px] uppercase tracking-[0.16em] font-semibold text-[var(--muted)]">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {kind === "compare" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card p-7 border-2 border-[var(--line)] bg-[var(--paper-2)]/40">
              <div className="inline-flex items-center gap-2 mb-4 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--muted)]">
                <X size={14} className="text-[var(--muted)]" />
                Without us
              </div>
              <ul className="space-y-3">
                {items.without.map((b) => (
                  <li key={b} className="flex gap-3 text-[14.5px] text-[var(--muted)]">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[var(--muted-2)] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7 border-2 border-[var(--sage)] bg-white">
              <div className="inline-flex items-center gap-2 mb-4 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--sage)]">
                <Check size={14} strokeWidth={3} />
                With Yashik Yadav &amp; Co.
              </div>
              <ul className="space-y-3">
                {items.with.map((b) => (
                  <li key={b} className="flex gap-3 text-[14.5px] text-[var(--ink)]">
                    <Check size={14} strokeWidth={3} className="mt-1 text-[var(--sage)] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {kind === "case" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden relative bg-[var(--paper-2)] min-h-[280px]">
              <img src={items.image} alt={items.clinic} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,20,25,0) 40%, rgba(15,20,25,0.55) 100%)" }} />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10.5px] uppercase tracking-[0.16em] font-semibold opacity-80">Case study</div>
                <div className="text-[20px] font-semibold mt-1">{items.clinic}</div>
                <div className="text-[12px] opacity-80">{items.location}</div>
              </div>
            </div>
            <div className="lg:col-span-7 card p-8 flex flex-col gap-5">
              <h3 className="text-[22px] lg:text-[26px] font-semibold leading-snug tracking-tight text-[var(--ink)]">
                {items.headline}
              </h3>
              <div className="grid grid-cols-3 gap-4 border-y border-[var(--line)] py-5">
                {items.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[28px] font-light tracking-tight text-[var(--sage)] leading-none">{m.value}</div>
                    <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.14em] font-semibold text-[var(--muted)]">{m.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-[14.5px] leading-relaxed text-[var(--muted)]">{items.body}</p>
              <blockquote className="serif italic-soft text-[16px] leading-snug text-[var(--ink)] pl-4 border-l-2 border-[var(--sage)]">
                "{items.quote}" <span className="block text-[12px] not-italic mt-2 text-[var(--muted)]">— {items.author}</span>
              </blockquote>
            </div>
          </div>
        )}

        {kind === "preview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="card p-6 lg:p-8">
              {preview}
            </div>
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="h-10 w-10 rounded-xl bg-[var(--sage-soft)] flex items-center justify-center shrink-0">
                    <it.icon size={18} className="text-[var(--sage-deep)]" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="font-semibold text-[15.5px] text-[var(--ink)]">{it.title}</div>
                    <div className="text-[13.5px] text-[var(--muted)] mt-1">{it.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {kind === "faq" && (
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {items.map((it, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-[16px] font-medium text-[var(--ink)] group-hover:text-[var(--sage)]">{it.q}</span>
                  <span className="h-7 w-7 rounded-full border border-[var(--line-2)] flex items-center justify-center text-[var(--ink)] transition-transform group-open:rotate-45 shrink-0 ml-6">+</span>
                </summary>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)] pr-12">{it.a}</p>
              </details>
            ))}
          </div>
        )}

        {cta && (
          <div className="mt-10 text-center">
            <a href={cta.href || "#audit"} className="btn-sage px-6 py-[14px] text-[15px]">
              {cta.label} <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
