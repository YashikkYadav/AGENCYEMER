import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    summary: "SEO + GMB",
    features: [
      "Healthcare SEO (10 keywords)",
      "Google My Business optimization",
      "Monthly performance report",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹40,000",
    period: "/month",
    summary: "SEO + Ads + Social",
    features: [
      "Everything in Starter",
      "Meta & Google Ads management",
      "Social media (12 posts/month)",
      "WhatsApp automation setup",
      "Bi-weekly strategy calls",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹50,000+",
    period: "/month",
    summary: "Full Stack — Everything",
    features: [
      "Everything in Growth",
      "Doctor personal branding",
      "Website development & CRO",
      "Dedicated account manager",
      "Weekly strategy & reporting",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
            style={{ color: "#F15A29" }}
          >
            Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#2F3A3D" }}
            data-testid="pricing-headline"
          >
            Simple, Transparent Pricing for Clinics
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: "#6D6D6D" }}>
            No hidden fees. No long lock-ins. Pause anytime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              data-testid={`pricing-card-${t.name.toLowerCase()}`}
              className={`relative rounded-2xl p-7 transition-all hover:-translate-y-1 ${
                t.popular ? "lg:-translate-y-2" : ""
              }`}
              style={{
                backgroundColor: t.popular ? "#2F3A3D" : "#FFFFFF",
                border: t.popular ? "1px solid #2F3A3D" : "1px solid #E5E7EB",
                boxShadow: t.popular ? "0 24px 60px rgba(47,58,61,0.18)" : "none",
              }}
            >
              {t.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: "#F15A29" }}
                  data-testid="pricing-most-popular-badge"
                >
                  Most Popular
                </span>
              )}

              <div className="text-sm font-bold uppercase tracking-wider" style={{ color: t.popular ? "#F15A29" : "#F15A29" }}>
                {t.name}
              </div>
              <div className="mt-2 text-xs" style={{ color: t.popular ? "rgba(255,255,255,0.65)" : "#6D6D6D" }}>
                {t.summary}
              </div>

              <div className="mt-5 flex items-end gap-1">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: t.popular ? "#FFFFFF" : "#2F3A3D" }}
                >
                  {t.price}
                </span>
                <span
                  className="pb-1 text-sm"
                  style={{ color: t.popular ? "rgba(255,255,255,0.65)" : "#6D6D6D" }}
                >
                  {t.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 rounded-full items-center justify-center shrink-0"
                      style={{ backgroundColor: t.popular ? "rgba(241,90,41,0.2)" : "#FEEDE6" }}
                    >
                      <Check size={11} color="#F15A29" strokeWidth={3} />
                    </span>
                    <span style={{ color: t.popular ? "rgba(255,255,255,0.85)" : "#2F3A3D" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#F15A29" }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
