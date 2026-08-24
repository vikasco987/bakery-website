import React from 'react';

export default function Offer() {
  return (
    <section className="w-full bg-[#fdf3ec] px-4 sm:px-6 lg:px-8 py-10 pb-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-r from-[#7a2240] via-[#5e1730] to-[#2c0c15] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl gap-10 md:gap-4">
          
          {/* Decorative Confetti Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <span className="absolute top-10 left-[20%] w-1.5 h-6 bg-yellow-400 rotate-45 rounded"></span>
            <span className="absolute bottom-12 left-[12%] w-2 h-2 bg-white rounded-full"></span>
            <span className="absolute top-1/2 left-[42%] w-2.5 h-2.5 bg-yellow-400 rotate-12"></span>
            <span className="absolute bottom-16 right-[35%] w-1.5 h-7 bg-yellow-400 -rotate-45 rounded"></span>
            <span className="absolute top-16 right-[45%] w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>

          {/* Left Content */}
          <div className="relative z-10 text-white flex-1 w-full flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#ffd447] text-lg font-light tracking-tighter">≫</span>
              <span className="bg-[#ffd447] text-[#5e1730] px-3 py-1 font-extrabold text-sm rounded uppercase tracking-wider shadow-sm">
                Special
              </span>
              <span className="text-[#ffd447] text-lg font-light tracking-tighter">≪</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight drop-shadow-md">
              CAKE OFFER
            </h2>
            
            <p className="text-lg md:text-xl font-bold mb-6 text-gray-200 tracking-wide uppercase">
              1 KG CAKE + 500 GM FREE
            </p>
            
            <button className="bg-[#c23464] hover:bg-[#a12851] transition-transform hover:-translate-y-1 active:translate-y-0 text-white rounded-[14px] flex items-center px-6 py-3 font-bold shadow-[0_8px_20px_rgba(194,52,100,0.4)] group">
              <div className="flex flex-col text-left leading-tight mr-2.5 text-[10px] md:text-xs uppercase opacity-90 font-black tracking-wider">
                <span>Now</span>
                <span>Only</span>
              </div>
              <span className="text-3xl md:text-4xl tracking-tight">₹650</span>
            </button>
          </div>

          {/* Center Image */}
          <div className="relative z-10 flex-1 flex justify-center items-center w-full h-[220px] md:h-[300px]">
            {/* Soft glow behind cake */}
            <div className="absolute inset-0 bg-[#c23464]/20 blur-[50px] rounded-full z-0"></div>
            
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden flex items-center justify-center mix-blend-lighten md:mix-blend-normal z-10">
              <img 
                src="/images/cake_burgundy_solid.png" 
                alt="Special Cake" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            
            {/* Jagged Badge */}
            <div className="absolute -right-2 md:-right-6 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-24 h-24 md:w-[110px] md:h-[110px] flex items-center justify-center transition-transform hover:scale-105 hover:rotate-3 cursor-default">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#ffd447] drop-shadow-xl" fill="currentColor">
                <polygon points="50,0 55,10 66,7 68,18 79,19 77,29 86,34 81,43 89,50 81,57 86,66 77,71 79,81 68,82 66,93 55,90 50,100 45,90 34,93 32,82 21,81 23,71 14,66 19,57 11,50 19,43 14,34 23,29 21,19 32,18 34,7 45,10" />
              </svg>
              <div className="relative z-10 text-center font-black text-[#5e1730] text-[11px] md:text-[13px] leading-[1.1] px-2">
                LIMITED<br/>TIME<br/>OFFER
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10 flex-1 flex justify-center md:justify-end w-full">
            <div className="bg-[#1b0a0e]/90 backdrop-blur-sm border border-white/5 rounded-[20px] p-6 md:p-8 flex flex-col gap-5 w-full max-w-[320px] shadow-2xl">
              
              <div className="flex items-center gap-4 text-[#e0cfc5] font-semibold tracking-wide text-[15px]">
                <svg className="w-[22px] h-[22px] text-[#ffd447]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                Freshly Made
              </div>

              <div className="flex items-center gap-4 text-[#e0cfc5] font-semibold tracking-wide text-[15px]">
                <svg className="w-[22px] h-[22px] text-[#ffd447]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Premium Quality
              </div>

              <div className="flex items-center gap-4 text-[#e0cfc5] font-semibold tracking-wide text-[15px]">
                <svg className="w-[22px] h-[22px] text-[#ffd447]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Best Price
              </div>

              <div className="flex items-center gap-4 text-[#e0cfc5] font-semibold tracking-wide text-[15px]">
                <svg className="w-[22px] h-[22px] text-[#ffd447]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                On Time Delivery
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
