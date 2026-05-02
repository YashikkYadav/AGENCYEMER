import { Star } from "lucide-react";

const items = [
  {
    quote:
      "We went from 30 patients a week to 90+ — and the only thing that changed was them. They run our growth like operators, not vendors.",
    name: "Dr. Rohan Mehta",
    role: "Founder · IVF Clinic",
    city: "Jaipur",
    initials: "RM",
    bg: "#0E6E4F",
  },
  {
    quote:
      "Their WhatsApp automation alone recovered ₹2L in missed follow-ups in month one. ROAS was obvious from week two.",
    name: "Dr. Priya Sharma",
    role: "Cosmetic Dermatologist",
    city: "Mumbai",
    initials: "PS",
    bg: "#7A3A1C",
  },
  {
    quote:
      "I've worked with three agencies. This is the first one that understood doctors don't sell — we earn trust. They build for that.",
    name: "Dr. Arjun Kapoor",
    role: "Orthopaedic Surgeon",
    city: "Delhi",
    initials: "AK",
    bg: "#0F1419",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-testid="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
            Doctors on the record
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
            What doctors who run India's<br />
            busiest clinics <span className="serif italic-soft text-[var(--sage)]">say</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${t.initials}`}
              className="card p-7 lg:p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={14} fill="#E2A84B" stroke="#E2A84B" />
                ))}
              </div>
              <blockquote className="text-[16.5px] leading-[1.55] text-[var(--ink)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6 border-t border-[var(--line)]">
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{ background: t.bg }}
                >
                  {t.initials}
                </div>
                <div className="leading-tight">
                  <div className="text-[14px] font-semibold text-[var(--ink)]">{t.name}</div>
                  <div className="text-[12px] text-[var(--muted)] mt-0.5">
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
