import { ArrowUpRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto"
      className="relative py-24 lg:py-36"
      style={{ background: "var(--cream)", color: "var(--text-on-light)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Section meta */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-32 flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-light)]">
              <span className="h-px w-8 bg-[var(--ink)]" />
              The Studio
            </div>
          </div>

          {/* Body */}
          <div className="col-span-12 lg:col-span-9">
            <p
              className="serif text-[clamp(1.75rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.025em] font-light"
              data-testid="manifesto-body"
            >
              Most agencies sell{" "}
              <span className="italic-soft text-[var(--clay)]">posts</span>. We sell{" "}
              <span className="under-acid">consequences</span> — full waiting rooms, kept
              appointments, brands patients can{" "}
              <span className="italic-soft">actually</span> trust.
              <span className="block mt-6 text-[var(--muted-on-light)]">
                Founded in 2018, headquartered in Jaipur, partnered with India's most ambitious
                healthcare practices.
              </span>
            </p>

            {/* 3-column principles */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              {[
                {
                  k: "01",
                  t: "Specialists, not generalists.",
                  d: "We work only with healthcare. Every campaign is informed by 100+ Indian clinics and 20+ specialties.",
                },
                {
                  k: "02",
                  t: "Outcomes, not deliverables.",
                  d: "We're paid to move OPD, ROAS and brand equity — not to ship reports nobody reads.",
                },
                {
                  k: "03",
                  t: "Compounding, not campaigns.",
                  d: "Systems that get cheaper and stronger every month. SEO + ads + automation, fused.",
                },
              ].map((p) => (
                <div key={p.k} className="flex gap-4">
                  <div className="mono text-xs text-[var(--clay)] mt-2">[{p.k}]</div>
                  <div>
                    <h3 className="serif text-2xl leading-tight tracking-tight">{p.t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-on-light)]">
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <a
                href="#audit"
                data-testid="manifesto-cta"
                className="group inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 serif text-2xl tracking-tight transition-colors hover:text-[var(--clay)] hover:border-[var(--clay)]"
              >
                Read the full philosophy{" "}
                <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
