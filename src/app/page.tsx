export const dynamic = 'force-dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Menu from "@/components/Menu";
import Offers from "@/components/Offers";
import CakeBuilder from "@/components/CakeBuilder";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import InstagramStrip from "@/components/InstagramStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <AboutUs />
      
      <section id="categories" className="py-24 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Handcrafted <span className="text-pink-600">Perfection</span></h2>
        </div>
        <Menu />
      </section>

      <CakeBuilder />

      <section id="offers" className="py-24 bg-rose-50 overflow-hidden relative">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Special <span className="text-pink-600">Offers</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Grab these limited-time deals before they're gone!</p>
        </div>
        <Offers />
      </section>
      
      <Testimonials />
      <Gallery />
      <Reservation />
      
      <Location />
      <InstagramStrip />
      <Footer />
      
    </main>
  );
}
