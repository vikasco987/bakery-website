import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  weight: string;
  image: string | null;
}

interface SimilarProductsProps {
  products: Product[];
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">You Might Also Like</h2>
        <Link href="/" className="text-pink-600 font-semibold hover:text-pink-700">View All →</Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((sim) => (
          <Link href={`/product/${sim.id}`} key={sim.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-pink-100/50 overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-100 block flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={sim.image || "https://via.placeholder.com/300x200"} alt={sim.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                <span className="font-extrabold text-gray-900 text-sm">₹{sim.price}</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-pink-600 transition-colors mb-1">{sim.name}</h3>
              <p className="text-gray-500 text-sm mt-auto font-medium">{sim.weight}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
