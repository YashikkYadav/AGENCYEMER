import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-28"
      style={{ background: "var(--ink)" }}
    >
      {/* Subtle radial accent */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(217,243,108,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(226,92,46,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-12 lg:mb-20 rise">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--acid)] pulse-dot" />
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
              Vol. 07 · India · The healthcare growth issue
            </span>
          </div>
          <div className="hidden md:flex mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
            Jaipur · Mumbai · Delhi
          </div>
        </div>

        {/* Headline */}
        <h1
          data-testid="hero-headline"
          className="serif rise-2 text-[clamp(3rem,9.5vw,9.5rem)] font-light leading-[0.92] tracking-[-0.04em] text-[var(--cream)]"
        >
          We build{" "}
          <span className="italic-soft font-normal text-[var(--acid)]">patient-getting</span>
          <br />
          machines for{" "}
          <span className="relative inline-block">
            doctors
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="14"
              viewBox="0 0 400 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9 C 100 2, 220 14, 398 5"
                stroke="#D9F36C"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <br />
          who refuse to be{" "}
          <span className="italic-soft font-normal">invisible</span>.
        </h1>

        {/* Sub row */}
        <div className="mt-12 lg:mt-16 grid grid-cols-12 gap-6 lg:gap-10 items-end rise-3">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--cream)]/70 max-w-md">
              An independent healthcare growth studio out of India. We turn clinics, hospitals
              and doctors into category leaders through SEO, paid acquisition, brand and
              automation — engineered for compounding patient flow.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] mb-3">
              [01] Engagements from
            </div>
            <div className="serif text-4xl lg:text-5xl text-[var(--cream)] tracking-tight">
              ₹25,000<span className="text-[var(--muted-on-dark)] text-2xl">/mo</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 flex flex-col items-start lg:items-end gap-3">
            <a
              href="#audit"
              data-testid="hero-cta-primary"
              className="btn-flip group relative inline-flex items-center gap-2 rounded-full border border-[var(--acid)] px-6 py-3.5 text-sm font-medium text-[var(--acid)] transition-colors hover:text-[var(--ink)]"
            >
              Book a growth call
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#case-studies"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-1.5 mono text-[11px] uppercase tracking-[0.18em] text-[var(--cream)]/75 hover:text-[var(--acid)] transition-colors"
            >
              See selected work
              <ArrowDown size={12} />
            </a>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 border-t border-[rgba(242,237,227,0.12)] pt-10 rise-4">
          {[
            ["100+", "Doctors & clinics"],
            ["₹10Cr+", "Patient revenue"],
            ["20+", "Indian cities"],
            ["6.4×", "Avg. ROAS"],
          ].map(([n, l], i) => (
            <div key={n} className="flex items-start gap-4" data-testid={`hero-stat-${i}`}>
              <span className="mono text-[10px] text-[var(--muted-on-dark)] mt-2">
                /0{i + 1}
              </span>
              <div>
                <div className="serif text-4xl lg:text-5xl text-[var(--cream)] tracking-tight">
                  {n}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted-on-dark)]">
                  {l}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
