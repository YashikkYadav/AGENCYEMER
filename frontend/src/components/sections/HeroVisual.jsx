import { TrendingUp, MessageCircle, Star } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto" data-testid="hero-visual">
      {/* Soft background card */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[28px]"
        style={{ background: "linear-gradient(180deg, #F4F9F6 0%, #FFFFFF 100%)" }}
      />

      {/* Main card */}
      <div className="relative rounded-2xl bg-white border border-[var(--line)] p-5 lg:p-6 shadow-[0_30px_80px_-30px_rgba(15,20,25,0.15)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-medium text-[var(--muted)] tracking-wide">
              Patient acquisition · Last 30 days
            </div>
            <div className="text-[28px] lg:text-[32px] font-semibold mt-1 text-[var(--ink)] tracking-tight">
              +312 new patients
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-[11.5px] font-semibold px-2 py-1 rounded-full bg-[var(--sage-soft)] text-[var(--sage-deep)]">
            <TrendingUp size={12} strokeWidth={2.5} />
            +48%
          </div>
        </div>

        {/* Chart */}
        <div className="h-36 lg:h-40 mt-4 relative">
          <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F15A29" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#F15A29" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#EEF0EC" strokeWidth="1" />
            ))}
            <path d="M0,135 L45,122 L95,115 L140,98 L180,104 L220,82 L260,68 L300,55 L340,42 L400,24 L400,160 L0,160 Z" fill="url(#g)" />
            <path d="M0,135 L45,122 L95,115 L140,98 L180,104 L220,82 L260,68 L300,55 L340,42 L400,24" fill="none" stroke="#F15A29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {[[0,135],[180,104],[300,55],[400,24]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke="#F15A29" strokeWidth="2" />
            ))}
          </svg>
        </div>

        {/* Stats tiles */}
        <div className="grid grid-cols-3 gap-2.5 mt-4">
          {[
            { label: "OPD", val: "1,248" },
            { label: "Calls", val: "382" },
            { label: "Rating", val: "4.9★" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-[var(--line)] p-2.5 bg-[var(--paper-2)]">
              <div className="text-[10px] text-[var(--muted)]">{s.label}</div>
              <div className="text-[15px] font-semibold mt-0.5 text-[var(--ink)]">{s.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating review card */}
      <div className="hidden sm:flex absolute -left-3 -bottom-6 items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 border border-[var(--line)] shadow-[0_12px_30px_-12px_rgba(15,20,25,0.18)]">
        <div className="flex items-center gap-0.5">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} size={11} fill="#E2A84B" stroke="#E2A84B" />
          ))}
        </div>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[var(--ink)]">"OPD up 3x in 90 days"</div>
          <div className="text-[10px] text-[var(--muted)]">Dr. Rohan Mehta · IVF</div>
        </div>
      </div>

      {/* Floating WhatsApp pill */}
      <div className="hidden sm:flex absolute -right-2 -top-3 items-center gap-2 bg-white rounded-full px-3 py-2 border border-[var(--line)] shadow-[0_12px_30px_-12px_rgba(15,20,25,0.18)]">
        <div className="h-6 w-6 rounded-full bg-[#25D366] flex items-center justify-center">
          <MessageCircle size={12} color="#fff" fill="#fff" />
        </div>
        <div className="text-[11px] font-semibold text-[var(--ink)]">12 new leads</div>
      </div>
    </div>
  );
}
