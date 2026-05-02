import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    tag: "IVF · Jaipur",
    headline: "3x OPD in 90 days",
    desc: "Local SEO + Google Ads scaled patient inquiries from 80 to 240/month for a leading IVF clinic in Jaipur.",
    color: "#FEEDE6",
  },
  {
    tag: "Dental · Delhi",
    headline: "₹8L revenue from ads in 60 days",
    desc: "A dental chain across 4 locations generated ₹8L in clear-aligner bookings via Meta + WhatsApp funnels.",
    color: "#E8F8EE",
  },
  {
    tag: "Cosmetic · Mumbai",
    headline: "2,000 leads in 3 months",
    desc: "Doctor branding + paid ads built a 50K Instagram audience and 2,000+ qualified leads for a derma clinic.",
    color: "#EAF1FB",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      data-testid="case-studies-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
            style={{ color: "#F15A29" }}
          >
            Case Studies
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#2F3A3D" }}
            data-testid="case-studies-headline"
          >
            Real Doctors. Real Results.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <article
              key={c.headline}
              data-testid={`case-card-${c.headline.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
              className="group rounded-2xl bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(47,58,61,0.1)]"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <div className="h-32 flex items-end p-5" style={{ backgroundColor: c.color }}>
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white"
                  style={{ color: "#2F3A3D" }}
                >
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold" style={{ color: "#F15A29" }}>
                  {c.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6D6D6D" }}>
                  {c.desc}
                </p>
                <a
                  href="#audit"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: "#2F3A3D" }}
                  data-testid={`case-read-${c.tag.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                >
                  Read Case Study <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
