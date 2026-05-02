import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone) {
      toast.error("Please enter both email and phone.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      setPhone("");
      toast.success("Got it! Our team will reach out within 24 hours.");
    }, 700);
  };

  return (
    <section
      id="audit"
      data-testid="lead-magnet-section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F15A29" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 mb-4">
          Limited Audit Slots
        </span>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          data-testid="lead-magnet-headline"
        >
          Get Your Free Clinic Growth Audit — Worth ₹5,000
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          We'll audit your Google presence, website, and ads — and show you exactly where you're losing patients.
        </p>

        <form
          onSubmit={onSubmit}
          data-testid="lead-magnet-form"
          className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl p-3 sm:p-3 flex flex-col sm:flex-row gap-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
        >
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="lead-magnet-email"
            className="flex-1 px-4 py-3 rounded-xl text-sm bg-transparent outline-none focus:ring-2 focus:ring-[#F15A29]/30"
            style={{ color: "#2F3A3D" }}
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            data-testid="lead-magnet-phone"
            className="flex-1 px-4 py-3 rounded-xl text-sm bg-transparent outline-none focus:ring-2 focus:ring-[#F15A29]/30 sm:border-l"
            style={{ color: "#2F3A3D", borderColor: "#E5E7EB" }}
          />
          <button
            type="submit"
            disabled={submitting}
            data-testid="lead-magnet-submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:-translate-y-0.5 disabled:opacity-70"
            style={{ backgroundColor: "#2F3A3D" }}
          >
            {submitting ? "Sending..." : "Claim Free Audit"}
            {!submitting && <ArrowRight size={15} />}
          </button>
        </form>

        <p className="mt-5 text-xs text-white/80">
          No spam. We respect your privacy. Only growth insights — straight to your inbox.
        </p>
      </div>
    </section>
  );
}
