const steps = [
  { n: 1, title: "Free Audit", desc: "We analyse your clinic's digital footprint end-to-end." },
  { n: 2, title: "Custom Strategy", desc: "Tailored 90-day plan built around your specialty & city." },
  { n: 3, title: "Execution", desc: "Our team launches SEO, ads, WhatsApp & content campaigns." },
  { n: 4, title: "Results & Scale", desc: "Track patients, calls & revenue. Double down on winners." },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      data-testid="how-it-works-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
            style={{ color: "#F15A29" }}
          >
            Our Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#2F3A3D" }}
            data-testid="how-headline"
          >
            From Zero to 100 New Patients — Here's How
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* Dotted connector (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0"
            style={{ borderTop: "2px dashed #F15A29", opacity: 0.4 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s) => (
              <div
                key={s.n}
                data-testid={`step-${s.n}`}
                className="relative flex flex-col items-start"
              >
                <div
                  className="h-16 w-16 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-md"
                  style={{ backgroundColor: "#F15A29" }}
                >
                  {String(s.n).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-bold" style={{ color: "#2F3A3D" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6D6D6D" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
