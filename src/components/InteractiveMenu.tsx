"use client";

import { useState, useMemo, useEffect } from 'react';
import MenuItem from './MenuItem';

export default function InteractiveMenu({ initialCategories }: { initialCategories: any[] }) {
  const [activeCategory, setActiveCategory] = useState(initialCategories[0]?.name || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<{ [productId: string]: number }>({});
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);

  // Flatten all products for search/filter
  const allProducts = useMemo(() => {
    return initialCategories.flatMap(c => c.products.map((p: any) => ({ ...p, categoryName: c.name })));
  }, [initialCategories]);

  // Derived state: Filtered items
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Filter by Category (only if no search term)
    if (searchQuery.trim() === '') {
      result = result.filter(p => p.categoryName === activeCategory);
    }

    // Filter by Search Term
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    // Filter by Chips
    if (activeFilters.has('Veg')) {
      result = result.filter(p => p.isVeg);
    }
    if (activeFilters.has('Non-Veg')) {
      result = result.filter(p => !p.isVeg);
    }
    if (activeFilters.has('Eggless')) {
      result = result.filter(p => p.isEggless);
    }
    if (activeFilters.has('Bestseller')) {
      result = result.filter(p => p.isBestseller);
    }

    return result;
  }, [allProducts, activeCategory, searchQuery, activeFilters]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(filter)) {
        newFilters.delete(filter);
      } else {
        // mutually exclusive veg/non-veg
        if (filter === 'Veg') newFilters.delete('Non-Veg');
        if (filter === 'Non-Veg') newFilters.delete('Veg');
        newFilters.add(filter);
      }
      return newFilters;
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (quantity <= 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = quantity;
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const p = allProducts.find((p: any) => p.id === id);
    return total + ((p?.price || 0) * qty);
  }, 0);

  const handleCheckout = () => {
    let msg = "Hi, I'd like to order:\\n";
    Object.entries(cart).forEach(([id, qty]) => {
      const p = allProducts.find((p: any) => p.id === id);
      if (p) msg += `- ${qty}x ${p.name} (₹${p.price})\\n`;
    });
    msg += `\\nTotal: ₹${totalPrice}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      
      {/* Top Bar: Search & Filters (Sticky on mobile) */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md pt-4 pb-4 border-b border-gray-100 shadow-sm mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        
        {/* Search */}
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search for cakes, pastries..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-shadow text-gray-900"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              ✕
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {['Veg', 'Non-Veg', 'Eggless', 'Bestseller'].map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`shrink-0 snap-start px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                activeFilters.has(filter) 
                  ? 'bg-rose-600 text-white border-rose-600' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {filter === 'Veg' && '🟢 '}
              {filter === 'Non-Veg' && '🔴 '}
              {filter === 'Bestseller' && '🔥 '}
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs (Only show if not searching) */}
      {searchQuery.trim() === '' && (
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide snap-x">
          {initialCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`shrink-0 snap-start text-lg font-extrabold pb-2 border-b-4 transition-colors px-1 ${
                activeCategory === cat.name 
                  ? 'border-rose-500 text-gray-900' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat.name} <span className="text-xs font-normal text-gray-400 ml-1">({cat.products.length})</span>
            </button>
          ))}
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product: any) => (
            <MenuItem 
              key={product.id} 
              product={product} 
              quantity={cart[product.id] || 0}
              onAdd={(p: any) => handleUpdateQuantity(p.id, 1)}
              onUpdateQuantity={handleUpdateQuantity}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
          <div className="text-5xl mb-4">🍩</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Nothing found here</h3>
          <p className="text-gray-500">Try changing your search or removing some filters.</p>
          {(searchQuery || activeFilters.size > 0) && (
            <button 
              onClick={() => { setSearchQuery(''); setActiveFilters(new Set()); }}
              className="mt-6 bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
          <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-6 max-w-md w-full pointer-events-auto border border-gray-700 hover:-translate-y-1 transition-transform">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Your Order</p>
              <p className="font-extrabold text-lg leading-none">{totalItems} {totalItems === 1 ? 'item' : 'items'} | ₹{totalPrice}</p>
            </div>
            <button 
              onClick={handleCheckout}
              className="bg-green-500 hover:bg-green-400 text-gray-900 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-green-500/20 flex items-center gap-2"
            >
              <span className="text-xl">💬</span> Checkout
            </button>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)}></div>
          
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl overflow-hidden relative z-10 flex flex-col md:flex-row transform transition-all max-h-[90vh]">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
            
            {/* Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
              {quickViewProduct.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {quickViewProduct.badge}
                </div>
              )}
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2 p-8 flex flex-col overflow-y-auto">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${quickViewProduct.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                {quickViewProduct.isEggless && <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">Eggless</span>}
              </div>
              
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{quickViewProduct.name}</h2>
              <p className="text-rose-600 font-extrabold text-2xl mb-6">₹{quickViewProduct.price}</p>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">{quickViewProduct.description}</p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                <span className="text-gray-500 font-medium text-sm bg-gray-100 px-3 py-1.5 rounded-lg">{quickViewProduct.weight}</span>
                
                <div className="h-12 shrink-0">
                  {cart[quickViewProduct.id] ? (
                    <div className="flex items-center bg-rose-50 border border-rose-200 rounded-xl h-full shadow-sm overflow-hidden">
                      <button 
                        onClick={() => handleUpdateQuantity(quickViewProduct.id, cart[quickViewProduct.id] - 1)}
                        className="w-12 h-full flex items-center justify-center text-rose-600 hover:bg-rose-100 font-bold text-xl transition-colors"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-bold text-gray-900 text-lg">{cart[quickViewProduct.id]}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(quickViewProduct.id, cart[quickViewProduct.id] + 1)}
                        className="w-12 h-full flex items-center justify-center text-rose-600 hover:bg-rose-100 font-bold text-xl transition-colors"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleUpdateQuantity(quickViewProduct.id, 1)}
                      className="h-full bg-rose-600 hover:bg-rose-700 text-white px-8 rounded-xl font-bold transition-colors shadow-lg shadow-rose-500/30"
                    >
                      ADD ITEM
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
