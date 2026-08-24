export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#2b1512] via-[#1c0d0b] to-[#120706] min-h-[85vh] flex items-center w-full">
      
      <style>{`
        .float-el {
          position: absolute;
          z-index: 40;
          opacity: 0.85;
          pointer-events: none;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35));
        }
        .float-1 { top: 15%;  left: 5%;   font-size: 34px; animation: float-a 6s ease-in-out infinite; }
        .float-2 { top: 12%;  left: 45%;  font-size: 22px; animation: float-b 5s ease-in-out infinite; }
        .float-3 { top: 85%;  left: 8%;   font-size: 28px; animation: float-c 7s ease-in-out infinite; }
        .float-4 { top: 85%;  left: 48%;  font-size: 20px; animation: float-a 5.5s ease-in-out infinite; }
        .float-5 { top: 8%;   left: 75%;  font-size: 26px; animation: float-b 6.5s ease-in-out infinite; }
        .float-6 { top: 45%;  left: 3%;   font-size: 18px; animation: float-c 4.5s ease-in-out infinite; }
        .float-7 { top: 75%;  left: 45%;  font-size: 24px; animation: float-a 7.5s ease-in-out infinite; }
      
        .sparkle {
          position: absolute;
          z-index: 40;
          border-radius: 50%;
          background: radial-gradient(circle, #ffe9b0 0%, rgba(255,233,176,0) 70%);
          animation: twinkle 3s ease-in-out infinite;
          pointer-events: none;
        }
      
        .sparkle-1 { width: 10px; height: 10px; top: 20%; left: 20%; animation-delay: .3s; }
        .sparkle-2 { width: 14px; height: 14px; top: 60%; left: 5%; animation-delay: 1s; }
        .sparkle-3 { width: 8px;  height: 8px;  top: 88%; left: 35%; animation-delay: 1.6s; }
        .sparkle-4 { width: 12px; height: 12px; top: 15%; left: 60%; animation-delay: .8s; }
      
        @keyframes float-a {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50%      { transform: translate(10px,-18px) rotate(8deg); }
        }
        @keyframes float-b {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50%      { transform: translate(-14px,-12px) rotate(-10deg); }
        }
        @keyframes float-c {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50%      { transform: translate(8px,14px) rotate(6deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.7); }
          50%      { opacity: 1;   transform: scale(1.3); }
        }
        @media (max-width: 900px) {
          .float-el, .sparkle { display: none; }
        }

        /* ===== Shimmer headline ===== */
        .headline-shimmer {
          background: linear-gradient(100deg, #fff 30%, #f6d68a 45%, #fff 60%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      
        /* ===== Trust badge ===== */
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(232,195,119,0.35);
          backdrop-filter: blur(6px);
          padding: 8px 16px;
          border-radius: 50px;
          color: #f5ede3;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 22px;
        }
        .trust-badge .stars { color: #ffcf4d; letter-spacing: 1px; }
      
        /* ===== Entrance animation ===== */
        .animate-rise {
          opacity: 0;
          transform: translateY(24px);
          animation: rise .8s ease forwards;
        }
        .delay-1 { animation-delay: .05s; }
        .delay-2 { animation-delay: .15s; }
        .delay-3 { animation-delay: .25s; }
        .delay-4 { animation-delay: .4s; }
        .delay-5 { animation-delay: .55s; }
        .delay-6 { animation-delay: .7s; }
      
        .animate-fadeScaleIn {
          opacity: 0;
          animation: fadeScaleIn 1.1s ease .3s forwards;
        }
      
        @keyframes rise {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
      
        /* ===== Cake glow halo ===== */
        .cake-halo::before {
          content: "";
          position: absolute;
          inset: 8%;
          background: radial-gradient(circle, rgba(232,195,119,0.35) 0%, rgba(232,195,119,0) 70%);
          z-index: -1;
          filter: blur(30px);
        }
      
        /* ===== Button shine sweep ===== */
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::before {
          content: "";
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          transition: left .6s ease;
        }
        .btn-shine:hover::before { left: 130%; }
      
        /* ===== Scroll indicator ===== */
        .scroll-indicator {
          position: absolute;
          bottom: 26px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #e8c377;
          font-size: 11px;
          letter-spacing: 2px;
          opacity: 0.8;
        }
        .scroll-indicator .arrow {
          width: 18px; height: 18px;
          border-right: 2px solid #e8c377;
          border-bottom: 2px solid #e8c377;
          transform: rotate(45deg);
          animation: bounce-down 1.6s ease-in-out infinite;
        }
        @keyframes bounce-down {
          0%, 100% { transform: rotate(45deg) translate(0,0); opacity: .6; }
          50%      { transform: rotate(45deg) translate(6px,6px); opacity: 1; }
        }
        @media (max-width: 900px) {
          .scroll-indicator { display: none; }
        }
      `}</style>

      {/* Floating decorative elements */}
      <span className="float-el float-1">🍫</span>
      <span className="float-el float-2">♡</span>
      <span className="float-el float-3">🧁</span>
      <span className="float-el float-4">✨</span>
      <span className="float-el float-5">🍩</span>
      <span className="float-el float-6">♡</span>
      <span className="float-el float-7">🍰</span>
      <span className="sparkle sparkle-1"></span>
      <span className="sparkle sparkle-2"></span>
      <span className="sparkle sparkle-3"></span>
      <span className="sparkle sparkle-4"></span>

      {/* Decorative background blur on the left side */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#E63968]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[30%] w-[30%] h-[30%] bg-[#E6C875]/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="relative z-30 text-center lg:text-left lg:col-span-6 pt-10">
            
            <div className="trust-badge animate-rise delay-1">
              <span className="stars">★★★★★</span> 4.9 Rating · 10,000+ Happy Customers
            </div>

            <p className="font-serif italic text-[#e8c377] text-[clamp(20px,2.2vw,28px)] mb-1.5 tracking-[0.5px] animate-rise delay-2">
              Freshly Baked ♡
            </p>
            
            <div className="relative inline-block mb-4 animate-rise delay-3">
              <h1 className="text-[clamp(44px,7vw,84px)] font-[800] tracking-[1px] leading-[1.02] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] whitespace-nowrap headline-shimmer">
                HAPPINESS
              </h1>
              {/* Sparkle effect on HAPPINESS */}
              <div className="absolute -top-1 -right-6 flex gap-1.5 transform rotate-12 scale-75">
                <div className="w-1.5 h-4 bg-[#E63968] rounded-full transform -rotate-45"></div>
                <div className="w-1.5 h-6 bg-[#E63968] rounded-full -mt-2"></div>
                <div className="w-1.5 h-4 bg-[#E63968] rounded-full transform rotate-45"></div>
              </div>
            </div>
            
            <p className="text-[#ecdfd6] text-[clamp(16px,1.6vw,20px)] leading-relaxed mb-10 max-w-[460px] mx-auto lg:mx-0 font-light animate-rise delay-4">
              Delicious Cakes, Pastries, Namkeen <br className="hidden sm:block" /> 
              & more — Made with Love ♡
            </p>

            {/* Features list */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-7 mb-10 animate-rise delay-5">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-[44px] h-[44px] rounded-full border-[1.5px] border-[#cf9e4c] flex items-center justify-center text-[#e8c377] text-[18px] shrink-0 transition-all duration-250 group-hover:-translate-y-[3px] group-hover:shadow-[0_0_14px_rgba(232,195,119,0.5)] bg-[#1D1210]/30 backdrop-blur-sm">
                  🌿
                </div>
                <span className="text-[14px] text-[#f5ede3] uppercase font-semibold leading-snug w-24">100% Fresh<br/>Ingredients</span>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-[44px] h-[44px] rounded-full border-[1.5px] border-[#cf9e4c] flex items-center justify-center text-[#e8c377] text-[18px] shrink-0 transition-all duration-250 group-hover:-translate-y-[3px] group-hover:shadow-[0_0_14px_rgba(232,195,119,0.5)] bg-[#1D1210]/30 backdrop-blur-sm">
                  🚚
                </div>
                <span className="text-[14px] text-[#f5ede3] uppercase font-semibold leading-snug w-24">Same Day<br/>Delivery</span>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-[44px] h-[44px] rounded-full border-[1.5px] border-[#cf9e4c] flex items-center justify-center text-[#e8c377] text-[18px] shrink-0 transition-all duration-250 group-hover:-translate-y-[3px] group-hover:shadow-[0_0_14px_rgba(232,195,119,0.5)] bg-[#1D1210]/30 backdrop-blur-sm">
                  🛡️
                </div>
                <span className="text-[14px] text-[#f5ede3] uppercase font-semibold leading-snug w-24">Hygienic<br/>& Safe</span>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-[44px] h-[44px] rounded-full border-[1.5px] border-[#cf9e4c] flex items-center justify-center text-[#e8c377] text-[18px] shrink-0 transition-all duration-250 group-hover:-translate-y-[3px] group-hover:shadow-[0_0_14px_rgba(232,195,119,0.5)] bg-[#1D1210]/30 backdrop-blur-sm">
                  ♡
                </div>
                <span className="text-[14px] text-[#f5ede3] uppercase font-semibold leading-snug w-24">Made<br/>with Love</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4.5 relative z-20 animate-rise delay-6">
              <a href="#categories" className="btn-shine bg-gradient-to-br from-[#ee5586] to-[#d81b60] text-white px-8 py-4 rounded-full font-bold text-[15px] tracking-[0.5px] shadow-[0_8px_24px_rgba(216,27,96,0.4)] hover:shadow-[0_12px_30px_rgba(216,27,96,0.55)] transition-all duration-200 hover:-translate-y-[3px] flex items-center gap-2.5">
                🎂 Order Now
              </a>
              <a href="https://wa.me/918178708376" target="_blank" rel="noopener noreferrer" className="btn-shine ml-0 sm:ml-4 bg-gradient-to-br from-[#4fd07e] to-[#2fb35f] text-white px-8 py-4 rounded-full font-bold text-[15px] tracking-[0.5px] shadow-[0_8px_24px_rgba(47,179,95,0.4)] hover:shadow-[0_12px_30px_rgba(47,179,95,0.55)] transition-all duration-200 hover:-translate-y-[3px] flex items-center gap-2.5">
                📱 Order on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Visual Content (Cake) */}
          <div className="relative flex justify-center items-center lg:col-span-6 mt-16 lg:mt-0 z-20">
            <div className="w-full relative flex items-center justify-end cake-halo animate-fadeScaleIn">
              <img 
                src="/images/transparent-cake-cropped.png" 
                alt="Delicious Chocolate Cake" 
                className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] transition-transform duration-500 scale-110 md:scale-[1.15] lg:origin-right md:origin-right hover:scale-[1.25]" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <span className="arrow"></span>
      </div>

      {/* Light bottom curve or wave to transition into light section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V120H1200V0C1032,100,568,100,0,0Z" className="fill-[#FDF7F4]"></path>
        </svg>
      </div>
    </div>
  );
}
