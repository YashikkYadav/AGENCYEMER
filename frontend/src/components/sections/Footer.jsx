import { Instagram, Linkedin, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const groups = [
  { title: "Services", items: ["Healthcare SEO", "Performance Ads", "WhatsApp Automation", "Clinic Websites", "Personal Brand"] },
  { title: "Specialties", items: ["IVF & Fertility", "Dental", "Cosmetic & Derma", "Orthopaedics", "Pediatrics"] },
  { title: "Company", items: ["About", "Case Studies", "Journal", "Careers", "Contact"] },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[var(--paper-2)]/40 border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-16 lg:pt-20 pb-8">
        {/* Top: CTA strip */}
        <div className="grid grid-cols-12 gap-8 pb-14 lg:pb-16 border-b border-[var(--line)]">
          <div className="col-span-12 lg:col-span-8">
            <h3 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
              Ready to fill your waiting room?<br />
              <span className="text-[var(--muted)]">Let's build something that compounds.</span>
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end lg:items-center">
            <a href="#audit" data-testid="footer-cta" className="btn-sage text-[14px] px-6 py-[14px]">
              Book a free audit
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-12 gap-10 lg:gap-8 py-14">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <Logo height={44} variant="ink" />
            <p className="mt-5 text-[14px] leading-relaxed text-[var(--muted)] max-w-sm">
              An independent growth partner for India's most trusted clinics, hospitals and
              doctors. Based in Jaipur, trusted across 20+ cities.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, label: "instagram" },
                { Icon: Linkedin, label: "linkedin" },
                { Icon: Youtube, label: "youtube" },
                { Icon: MessageCircle, label: "whatsapp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-testid={`footer-social-${label}`}
                  className="h-9 w-9 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:bg-[var(--sage)] hover:text-white hover:border-[var(--sage)] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-[var(--muted)] mb-4">
                  {g.title}
                </h4>
                <ul className="space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i}>
                      <a
                        href="#"
                        data-testid={`footer-${g.title.toLowerCase()}-${i.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="text-[14px] text-[var(--ink-soft)] hover:text-[var(--sage)] transition-colors"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="col-span-12 lg:col-span-2">
            <h4 className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-[var(--muted)] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[var(--ink-soft)]">
              <li><a href="mailto:hello@yashikyadav.co" className="hover:text-[var(--sage)]">hello@yashikyadav.co</a></li>
              <li><a href="tel:+9198" className="hover:text-[var(--sage)]">+91 98 ___ ___ __</a></li>
              <li className="text-[var(--muted)]">Jaipur · India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-[var(--muted)]">
            © 2025 Yashik Yadav & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-[var(--muted)]">
            <a href="#" data-testid="footer-privacy" className="hover:text-[var(--ink)]">Privacy Policy</a>
            <a href="#" data-testid="footer-terms" className="hover:text-[var(--ink)]">Terms</a>
            <a href="#" data-testid="footer-imprint" className="hover:text-[var(--ink)]">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
