import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { ChefSpecial } from "@/components/site/ChefSpecial";
import { Gallery } from "@/components/site/Gallery";
import { Events } from "@/components/site/Events";
import { Reserve } from "@/components/site/Reserve";
import { OrderOnline } from "@/components/site/OrderOnline";
import { Testimonials } from "@/components/site/Testimonials";
import { Loyalty } from "@/components/site/Loyalty";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { CartFab, CartDrawer } from "@/components/site/Cart";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spice Garden — Authentic Indian Fine Dining · Bengaluru" },
      { name: "description", content: "Spice Garden is Bengaluru's premier Indian fine-dining destination. Reserve a table, explore our chef-crafted menu, or order online." },
      { property: "og:title", content: "Spice Garden — Authentic Indian Fine Dining" },
      { property: "og:description", content: "Handcrafted Indian cuisine, royal ambience, and unforgettable hospitality in Indiranagar, Bengaluru." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Menu />
        <ChefSpecial />
        <Gallery />
        <Events />
        <Reserve />
        <OrderOnline />
        <Testimonials />
        <Loyalty />
      </main>
      <Footer />
      <CartFab />
      <CartDrawer />
      <Newsletter />
      <FloatingButtons />
    </div>
  );
}
