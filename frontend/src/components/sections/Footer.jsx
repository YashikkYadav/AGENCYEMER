import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const cols = [
  {
    title: "Services",
    items: ["Healthcare SEO", "Google My Business", "Meta & Google Ads", "WhatsApp Automation", "Website Development"],
  },
  {
    title: "Specialties",
    items: ["IVF Clinics", "Dental Chains", "Cosmetic & Derma", "Orthopaedics", "Pediatrics"],
  },
  {
    title: "Cities",
    items: ["Jaipur", "Delhi", "Mumbai", "Bangalore", "Hyderabad"],
  },
  {
    title: "Company",
    items: ["About", "Case Studies", "Blog", "Careers", "Contact"],
  },
];

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_f610debc-ef05-476f-91fb-c01e8a987022/artifacts/eegoeqk7_image.png";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      style={{ backgroundColor: "#2F3A3D", color: "#FFFFFF" }}
      className="pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex h-9 w-9 rounded-lg items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <img src={LOGO_URL} alt="Logo" className="h-6 w-6 object-contain invert" />
              </span>
              <div className="font-bold text-base">Yashik Yadav & Co.</div>
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-xs">
              India's #1 healthcare digital marketing agency — helping doctors & clinics fill chairs every month.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "instagram" },
                { Icon: Linkedin, label: "linkedin" },
                { Icon: Youtube, label: "youtube" },
                { Icon: MessageCircle, label: "whatsapp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label}`}
                  className="inline-flex h-9 w-9 rounded-full items-center justify-center transition-all hover:bg-[#F15A29]"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  aria-label={label}
                >
                  <Icon size={16} color="#FFFFFF" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      data-testid={`footer-link-${c.title.toLowerCase()}-${item.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs text-white/55">
            © 2025 Yashik Yadav & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/55">
            <a href="#" data-testid="footer-privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" data-testid="footer-terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
