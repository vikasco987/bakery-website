export default function Location() {
  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] rounded-3xl border-4 border-white shadow-xl overflow-hidden relative bg-gray-200 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-20"></div>
            <div className="text-6xl animate-bounce relative z-10 drop-shadow-md">📍</div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-center text-sm font-bold text-gray-700">
              Map View Not Loaded
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Find Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Visit Our Bakery</h2>
            
            <ul className="space-y-8 mb-10">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <b className="block font-bold text-gray-900 text-lg">Address</b>
                  <span className="text-gray-600">Delhi Dwarka Sec 23 Pochanpur Village, 110077</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-xl shrink-0">⏰</div>
                <div>
                  <b className="block font-bold text-gray-900 text-lg">Open Hours</b>
                  <span className="text-gray-600">Mon–Sun, 9:00 AM – 10:00 PM</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-xl shrink-0">🚗</div>
                <div>
                  <b className="block font-bold text-gray-900 text-lg">Parking</b>
                  <span className="text-gray-600">Valet parking available</span>
                </div>
              </li>
            </ul>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-600 transition-colors shadow-lg">
              🧭 Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
