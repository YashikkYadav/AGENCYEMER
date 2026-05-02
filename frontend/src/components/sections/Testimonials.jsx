import { Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "We went from 30 patients a week to 90+ — and the only thing that changed was them. They run our growth like operators, not vendors.",
    name: "Dr. Rohan Mehta",
    role: "Founder · IVF Clinic",
    city: "Jaipur",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    quote:
      "Their WhatsApp automation alone recovered ₹2L in missed follow-ups in month one. ROAS was obvious from week two.",
    name: "Dr. Priya Sharma",
    role: "Cosmetic Dermatologist",
    city: "Mumbai",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    quote:
      "I've worked with three agencies. This is the first one that understood doctors don't sell — we earn trust. They build for that.",
    name: "Dr. Arjun Kapoor",
    role: "Orthopaedic Surgeon",
    city: "Delhi",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-testid="testimonials" className="py-20 lg:py-28 bg-[var(--paper-2)]/50">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
            Doctors on the record
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
            What doctors who run India's<br />
            busiest clinics <span className="script text-[var(--sage)] text-[1.2em]">say</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${i}`}
              className="card p-7 lg:p-8 flex flex-col gap-5"
            >
              <Quote size={28} className="text-[var(--sage)]" strokeWidth={1.5} />

              <blockquote className="text-[16px] leading-[1.55] text-[var(--ink)]">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-1 mt-auto">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={13} fill="#E2A84B" stroke="#E2A84B" />
                ))}
              </div>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-[var(--line)]">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                  loading="lazy"
                />
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
