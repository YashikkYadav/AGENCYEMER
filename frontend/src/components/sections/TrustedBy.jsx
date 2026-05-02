const logos = [
  "Apollo Care Clinic",
  "Smile Dental Co.",
  "Lotus IVF Centre",
  "Sanjivani Hospital",
  "Skin & Co. Aesthetics",
  "ChildFirst Pediatrics",
  "OrthoLine Spine",
  "Vision Plus Eye",
];

export default function TrustedBy() {
  return (
    <section
      data-testid="trusted-by-section"
      className="py-12 border-y"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <p
          className="text-center text-xs sm:text-sm font-semibold uppercase tracking-wider"
          style={{ color: "#6D6D6D" }}
          data-testid="trusted-by-label"
        >
          Trusted by clinics & hospitals across India
        </p>

        <div className="mt-6 overflow-hidden no-scrollbar">
          <div className="flex gap-12 animate-scroll-x w-max">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                data-testid={`trusted-logo-${i}`}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span
                  className="inline-flex h-8 w-8 rounded-md items-center justify-center text-[11px] font-extrabold text-white"
                  style={{ backgroundColor: "#2F3A3D" }}
                >
                  {name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <span className="text-base font-semibold" style={{ color: "#2F3A3D" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
