import HeroSection from "@/components/home/hero-section";
import TechStack from "@/components/home/tech-stack";
import AboutPreview from "@/components/home/about-preview";
import ContactSection from "@/components/home/contact-section";
import Wrapper from "@/components/layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <TechStack />
      <AboutPreview />
      <ContactSection />
    </Wrapper>
  );
}