import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)" }} data-testid="landing-root">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <Services />
        <Process />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <LeadMagnet />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
