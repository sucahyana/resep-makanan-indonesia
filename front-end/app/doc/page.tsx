import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
export const metadata = {
  title: "Dokumentasi",
  description: "Halaman dokumentasi resep makanan",
};

export default function DocumentationPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-12">
      <Hero />
            <BusinessCategories />
            <FeaturesPlanet />
            <LargeTestimonial />
            <Cta />
      </main>
    </>
  );
}
