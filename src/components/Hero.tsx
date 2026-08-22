export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#1D1210]">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#E63968]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-[#E6C875]/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:col-span-7 pt-10">
            
            <p className="font-serif italic text-3xl md:text-4xl text-[#E6C875] mb-2">
              Freshly Baked ♡
            </p>
            
            <h1 className="text-6xl sm:text-7xl md:text-[6rem] font-black text-white tracking-tight mb-4 leading-none">
              HAPPINESS<span className="text-[#E63968] ml-2 animate-pulse">!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
              Delicious Cakes, Pastries, Namkeen <br className="hidden sm:block" /> 
              & more <span className="opacity-50">—</span> Made with Love ♡
            </p>

            {/* Features list */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 mb-12">
              <div className="flex items-center gap-2">
                <span className="text-[#E6C875] text-xl">🍃</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold w-20 leading-tight">100% Pure<br/>Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E6C875] text-xl">🛵</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold w-20 leading-tight">Same Day<br/>Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E6C875] text-xl">✨</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold w-20 leading-tight">Hygienic<br/>& Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E6C875] text-xl">💝</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold w-20 leading-tight">Made<br/>with Love</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#categories" className="bg-[#E63968] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#d62b5a] hover:scale-105 transition-all shadow-lg flex items-center gap-3">
                🎂 ORDER NOW
              </a>
              <a href="https://wa.me/918178708376" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#20b858] hover:scale-105 transition-all shadow-lg flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                ORDER ON WHATSAPP
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative flex justify-center items-center lg:col-span-5 mt-10 lg:mt-0">
            <div className="w-full max-w-md aspect-[4/3] sm:aspect-square relative flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious Chocolate Cake" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl shadow-black/50 border border-white/5" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Light bottom curve or wave to transition into light section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V120H1200V0C1032,100,568,100,0,0Z" className="fill-[#FDF7F4]"></path>
        </svg>
      </div>
      
    </div>
  );
}
