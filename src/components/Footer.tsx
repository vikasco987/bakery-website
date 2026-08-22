export default function Footer() {
  return (
    <footer className="bg-[#1D1210] text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          
          {/* VISIT OUR STORE */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">VISIT OUR STORE</h4>
            <div className="flex items-start gap-3 mb-6">
              <span className="text-[#E63968] text-lg">📍</span>
              <p className="text-sm leading-relaxed font-medium">
                <span className="text-white block font-bold mb-1">BnB Bakery</span>
                Bala Ji Namkeen & Bakery<br/>
                Delhi Dwarka Sec 23<br/>
                Pochanpur Village, 110077
              </p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E63968] text-white px-5 py-2 rounded-full font-bold text-[10px] hover:bg-[#d62b5a] transition-colors uppercase tracking-wider">
              🗺️ DIRECTIONS
            </a>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">CONTACT US</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="text-[#25D366] text-lg">💬</span> <a href="https://wa.me/918178708376">+91 81787 08376</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="text-blue-400 text-lg">📞</span> <a href="tel:+918178708376">+91 81787 08376</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="text-gray-300 text-lg">✉️</span> <a href="mailto:bnbbakery@gmail.com">bnbbakery@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E6C875] text-lg">🕒</span> 8:00 AM - 10:00 PM (All Days)
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">FOLLOW US</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-500 text-white flex items-center justify-center text-sm shadow-md">IG</span>
                <a href="#">@bnb.bakery</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow-md">FB</span>
                <a href="#">BnB Bakery</a>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full font-bold text-[10px] hover:bg-[#E63968] transition-colors uppercase tracking-wider mt-6 border border-white/10">
              👍 FOLLOW US
            </a>
          </div>

          {/* PAYMENT METHODS */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">PAYMENT METHODS</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white px-3 py-1.5 rounded text-[10px] font-black text-gray-900 border border-gray-200">UPI</div>
              <div className="bg-white px-3 py-1.5 rounded text-[10px] font-black text-blue-600 border border-gray-200">Paytm</div>
              <div className="bg-white px-3 py-1.5 rounded text-[10px] font-black text-gray-900 border border-gray-200"><span className="text-blue-500">G</span><span className="text-red-500">Pay</span></div>
              <div className="bg-[#5f259f] px-3 py-1.5 rounded text-[10px] font-black text-white border border-transparent">PhonePe</div>
              <div className="bg-black px-3 py-1.5 rounded text-[10px] font-black text-white border border-gray-800 flex items-center gap-1"><span></span>Pay</div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] font-bold uppercase tracking-wider text-gray-600">
          <p>© 2026 BnB Bakery (Bala Ji Namkeen & Bakery). All Rights Reserved.</p>
          <div className="flex gap-1 mt-4 md:mt-0 items-center">
            Designed with <span className="text-[#E63968] text-sm">♥</span> for our customers
          </div>
        </div>
      </div>
    </footer>
  );
}
