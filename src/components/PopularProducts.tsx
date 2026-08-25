export default function PopularProducts() {
  const products = [
    {
      id: "truffle",
      name: "Chocolate Truffle Cake",
      description: "Rich chocolate layers with creamy frosting",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blackforest",
      name: "Black Forest Classic",
      description: "Cherry compote with fresh whipped cream",
      price: "₹449",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "redvelvet",
      name: "Red Velvet Delight",
      description: "Cream cheese frosting on velvety sponge",
      price: "₹549",
      image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pineapple",
      name: "Fresh Pineapple",
      description: "Light vanilla sponge with juicy pineapple",
      price: "₹399",
      image: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="cakes" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] bg-pink-100/50 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Popular <span className="text-[#E63968]">Cakes</span>
            </h2>
            <div className="w-24 h-1 bg-[#E63968] rounded-full opacity-50 mb-6"></div>
            <p className="text-gray-600 max-w-xl text-lg">
              Freshly baked every morning with premium ingredients. Our signature cakes are perfect for every celebration.
            </p>
          </div>
          <a href="https://wa.me/918178708376?text=Hello%20BnB%20Bakery,%20I%20want%20to%20see%20your%20full%20cake%20menu." target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex border-2 border-[#E63968] text-[#E63968] hover:bg-[#E63968] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors items-center gap-2">
            VIEW ALL CAKES <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 group hover:border-[#E63968]/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-sm">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 right-4 bg-white text-[#E63968] px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {product.price} <span className="text-[10px] uppercase text-gray-500">onwards</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                
                <a 
                  href={`https://wa.me/918178708376?text=Hello%20BnB%20Bakery,%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-[#FDF7F4] text-[#E63968] border border-[#E63968]/20 py-3 rounded-xl font-bold text-sm tracking-wide text-center hover:bg-[#E63968] hover:text-white transition-colors"
                >
                  ORDER NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://wa.me/918178708376?text=Hello%20BnB%20Bakery,%20I%20want%20to%20see%20your%20full%20cake%20menu." target="_blank" rel="noopener noreferrer" className="inline-flex border-2 border-[#E63968] text-[#E63968] hover:bg-[#E63968] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors items-center gap-2">
            VIEW ALL CAKES <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
