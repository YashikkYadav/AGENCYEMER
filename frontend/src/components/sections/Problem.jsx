import { TrendingDown, Search, UserMinus, BellOff } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Low OPD Footfall",
    desc: "Empty waiting rooms while competitors stay packed every single day.",
  },
  {
    icon: Search,
    title: "No Google Presence",
    desc: "Patients can't find you when they search for treatments in your city.",
  },
  {
    icon: UserMinus,
    title: "Poor Patient Retention",
    desc: "Patients visit once and never come back — no system to bring them in.",
  },
  {
    icon: BellOff,
    title: "No Automation or Follow-ups",
    desc: "Manual reminders, missed appointments, and lost revenue every week.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#2F3A3D" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            data-testid="problem-headline"
          >
            Is Your Clinic Losing Patients to Competitors Online?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl">
            If any of these sound familiar, you're leaving lakhs of rupees on the table — every single month.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((p) => (
            <div
              key={p.title}
              data-testid={`problem-card-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-2xl p-6 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="inline-flex h-11 w-11 rounded-xl items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(241,90,41,0.15)" }}
              >
                <p.icon size={20} color="#F15A29" />
              </div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
