import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProperties />
      <FeaturedCategories />
      <WhyChooseUs />
      <CtaSection />
    </main>
  );
}
