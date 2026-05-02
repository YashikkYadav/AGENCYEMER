import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "RM",
    quote:
      "We went from 30 patients a week to 90+. The team understands healthcare marketing better than any agency I've worked with.",
    name: "Dr. Rohan Mehta",
    specialty: "IVF Specialist",
    city: "Jaipur",
  },
  {
    initials: "PS",
    quote:
      "Their WhatsApp automation alone recovered ₹2L in missed follow-ups in the first month. ROI was visible from week two.",
    name: "Dr. Priya Sharma",
    specialty: "Cosmetic Dermatologist",
    city: "Mumbai",
  },
  {
    initials: "AK",
    quote:
      "Finally an agency that gets clinic operations. Our Google ratings, OPD and ad ROI all moved in the right direction together.",
    name: "Dr. Arjun Kapoor",
    specialty: "Orthopaedic Surgeon",
    city: "Delhi",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
            style={{ color: "#F15A29" }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#2F3A3D" }}
            data-testid="testimonials-headline"
          >
            What Doctors Say About Us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-testid={`testimonial-card-${t.initials}`}
              className="rounded-2xl bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(47,58,61,0.08)]"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <Quote size={28} color="#F15A29" />
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#2F3A3D" }}>
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t" style={{ borderColor: "#E5E7EB" }}>
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "#2F3A3D" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#2F3A3D" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#6D6D6D" }}>
                    {t.specialty} · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
