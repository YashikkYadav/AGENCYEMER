import { ArrowRight, Star, TrendingUp, Search, MessageCircle, Check, Phone } from "lucide-react";

const DOCTOR_IMG =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&h=1200&fit=crop&crop=faces&q=85";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative pt-24 lg:pt-28 pb-14 lg:pb-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-24 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFD4BD 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-10 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #EADFC6 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1340px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {/* ================= LEFT — BIG LIFESTYLE CARD ================= */}
          <div className="col-span-12 lg:col-span-7 rise">
            <div
              className="relative overflow-hidden rounded-[28px] bg-[var(--paper-2)]"
              style={{
                aspectRatio: "7/8",
                minHeight: "560px",
                boxShadow: "0 40px 80px -40px rgba(15,20,25,0.18)",
              }}
            >
              <img
                src={DOCTOR_IMG}
                alt="Healthcare professional"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
                loading="eager"
              />
              {/* Warm wash for readability */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(245,240,230,0.92) 0%, rgba(245,240,230,0.55) 35%, rgba(245,240,230,0.15) 70%, rgba(15,20,25,0.55) 100%)",
                }}
              />

              {/* Top meta */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full pl-1.5 pr-3 py-1 border border-[var(--line)]">
                  <span className="h-6 px-2 rounded-full bg-[var(--sage)] text-white text-[10px] font-bold tracking-wider uppercase flex items-center">
                    New
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={10} fill="#E2A84B" stroke="#E2A84B" />
                    ))}
                  </div>
                  <span className="text-[11.5px] font-semibold text-[var(--ink)]">4.9/5</span>
                </div>
                <div className="hidden sm:block text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--ink-soft)]">
                  Vol. 07 · 2026
                </div>
              </div>

              {/* Headline block */}
              <div className="absolute top-16 sm:top-24 left-6 right-6 lg:right-10">
                <h1
                  data-testid="hero-headline"
                  className="text-[clamp(2.25rem,4.8vw,4rem)] leading-[1.02] tracking-[-0.022em] font-semibold text-[var(--ink)]"
                >
                  Turning clicks<br />
                  into{" "}
                  <span className="script italic-soft text-[var(--sage)] text-[1.1em] leading-[0.92]">
                    patients
                  </span>
                  <span className="text-[var(--ink)]">.</span>
                </h1>
                <p className="mt-5 max-w-md text-[15px] leading-[1.6] text-[var(--ink-soft)]">
                  The healthcare-only growth studio trusted by 100+ clinics across India —
                  SEO, paid ads, WhatsApp automation & brand.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#audit"
                    data-testid="hero-cta-primary"
                    className="btn-primary px-5 py-[12px] text-[14px]"
                  >
                    Book a free audit
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="#case-studies"
                    data-testid="hero-cta-secondary"
                    className="btn-secondary px-5 py-[12px] text-[14px] bg-white/70 backdrop-blur"
                  >
                    See our work
                  </a>
                </div>
              </div>

              {/* Bottom ribbon: recognized / partners */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 bg-white/90 backdrop-blur-xl border border-[var(--line)] rounded-2xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--muted)] hidden sm:block">
                    Recognised
                  </span>
                  <div className="hidden sm:block w-px h-5 bg-[var(--line)]" />
                  <div className="flex items-center gap-3 sm:gap-5">
                    <span className="text-[12.5px] font-semibold text-[var(--ink)] tracking-tight">Google Partner</span>
                    <span className="text-[var(--muted)]">·</span>
                    <span className="text-[12.5px] font-semibold text-[var(--ink)] tracking-tight">Meta Business</span>
                    <span className="text-[var(--muted)] hidden md:inline">·</span>
                    <span className="text-[12.5px] font-semibold text-[var(--ink)] tracking-tight hidden md:inline">DPDP-safe</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[var(--ink-soft)] whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)] pulse-dot" />
                  Booking Q1 '26
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT — 3 FEATURE MINI CARDS ================= */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
            {/* Card 1 — SEO / growth */}
            <FeatureCard
              delay="rise-2"
              eyebrow="Organic growth"
              title="SEO that fills waiting rooms"
              sub="Rank #1 for every treatment patients search in your city."
              accent="#F15A29"
              bg="linear-gradient(180deg, #FFEDE5 0%, #FFFFFF 100%)"
            >
              <SeoMini />
            </FeatureCard>

            {/* Card 2 — Paid ads */}
            <FeatureCard
              delay="rise-3"
              eyebrow="Performance ads"
              title="Predictable patient leads"
              sub="From Meta & Google, at the lowest CPL in your category."
              accent="#E2A84B"
              bg="linear-gradient(180deg, #FFF4D6 0%, #FFFFFF 100%)"
            >
              <AdsMini />
            </FeatureCard>

            {/* Card 3 — WhatsApp automation */}
            <FeatureCard
              delay="rise-4"
              eyebrow="WhatsApp automation"
              title="Patients who actually show up"
              sub="Reminders, follow-ups & reactivation — on autopilot."
              accent="#1A8A4C"
              bg="linear-gradient(180deg, #E7F8EE 0%, #FFFFFF 100%)"
            >
              <WhatsMini />
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature card wrapper ---------- */
function FeatureCard({ children, eyebrow, title, sub, accent, bg, delay = "rise-2" }) {
  return (
    <div
      data-testid={`hero-feature-${eyebrow.toLowerCase().replace(/\s+/g, "-")}`}
      className={`${delay} relative rounded-[22px] overflow-hidden border border-[var(--line)] p-5 transition-all hover:-translate-y-1`}
      style={{ background: bg, boxShadow: "0 20px 50px -30px rgba(15,20,25,0.18)" }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: accent }}
            />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {eyebrow}
            </span>
          </div>
          <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-[var(--ink)] leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-[12.5px] leading-[1.5] text-[var(--muted)]">{sub}</p>
        </div>
        <div className="shrink-0">{children}</div>
      </div>
    </div>
  );
}

