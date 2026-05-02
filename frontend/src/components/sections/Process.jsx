const steps = [
  {
    n: "01",
    title: "Diagnostic",
    week: "Week 0",
    body: "We tear down your Google presence, paid funnels, website, reputation and competitor set — line by line. You leave the call with insights worth ₹5L, free.",
  },
  {
    n: "02",
    title: "Operating Plan",
    week: "Week 1",
    body: "A 90-day playbook tailored to your specialty, city and patient economics — channel mix, KPIs, creative direction, tech stack. No fluff.",
  },
  {
    n: "03",
    title: "Build & Ship",
    week: "Week 2–4",
    body: "We launch SEO, ads, WhatsApp, content and reputation systems in parallel. Most clinics see first qualified leads inside 14 days.",
  },
  {
    n: "04",
    title: "Compound",
    week: "Month 2+",
    body: "Weekly cycles of test → measure → double-down. Costs fall, conversions rise, brand equity stacks — every quarter.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process"
      className="relative py-24 lg:py-32"
      style={{ background: "var(--cream)", color: "var(--text-on-light)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-light)]">
              <span className="h-px w-8 bg-[var(--ink)]" />
              The Engagement
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-testid="process-headline"
              className="serif text-[clamp(2rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.025em] font-light"
            >
              From <span className="italic-soft">audit</span> to{" "}
              <span className="italic-soft text-[var(--clay)]">overflow</span>
              <br /> in 90 days — without faith, only data.
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-[var(--ink)]/10 border border-[var(--ink)]/10 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <div
              key={s.n}
              data-testid={`process-step-${s.n}`}
              className="bg-[var(--cream)] p-7 lg:p-9 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-light)]">
                  {s.week}
                </span>
                <span className="serif text-7xl lg:text-8xl text-[var(--clay)] leading-none -mr-2 -mt-2">
                  {s.n}
                </span>
              </div>
              <h3 className="serif text-3xl tracking-tight">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-[var(--muted-on-light)]">
                {s.body}
              </p>
              <div className="mt-auto pt-2 border-t border-[var(--ink)]/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
