import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/sections/CaseStudies";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F5" }} data-testid="landing-page-root">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}
