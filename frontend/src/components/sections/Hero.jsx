import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroIllustration from "@/components/sections/HeroIllustration";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-24"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "#FEEDE6", color: "#F15A29" }}
            data-testid="hero-badge"
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F15A29" }} />
            India's #1 Healthcare Marketing Agency
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]"
            style={{ color: "#2F3A3D" }}
            data-testid="hero-headline"
          >
            We Help Doctors & Clinics Get{" "}
            <span style={{ color: "#F15A29" }}>More Patients</span> — Every Month
          </h1>

          <p
            className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: "#6D6D6D" }}
            data-testid="hero-subheadline"
          >
            India's #1 Healthcare Digital Marketing Agency. SEO, Ads, WhatsApp Automation & More — starting at{" "}
            <span className="font-semibold" style={{ color: "#2F3A3D" }}>₹25,000/month</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#audit"
              data-testid="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-sm shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "#F15A29" }}
            >
              Get Free Patient Growth Audit
              <ArrowRight size={16} />
            </a>
            <a
              href="#case-studies"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[#2F3A3D] hover:text-white"
              style={{ borderColor: "#2F3A3D", color: "#2F3A3D" }}
            >
              See Case Studies
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3" data-testid="hero-trust-strip">
            {[
              "100+ Doctors Served",
              "₹10Cr+ Revenue Generated",
              "Trusted in 20+ Cities",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#2F3A3D" }}>
                <CheckCircle2 size={16} color="#F15A29" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Illustration */}
        <div className="relative" data-testid="hero-illustration-wrap">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
