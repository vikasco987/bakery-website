"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1D1210] border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center py-2">
            <Link href="/" className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <div className="relative">
                  {/* Chef hat on top of B */}
                  <span className="absolute -top-5 left-0 text-xl rotate-[-15deg] opacity-90">🧑‍🍳</span>
                  <span className="text-[2.8rem] font-serif font-bold text-[#E6C875] tracking-tighter leading-none">
                    B<span className="text-[1.8rem] mx-0.5">n</span>B
                  </span>
                </div>
                {/* Cake icon next to BnB */}
                <span className="text-3xl ml-2">🎂</span>
              </div>
              {/* Bakery text with lines */}
              <div className="flex items-center gap-2 w-full mt-[-6px]">
                <div className="flex-1 h-[1px] bg-[#E6C875]/60"></div>
                <span className="font-serif italic text-white text-[1.65rem] leading-none" style={{ fontFamily: 'Georgia, serif' }}>Bakery</span>
                <div className="flex-1 h-[1px] bg-[#E6C875]/60"></div>
              </div>
              {/* Subtitle */}
              <span className="text-[#E6C875] text-[0.55rem] uppercase tracking-[0.18em] font-semibold mt-1">Bala Ji Namkeen & Bakery</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link href="/" className="text-[#E6C875] font-medium transition-colors text-sm border-b-2 border-[#E6C875] pb-1">HOME</Link>
            <Link href="#menu" className="text-gray-300 hover:text-white font-medium transition-colors text-sm">MENU</Link>
            <Link href="#cakes" className="text-gray-300 hover:text-white font-medium transition-colors text-sm">CAKES</Link>
            <Link href="#about" className="text-gray-300 hover:text-white font-medium transition-colors text-sm">ABOUT US</Link>
            <Link href="#gallery" className="text-gray-300 hover:text-white font-medium transition-colors text-sm">GALLERY</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors text-sm">CONTACT</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>📞</span>
              <span>+91 81787 08376</span>
            </div>
            <a href="https://wa.me/918178708376?text=Hello%20BnB%20Bakery,%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:bg-[#20b858] transition-all flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-[#1D1210] border-t border-white/10 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-[#E6C875]">HOME</Link>
            <Link href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">MENU</Link>
            <Link href="#cakes" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">CAKES</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">ABOUT US</Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">GALLERY</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">CONTACT</Link>
            <a href="https://wa.me/918178708376" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-[#E63968] text-white px-6 py-3 rounded-full font-bold shadow-lg">
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
