import HeroSection from "./components/herosection";
import FeatureSection from "./components/features";
import TestimonialSection from "./components/testimonials";
import FAQSection from "./components/faq-section";

export default async function Home() {
  return (
    <main>
      <HeroSection/>
      <FeatureSection/>
      <TestimonialSection/>
      <FAQSection/>
    </main>
  );
}
