import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { Instagram, Linkedin, Youtube, MessageCircle, Facebook, Calendar, Pen, PlayCircle, Target, Shield, Heart, Video } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=1200&fit=crop&q=85";

function ReelPreview() {
  return (
    <div className="rounded-2xl bg-[var(--ink)] overflow-hidden border border-[var(--line)] max-w-[260px] mx-auto" style={{ aspectRatio: "9/16" }}>
      <div className="relative w-full h-full bg-gradient-to-b from-[#3a2f28] via-[#1f1a17] to-[#0F1419]">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=320&h=560&fit=crop&crop=faces&q=80"
          alt="Doctor reel"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
            <PlayCircle size={26} className="text-[var(--ink)]" strokeWidth={1.5} />
          </div>
        </div>
        <div className="absolute top-3 left-3 right-3 flex items-center gap-2 text-white/90 text-[11px]">
          <div className="h-6 w-6 rounded-full bg-white/20 border border-white/30" />
          <span className="font-semibold">dr.rohan.ivf</span>
          <span className="opacity-60">· 2d</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="text-[11.5px] leading-tight font-semibold">
            3 things every IVF patient should ask 👇
          </div>
          <div className="mt-1 text-[10px] opacity-70">♥ 4.2k · 312 saves · 89 shares</div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    kind: "features",
    eyebrow: "What's included",
    title: "100 posts a month. One voice. Zero generic templates.",
    body: "Everything a modern healthcare brand needs on social — scripted, designed, scheduled and optimised by a team that works only with doctors.",
    items: [
      { icon: Instagram, title: "Instagram", desc: "Reels, carousels, stories — patient education, Q&A and behind-the-scenes." },
      { icon: Linkedin, title: "LinkedIn", desc: "Thought-leadership for founder doctors — case notes, research takes." },
      { icon: Youtube, title: "YouTube Shorts", desc: "Vertical patient-education repurposed from long-form content." },
      { icon: MessageCircle, title: "WhatsApp channels", desc: "Broadcasts, clinic updates, community-building with your patient base." },
      { icon: Facebook, title: "Facebook", desc: "Community building & review amplification — still the #1 in Tier-2/3 India." },
      { icon: Calendar, title: "Content calendar & approvals", desc: "Weekly batches shared via Notion; your only job is a 5-minute approval click." },
    ],
  },
  {
    kind: "preview",
    eyebrow: "In action",
    title: "Reels that sound like you — not like a template.",
    body: "Every post starts with a real clinical insight, gets scripted by a healthcare copywriter, and ends edited to platform-native length.",
    preview: <ReelPreview />,
    items: [
      { icon: Pen, title: "Scripted in your voice", desc: "A 90-minute onboarding captures phrasing, non-negotiables and tone." },
      { icon: Video, title: "Edited for the feed", desc: "Captions, b-roll, hook-within-3-seconds, aspect-perfect for each platform." },
      { icon: Target, title: "Measured by outcome", desc: "We track saves, shares and DM-to-booking — not just views." },
    ],
  },
  {
    kind: "pills",
    eyebrow: "Content formats we produce",
    title: "Formats that drive patient action.",
    items: [
      "Reels (long & short)", "Carousel posts", "Instagram Stories", "YouTube Shorts",
      "Static feed posts", "Live sessions", "Patient testimonial edits", "Behind-the-scenes",
      "Before/after (consented)", "Myth-busting series", "Festival & awareness days", "Doctor Q&A",
    ],
  },
  {
    kind: "steps",
    eyebrow: "Our content engine",
    title: "From insight to posted — five clean steps.",
    items: [
      { title: "Strategy workshop", desc: "90-minute onboarding to capture tone, expertise, patient personas & specialty do's and don'ts." },
      { title: "Monthly content plan", desc: "A 30-day calendar mixing education, proof, trust and conversion — signed off a week in advance." },
      { title: "Production", desc: "Scripting, design, editing and captions done by our in-house healthcare content team." },
      { title: "Publish & engage", desc: "We publish, reply to DMs and comments, route qualified leads to your team via WhatsApp." },
    ],
  },
  {
    kind: "compare",
    eyebrow: "The difference",
    title: "Without a system, social is noise. With us, it's a patient engine.",
    items: {
      without: [
        "Generic ChatGPT posts that sound like every other clinic",
        "Inconsistent posting — 4 posts one week, nothing for two",
        "Reels under 5% watch-through, zero saves",
        "DMs ignored; leads evaporate within 24 hours",
      ],
      with: [
        "Posts scripted in your voice, approved by you weekly",
        "Healthcare-native calendar: education, proof, trust, conversion",
        "Hook-first edits built for 40%+ watch-through",
        "DMs answered within 6 hours with qualified-lead routing",
      ],
    },
  },
  {
    kind: "case",
    eyebrow: "Proof of work",
    title: "Short case study — Cosmetic dermatology, Mumbai.",
    items: {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop&q=85",
      clinic: "Cosmetic Derm Founder",
      location: "Mumbai, India",
      headline: "From 3K followers and 0 leads to 50K followers and 2,000+ leads in 3 months.",
      metrics: [
        { value: "50K", label: "IG followers" },
        { value: "2,000+", label: "Leads" },
        { value: "12", label: "PR features" },
      ],
      body:
        "We positioned a senior dermatologist around three niche treatment pillars, scripted 100 posts/month across Reels + carousels, and plugged DMs into a WhatsApp booking funnel. The Instagram audience went from 3,000 mostly-local followers to 50,000 India-wide; PR came organically once the clinical positioning landed.",
      quote: "Finally a team that understood that doctors don't sell — we earn trust. They build for that.",
      author: "Dr. Priya Sharma, Founder",
    },
  },
  {
    kind: "kpis",
    eyebrow: "Typical partner results",
    title: "Reach that converts — not vanity.",
    items: [
      { value: "100", label: "Posts / month" },
      { value: "5×", label: "Reach in 90 days" },
      { value: "6h", label: "DM response SLA" },
      { value: "20+", label: "Leads / month" },
    ],
  },
  {
    kind: "faq",
    eyebrow: "Good questions",
    title: "Frequently asked.",
    items: [
      { q: "Do we need to shoot Reels ourselves?", a: "Yes, briefly. We send scripted shot lists and framing guides. Most founder doctors shoot 2–3 hours a month on their phone; we handle everything else." },
      { q: "Will the content sound like us?", a: "That's the entire point. Our workshop captures your voice, and every post goes through you before it publishes — for the first month, every week thereafter." },
      { q: "Do you handle paid boosting too?", a: "We recommend paid as a separate engagement under Performance Ads. Boosting without a funnel rarely pays back; we'd rather do it right." },
      { q: "What about MCI / advertising compliance?", a: "All content is reviewed against Indian Medical Council advertising guidelines, DPDP Act and platform-specific healthcare policies before it ships." },
    ],
    cta: { label: "Claim your free audit", href: "#audit" },
  },
];

export default function SocialMedia() {
  return (
    <ServiceDetailLayout
      eyebrow="Social Media Management"
      title="Social media that earns patient trust — 100 posts a month."
      intro="The social media engine for India's most-followed doctors and clinics. Instagram, LinkedIn, YouTube, WhatsApp and Facebook — strategy, scripting, design, editing and publishing, handled by a team that works only with healthcare."
      heroImage={HERO_IMG}
      heroStats={[
        { value: "100", label: "Posts / mo" },
        { value: "5", label: "Platforms" },
        { value: "6h", label: "DM SLA" },
        { value: "50K+", label: "Audience grown" },
      ]}
      sections={sections}
    />
  );
}
