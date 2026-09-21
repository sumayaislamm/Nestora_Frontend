import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CtaSection } from "@/components/home/cta-section";
import { getCategories } from "../service/categoryService";
import { getProperties } from "../service/propertyService";

export default async function Home() {
  const { properties } = await getProperties({
    page: 1,
    limit: 4,
    sortBy: "createdAt",
    sortOrder: "desc",
  });
  const categories = await getCategories();
  return (
    <main>
      <HeroSection />
      <FeaturedProperties properties={properties} />
      <FeaturedCategories categories={categories} />
      <WhyChooseUs />
      <CtaSection />
    </main>
  );
}
