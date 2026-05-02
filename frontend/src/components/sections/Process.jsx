const steps = [
  {
    n: "01",
    week: "Day 1",
    title: "Free growth audit",
    body: "A 45-minute deep dive into your Google presence, ads, website and competitors. You leave with an action plan — even if we never work together.",
  },
  {
    n: "02",
    week: "Week 1",
    title: "Custom strategy",
    body: "A 90-day playbook tailored to your specialty, city and patient economics. Clear KPIs, channel mix, and a single success metric.",
  },
  {
    n: "03",
    week: "Weeks 2–4",
    title: "Build & launch",
    body: "We ship SEO, ads, WhatsApp automation and content in parallel. Most clinics see their first qualified leads within 14 days.",
  },
  {
    n: "04",
    week: "Month 2+",
    title: "Scale & compound",
    body: "Weekly test-measure-double-down cycles. Costs fall, conversions climb, brand equity stacks — every single quarter.",
  },
];

export default function Process() {
  return (
    <section id="process" data-testid="process" className="py-20 lg:py-28 bg-[var(--paper)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
            How it works
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
            From first conversation to full waiting room
            <span className="script text-[var(--sage)] text-[1.15em]"> in 90 days</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] rounded-3xl overflow-hidden border border-[var(--line)]">
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-testid={`process-step-${s.n}`}
              className="bg-white p-7 lg:p-8 flex flex-col gap-5 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--muted)]">
                  {s.week}
                </span>
                <span className="text-[12px] font-mono text-[var(--sage)]">{s.n}</span>
              </div>

              {/* thin dotted forward line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 -right-4 w-8 border-t border-dashed border-[var(--sage)]/40" />
              )}

              <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-[var(--muted)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
