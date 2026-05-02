const items = [
  "Apollo Care · Jaipur",
  "+312% OPD",
  "Smile Dental Co. · Delhi",
  "₹8L from ads · 60d",
  "Lotus IVF · Bangalore",
  "0 → 2,400 leads",
  "Sanjivani Hospital · Pune",
  "₹4.10 CPL",
  "Skin & Co. · Mumbai",
  "50K Instagram audience",
  "ChildFirst Pediatrics · Hyd.",
  "+89 reviews · 30d",
  "OrthoLine Spine · Indore",
  "1.8× appointments",
];

export default function Ticker() {
  return (
    <section
      data-testid="ticker"
      className="relative border-y border-[rgba(242,237,227,0.10)] py-5 overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div className="overflow-hidden no-scrollbar">
        <div className="flex w-max animate-scroll-x">
          {[...items, ...items].map((t, i) => (
            <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap">
              <span
                className={`serif text-2xl tracking-tight ${
                  i % 2 === 0 ? "text-[var(--cream)]" : "italic-soft text-[var(--acid)]"
                }`}
              >
                {t}
              </span>
              <span className="text-[var(--muted-on-dark)]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
