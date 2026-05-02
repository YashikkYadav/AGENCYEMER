const brands = [
  "Apollo Care",
  "Smile Dental",
  "Lotus IVF",
  "Sanjivani Hospital",
  "Skin & Co. Aesthetics",
  "ChildFirst Pediatrics",
  "OrthoLine Spine",
  "Vision Plus Eye",
];

export default function TrustLogos() {
  return (
    <section data-testid="trust-logos" className="py-12 bg-white border-y border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <p className="text-center text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--muted)]">
          Trusted by 100+ clinics & hospitals across India
        </p>
        <div className="mt-6 overflow-hidden no-scrollbar">
          <div className="flex gap-14 animate-scroll-x w-max">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                data-testid={`trust-logo-${i}`}
                className="serif text-2xl text-[var(--muted-2)] whitespace-nowrap tracking-tight"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
