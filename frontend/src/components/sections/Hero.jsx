import { ArrowRight, Star, Stethoscope, HeartPulse, Pill, TrendingUp, Users } from "lucide-react";

const DOCTOR_1 = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=520&h=640&fit=crop&crop=faces&q=80";
const DOCTOR_2 = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=520&h=640&fit=crop&crop=faces&q=80";
const DOCTOR_3 = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=520&h=640&fit=crop&crop=faces&q=80";

export default function Hero() {
  return (
    <section id="top" data-testid="hero" className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
        {/* Review chip */}
        <div className="rise inline-flex items-center gap-2.5 bg-white border border-[var(--line)] rounded-full pl-1.5 pr-4 py-1.5 shadow-[0_6px_20px_-8px_rgba(15,20,25,0.08)]">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=faces&q=80",
              "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=60&h=60&fit=crop&crop=faces&q=80",
              "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=faces&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-6 w-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} size={12} fill="#E2A84B" stroke="#E2A84B" />
            ))}
          </div>
          <span className="text-[12.5px] font-medium text-[var(--ink)]">
            4.9/5 <span className="text-[var(--muted)] font-normal">from 100+ doctors</span>
          </span>
        </div>

        {/* Headline + floating chips */}
        <div className="relative mt-8 lg:mt-10">
          {/* Floating icon chips — kept, orange line removed */}
          <FloatChip style={{ top: "6%", left: "4%" }} className="float-a" color="#FEEDE5">
            <HeartPulse size={18} color="#F15A29" strokeWidth={2} />
          </FloatChip>
          <FloatChip style={{ top: "2%", right: "8%" }} className="float-b" color="#FFF4D6">
            <TrendingUp size={18} color="#C98A1B" strokeWidth={2} />
          </FloatChip>
          <FloatChip style={{ top: "42%", right: "2%" }} className="float-c" color="#E8F1ED">
            <Stethoscope size={18} color="#0E6E4F" strokeWidth={2} />
          </FloatChip>
          <FloatChip style={{ top: "48%", left: "1%" }} className="float-a" color="#FFE2D6">
            <Pill size={18} color="#D14418" strokeWidth={2} />
          </FloatChip>
          <FloatChip style={{ top: "78%", right: "14%" }} className="float-b" color="#F0E8FF">
            <Users size={18} color="#6B4EAB" strokeWidth={2} />
          </FloatChip>

          {/* Headline */}
          <h1
            data-testid="hero-headline"
            className="rise-2 relative mx-auto max-w-4xl text-[clamp(2.75rem,6.4vw,5.25rem)] leading-[1.02] tracking-[-0.02em] font-semibold text-[var(--ink)]"
          >
            Turning clicks <br />
            into{" "}
            <span className="relative inline-block align-baseline">
              <span className="script italic-soft text-[var(--sage)] text-[1.12em] leading-[0.95]">
                patients
              </span>
              {/* Subtle translucent black underline */}
              <span
                aria-hidden
                className="absolute left-1 right-1 -bottom-1 h-[2px] rounded-full"
                style={{ background: "rgba(15, 20, 25, 0.35)" }}
              />
            </span>
            <span>.</span>
          </h1>

          <p className="rise-3 mt-6 max-w-xl mx-auto text-[16.5px] leading-[1.6] text-[var(--muted)]">
            We help clinics, hospitals and doctors across India grow with data-driven healthcare
            marketing — SEO, paid ads, WhatsApp automation & brand — every month.
          </p>

          <div className="rise-4 mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#services" data-testid="hero-cta-primary" className="btn-primary px-6 py-[14px] text-[15px]">
              View services
              <ArrowRight size={16} />
            </a>
            <a href="#audit" data-testid="hero-cta-secondary" className="btn-secondary px-6 py-[14px] text-[15px]">
              Contact us
            </a>
          </div>
        </div>

        {/* 3 Doctor photos row */}
        <div className="rise-5 mt-14 lg:mt-20 grid grid-cols-3 gap-3 lg:gap-5 max-w-5xl mx-auto">
          <div className="tilt relative overflow-hidden rounded-3xl aspect-[4/5] bg-[var(--paper-2)]">
            <img src={DOCTOR_1} alt="Doctor with tablet" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)] pulse-dot" />
              <span className="text-[11px] font-medium text-[var(--ink)]">SEO · Organic growth</span>
            </div>
          </div>
          <div className="tilt relative overflow-hidden rounded-3xl aspect-[4/5] bg-[var(--paper-2)] sm:mt-8 lg:mt-10">
            <img src={DOCTOR_2} alt="Medical consultation" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E2A84B]" />
              <span className="text-[11px] font-medium text-[var(--ink)]">Paid ads · ROAS 6.4×</span>
            </div>
          </div>
          <div className="tilt relative overflow-hidden rounded-3xl aspect-[4/5] bg-[var(--paper-2)]">
            <img src={DOCTOR_3} alt="Doctor smiling" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0E6E4F]" />
              <span className="text-[11px] font-medium text-[var(--ink)]">WhatsApp · +12 leads/day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatChip({ children, style, className = "", color = "#FEEDE5" }) {
  return (
    <div
      className={`absolute z-10 h-11 w-11 rounded-2xl bg-white border border-[var(--line)] shadow-[0_10px_30px_-12px_rgba(15,20,25,0.15)] flex items-center justify-center ${className}`}
      style={{ ...style }}
    >
      <div className="h-8 w-8 rounded-xl flex items-center justify-center" style={{ background: color }}>
        {children}
      </div>
    </div>
  );
}
