import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CtaSection } from "@/components/home/cta-section";
import { getCategories } from "../service/categoryService";

export default async function Home() {
  const categories = await getCategories();
  return (
    <main>
      <HeroSection />
      <FeaturedProperties />
      <FeaturedCategories categories={categories} />
      <WhyChooseUs />
      <CtaSection />
    </main>
  );
}
