"use client";

import { useState, useMemo, useEffect } from 'react';
import MenuItem from './MenuItem';

export default function InteractiveMenu({ initialCategories }: { initialCategories: any[] }) {
export default function InteractiveMenu({ initialCategories }: { initialCategories: any[] }) {
  const [view, setView] = useState<'categories' | 'products'>('categories');
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

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    if (activeFilters.has('Veg')) result = result.filter(p => p.isVeg);
    if (activeFilters.has('Non-Veg')) result = result.filter(p => !p.isVeg);
    if (activeFilters.has('Eggless')) result = result.filter(p => p.isEggless);
    if (activeFilters.has('Bestseller')) result = result.filter(p => p.isBestseller);

    return result;
  }, [allProducts, activeCategory, searchQuery, activeFilters]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(filter)) {
        newFilters.delete(filter);
      } else {
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
      if (quantity <= 0) delete newCart[productId];
      else newCart[productId] = quantity;
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
    window.open(`https://wa.me/918178708376?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const getCategoryIcon = (name: string) => {
    if (name.toLowerCase().includes('birthday')) return '🎂';
    if (name.toLowerCase().includes('chocolate')) return '🍫';
    if (name.toLowerCase().includes('fruit')) return '🍓';
    if (name.toLowerCase().includes('custom')) return '🎨';
    if (name.toLowerCase().includes('pastr')) return '🧁';
    if (name.toLowerCase().includes('donut') || name.toLowerCase().includes('dry')) return '🍩';
    return '🍰';
  };

  if (view === 'categories' && searchQuery.trim() === '') {
    return (
      <div className="pb-16 -mt-24">
        {/* We use a negative margin top to pull it into the section padding if needed, but standard is fine */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {initialCategories.map(cat => (
            <div 
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.name);
                setView('products');
              }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative mb-6">
                <img src={cat.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl border border-gray-100 z-10">
                  {getCategoryIcon(cat.name)}
                </div>
              </div>
              <div className="text-center pb-2 flex-grow flex flex-col justify-between">
                <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-tight px-1 leading-tight">{cat.name}</h3>
                <span className="text-[#E63968] text-xs font-bold block mt-auto">Order Now →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 -mt-4">
      {/* Top Bar: Search & Filters */}
      <div className="sticky top-20 z-40 bg-[#FDF7F4]/95 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 flex flex-col md:flex-row gap-4">
        
        {view === 'products' && searchQuery.trim() === '' && (
          <button 
            onClick={() => setView('categories')}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-50 shrink-0 shadow-sm"
          >
            ← Back
          </button>
        )}
        
        {/* Search */}
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Search for cakes, pastries..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63968] transition-shadow text-gray-900 shadow-sm"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">✕</button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x shrink-0 items-center">
          {['Veg', 'Non-Veg', 'Eggless', 'Bestseller'].map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`shrink-0 snap-start px-4 py-2 rounded-xl border text-sm font-bold transition-all shadow-sm ${
                activeFilters.has(filter) 
                  ? 'bg-[#E63968] text-white border-[#E63968]' 
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
        <div className="flex overflow-x-auto gap-3 mb-8 pb-2 scrollbar-hide snap-x">
          {initialCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`shrink-0 snap-start px-5 py-2.5 rounded-full font-bold text-sm transition-colors border shadow-sm ${
                activeCategory === cat.name 
                  ? 'bg-[#E63968] text-white border-[#E63968]' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.name} <span className={`text-xs ml-1 ${activeCategory === cat.name ? 'text-white/80' : 'text-gray-400'}`}>({cat.products.length})</span>
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
        <div className="text-center py-24 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
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
          <div className="bg-[#1D1210] text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-6 max-w-md w-full pointer-events-auto border border-gray-800 hover:-translate-y-1 transition-transform">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Your Order</p>
              <p className="font-extrabold text-lg leading-none">{totalItems} {totalItems === 1 ? 'item' : 'items'} | ₹{totalPrice}</p>
            </div>
            <button 
              onClick={handleCheckout}
              className="bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-green-500/20 flex items-center gap-2"
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
            
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
              {quickViewProduct.badge && (
                <div className="absolute top-4 left-4 bg-[#E6C875] text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                  {quickViewProduct.badge}
                </div>
              )}
            </div>
            
            <div className="md:w-1/2 p-8 flex flex-col overflow-y-auto">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${quickViewProduct.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                {quickViewProduct.isEggless && <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">Eggless</span>}
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 mb-2">{quickViewProduct.name}</h2>
              <p className="text-[#E63968] font-black text-2xl mb-6">₹{quickViewProduct.price}</p>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{quickViewProduct.description}</p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                <span className="text-gray-500 font-bold text-xs bg-gray-100 px-3 py-1.5 rounded-lg uppercase tracking-wider">{quickViewProduct.weight}</span>
                
                <div className="h-12 shrink-0">
                  {cart[quickViewProduct.id] ? (
                    <div className="flex items-center bg-[#FDF7F4] border border-[#E63968]/20 rounded-xl h-full shadow-sm overflow-hidden">
                      <button 
                        onClick={() => handleUpdateQuantity(quickViewProduct.id, cart[quickViewProduct.id] - 1)}
                        className="w-12 h-full flex items-center justify-center text-[#E63968] hover:bg-[#E63968]/10 font-bold text-xl transition-colors"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-bold text-gray-900 text-lg">{cart[quickViewProduct.id]}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(quickViewProduct.id, cart[quickViewProduct.id] + 1)}
                        className="w-12 h-full flex items-center justify-center text-[#E63968] hover:bg-[#E63968]/10 font-bold text-xl transition-colors"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleUpdateQuantity(quickViewProduct.id, 1)}
                      className="h-full bg-[#1D1210] hover:bg-black text-[#E6C875] px-8 rounded-xl font-bold transition-colors shadow-lg"
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
