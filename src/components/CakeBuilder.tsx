"use client";

import { useState, useMemo } from 'react';
import { CAKE_SIZES, CAKE_FLAVORS, CAKE_FILLINGS } from '../config/cakeBuilderOptions';

export default function CakeBuilder() {
  const [selectedSize, setSelectedSize] = useState(CAKE_SIZES[0].id);
  const [selectedFlavor, setSelectedFlavor] = useState(CAKE_FLAVORS[0].id);
  const [selectedFilling, setSelectedFilling] = useState(CAKE_FILLINGS[0].id);

  const sizeObj = CAKE_SIZES.find(s => s.id === selectedSize) || CAKE_SIZES[0];
  const flavorObj = CAKE_FLAVORS.find(f => f.id === selectedFlavor) || CAKE_FLAVORS[0];
  const fillingObj = CAKE_FILLINGS.find(f => f.id === selectedFilling) || CAKE_FILLINGS[0];

  const totalPrice = sizeObj.basePrice + flavorObj.extraPrice + fillingObj.extraPrice;

  const handleCheckout = () => {
    const msg = `Hi, I'd like to order a Custom Cake:\\n- Size: ${sizeObj.label} (${sizeObj.servesText})\\n- Flavor: ${flavorObj.name}\\n- Filling: ${fillingObj.name}\\n\\nEstimated Total: ₹${totalPrice}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="custom-cake" className="py-24 bg-rose-50 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Custom Order</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Build Your <span className="text-pink-600">Dream Cake</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">Select your perfect combination of size, flavor, and fillings. We'll bake it fresh just for you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Configuration Options */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Step 1: Size */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-rose-100/40 border border-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-black">1</span> 
                Choose Size
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {CAKE_SIZES.map(size => (
                  <button 
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                      selectedSize === size.id 
                        ? 'border-rose-500 bg-rose-50 shadow-md transform scale-[1.02]' 
                        : 'border-gray-100 bg-white hover:border-rose-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-extrabold text-lg text-gray-900">{size.label}</div>
                    <div className="text-sm text-gray-500 font-medium mb-2">{size.servesText}</div>
                    <div className="text-rose-600 font-bold">₹{size.basePrice}</div>
                    
                    {selectedSize === size.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs shadow-md">✓</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Flavor */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-rose-100/40 border border-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-black">2</span> 
                Choose Flavor
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {CAKE_FLAVORS.map(flavor => (
                  <button 
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 flex justify-between items-center ${
                      selectedFlavor === flavor.id 
                        ? 'border-rose-500 bg-rose-50 shadow-md transform scale-[1.02]' 
                        : 'border-gray-100 bg-white hover:border-rose-200 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{flavor.name}</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${flavor.isEggless ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-xs text-gray-500 font-semibold">{flavor.isEggless ? 'Eggless' : 'Contains Egg'}</span>
                      </div>
                    </div>
                    {flavor.extraPrice > 0 && (
                      <div className="text-sm font-bold text-rose-500 bg-rose-100 px-2 py-1 rounded-lg">+₹{flavor.extraPrice}</div>
                    )}
                    {selectedFlavor === flavor.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs shadow-md">✓</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Fillings */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-rose-100/40 border border-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-black">3</span> 
                Choose Filling
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CAKE_FILLINGS.map(filling => (
                  <button 
                    key={filling.id}
                    onClick={() => setSelectedFilling(filling.id)}
                    className={`relative p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                      selectedFilling === filling.id 
                        ? 'border-rose-500 bg-rose-50 shadow-md transform scale-[1.02]' 
                        : 'border-gray-100 bg-white hover:border-rose-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-bold text-gray-900 mb-1">{filling.name}</div>
                    {filling.extraPrice > 0 ? (
                      <div className="text-xs font-bold text-rose-500">+₹{filling.extraPrice}</div>
                    ) : (
                      <div className="text-xs font-bold text-gray-400">Included</div>
                    )}
                    {selectedFilling === filling.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs shadow-md">✓</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Side: Order Summary (Sticky) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 bg-gray-900 rounded-[2rem] shadow-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-extrabold mb-6 relative z-10">Your Cake</h3>
              
              {/* Visual Cake Representation */}
              <div className="aspect-[4/3] w-full bg-white/5 rounded-2xl mb-8 flex items-center justify-center border border-white/10 relative z-10 p-4">
                <div className="text-center">
                  <div className="text-6xl mb-2 drop-shadow-lg">🎂</div>
                  <p className="text-gray-300 font-medium text-sm">A beautiful bespoke creation.</p>
                </div>
              </div>

              {/* Summary Items */}
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div>
                    <span className="text-gray-400 text-sm block">Size</span>
                    <span className="font-bold">{sizeObj.label} ({sizeObj.servesText})</span>
                  </div>
                  <span className="font-bold">₹{sizeObj.basePrice}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div>
                    <span className="text-gray-400 text-sm block">Flavor</span>
                    <span className="font-bold">{flavorObj.name}</span>
                  </div>
                  <span className="font-bold">{flavorObj.extraPrice > 0 ? `+₹${flavorObj.extraPrice}` : 'Free'}</span>
                </div>

                <div className="flex justify-between items-center pb-2">
                  <div>
                    <span className="text-gray-400 text-sm block">Filling</span>
                    <span className="font-bold">{fillingObj.name}</span>
                  </div>
                  <span className="font-bold">{fillingObj.extraPrice > 0 ? `+₹${fillingObj.extraPrice}` : 'Free'}</span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-white/10 p-4 rounded-xl mb-8 relative z-10 flex justify-between items-end backdrop-blur-sm">
                <span className="text-gray-300 font-semibold uppercase tracking-wider text-sm">Total</span>
                <span className="text-4xl font-black text-rose-400 drop-shadow-md">₹{totalPrice}</span>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full relative overflow-hidden bg-rose-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-rose-500 transition-colors shadow-lg group z-10"
              >
                Order on WhatsApp
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer"></div>
              </button>
              <p className="text-center text-gray-500 text-xs mt-4 relative z-10">You won't be charged yet. Finalize details on WhatsApp.</p>
            </div>
          </div>

        </div>
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
      `}} />
    </section>
  );
}
