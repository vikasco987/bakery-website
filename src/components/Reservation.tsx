export default function Reservation() {
  return (
    <section id="reserve" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-rose-900/10 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side: Info */}
            <div className="bg-rose-900 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Book a Table</h2>
                <p className="text-rose-100 text-lg mb-10 max-w-md">
                  Planning a celebration or a cozy date? Reserve your spot to ensure you don't miss out on the sweetest experience in town.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-800 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-rose-700">📍</div>
                    <div>
                      <b className="block font-bold text-lg">Location</b>
                      <span className="text-rose-200 text-sm">Delhi Dwarka Sec 23 Pochanpur Village, 110077</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-800 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-rose-700">⏰</div>
                    <div>
                      <b className="block font-bold text-lg">Timing</b>
                      <span className="text-rose-200 text-sm">9:00 AM – 10:00 PM, All Days</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-800 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-rose-700">📞</div>
                    <div>
                      <b className="block font-bold text-lg">Phone</b>
                      <span className="text-rose-200 text-sm">+91 81787 08376</span>
                    </div>
                  </div>
                </div>
                
                <a href="https://wa.me/918178708376" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-rose-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-50 hover:-translate-y-1 transition-all shadow-xl w-full sm:w-auto">
                  💬 WhatsApp Booking
                </a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Reserve Online</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input type="text" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-rose-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-rose-500 transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                    <input type="date" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-rose-500 transition-colors text-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
                    <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-rose-500 transition-colors text-gray-700 appearance-none cursor-pointer">
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                  <input type="time" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-rose-500 transition-colors text-gray-700" />
                </div>
                
                <button type="button" className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30 transition-all mt-4">
                  Confirm Booking →
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
