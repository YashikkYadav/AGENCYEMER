import { useState } from "react";
import { ArrowRight, Clock, Shield, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function LeadMagnet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return toast.error("Please fill in all fields.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email.");
    if (phone.replace(/\D/g, "").length < 10) return toast.error("Please enter a valid phone number.");
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setName(""); setEmail(""); setPhone("");
      toast.success("Got it! We'll reach out within 24 hours.");
    }, 700);
  };

  return (
    <section id="audit" data-testid="lead-magnet" className="py-20 lg:py-28 bg-[var(--paper-2)]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--ink)] text-white p-8 lg:p-14">
          {/* Soft radial accent */}
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(14,110,79,0.28) 0%, transparent 60%)" }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--sage)] bg-[var(--sage)]/12 border border-[var(--sage)]/25 rounded-full px-3 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)] pulse-dot" />
                Now booking · Q1 2026
              </div>
              <h2
                data-testid="lead-headline"
                className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.02em] font-light"
              >
                Book your free<br />
                <span className="serif italic-soft text-[var(--sage)]">clinic growth audit</span>.<br />
                Worth ₹5,000.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-white/70 max-w-md">
                45 minutes. We'll tear down your Google presence, paid funnels, website and
                reviews — and send you a written action plan. Yours, free.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  { Icon: Clock, t: "45-minute working session" },
                  { Icon: Sparkles, t: "Personalised 90-day action plan" },
                  { Icon: Shield, t: "Zero obligation · 100% confidential" },
                ].map((f) => (
                  <li key={f.t} className="flex items-center gap-3 text-[14.5px] text-white/85">
                    <span className="h-8 w-8 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
                      <f.Icon size={15} className="text-[var(--sage)]" strokeWidth={2} />
                    </span>
                    {f.t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={submit}
                data-testid="lead-form"
                className="bg-white rounded-2xl p-6 lg:p-7 text-[var(--ink)] border border-white/10"
              >
                <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--muted)] mb-5">
                  Claim your audit
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="block text-[12.5px] font-medium text-[var(--ink-soft)] mb-1.5">Full name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Rohan Mehta"
                      data-testid="lead-name"
                      className="w-full h-12 px-4 rounded-xl bg-[var(--paper-2)] border border-[var(--line)] text-[14.5px] outline-none focus:border-[var(--sage)] focus:bg-white transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-[12.5px] font-medium text-[var(--ink-soft)] mb-1.5">Email address</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@clinic.in"
                      data-testid="lead-email"
                      className="w-full h-12 px-4 rounded-xl bg-[var(--paper-2)] border border-[var(--line)] text-[14.5px] outline-none focus:border-[var(--sage)] focus:bg-white transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-[12.5px] font-medium text-[var(--ink-soft)] mb-1.5">Phone (WhatsApp)</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98XXX XXX XX"
                      data-testid="lead-phone"
                      className="w-full h-12 px-4 rounded-xl bg-[var(--paper-2)] border border-[var(--line)] text-[14.5px] outline-none focus:border-[var(--sage)] focus:bg-white transition-colors"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={busy}
                  data-testid="lead-submit"
                  className="btn-sage mt-6 w-full h-12 text-[14px] disabled:opacity-60"
                >
                  {busy ? "Submitting…" : "Claim free audit"}
                  {!busy && <ArrowRight size={15} />}
                </button>
                <p className="mt-4 text-[11.5px] text-[var(--muted)] text-center">
                  We reply within 24 hours · No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
