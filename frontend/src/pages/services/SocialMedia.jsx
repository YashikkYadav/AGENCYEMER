import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";

const HERO_IMG =
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=1200&fit=crop&q=85";

const sections = [
  {
    kind: "checklist",
    eyebrow: "What's included",
    title: "100 posts a month. One voice. Zero generic templates.",
    body: "Everything a modern healthcare brand needs on social — scripted, designed, scheduled and optimised by a team that works only with doctors.",
    items: [
      { title: "Instagram", desc: "Reels, carousels, stories — a mix of patient education, Q&A and behind-the-scenes." },
      { title: "LinkedIn", desc: "Thought-leadership for founder doctors — case notes, research takes, industry commentary." },
      { title: "YouTube Shorts", desc: "Vertical patient-education videos repurposed from long-form content." },
      { title: "WhatsApp channels", desc: "Broadcast updates, clinic news and community building with your existing patient base." },
      { title: "Facebook", desc: "Community-building posts and review amplification — still the #1 platform in Tier-2/3 India." },
      { title: "Content calendar & approvals", desc: "Weekly batches, shared via Notion; your only job is a 5-minute approval click." },
    ],
  },
  {
    kind: "pills",
    eyebrow: "Content types we produce",
    title: "Formats that actually drive patient action.",
    items: [
      "Reels (long & short)",
      "Carousel posts",
      "Instagram Stories",
      "YouTube Shorts",
      "Static feed posts",
      "Live sessions",
      "Patient testimonial edits",
      "Behind-the-scenes",
      "Before/after (consented)",
      "Myth-busting series",
      "Festival & awareness days",
      "Doctor Q&A",
    ],
  },
  {
    kind: "steps",
    eyebrow: "Our content engine",
    title: "From insight to posted — in five clean steps.",
    items: [
      { title: "Strategy workshop", desc: "A 90-minute onboarding to capture your tone, expertise, patient personas and specialty-specific do's and don'ts." },
      { title: "Monthly content plan", desc: "A 30-day calendar mixing education, proof, trust and conversion — signed off one week in advance." },
      { title: "Production", desc: "Scripting, design, editing and captions done by our in-house healthcare content team." },
      { title: "Publishing & engagement", desc: "We publish, reply to DMs/comments, and route qualified leads to your team via WhatsApp." },
      { title: "Performance review", desc: "Bi-weekly 30-minute calls — what's working, what isn't, and what we'll double down on." },
    ],
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
      {
        q: "Do we need to shoot Reels ourselves?",
        a: "Yes, briefly. We send scripted shot lists and provide a framing/lighting guide. Most founder doctors shoot 2–3 hours a month on their phone; we handle everything else.",
      },
      {
        q: "Will the content sound like us?",
        a: "That's the entire point. Our onboarding workshop captures your voice, phrasing and non-negotiables. Every post goes through you before it's published — for the first month, every week, thereafter.",
      },
      {
        q: "Do you handle paid boosting too?",
        a: "We recommend treating paid as a separate engagement under our Performance Ads service. Boosting without a clear funnel rarely pays back; we'd rather do it right.",
      },
      {
        q: "What about MCI / advertising compliance?",
        a: "All content is reviewed against Indian Medical Council advertising guidelines, DPDP Act and platform-specific healthcare policies before it ships.",
      },
    ],
  },
];

export default function SocialMedia() {
  return (
    <ServiceDetailLayout
      eyebrow="Social Media Management"
      title="Social media that earns patient trust — 100 posts a month, written for healthcare."
      intro="The social media engine for India's most followed doctors and clinics. Instagram, LinkedIn, YouTube, WhatsApp and Facebook — strategy, scripting, design, editing and publishing, handled by a team that works only with healthcare."
      heroImage={HERO_IMG}
      sections={sections}
    />
  );
}
