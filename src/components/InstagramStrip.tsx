export default function InstagramStrip() {
  const instaImages = [
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <section className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row justify-between items-end gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Follow the sweetness</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">@cravebakery</h2>
        </div>
        <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-colors">
          Follow on Instagram
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        {instaImages.map((src, idx) => (
          <div key={idx} className="w-1/3 sm:w-1/6 aspect-square overflow-hidden group cursor-pointer border-[1px] border-white">
            <img src={src} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
