import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { Star, MessageCircle, ShieldCheck, Search, Clock, Bell, ThumbsUp, AlertTriangle } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=1200&fit=crop&q=85";

function SerpPreview() {
  return (
    <div className="rounded-2xl bg-[var(--paper)] p-4 border border-[var(--line)]">
      <div className="flex items-center gap-2 text-[12px] text-[var(--muted)] bg-white rounded-full px-3 py-2 border border-[var(--line)]">
        <Search size={13} />
        <span>best ivf clinic jaipur</span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-xl bg-white border border-[var(--sage)]/40 p-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white bg-[var(--sage)] px-1.5 py-0.5 rounded">AD</span>
            <span className="text-[12.5px] font-semibold text-[var(--ink)]">yashikyadav.co/ivf-jaipur</span>
          </div>
          <div className="mt-1 text-[13px] text-[var(--ink-soft)] truncate">Top-rated IVF clinic — 4.9 ★ · 2,400+ reviews</div>
          <div className="mt-1.5 flex items-center gap-0.5">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={10} fill="#E2A84B" stroke="#E2A84B" />)}
            <span className="ml-1 text-[11px] text-[var(--muted)]">(2.4k)</span>
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 border border-[var(--line)]">
          <div className="text-[12.5px] font-semibold text-[var(--ink-soft)]">competitor.in</div>
          <div className="mt-1 text-[12px] text-[var(--muted)] truncate">3.6 ★ · 112 reviews</div>
        </div>
        <div className="rounded-xl bg-white p-3 border border-[var(--line)]">
          <div className="text-[12.5px] font-semibold text-[var(--ink-soft)]">otherclinic.com</div>
          <div className="mt-1 text-[12px] text-[var(--muted)] truncate">3.9 ★ · 84 reviews</div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    kind: "features",
    eyebrow: "What's included",
    title: "Every touchpoint of your online reputation, looked after.",
    body: "94% of patients check reviews before booking. We make sure every surface tells the right story — and respond within hours, not days.",
    items: [
      { icon: Star, title: "Daily review monitoring", desc: "Across Google, Practo, Lybrate, Justdial, Facebook, Healthgrades and 10 more." },
      { icon: Clock, title: "2-hour response SLA", desc: "Trained, empathetic replies written by a medical-communication specialist." },
      { icon: ThumbsUp, title: "Review acquisition engine", desc: "WhatsApp + SMS + QR flows that 5×ed review velocity for partner clinics." },
      { icon: AlertTriangle, title: "Crisis handling playbook", desc: "Battle-tested process for negative reviews, fake complaints & legal escalations." },
      { icon: ShieldCheck, title: "Listings hygiene", desc: "NAP consistency across 40+ directories — a silent SEO booster." },
      { icon: Bell, title: "Monthly reputation report", desc: "What moved, why, and the 30-day plan — readable in five minutes." },
    ],
  },
  {
    kind: "preview",
    eyebrow: "In action",
    title: "Own the search result, not just the review count.",
    body: "When a patient searches your specialty + city, this is what we engineer for you.",
    preview: <SerpPreview />,
    items: [
      { icon: Search, title: "Rich-snippet ready", desc: "Star ratings, review counts, hours & photos show up directly in Google." },
      { icon: ThumbsUp, title: "Volume × velocity", desc: "Not just more reviews — more recent reviews. Recency is 40% of local rank." },
      { icon: ShieldCheck, title: "Authentic and compliant", desc: "Every review is solicited within Google and MCI advertising guidelines." },
    ],
  },
  {
    kind: "pills",
    eyebrow: "Platforms we manage",
    title: "Across every surface patients check before booking.",
    items: [
      "Google Business Profile", "Practo", "Lybrate", "Justdial", "Facebook Pages",
      "Healthgrades", "Zocdoc", "1mg", "Apollo247", "MouthShut", "Sulekha", "AskApollo",
    ],
  },
  {
    kind: "steps",
    eyebrow: "How we work",
    title: "A calm, systematic rhythm — no fire-drills.",
    items: [
      { title: "Audit", desc: "Full teardown of every review, every rating, every listing. Find leaks before fixing them." },
      { title: "Response cadence", desc: "7-day SLA covering 100% of reviews — positive and negative alike." },
      { title: "Review flywheel", desc: "Post-consultation WhatsApp flow that doubles review velocity within 30 days." },
      { title: "Monthly review", desc: "30-minute call with reports, escalations and the plan for the next 30 days." },
    ],
  },
  {
    kind: "compare",
    eyebrow: "The difference",
    title: "Without a system, reputation is a lottery. With us, it compounds.",
    items: {
      without: [
        "Negative reviews sit unanswered for weeks",
        "Patients find inconsistent info across Practo, Justdial and Google",
        "Only your most unhappy patients ever bother to leave reviews",
        "Rating drops, rankings drop — and you only notice when OPD does",
      ],
      with: [
        "Every review answered inside 2 hours, 7 days a week",
        "NAP-consistent listings across 40+ directories",
        "WhatsApp review flywheel — happy patients asked at the right moment",
        "Weekly rating and sentiment tracking, before it hits revenue",
      ],
    },
  },
  {
    kind: "case",
    eyebrow: "Proof of work",
    title: "Short case study — IVF, Jaipur.",
    items: {
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&q=85",
      clinic: "Tier-1 IVF Clinic",
      location: "Jaipur, India",
      headline: "From 3.7 ★ with 84 reviews to 4.9 ★ with 1,240+ — in 9 months.",
      metrics: [
        { value: "4.9★", label: "Google rating" },
        { value: "+1,156", label: "New reviews" },
        { value: "3.1×", label: "Monthly OPD" },
      ],
      body:
        "Started with a fragmented presence across Practo, Lybrate, Google and Justdial. We consolidated listings, deployed a WhatsApp review flow, and trained front-desk on a 2-hour response SLA. Within 9 months the clinic became the top-rated IVF practice in the city — and the organic SEO ride-along doubled inbound leads.",
      quote: "They run our reputation the way we run our OR — disciplined, rehearsed, invisible when it's working.",
      author: "Dr. Rohan Mehta, Founder",
    },
  },
  {
    kind: "kpis",
    eyebrow: "Typical partner results",
    title: "Predictable, compounding reputation lift.",
    items: [
      { value: "+89", label: "Reviews / 30 days" },
      { value: "4.9★", label: "Avg. Google rating" },
      { value: "2h", label: "Response SLA" },
      { value: "100%", label: "Review coverage" },
    ],
  },
  {
    kind: "faq",
    eyebrow: "Good questions",
    title: "Frequently asked.",
    items: [
      { q: "Do you respond to reviews on our behalf?", a: "Yes. Our team drafts every response, routes it through you on the first cycle for tone approval, then handles the rest — within a 2-hour SLA." },
      { q: "Can you remove fake or defamatory reviews?", a: "Where they violate platform policies we file removal requests and track them. For legal matters we can coordinate with your counsel." },
      { q: "How soon will we see results?", a: "Review velocity typically doubles within 30 days. Meaningful rating shifts land inside 60–90 days depending on starting volume." },
      { q: "Does this include Practo / Lybrate profile optimisation?", a: "Yes. We optimise profiles, respond to reviews and manage Q&A across every platform listed." },
    ],
    cta: { label: "Claim your free audit", href: "#audit" },
  },
];

export default function OnlineReputation() {
  return (
    <ServiceDetailLayout
      eyebrow="Online Reputation Management"
      title="Build a 5-star digital presence — on every platform that matters."
      intro="94% of patients check reviews before they book. We run your online reputation across Google, Practo, Lybrate, Justdial, Facebook, Healthgrades and more — with 2-hour responses, a review flywheel that compounds, and a crisis playbook when you need it."
      heroImage={HERO_IMG}
      heroStats={[
        { value: "4.9★", label: "Avg. rating" },
        { value: "2h", label: "Response SLA" },
        { value: "40+", label: "Directories" },
        { value: "100+", label: "Clinics served" },
      ]}
      sections={sections}
    />
  );
}
