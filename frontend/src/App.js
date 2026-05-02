import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import LandingPage from "@/pages/LandingPage";
import OnlineReputation from "@/pages/services/OnlineReputation";
import SocialMedia from "@/pages/services/SocialMedia";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services/online-reputation-management" element={<OnlineReputation />} />
        <Route path="/services/social-media-management" element={<SocialMedia />} />
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}
