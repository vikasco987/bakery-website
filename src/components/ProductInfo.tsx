interface ProductInfoProps {
  product: {
    name: string;
    description: string;
    price: number;
    weight: string;
    category: { name: string };
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col justify-center">
      <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 font-bold tracking-wider uppercase text-xs rounded-full w-max mb-4">
        {product.category.name}
      </span>
      
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        {product.name}
      </h1>
      
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-4xl font-extrabold text-pink-600">₹{product.price.toLocaleString('en-IN')}</span>
        <span className="text-gray-400 text-lg line-through">₹{Math.floor(product.price * 1.2).toLocaleString('en-IN')}</span>
        <span className="text-green-500 font-bold text-sm ml-2 bg-green-50 px-2 py-1 rounded-md">20% OFF</span>
      </div>
      
      <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
        <p>{product.description}</p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 mb-10 flex items-center justify-between border border-gray-100">
        <div>
          <h4 className="font-bold text-gray-900 mb-1">Portion / Weight</h4>
          <p className="text-gray-500 text-sm">Perfect for sharing</p>
        </div>
        <div className="bg-white px-6 py-2 rounded-xl shadow-sm border border-gray-100 font-bold text-lg text-gray-800">
          {product.weight}
        </div>
      </div>

      <div className="mt-auto">
        <a 
          href={`https://wa.me/1234567890?text=I want to order: ${product.name} (₹${product.price})`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-3 w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
