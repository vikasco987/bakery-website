export const dynamic = 'force-dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Offer from "@/components/Offer";
import PopularProducts from "@/components/PopularProducts";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import InstagramStrip from "@/components/InstagramStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#110908] scroll-smooth">
      <Navbar />
      <Hero />
      <Categories />
      <Offer />
      <PopularProducts />
      <Features />
      <Testimonials />
      <Gallery />
      <Contact />
      <InstagramStrip />
      <Footer />
    </main>
  );
}
