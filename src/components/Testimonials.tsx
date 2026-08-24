export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review: "Absolutely the best Black Forest cake I've ever had. The delivery was right on time for my son's birthday. Highly recommended!",
      rating: 5,
      date: "August 2026"
    },
    {
      name: "Priya Patel",
      review: "We ordered the custom Truffle cake for our anniversary. The design was exactly what we asked for, and it tasted heavenly.",
      rating: 5,
      date: "July 2026"
    },
    {
      name: "Amit Desai",
      review: "Their fresh pastries and namkeen are a regular evening snack for us now. Always fresh, always crispy, and amazing quality.",
      rating: 5,
      date: "August 2026"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Customer <span className="text-[#E63968]">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-[#E63968] mx-auto rounded-full opacity-50 mb-6"></div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-[#E6C875] text-2xl">★</span>
            <span className="text-[#E6C875] text-2xl">★</span>
            <span className="text-[#E6C875] text-2xl">★</span>
            <span className="text-[#E6C875] text-2xl">★</span>
            <span className="text-[#E6C875] text-2xl">★</span>
            <span className="text-gray-700 ml-2 font-bold">4.9/5 from 500+ happy customers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#FDF7F4] p-8 rounded-2xl border border-rose-50 shadow-sm relative">
              <div className="text-6xl text-[#E63968] absolute top-4 left-6 opacity-20 font-serif">"</div>
              
              <div className="relative z-10">
                <div className="flex text-[#E6C875] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                
                <div className="flex justify-between items-end border-t border-rose-100 pt-4">
                  <div>
                    <h4 className="text-gray-900 font-bold">{review.name}</h4>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
