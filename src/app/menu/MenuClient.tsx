"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

type Category = {
  id: string;
  name: string;
  image?: string | null;
};

type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image: string | null;
  isVeg: boolean;
};

export default function MenuClient({ categories, products }: { categories: Category[], products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || "");
  const { addToCart, cart, updateQuantity, setIsCartOpen, totalAmount } = useCart();

  const filteredProducts = products.filter(p => p.categoryId === activeCategory);

  return (
    <div>
      {/* Category Grid with Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 border-2 bg-white shadow-sm ${
                isActive
                  ? "border-[#e0356b] shadow-md transform -translate-y-1"
                  : "border-transparent hover:border-[#f7c9d8] hover:shadow-md"
              }`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 border-2 border-gray-100 relative">
                {cat.image ? (
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" sizes="(max-width: 768px) 64px, 80px" />
                ) : (
                  <div className="w-full h-full bg-pink-100 flex items-center justify-center text-xl">🎂</div>
                )}
              </div>
              <span className={`text-sm font-bold text-center ${isActive ? "text-[#e0356b]" : "text-gray-700"}`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const cartItem = cart.find(i => i.id === product.id);
          return (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 group hover:border-[#e0356b]/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-sm">
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {product.isVeg && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded shadow p-1 border border-green-200">
                    <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                  
                  {cartItem ? (
                    <div className="flex items-center space-x-3 bg-pink-50 rounded-full px-2 py-1 border border-pink-200">
                      <button onClick={() => updateQuantity(product.id, cartItem.quantity - 1)} className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-[#e0356b] font-bold shadow-sm hover:bg-gray-50">-</button>
                      <span className="text-[#e0356b] font-bold text-sm w-4 text-center">{cartItem.quantity}</span>
                      <button onClick={() => updateQuantity(product.id, cartItem.quantity + 1)} className="w-7 h-7 flex items-center justify-center bg-[#e0356b] rounded-full text-white font-bold shadow-sm hover:bg-[#c22055]">+</button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image || undefined })}
                      className="px-5 py-2 bg-[#e0356b] hover:bg-[#c22055] text-white rounded-full font-bold text-sm transition-colors shadow-md shadow-pink-500/20"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating View Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40 px-4 pointer-events-none">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-[#1b1b2e] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-4 hover:bg-black transition-all transform hover:scale-105 pointer-events-auto w-full max-w-sm justify-between border border-gray-700"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#e0356b] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </div>
              <span className="font-bold">View Cart</span>
            </div>
            <div className="font-black text-[#E6C875] text-lg">
              ₹{totalAmount}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
