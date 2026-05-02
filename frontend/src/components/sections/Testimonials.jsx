const items = [
  {
    quote:
      "We went from 30 patients a week to 90 — and the only thing that changed was them. They run our growth like operators, not vendors.",
    name: "Dr. Rohan Mehta",
    role: "Founder, IVF clinic",
    city: "Jaipur",
    initials: "RM",
  },
  {
    quote:
      "Their WhatsApp automation alone recovered ₹2L in missed follow-ups in month one. The ROAS spreadsheet didn't even feel real.",
    name: "Dr. Priya Sharma",
    role: "Cosmetic dermatologist",
    city: "Mumbai",
    initials: "PS",
  },
  {
    quote:
      "I've worked with three agencies. This is the first one that understood that doctors don't sell — we earn trust. They build for that.",
    name: "Dr. Arjun Kapoor",
    role: "Orthopaedic surgeon",
    city: "Delhi",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--cream)", color: "var(--text-on-light)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-16">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-light)]">
              <span className="h-px w-8 bg-[var(--ink)]" />
              On the record
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-testid="testimonials-headline"
              className="serif text-[clamp(2rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.025em] font-light"
            >
              <span className="italic-soft">What</span> the doctors who run
              <br /> India's busiest clinics <span className="italic-soft text-[var(--clay)]">say</span>.
            </h2>
          </div>
        </div>

        {/* Featured quote */}
        <figure
          data-testid="testimonial-featured"
          className="grid grid-cols-12 gap-6 lg:gap-10 border-t border-[var(--ink)]/15 pt-10 lg:pt-14"
        >
          <div className="col-span-12 lg:col-span-9">
            <blockquote className="serif text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.08] tracking-[-0.025em] font-light">
              <span className="italic-soft text-[var(--clay)]">“</span>
              {items[0].quote}
              <span className="italic-soft text-[var(--clay)]">”</span>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center text-[var(--cream)] mono text-sm tracking-wider"
                style={{ background: "var(--ink)" }}
              >
                {items[0].initials}
              </div>
              <div>
                <div className="serif text-lg">{items[0].name}</div>
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-on-light)]">
                  {items[0].role} · {items[0].city}
                </div>
              </div>
            </figcaption>
          </div>
        </figure>

        {/* Two-up secondary quotes */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.slice(1).map((t, idx) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${idx + 1}`}
              className="border-t border-[var(--ink)]/15 pt-8"
            >
              <blockquote className="serif text-2xl lg:text-3xl leading-snug tracking-tight font-light">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-[var(--cream)] mono text-xs tracking-wider"
                  style={{ background: "var(--ink)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="serif text-base">{t.name}</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-on-light)]">
                    {t.role} · {t.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
