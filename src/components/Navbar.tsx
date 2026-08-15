"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
              Crave<span className="text-gray-800">Bakery</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#categories" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Categories</Link>
            <Link href="#offers" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Offers</Link>
            <Link href="#gallery" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Gallery</Link>
            <Link href="#reviews" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Reviews</Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all transform duration-200">
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-600 focus:outline-none"
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
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link href="#categories" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-rose-50">Categories</Link>
            <Link href="#offers" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-rose-50">Offers</Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-rose-50">Gallery</Link>
            <Link href="#reviews" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-rose-50">Reviews</Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
