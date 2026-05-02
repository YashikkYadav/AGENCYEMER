import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How quickly will we see results?",
    a: "Most partners see their first qualified patient inquiries within 14 days. Meaningful OPD growth usually lands in month 2 — we prioritise booking-to-show rate, not vanity leads.",
  },
  {
    q: "Do you only work with specific specialties?",
    a: "We work with any regulated healthcare specialty — IVF, dental, cosmetic, orthopaedic, pediatric, multi-spec hospitals. We don't take on wellness, supplements or unregulated practices.",
  },
  {
    q: "What's included in the free audit?",
    a: "A 45-minute session where we tear down your Google presence, paid funnels, website, reviews and competitor set. You leave with a written action plan — even if we never work together.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Every engagement is a 90-day commitment so we have time to produce meaningful results. After cycle one, you can pause or continue month-to-month.",
  },
  {
    q: "How is patient data handled?",
    a: "All patient data stays inside your CRM/EMR. Our automation tools are HIPAA-aligned and compliant with Indian telemedicine & DPDP guidelines.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee our process, not outcomes. That said, 94% of partners who complete the first 90-day cycle continue with us for 12+ months — the work speaks for itself.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" data-testid="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
            Good questions
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
            Everything you'd ask on<br />
            the <span className="serif italic-soft text-[var(--sage)]">discovery</span> call.
          </h2>
        </div>

        <div className="border-t border-[var(--line)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-testid={`faq-${i}`} className="border-b border-[var(--line)]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="text-[16px] lg:text-[17px] font-medium text-[var(--ink)] group-hover:text-[var(--sage)] transition-colors">
                    {f.q}
                  </span>
                  <span className="h-8 w-8 rounded-full border border-[var(--line-2)] flex items-center justify-center text-[var(--ink)] shrink-0">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-14 text-[15px] leading-relaxed text-[var(--muted)]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