/* ---------- Mini previews ---------- */
function SeoMini() {
  return (
    <div className="w-[120px] rounded-xl bg-white border border-[var(--line)] p-2.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-[9px] text-[var(--muted)] mb-1.5">
        <Search size={10} />
        <span className="truncate">ivf clinic jaipur</span>
      </div>
      <div className="space-y-1">
        <div className="rounded-md bg-[var(--sage-soft)] border border-[#FFD2BE] p-1.5">
          <div className="text-[8.5px] font-semibold text-[var(--sage-deep)]">#1 · yashikyadav.co</div>
          <div className="h-1 bg-[var(--sage)] rounded-full mt-1 w-full" />
        </div>
        <div className="rounded-md bg-[var(--paper)] p-1.5">
          <div className="text-[8.5px] text-[var(--muted)]">#2 · competitor.in</div>
          <div className="h-1 bg-[var(--line-2)] rounded-full mt-1 w-3/4" />
        </div>
        <div className="rounded-md bg-[var(--paper)] p-1.5">
          <div className="text-[8.5px] text-[var(--muted)]">#3 · other.com</div>
          <div className="h-1 bg-[var(--line-2)] rounded-full mt-1 w-2/4" />
        </div>
      </div>
    </div>
  );
}

function AdsMini() {
  return (
    <div className="w-[120px] rounded-xl bg-white border border-[var(--line)] p-2.5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-[8.5px] font-semibold text-[var(--muted)] uppercase tracking-wider">
          ROAS
        </span>
        <span className="inline-flex items-center gap-0.5 text-[8.5px] font-semibold text-[#0E6E4F]">
          <TrendingUp size={9} /> +62%
        </span>
      </div>
      <div className="text-[22px] font-semibold text-[var(--ink)] mt-0.5 leading-none tracking-tight">
        6.4×
      </div>
      <svg viewBox="0 0 100 32" className="w-full h-7 mt-2" preserveAspectRatio="none">
        <path
          d="M0,26 L15,22 L30,24 L45,16 L60,18 L75,10 L90,6 L100,3"
          fill="none"
          stroke="#E2A84B"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {[0, 45, 75, 100].map((x, i) => (
          <circle key={i} cx={x} cy={[26, 16, 10, 3][i]} r="1.6" fill="#fff" stroke="#E2A84B" strokeWidth="1" />
        ))}
      </svg>
      <div className="flex justify-between mt-1 text-[7.5px] text-[var(--muted)]">
        <span>Jan</span><span>Feb</span><span>Mar</span>
      </div>
    </div>
  );
}

function WhatsMini() {
  return (
    <div className="w-[120px] rounded-xl bg-[#E7F8EE] border border-[#C5EAD4] p-2 shadow-sm">
      <div className="flex items-center gap-1.5 bg-white rounded-lg p-1.5">
        <div className="h-5 w-5 rounded-full bg-[#1A8A4C] flex items-center justify-center shrink-0">
          <MessageCircle size={9} color="#fff" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[8.5px] font-semibold text-[var(--ink)] truncate">Clinic bot</div>
          <div className="text-[7.5px] text-[var(--muted)]">Online · typing…</div>
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <div className="bg-white rounded-lg rounded-bl-sm px-2 py-1 text-[8.5px] text-[var(--ink)]">
          Hi 👋 book your slot?
        </div>
        <div className="ml-6 bg-[#DCF8C6] rounded-lg rounded-br-sm px-2 py-1 text-[8.5px] text-[var(--ink)]">
          Yes, tomorrow 4 pm
        </div>
        <div className="flex items-center gap-1 ml-6 text-[7.5px] text-[#1A8A4C]">
          <Check size={9} strokeWidth={3} /> Confirmed
        </div>
      </div>
    </div>
  );
}
