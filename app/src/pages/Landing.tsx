import LandingNav from "@/sections/landing/LandingNav";
import HeroSection from "@/sections/landing/HeroSection";
import HowItWorks from "@/sections/landing/HowItWorks";
import Benefits from "@/sections/landing/Benefits";
import Testimonials from "@/sections/landing/Testimonials";
import FaqSection from "@/sections/landing/FaqSection";
import CtaBanner from "@/sections/landing/CtaBanner";
import LandingFooter from "@/sections/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FaqSection />
        <CtaBanner />
      </main>
      <LandingFooter />
    </div>
  );
}
