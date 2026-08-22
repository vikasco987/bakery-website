export default function MenuItem({ product, quantity, onAdd, onUpdateQuantity, onQuickView }: any) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col relative h-full">
      {/* Image Container with Quick View */}
      <div 
        className="block relative h-56 overflow-hidden cursor-pointer" 
        onClick={() => onQuickView(product)}
      >
        <img 
          src={product.image || "https://via.placeholder.com/400x300"} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        
        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">Quick View</span>
        </div>

        {/* Veg/Non-veg Indicator */}
        <div className="absolute top-4 left-4 bg-white p-1.5 rounded shadow-sm border border-gray-100">
          <div className={`w-3 h-3 rounded-full ${product.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
        </div>
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-4 right-4 bg-[#E6C875] text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
            {product.badge}
          </div>
        )}
        {product.isBestseller && !product.badge && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
            Bestseller 🔥
          </div>
        )}
      </div>
      
      {/* Body */}
      <div className="p-5 flex flex-col flex-grow relative">
        <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent dashed-line" style={{ backgroundImage: 'linear-gradient(90deg, #e5e7eb 50%, transparent 50%)', backgroundSize: '12px 2px' }}></div>
        
        <div className="pt-2 flex justify-between items-start gap-2 mb-1">
          <h3 
            className="text-xl font-bold text-gray-900 leading-tight cursor-pointer hover:text-[#E63968] transition-colors"
            onClick={() => onQuickView(product)}
          >
            {product.name}
          </h3>
          <span className="font-black text-[#E63968] text-lg shrink-0">₹{product.price}</span>
        </div>
        
        <p className="text-gray-500 line-clamp-2 text-sm flex-grow leading-relaxed mb-4">{product.description}</p>
        
        {/* Action Area */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.isEggless && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-md">Eggless</span>
            )}
            <span className="text-gray-500 font-bold text-xs bg-gray-100 px-2 py-1 rounded-md uppercase">{product.weight}</span>
          </div>

          {/* Stepper / Add Button */}
          <div className="shrink-0 h-10">
            {quantity > 0 ? (
              <div className="flex items-center bg-[#FDF7F4] border border-[#E63968]/20 rounded-xl h-full shadow-sm overflow-hidden">
                <button 
                  onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                  className="w-10 h-full flex items-center justify-center text-[#E63968] hover:bg-[#E63968]/10 font-bold text-lg transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-gray-900">{quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-[#E63968] hover:bg-[#E63968]/10 font-bold text-lg transition-colors"
                >
                  +
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onAdd(product)}
                className="h-full bg-gray-100 hover:bg-[#E63968] hover:text-white text-gray-900 px-6 rounded-xl font-bold transition-all shadow-sm active:scale-95 border border-gray-200"
              >
                ADD <span className="text-lg leading-none relative top-[-1px] ml-1">+</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
