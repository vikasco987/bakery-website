export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-[#FDF7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Why Choose Us */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase mb-6 flex items-center gap-2">
              WHY CHOOSE <br/>BnB Bakery? <span className="text-[#E63968]">♡</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed text-sm mb-6 font-medium">
                  At BnB Bakery, we don't just bake cakes, we bake happiness! 
                  From birthday celebrations to small cravings, we make every moment 
                  special with our fresh & delicious cakes and bakery products.
                </p>
                <a href="#about" className="inline-flex items-center gap-2 border border-[#E63968] text-[#E63968] bg-[#E63968]/5 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#E63968] hover:text-white transition-colors uppercase tracking-wider">
                  KNOW MORE ABOUT US <span>→</span>
                </a>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-2">
                <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Bakery interior" className="w-full h-full object-cover rounded-xl col-span-2 shadow-sm" style={{ aspectRatio: '2/1' }}/>
                <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Fresh cakes" className="w-full aspect-square object-cover rounded-xl shadow-sm" />
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Pastries" className="w-full aspect-square object-cover rounded-xl shadow-sm" />
              </div>
            </div>
          </div>

          {/* Right Side: Reviews */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase mb-6 flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left">
              OUR HAPPY CUSTOMERS <span className="text-[#E63968]">♡</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { name: "Neha Sharma", text: "Best cake ever! So fresh and delicious. Everyone loved it." },
                { name: "Rohit Verma", text: "Amazing taste and beautiful designs. Highly recommended!" },
                { name: "Priya Singh", text: "On-time delivery and excellent service." }
              ].map((review, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                  <p className="text-gray-700 text-xs leading-relaxed italic mb-4 flex-grow">
                    "{review.text}"
                  </p>
                  <p className="text-gray-900 font-bold text-xs mt-auto">
                    - {review.name}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-6">
              <a href="#" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 bg-white px-6 py-2.5 rounded-full font-bold text-xs hover:border-[#E63968] hover:text-[#E63968] transition-colors uppercase tracking-wider shadow-sm">
                VIEW MORE REVIEWS ON GOOGLE <span>→</span>
              </a>
              
              <div className="flex items-center gap-3">
                <span className="font-bold text-2xl text-gray-900">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 text-lg">
                    <span className="text-gray-900 font-black">4.9</span>
                    <span>★★★★★</span>
                  </div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider text-right">
                    (120+ Reviews)
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
