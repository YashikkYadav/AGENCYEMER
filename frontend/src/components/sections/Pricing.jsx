import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    summary: "For solo clinics building a first reliable patient pipeline.",
    features: [
      "Healthcare SEO (10 keywords)",
      "Google Business Profile optimisation",
      "Review velocity engine",
      "Monthly performance report",
    ],
    cta: "Start Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹40,000",
    period: "/month",
    summary: "Our most-chosen plan. SEO + ads + automation + content.",
    features: [
      "Everything in Starter",
      "Meta & Google performance ads",
      "WhatsApp automation & flows",
      "Social content (12 posts/month)",
      "Bi-weekly strategy calls",
    ],
    cta: "Choose Growth",
    highlighted: true,
    tag: "Most chosen",
  },
  {
    name: "Premium",
    price: "₹50,000+",
    period: "/month",
    summary: "Bespoke partnerships for multi-location groups & founder brands.",
    features: [
      "Everything in Growth",
      "Founder personal brand & PR",
      "Conversion-led website build",
      "Dedicated growth lead",
      "Weekly war-room cadence",
    ],
    cta: "Apply for Premium",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" data-testid="pricing" className="py-20 lg:py-28 bg-[var(--paper)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
            Pricing
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
            Simple, transparent pricing.<br />
            <span className="script text-[var(--sage)] text-[1.2em]">No</span> long lock-ins.
          </h2>
          <p className="mt-5 text-[15.5px] text-[var(--muted)]">
            All engagements are 90-day commitments. No setup fees. Pause anytime after the first cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1100px] mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              data-testid={`pricing-${t.name.toLowerCase()}`}
              className={`relative rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-1 ${
                t.highlighted
                  ? "bg-[var(--ink)] text-white border border-[var(--ink)] shadow-[0_30px_70px_-25px_rgba(15,20,25,0.35)]"
                  : "bg-white border border-[var(--line)] hover:border-[var(--line-2)]"
              }`}
            >
              {t.tag && (
                <span
                  data-testid="pricing-tag"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10.5px] font-semibold tracking-[0.14em] uppercase bg-[var(--sage)] text-white"
                >
                  {t.tag}
                </span>
              )}

              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-semibold tracking-tight ${t.highlighted ? "text-white" : "text-[var(--ink)]"}`}>
                  {t.name}
                </h3>
              </div>
              <p className={`mt-3 text-[13.5px] leading-relaxed ${t.highlighted ? "text-white/65" : "text-[var(--muted)]"}`}>
                {t.summary}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-[44px] font-light leading-none tracking-tight ${t.highlighted ? "text-white" : "text-[var(--ink)]"}`}>
                  {t.price}
                </span>
                <span className={`text-[14px] ${t.highlighted ? "text-white/60" : "text-[var(--muted)]"}`}>
                  {t.period}
                </span>
              </div>

              <div className={`my-7 h-px ${t.highlighted ? "bg-white/15" : "bg-[var(--line)]"}`} />

              <ul className="space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <span
                      className={`mt-0.5 inline-flex h-4 w-4 rounded-full items-center justify-center shrink-0 ${
                        t.highlighted ? "bg-[var(--sage)]" : "bg-[var(--sage-soft)]"
                      }`}
                    >
                      <Check size={10} strokeWidth={3} className={t.highlighted ? "text-white" : "text-[var(--sage-deep)]"} />
                    </span>
                    <span className={t.highlighted ? "text-white/85" : "text-[var(--ink-soft)]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-5 text-[14px] font-medium transition-all hover:-translate-y-0.5 ${
                  t.highlighted
                    ? "bg-white text-[var(--ink)] hover:bg-[var(--sage)] hover:text-white"
                    : "bg-[var(--ink)] text-white hover:bg-[var(--sage)]"
                }`}
              >
                {t.cta} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
