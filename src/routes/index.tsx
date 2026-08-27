import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { Products } from "@/components/home/Products";
import { Differences } from "@/components/home/Differences";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonial } from "@/components/home/Testimonial";
import { Categories } from "@/components/home/Categories";
import { Newsletter } from "@/components/home/Newsletter";

function HomePage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <Differences />
        <BeforeAfter />
        <Testimonial />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

const title = 'Lumina Beauty — Luxury Natural Skincare & Clean Beauty';
const description = 'Cruelty-free, dermatologist-tested botanical formulas for radiant skin in 14 days. Shop luxury natural skincare from Lumina Beauty.';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
