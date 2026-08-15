export default function Hero() {
  return (
    <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-300/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-pink-100/50 border border-pink-200">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Bakery & Patisserie</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Handcrafted Cakes for <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 relative inline-block">
                Every Occasion
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-300/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/>
                </svg>
              </span>
            </h1>
            
            <p className="mt-4 max-w-xl text-xl text-gray-600 mb-10 mx-auto lg:mx-0">
              Premium ingredients, stunning designs, and a taste that leaves you craving for more. Freshly baked and delivered to your doorstep.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#menu" className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/40 hover:-translate-y-1 transition-all">
                Explore Menu
              </a>
              <a href="#reserve" className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm">
                Book a Table
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative flex justify-center items-center h-[400px] sm:h-[500px]">
            {/* Spinning Plate */}
            <div className="w-[85%] max-w-[420px] aspect-square rounded-full flex items-center justify-center p-3" style={{ background: 'conic-gradient(from 180deg, #FDE68A, #F43F5E, #FBCFE8, #FDE68A)', animation: 'spin 22s linear infinite' }}>
              <div className="w-full h-full rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden" style={{ animation: 'spin-reverse 22s linear infinite' }}>
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delicious Cake" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 right-0 sm:right-4 bg-white px-5 py-3 rounded-full shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce-slow" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="font-bold text-gray-900 text-sm">4.8 Rated</span>
            </div>
            
            <div className="absolute bottom-10 left-0 sm:left-4 bg-gray-900 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2" style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}>
              <span className="text-rose-400 text-xl">🔥</span>
              <span className="font-bold text-sm">100+ Fresh Daily</span>
            </div>
          </div>

        </div>
      </div>

      {/* Zigzag Separator */}
      <div className="absolute bottom-0 left-0 w-full h-8" style={{
        background: `linear-gradient(135deg, white 25%, transparent 25%) -12px 0, linear-gradient(225deg, white 25%, transparent 25%) -12px 0`,
        backgroundSize: '24px 24px',
        backgroundColor: 'transparent'
      }}></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spin-reverse { to { transform: rotate(-360deg); } }
      `}} />
    </div>
  );
}
