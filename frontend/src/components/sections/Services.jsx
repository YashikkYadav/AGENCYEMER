import { Search, MapPin, Megaphone, MessageCircle, Code, UserCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Healthcare SEO",
    desc: "Rank #1 for treatments patients search in your city — every month.",
  },
  {
    icon: MapPin,
    title: "Google My Business Optimization",
    desc: "Show up in Google Maps & local pack — drive walk-ins on autopilot.",
  },
  {
    icon: Megaphone,
    title: "Meta & Google Ads",
    desc: "Predictable patient leads from paid campaigns at the lowest CPL.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing Automation",
    desc: "Automate reminders, follow-ups & re-engagement on WhatsApp.",
  },
  {
    icon: Code,
    title: "Website Development for Clinics",
    desc: "Fast, conversion-focused websites that turn visitors into bookings.",
  },
  {
    icon: UserCircle,
    title: "Doctor Personal Branding",
    desc: "Build a magnetic personal brand on Instagram, YouTube & LinkedIn.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
            style={{ color: "#F15A29" }}
          >
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#2F3A3D" }}
            data-testid="services-headline"
          >
            Everything Your Clinic Needs to Grow Digitally
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: "#6D6D6D" }}>
            One agency. Six growth engines. Zero patchwork.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group rounded-2xl bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(47,58,61,0.08)]"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <div
                className="inline-flex h-12 w-12 rounded-xl items-center justify-center mb-5"
                style={{ backgroundColor: "#FEEDE6" }}
              >
                <s.icon size={22} color="#F15A29" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "#2F3A3D" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6D6D6D" }}>
                {s.desc}
              </p>
              <a
                href="#audit"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2"
                style={{ color: "#F15A29" }}
                data-testid={`service-link-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
