"use client";

import { useState, useEffect } from 'react';

export default function ClientOffers({ offers }: { offers: any[] }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 8 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const icons = ['🥐', '🎂', '🍱'];
  const claims = [82, 95, 68];
  const orders = [210, 450, 180];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Mobile Horizontal Snap Container */}
      <div className="flex md:grid md:grid-cols-3 gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
        {offers.map((offer, idx) => {
          const originalPrice = offer.originalPrice || Math.floor(offer.price * 1.5);
          const tag = offer.tag || "Special Deal";
          const isHero = idx === 1;
          
          return (
            <div key={offer.id} className={`shrink-0 w-[85vw] md:w-auto snap-center rounded-3xl p-8 shadow-xl relative overflow-hidden group transition-all duration-300 flex flex-col ${
              isHero 
                ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-rose-500/40 md:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/50 z-10' 
                : 'bg-white shadow-rose-100/40 border border-rose-50 hover:-translate-y-2 hover:shadow-2xl'
            }`}>
              
              {/* Blurred Decorative Blob */}
              <div className={`absolute -left-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-60 ${isHero ? 'bg-white/20' : 'bg-rose-200/50'}`}></div>
              
              {/* Diagonal Ribbon Badge */}
              <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 z-20 pointer-events-none">
                <div className={`absolute top-6 -right-8 w-40 transform rotate-45 text-center py-1 text-[10px] font-black uppercase tracking-widest shadow-md ${
                  isHero ? 'bg-yellow-400 text-gray-900' : 'bg-rose-500 text-white'
                }`}>
                  <div className="flex items-center justify-center gap-1">
                    {isHero && <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>}
                    {tag}
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="text-4xl mb-4 drop-shadow-sm">{icons[idx % 3]}</div>
                
                <h3 className={`text-2xl font-extrabold mb-4 leading-tight ${isHero ? 'text-white' : 'text-gray-900'}`}>
                  {offer.title}
                </h3>
                
                {/* Timer */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 text-sm font-bold border ${isHero ? 'bg-black/10 border-white/20 text-white' : 'bg-rose-50 border-rose-100 text-rose-600'}`}>
                  <span>⏱️ Ends in</span>
                  <span className="font-mono">{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                
                <div className="flex items-end gap-3 mb-6">
                  <span className={`text-4xl font-black ${isHero ? 'text-white' : 'text-rose-600'}`}>
                    ₹{offer.price}
                  </span>
                  <span className={`text-lg font-medium line-through pb-1 ${isHero ? 'text-pink-200' : 'text-gray-400'}`}>
                    ₹{originalPrice}
                  </span>
                </div>

                {/* Claim Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className={isHero ? 'text-pink-100' : 'text-gray-500'}>Claimed</span>
                    <span className={isHero ? 'text-white' : 'text-rose-600'}>{claims[idx % 3]}%</span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${isHero ? 'bg-black/20' : 'bg-gray-100'}`}>
                    <div className={`h-full rounded-full transition-all duration-1000 ${isHero ? 'bg-yellow-400' : 'bg-gradient-to-r from-pink-500 to-rose-500'}`} style={{ width: `${claims[idx % 3]}%` }}></div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href="https://wa.me/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`relative block w-full text-center py-4 rounded-xl font-bold transition-all shadow-md overflow-hidden shine-button ${
                      isHero 
                        ? 'bg-white text-rose-600 hover:bg-gray-50' 
                        : 'bg-gray-900 text-white hover:bg-rose-600'
                    }`}
                  >
                    Grab Offer
                    {/* Shimmer Effect overlay */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer"></div>
                  </a>
                  
                  {/* Social Proof */}
                  <p className={`text-center text-xs font-semibold mt-4 ${isHero ? 'text-pink-100' : 'text-gray-500'}`}>
                    🔥 {orders[idx % 3]}+ ordered this week
                  </p>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(350%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
