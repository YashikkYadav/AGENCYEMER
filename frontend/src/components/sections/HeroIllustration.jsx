import { TrendingUp, Users, Phone, Star } from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto" data-testid="hero-illustration">
      {/* Background blob */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] -z-10"
        style={{ background: "#FFF1EB" }}
      />

      {/* Main dashboard card */}
      <div
        className="relative rounded-2xl bg-white p-5 sm:p-6"
        style={{
          boxShadow: "0 20px 60px rgba(47,58,61,0.12), 0 8px 20px rgba(47,58,61,0.06)",
          border: "1px solid #E5E7EB",
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[11px] font-medium" style={{ color: "#6D6D6D" }}>
              Patient Growth · Last 30 days
            </div>
            <div className="text-2xl font-extrabold mt-0.5" style={{ color: "#2F3A3D" }}>
              +312 New Patients
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={{ backgroundColor: "#E8F8EE", color: "#0F8A4A" }}
          >
            <TrendingUp size={12} />
            +48%
          </div>
        </div>

        {/* Chart */}
        <div className="h-36 sm:h-40 relative">
          <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F15A29" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F15A29" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* gridlines */}
            {[0, 40, 80, 120].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#F1F1F1" strokeWidth="1" />
            ))}
            {/* area */}
            <path
              d="M0,130 L40,120 L80,110 L120,95 L160,100 L200,80 L240,70 L280,55 L320,45 L360,30 L400,20 L400,160 L0,160 Z"
              fill="url(#area)"
            />
            {/* line */}
            <path
              d="M0,130 L40,120 L80,110 L120,95 L160,100 L200,80 L240,70 L280,55 L320,45 L360,30 L400,20"
              fill="none"
              stroke="#F15A29"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* dots */}
            {[
              [0, 130],
              [80, 110],
              [200, 80],
              [320, 45],
              [400, 20],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#fff" stroke="#F15A29" strokeWidth="2" />
            ))}
          </svg>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: "OPD Visits", value: "1,248", icon: Users },
            { label: "Calls", value: "382", icon: Phone },
            { label: "Reviews", value: "4.9★", icon: Star },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}
            >
              <div className="flex items-center gap-1.5 text-[10px] font-medium" style={{ color: "#6D6D6D" }}>
                <s.icon size={12} />
                {s.label}
              </div>
              <div className="text-base font-bold mt-0.5" style={{ color: "#2F3A3D" }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating doctor card */}
      <div
        className="hidden sm:flex absolute -left-6 -bottom-8 items-center gap-3 bg-white rounded-2xl px-4 py-3"
        style={{
          boxShadow: "0 12px 30px rgba(47,58,61,0.12)",
          border: "1px solid #E5E7EB",
        }}
        data-testid="hero-floating-card-doctor"
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: "#F15A29" }}
        >
          DR
        </div>
        <div>
          <div className="text-xs font-bold" style={{ color: "#2F3A3D" }}>
            Dr. Rohan Mehta
          </div>
          <div className="text-[11px]" style={{ color: "#6D6D6D" }}>
            "OPD up 3x in 90 days"
          </div>
        </div>
      </div>

      {/* Floating WhatsApp pill */}
      <div
        className="hidden sm:flex absolute -right-4 -top-4 items-center gap-2 bg-white rounded-full px-3.5 py-2"
        style={{
          boxShadow: "0 12px 30px rgba(47,58,61,0.12)",
          border: "1px solid #E5E7EB",
        }}
        data-testid="hero-floating-pill-whatsapp"
      >
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22C55E" }} />
        <span className="text-[11px] font-semibold" style={{ color: "#2F3A3D" }}>
          12 new WhatsApp leads
        </span>
      </div>
    </div>
  );
}
