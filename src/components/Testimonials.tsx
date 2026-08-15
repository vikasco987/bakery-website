export default function Testimonials() {
  const reviews = [
    {
      name: "Rohit Sharma",
      type: "Regular Customer",
      avatar: "https://i.pravatar.cc/150?u=rohit",
      text: "The customized Truffle Cake was the highlight of our party! Extremely soft, perfectly sweet, and visually stunning. Highly recommend this bakery."
    },
    {
      name: "Priya Malhotra",
      type: "Google Review",
      avatar: "https://i.pravatar.cc/150?u=priya",
      text: "Packaging was beautiful and delivery was right on time. The macarons taste exactly like the ones I had in Paris. Will definitely order again!"
    },
    {
      name: "Aman Verma",
      type: "Zomato Review",
      avatar: "https://i.pravatar.cc/150?u=aman",
      text: "Hosted my daughter's birthday here. The staff was incredibly cooperative, and the pastries were loved by everyone. A true gem in the city!"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-rose-400">Customer Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800 transition-colors duration-300">
              <div className="text-yellow-400 text-lg mb-4 tracking-[0.2em]">★★★★★</div>
              <p className="text-gray-300 leading-relaxed mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-rose-500 object-cover" />
                <div>
                  <b className="block font-bold text-white font-serif">{review.name}</b>
                  <span className="text-xs text-gray-400">{review.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
