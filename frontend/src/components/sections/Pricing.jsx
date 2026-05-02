import { Check, ArrowUpRight } from "lucide-react";

const tiers = [
  {
    name: "Foundations",
    price: "₹25K",
    summary:
      "For solo practices building their first reliable patient pipeline. SEO + GMB + reputation.",
    bullets: [
      "Healthcare SEO (10 keywords)",
      "Google My Business operating system",
      "Review velocity engine",
      "Monthly performance review",
    ],
    cta: "Start Foundations",
    accent: false,
  },
  {
    name: "Growth",
    price: "₹40K",
    summary:
      "Our flagship. SEO + paid + automation + content — the system 80% of clients run.",
    bullets: [
      "Everything in Foundations",
      "Meta + Google performance ads",
      "WhatsApp automation & flows",
      "Social content (12 assets/mo)",
      "Bi-weekly strategy operating reviews",
    ],
    cta: "Engage Growth",
    accent: true,
    tag: "Most engaged",
  },
  {
    name: "Atelier",
    price: "₹50K+",
    summary:
      "Bespoke partnerships for multi-location groups, founders & ₹10Cr+ practices.",
    bullets: [
      "Everything in Growth",
      "Founder personal brand & PR",
      "Conversion-led web build",
      "Dedicated growth lead",
      "Weekly war-room cadence",
    ],
    cta: "Apply for Atelier",
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing"
      className="relative py-24 lg:py-32"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
              <span className="h-px w-8 bg-[var(--acid)]" />
              Engagements
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-testid="pricing-headline"
              className="serif text-[clamp(2rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--cream)] font-light"
            >
              Three ways to <span className="italic-soft">work</span> with us.
              <br /> No retainers you can't <span className="under-acid italic-soft text-[var(--ink)]">justify</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              data-testid={`pricing-${t.name.toLowerCase()}`}
              className={`relative rounded-3xl p-7 lg:p-9 flex flex-col transition-all hover:-translate-y-1`}
              style={{
                background: t.accent ? "var(--cream)" : "var(--ink-2)",
                color: t.accent ? "var(--ink)" : "var(--cream)",
                border: t.accent ? "1px solid var(--cream)" : "1px solid rgba(242,237,227,0.10)",
              }}
            >
              {t.tag && (
                <span
                  data-testid="pricing-tag-most-engaged"
                  className="absolute -top-3 left-7 mono text-[10px] uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                  style={{ background: "var(--acid)", color: "var(--ink)" }}
                >
                  ✦ {t.tag}
                </span>
              )}

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="serif text-3xl lg:text-4xl tracking-tight">{t.name}</h3>
                <div className="text-right">
                  <div className="serif text-4xl lg:text-5xl tracking-tight">
                    {t.price}
                  </div>
                  <div
                    className="mono text-[10px] uppercase tracking-[0.22em] mt-0.5"
                    style={{ color: t.accent ? "var(--muted-on-light)" : "var(--muted-on-dark)" }}
                  >
                    /month
                  </div>
                </div>
              </div>

              <p
                className="mt-5 text-[14px] leading-relaxed"
                style={{ color: t.accent ? "var(--muted-on-light)" : "var(--cream)/70" }}
              >
                {t.summary}
              </p>

              <ul className="mt-7 space-y-3 flex-1">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 rounded-full items-center justify-center shrink-0"
                      style={{
                        background: t.accent ? "var(--ink)" : "rgba(217,243,108,0.15)",
                      }}
                    >
                      <Check size={12} color={t.accent ? "var(--acid)" : "#D9F36C"} strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                className="mt-8 inline-flex items-center justify-between gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
                style={{
                  background: t.accent ? "var(--ink)" : "var(--acid)",
                  color: t.accent ? "var(--cream)" : "var(--ink)",
                }}
              >
                {t.cta}
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] text-center">
          ✦ All engagements are 90-day commitments · No setup fees · Pause anytime after the first cycle ✦
        </div>
      </div>
    </section>
  );
}
