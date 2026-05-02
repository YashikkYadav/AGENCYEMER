import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustLogos from "@/components/sections/TrustLogos";
import ValueProps from "@/components/sections/ValueProps";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="landing-root">
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <ValueProps />
        <Services />
        <Process />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LeadMagnet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
