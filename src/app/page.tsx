export const dynamic = 'force-dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import Menu from "@/components/Menu";
import Offers from "@/components/Offers";
import CakeBuilder from "@/components/CakeBuilder";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import InstagramStrip from "@/components/InstagramStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <ReviewsSection />
      
      <section id="categories" className="py-24 bg-[#FDF7F4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10 gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2 w-full">
                <span className="text-xl text-[#E63968]">Our Special 🎂</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">CAKE COLLECTION</h2>
              <div className="flex justify-center md:justify-start mt-4">
                <span className="w-12 h-1 bg-[#E63968] rounded-full"></span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href="#categories" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-full font-bold text-sm hover:border-[#E63968] hover:text-[#E63968] transition-colors">
                VIEW ALL CAKES <span>→</span>
              </a>
            </div>
          </div>
          <Menu />
        </div>
      </section>

      <CakeBuilder />

      <section id="offers" className="py-12 bg-[#FDF7F4] relative">
        <Offers />
      </section>
      
      <Gallery />
      <Reservation />
      
      <Location />
      <InstagramStrip />
      <Footer />
      
    </main>
  );
}
