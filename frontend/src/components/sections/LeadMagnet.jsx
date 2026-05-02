import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export default function LeadMagnet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Please fill out name, email and phone.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("That email doesn't look right.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setName("");
      setEmail("");
      setPhone("");
      toast.success("Application received. We'll be in touch within 24 hours.");
    }, 700);
  };

  return (
    <section
      id="audit"
      data-testid="lead-magnet"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Decorative big serif word */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-10 lg:-top-20 text-center serif font-light leading-none tracking-[-0.04em] pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem, 24vw, 22rem)",
          color: "rgba(217,243,108,0.06)",
        }}
      >
        Apply.
      </div>

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--acid)] pulse-dot" />
              Now booking 4 partners for Q1 ’26
            </div>
            <h2
              data-testid="lead-headline"
              className="serif text-[clamp(2.25rem,6vw,5.6rem)] leading-[0.96] tracking-[-0.03em] text-[var(--cream)] font-light"
            >
              Apply for a <span className="italic-soft text-[var(--acid)]">free</span>
              <br />
              clinic growth audit.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-[var(--cream)]/65 max-w-md">
              Forty-five minutes. We tear down your Google presence, paid funnels, website
              and reputation — line by line. Worth ₹5,000. Yours, free, if we're a fit.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          data-testid="lead-form"
          className="rounded-3xl border border-[rgba(242,237,227,0.12)] bg-[var(--ink-2)] p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
        >
          <label className="md:col-span-4 flex flex-col gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
              [01] Your name
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. ___________"
              data-testid="lead-name"
              className="bg-transparent border-b border-[rgba(242,237,227,0.18)] py-2 text-[var(--cream)] serif text-2xl tracking-tight outline-none focus:border-[var(--acid)] transition-colors"
            />
          </label>
          <label className="md:col-span-4 flex flex-col gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
              [02] Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@clinic.in"
              data-testid="lead-email"
              className="bg-transparent border-b border-[rgba(242,237,227,0.18)] py-2 text-[var(--cream)] serif text-2xl tracking-tight outline-none focus:border-[var(--acid)] transition-colors"
            />
          </label>
          <label className="md:col-span-4 flex flex-col gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)]">
              [03] Phone (WhatsApp)
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 ___________"
              data-testid="lead-phone"
              className="bg-transparent border-b border-[rgba(242,237,227,0.18)] py-2 text-[var(--cream)] serif text-2xl tracking-tight outline-none focus:border-[var(--acid)] transition-colors"
            />
          </label>

          <div className="md:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-2">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-on-dark)] max-w-md">
              We reply within 24 hours · We only take on clinics we believe we can move ·
              Confidential
            </p>
            <button
              type="submit"
              disabled={busy}
              data-testid="lead-submit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: "var(--acid)", color: "var(--ink)" }}
            >
              {busy ? "Submitting…" : "Submit application"}
              {!busy && <ArrowUpRight size={16} />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
