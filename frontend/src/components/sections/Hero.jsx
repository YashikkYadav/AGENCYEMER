import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Review chip */}
        <div className="rise flex items-center gap-2 mb-8">
          <div className="flex -space-x-2">
            {["#0E6E4F", "#E2A84B", "#7A3A1C"].map((c, i) => (
              <div key={i} className="h-7 w-7 rounded-full border-2 border-white" style={{ background: c }} />
            ))}
          </div>
          <div className="flex items-center gap-1 text-[var(--ink)]">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} size={13} fill="#E2A84B" stroke="#E2A84B" />
            ))}
          </div>
          <span className="text-[13px] text-[var(--muted)]">
            <span className="text-[var(--ink)] font-semibold">4.9</span> from 100+ doctors
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div className="col-span-12 lg:col-span-7">
            <h1
              data-testid="hero-headline"
              className="rise-2 text-[clamp(2.5rem,6vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-[var(--ink)]"
            >
              More patients.<br />
              Less <span className="serif italic-soft text-[var(--sage)]">guesswork</span>.
              <br />Every single month.
            </h1>

            <p
              data-testid="hero-subheadline"
              className="rise-3 mt-7 text-[17px] leading-[1.6] text-[var(--muted)] max-w-xl"
            >
              We are the growth partner for India's most trusted clinics, hospitals and
              doctors. SEO, paid ads, WhatsApp & brand — built around the way patients
              actually find and trust healthcare.
            </p>

            <div className="rise-3 mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#audit" data-testid="hero-cta-primary" className="btn-sage text-[15px] px-6 py-[14px]">
                Book a free audit
                <ArrowRight size={16} />
              </a>
              <a href="#case-studies" data-testid="hero-cta-secondary" className="btn-secondary text-[15px] px-6 py-[14px]">
                See client results
              </a>
            </div>

            <div className="rise-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                "100+ clinics served",
                "₹10Cr+ patient revenue",
                "20+ Indian cities",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[13.5px] text-[var(--ink-soft)]">
                  <CheckCircle2 size={15} className="text-[var(--sage)]" strokeWidth={2.25} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="col-span-12 lg:col-span-5 rise-4">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
