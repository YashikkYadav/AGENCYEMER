import { Users, Search, Repeat, Zap } from "lucide-react";

const props = [
  {
    icon: Users,
    kpi: "3×",
    kpiLabel: "Avg. OPD growth in 90 days",
    title: "Patients who actually show up",
    body: "We engineer every funnel around booking-to-show rate, not vanity leads. Typical clinics see their no-show rate fall from 35% to under 15%.",
  },
  {
    icon: Search,
    kpi: "#1",
    kpiLabel: "Local pack placements",
    title: "Be the obvious choice on Google",
    body: "Healthcare-specialist SEO + GMB optimisation that makes your clinic the first result for every treatment search in your city.",
  },
  {
    icon: Repeat,
    kpi: "68%",
    kpiLabel: "Lift in repeat visits",
    title: "Retention that compounds",
    body: "WhatsApp automation, review flows and recall campaigns that turn one-time visitors into lifelong patients — quietly, in the background.",
  },
  {
    icon: Zap,
    kpi: "14d",
    kpiLabel: "First qualified leads",
    title: "Results, not quarterly promises",
    body: "Most partners see their first tracked patient inquiries inside two weeks. Monthly reviews you can read in five minutes.",
  },
];

export default function ValueProps() {
  return (
    <section data-testid="value-props" className="py-20 lg:py-28 bg-[var(--paper-2)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
            Why doctors choose us
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
            A calm, measurable way to grow a clinic —{" "}
            <span className="serif italic-soft text-[var(--sage)]">without the noise</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {props.map((p) => (
            <div
              key={p.title}
              data-testid={`valueprop-${p.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
              className="card p-7 lg:p-8 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="h-11 w-11 rounded-xl bg-[var(--sage-soft)] flex items-center justify-center">
                  <p.icon size={20} className="text-[var(--sage-deep)]" strokeWidth={2} />
                </div>
                <div className="text-right">
                  <div className="text-[38px] lg:text-[44px] font-light text-[var(--sage)] leading-none tracking-tight">
                    {p.kpi}
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-1.5 uppercase tracking-wider">
                    {p.kpiLabel}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
