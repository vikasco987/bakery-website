"use client";

export default function ClientOffers({ offers }: { offers: any[] }) {
  // We will display a single static banner to match the mockup
  // If needed, dynamic data can be injected here in the future
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div className="bg-gradient-to-r from-[#4A1521] to-[#360F18] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-white/5">
        
        {/* Left Content */}
        <div className="relative z-10 flex-1 mb-10 md:mb-0">
          <div className="inline-block bg-[#E6C875] text-[#4A1521] text-xs font-black px-4 py-1.5 rounded-r-full rounded-tl-full uppercase tracking-widest mb-4">
            Special ✦
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-2">
            CAKE OFFER
          </h2>
          
          <p className="text-xl text-gray-300 font-bold mb-8">
            1 KG CAKE + 500 GM <span className="text-[#E63968]">FREE</span>
          </p>
          
          <div className="inline-flex items-center bg-[#E63968] rounded-full p-1 shadow-lg">
            <span className="bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-full uppercase tracking-wide">
              Now Only
            </span>
            <span className="text-white font-black text-3xl px-6">
              ₹650
            </span>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative z-10 flex-1 flex justify-center mt-8 md:mt-0 md:-ml-12 md:-mr-12 scale-110 md:scale-125">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            {/* The Badge */}
            <div className="absolute -top-4 -right-4 md:-top-10 md:-right-10 w-24 h-24 md:w-28 md:h-28 bg-[#E6C875] rounded-full flex flex-col items-center justify-center text-center shadow-xl rotate-12 z-20 border-4 border-[#4A1521]">
              <span className="text-[#4A1521] font-black text-xs md:text-sm leading-tight uppercase tracking-widest">Limited<br/>Time<br/>Offer</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Special Cake Offer" 
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/10"
            />
          </div>
        </div>

        {/* Right Features */}
        <div className="relative z-10 flex-1 flex flex-col gap-6 mt-16 md:mt-0 pl-0 md:pl-12 border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E6C875]/20 flex items-center justify-center text-[#E6C875] text-xl shrink-0">🍰</div>
            <span className="text-gray-200 font-bold text-lg">Freshly Made</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E6C875]/20 flex items-center justify-center text-[#E6C875] text-xl shrink-0">✨</div>
            <span className="text-gray-200 font-bold text-lg">Premium Quality</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E6C875]/20 flex items-center justify-center text-[#E6C875] text-xl shrink-0">💰</div>
            <span className="text-gray-200 font-bold text-lg">Best Price</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E6C875]/20 flex items-center justify-center text-[#E6C875] text-xl shrink-0">⏱️</div>
            <span className="text-gray-200 font-bold text-lg">On Time Delivery</span>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E63968]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E6C875]/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

    </div>
  );
}
