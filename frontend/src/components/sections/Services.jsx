import { ArrowUpRight, Search, MapPin, Megaphone, MessageCircle, Code, UserCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Healthcare SEO",
    desc: "Rank #1 for every treatment patients search in your city.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Dominate the local map pack — drive walk-ins on autopilot.",
  },
  {
    icon: Megaphone,
    title: "Performance Ads",
    desc: "Predictable patient leads from Meta & Google, at the lowest CPL.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    desc: "Reminders, follow-ups, reactivation — all automated, all HIPAA-friendly.",
  },
  {
    icon: Code,
    title: "Clinic Websites",
    desc: "Fast, booking-optimised websites engineered to convert 3× harder.",
  },
  {
    icon: UserCircle,
    title: "Doctor Personal Brand",
    desc: "Instagram, YouTube & PR systems that earn patient trust at scale.",
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services" className="py-20 lg:py-28 bg-[var(--paper-2)]/50">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
              What we do
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
              Six services.<br />
              One growth operating system.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-[16px] leading-relaxed text-[var(--muted)]">
              We don't sell deliverables. We run a single integrated system that compounds
              your clinic's revenue every month — built and managed by a team that works
              only with healthcare.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              data-testid={`service-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="card group p-7 lg:p-8 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-[var(--sage-soft)] flex items-center justify-center">
                  <s.icon size={20} className="text-[var(--sage-deep)]" strokeWidth={2} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--muted-2)] transition-all group-hover:text-[var(--sage)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <div>
                <h3 className="text-[19px] font-semibold tracking-tight text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--muted)]">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
