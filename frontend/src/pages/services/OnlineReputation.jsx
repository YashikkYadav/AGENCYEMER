import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";

const HERO_IMG =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=1200&fit=crop&q=85";

const sections = [
  {
    kind: "checklist",
    eyebrow: "What's included",
    title: "Every pixel of your online reputation, looked after.",
    body: "94% of patients check reviews before booking. We make sure every touchpoint tells the right story — and does it within hours, not days.",
    items: [
      { title: "Daily monitoring", desc: "Across Google, Practo, Lybrate, Justdial, Facebook, Healthgrades & 10 more." },
      { title: "Response within 2 hours", desc: "Trained, empathetic replies written by a medical-communication specialist." },
      { title: "Review acquisition engine", desc: "WhatsApp + SMS + QR flows that 5×ed review velocity for partner clinics." },
      { title: "Crisis handling", desc: "A proven playbook for negative reviews, fake complaints, legal escalations." },
      { title: "Listings hygiene", desc: "NAP consistency across 40+ directories — a silent SEO booster." },
      { title: "Monthly reputation report", desc: "What moved, why, and what we'll do next. Readable in five minutes." },
    ],
  },
  {
    kind: "pills",
    eyebrow: "Platforms we manage",
    title: "Across every surface patients check before booking.",
    items: [
      "Google Business Profile",
      "Practo",
      "Lybrate",
      "Justdial",
      "Facebook Pages",
      "Healthgrades",
      "Zocdoc",
      "1mg",
      "Apollo247",
      "MouthShut",
      "Sulekha",
      "AskApollo",
    ],
  },
  {
    kind: "steps",
    eyebrow: "How we work",
    title: "A calm, systematic rhythm — no fire-drills.",
    items: [
      { title: "Audit", desc: "Full teardown of every review, every rating, every listing. We find the leaks before we fix them." },
      { title: "Response cadence", desc: "We set up a 7-day SLA covering 100% of reviews, positive and negative alike." },
      { title: "Review flywheel", desc: "Post-consultation WhatsApp flow that doubles your review velocity within 30 days." },
      { title: "Operating review", desc: "Monthly 30-minute call where we share reports, escalations, and the plan for next 30 days." },
    ],
  },
  {
    kind: "kpis",
    eyebrow: "Results our partners see",
    title: "Predictable, compounding reputation lift.",
    items: [
      { value: "+89", label: "Reviews · 30 days" },
      { value: "4.9★", label: "Avg. Google rating" },
      { value: "2h", label: "Response SLA" },
      { value: "100%", label: "Coverage" },
    ],
  },
  {
    kind: "faq",
    eyebrow: "Good questions",
    title: "Frequently asked.",
    items: [
      {
        q: "Do you respond to reviews on our behalf?",
        a: "Yes. Our team drafts every response, routes it through you on the first cycle for tone approval, then handles the rest — within a 2-hour SLA.",
      },
      {
        q: "Can you remove fake or defamatory reviews?",
        a: "Where they violate platform policies, we file removal requests with the platform and track them. For legal matters we can coordinate with your counsel.",
      },
      {
        q: "How soon will we see results?",
        a: "Review velocity typically doubles within 30 days. Meaningful shifts in overall rating land inside 60–90 days depending on your starting volume.",
      },
      {
        q: "Does this include Practo / Lybrate profile optimisation?",
        a: "Yes. We optimise profiles, respond to reviews, and manage Q&A across every platform listed above.",
      },
    ],
  },
];

export default function OnlineReputation() {
  return (
    <ServiceDetailLayout
      eyebrow="Online Reputation Management"
      title="Build a 5-star digital presence — across every platform that matters."
      intro="94% of patients check reviews before they book. We run your online reputation across Google, Practo, Lybrate, Justdial, Facebook, Healthgrades and more — with responses within 2 hours, a review flywheel that compounds, and a crisis playbook when you need it."
      heroImage={HERO_IMG}
      sections={sections}
    />
  );
}
