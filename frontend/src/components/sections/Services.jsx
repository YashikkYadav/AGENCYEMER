import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Star,
  Share2,
  Globe,
  Youtube,
  Users,
  Repeat,
  MapPin,
  Search,
  FileText,
  Megaphone,
} from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Online Reputation Management",
    desc: "Build a 5-star digital presence across Google, Practo, Lybrate, Justdial & more.",
    href: "/services/online-reputation-management",
    internal: true,
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "100 posts per month across Instagram, LinkedIn, YouTube, WhatsApp & Facebook.",
    href: "/services/social-media-management",
    internal: true,
  },
  {
    icon: Globe,
    title: "Healthcare Website Management",
    desc: "High-converting doctor websites — speed, SEO, trust signals, booking integrations.",
    href: "#audit",
  },
  {
    icon: Youtube,
    title: "YouTube Marketing for Doctors",
    desc: "Build authority and attract patients with scripted, edited & SEO-optimised video.",
    href: "#audit",
  },
  {
    icon: Users,
    title: "Patient Acquisition System",
    desc: "Get 20–100 new patients per month from an integrated 5-channel digital system.",
    href: "#audit",
  },
  {
    icon: Repeat,
    title: "Patient Retention Marketing",
    desc: "WhatsApp sequences, reminders, birthday messages & annual check-up campaigns.",
    href: "#audit",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Rank in the Google Maps 3-pack with weekly posts, photos, reviews & Q&A.",
    href: "#audit",
  },
  {
    icon: Search,
    title: "Healthcare SEO Services",
    desc: "Rank #1 on Google for your specialty & city — with healthcare-specialist SEO.",
    href: "#audit",
  },
  {
    icon: FileText,
    title: "Healthcare Content Marketing",
    desc: "Blog posts, videos, infographics & newsletters that educate and convert.",
    href: "#audit",
  },
  {
    icon: Megaphone,
    title: "Google Ads for Doctors",
    desc: "Get new patients in 48 hours with Search, Display, YouTube & Local Services Ads.",
    href: "#audit",
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services" className="py-20 lg:py-28 bg-[var(--paper-2)]/50">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--sage)] mb-4">
              What we do
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] font-light text-[var(--ink)]">
              Ten services.<br />
              One growth operating system.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-[16px] leading-relaxed text-[var(--muted)]">
              We don't sell deliverables. We run a single integrated system that compounds
              your clinic's revenue every month — built and managed by a team that works
              only with healthcare.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Inner = (
              <>
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-[var(--sage-soft)] flex items-center justify-center">
                    <s.icon size={20} className="text-[var(--sage-deep)]" strokeWidth={2} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--muted-2)] transition-all group-hover:text-[var(--sage)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <div>
                  <h3 className="text-[18.5px] font-semibold tracking-tight text-[var(--ink)] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                    {s.desc}
                  </p>
                </div>
                {s.internal && (
                  <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--sage)]">
                    Read the full page
                    <ArrowUpRight size={13} />
                  </span>
                )}
              </>
            );

            const baseClass = "card group p-6 lg:p-7 flex flex-col gap-5 h-full";
            const testId = `service-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

            return s.internal ? (
              <Link
                key={s.title}
                to={s.href}
                data-testid={testId}
                className={baseClass}
              >
                {Inner}
              </Link>
            ) : (
              <a
                key={s.title}
                href={s.href}
                data-testid={testId}
                className={baseClass}
              >
                {Inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
