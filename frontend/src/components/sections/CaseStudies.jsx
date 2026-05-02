import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "IVF · Jaipur",
    metric: "+312%",
    metricLabel: "OPD growth in 90 days",
    title: "From 80 monthly inquiries to 240",
    body:
      "We rebuilt a Tier-1 IVF clinic's local SEO + Google Ads engine around treatment-intent keywords. By day 60 they ranked #1 for 'IVF Jaipur' and appeared in the local pack across 14 nearby pin codes.",
  },
  {
    tag: "Dental Chain · Delhi",
    metric: "₹8L",
    metricLabel: "Tracked revenue in 60 days",
    title: "Aligner bookings, on autopilot",
    body:
      "A 4-location dental group plugged Meta + WhatsApp into our funnel framework. CPL dropped from ₹620 to ₹187; booking-to-show rate rose from 41% to 68% in a single quarter.",
  },
  {
    tag: "Cosmetic · Mumbai",
    metric: "2,000+",
    metricLabel: "Qualified leads · 3 months",
    title: "A founder brand worth following",
    body:
      "We turned a senior dermatologist into the most-followed cosmetic voice in Mumbai — 50K Instagram followers, 12 PR features, and an always-on content system.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" data-testid="case-studies" className="py-20 lg:py-28 bg-[var(--paper-2)]/50">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
              Recent results
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
              Real doctors.<br />
              <span className="script text-[var(--sage)] text-[1.2em]">Real</span> numbers.
            </h2>
          </div>
          <a
            href="#audit"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--ink)] hover:text-[var(--sage)] transition-colors"
          >
            Full case archive <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <article
              key={c.title}
              data-testid={`case-${c.tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="card group p-7 lg:p-8 flex flex-col"
            >
              <span className="self-start text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--muted)] border border-[var(--line-2)] rounded-full px-2.5 py-1">
                {c.tag}
              </span>

              <div className="mt-8">
                <div className="text-[56px] lg:text-[68px] font-light text-[var(--sage)] leading-none tracking-tight">
                  {c.metric}
                </div>
                <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                  {c.metricLabel}
                </div>
              </div>

              <h3 className="mt-7 text-[20px] lg:text-[22px] font-semibold leading-snug tracking-tight text-[var(--ink)]">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)] flex-1">
                {c.body}
              </p>

              <a
                href="#audit"
                className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--ink)] group-hover:text-[var(--sage)] transition-colors"
              >
                Read the case study
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
