import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    n: "01",
    sector: "IVF",
    city: "Jaipur",
    duration: "90 days",
    headline: "From 80 inquiries to 240 — every month.",
    metric: "+312%",
    metricLabel: "OPD growth",
    body: "We rebuilt a Tier-1 IVF clinic's local SEO + Google Ads system around treatment-intent keywords. By day 60, they were the top organic result for 'IVF Jaipur' and ranking in the local pack for 14 nearby pin codes.",
    swatch: "#D9F36C",
  },
  {
    n: "02",
    sector: "Dental",
    city: "Delhi",
    duration: "60 days",
    headline: "₹8L of clear-aligner revenue from cold ads.",
    metric: "₹8L",
    metricLabel: "Tracked revenue",
    body: "A 4-location dental chain plugged Meta + WhatsApp into our funnel framework. CPL dropped from ₹620 to ₹187, while booking-to-show rate climbed from 41% to 68%.",
    swatch: "#E25C2E",
  },
  {
    n: "03",
    sector: "Cosmetic",
    city: "Mumbai",
    duration: "3 months",
    headline: "A founder brand 50,000 patients chose to follow.",
    metric: "2,000+",
    metricLabel: "Qualified leads",
    body: "We turned a senior dermatologist into the most-followed cosmetic voice in the city — 50K Instagram, 12 PR features, and a content engine that produces eight assets a week.",
    swatch: "#F2EDE3",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      data-testid="case-studies"
      className="relative py-24 lg:py-32"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] mb-6">
              <span className="h-px w-8 bg-[var(--acid)]" />
              Selected Work · 2023–2025
            </div>
            <h2
              data-testid="case-studies-headline"
              className="serif text-[clamp(2rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--cream)] font-light"
            >
              Real doctors.{" "}
              <span className="italic-soft text-[var(--acid)]">Real</span> results.
            </h2>
          </div>
          <a
            href="#audit"
            className="hidden md:inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.18em] text-[var(--cream)]/75 hover:text-[var(--acid)] transition-colors"
          >
            View full archive <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <article
              key={c.n}
              data-testid={`case-${c.n}`}
              className="group grid grid-cols-12 gap-6 lg:gap-10 items-start rounded-3xl border border-[rgba(242,237,227,0.10)] bg-[var(--ink-2)] p-6 lg:p-8 transition-all hover:border-[var(--acid)]/40"
            >
              {/* Left: number + meta */}
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="mono text-xs text-[var(--acid)]">[{c.n}]</span>
                  <span className="text-[var(--muted-on-dark)]">·</span>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--cream)]/70">
                    {c.sector} · {c.city}
                  </span>
                </div>

                {/* Metric block */}
                <div
                  className="rounded-2xl px-6 py-7 flex flex-col"
                  style={{
                    background: i === 2 ? c.swatch : "transparent",
                    color: i === 2 ? "var(--ink)" : "var(--cream)",
                    border: i === 2 ? "none" : `1.5px solid ${c.swatch}40`,
                  }}
                >
                  <div
                    className="serif text-6xl lg:text-7xl font-light leading-none tracking-tight"
                    style={{ color: i === 2 ? "var(--ink)" : c.swatch }}
                  >
                    {c.metric}
                  </div>
                  <div
                    className="mt-3 mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: i === 2 ? "var(--ink)" : "var(--muted-on-dark)" }}
                  >
                    {c.metricLabel} · in {c.duration}
                  </div>
                </div>
              </div>

              {/* Right: headline + body */}
              <div className="col-span-12 lg:col-span-9 lg:pl-6 lg:border-l border-[rgba(242,237,227,0.08)]">
                <h3 className="serif text-3xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-[var(--cream)] font-light">
                  {c.headline}
                </h3>
                <p className="mt-5 max-w-2xl text-[15px] lg:text-base leading-relaxed text-[var(--cream)]/65">
                  {c.body}
                </p>
                <div className="mt-7 flex items-center justify-between flex-wrap gap-4">
                  <a
                    href="#audit"
                    data-testid={`case-link-${c.n}`}
                    className="inline-flex items-center gap-2 border-b border-[var(--cream)]/40 pb-1 serif text-xl text-[var(--cream)] hover:text-[var(--acid)] hover:border-[var(--acid)] transition-colors"
                  >
                    Open the case file <ArrowUpRight size={18} />
                  </a>
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
                    Confidential — names changed
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
