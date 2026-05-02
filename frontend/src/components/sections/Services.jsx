import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Healthcare SEO",
    line: "Own every treatment search in your city.",
    bullets: ["Local pack domination", "Programmatic location pages", "Authority backlinks", "Editorial content engine"],
  },
  {
    n: "02",
    title: "Performance Ads",
    line: "Predictable patient leads — at the lowest CPL in your category.",
    bullets: ["Meta + Google rotations", "Creative testing system", "Lead-quality scoring", "Custom landing pages"],
  },
  {
    n: "03",
    title: "WhatsApp Automation",
    line: "Recover 30% of revenue you didn't know you were losing.",
    bullets: ["Chatbot funnels", "Reactivation flows", "AI auto-replies", "CRM + EMR sync"],
  },
  {
    n: "04",
    title: "Doctor Brand",
    line: "Build the kind of trust that out-prices every competitor.",
    bullets: ["Personal positioning", "Reels & YouTube engine", "PR placements", "Community building"],
  },
  {
    n: "05",
    title: "Web Development",
    line: "Sites engineered to convert — not to win design awards.",
    bullets: ["Conversion-led design", "Sub-1s load speed", "EMR/booking integrations", "Multi-location architecture"],
  },
  {
    n: "06",
    title: "Reputation",
    line: "Become the obvious choice on Google, Justdial and Practo.",
    bullets: ["GMB optimization", "Review velocity", "Crisis management", "Listings hygiene"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services"
      className="relative py-24 lg:py-32"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
              <span className="h-px w-8 bg-[var(--acid)]" />
              Capabilities
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-testid="services-headline"
              className="serif text-[clamp(2rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--cream)] font-light"
            >
              Six engines.{" "}
              <span className="italic-soft text-[var(--acid)]">One</span> system.
              <br />
              Every patient — measured.
            </h2>
          </div>
        </div>

        {/* Service rows */}
        <div className="border-t border-[rgba(242,237,227,0.10)]">
          {services.map((s) => (
            <article
              key={s.n}
              data-testid={`service-${s.n}`}
              className="group grid grid-cols-12 gap-6 lg:gap-10 items-start py-7 lg:py-9 border-b border-[rgba(242,237,227,0.10)] transition-colors hover:bg-[rgba(217,243,108,0.03)]"
            >
              <div className="col-span-3 lg:col-span-1 mono text-xs text-[var(--acid)] pt-2">
                {s.n}
              </div>
              <div className="col-span-9 lg:col-span-4">
                <h3 className="serif text-3xl lg:text-5xl tracking-tight text-[var(--cream)] leading-none">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:pt-3">
                <p className="text-[15px] lg:text-base leading-relaxed text-[var(--cream)]/70">
                  {s.line}
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[12px] text-[var(--cream)]/55 flex items-center gap-1.5"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--acid)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-3 flex lg:justify-end pt-3">
                <a
                  href="#audit"
                  data-testid={`service-link-${s.n}`}
                  className="inline-flex items-center gap-1.5 mono text-[11px] uppercase tracking-[0.18em] text-[var(--cream)]/75 hover:text-[var(--acid)] transition-all group-hover:gap-2.5"
                >
                  Engage <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
