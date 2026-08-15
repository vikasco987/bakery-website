export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
          
          <div className="lg:pr-8">
            <a href="#" className="text-3xl font-black tracking-tighter mb-6 block">
              <span className="text-rose-500">Crave</span>Bakery
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium ingredients, stunning designs, and a taste that leaves you craving for more. Freshly baked every single day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors">📷</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors">📘</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors">🐦</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reserve" className="hover:text-white transition-colors">Reservation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a></li>
              <li><a href="mailto:hello@cravebakery.in" className="hover:text-white transition-colors">hello@cravebakery.in</a></li>
              <li>Shop 12, Bakery Lane, New Delhi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-gray-800 border-none rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-rose-500 outline-none text-white placeholder-gray-500" />
              <button type="submit" className="bg-rose-600 text-white px-4 rounded-xl font-bold hover:bg-rose-500 transition-colors">→</button>
            </form>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-500">
          <p>© 2026 CraveBakery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
