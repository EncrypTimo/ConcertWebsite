import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Content2 from "@/components/content-2";
import LineUp from "@/components/faqs-section-two";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <>
    <HeroSection />
      <LineUp />
      <Content2 />
      <Pricing />
      <CallToAction />
      <Footer />
      <ModeToggle />
      
    </>
    
  );
}
