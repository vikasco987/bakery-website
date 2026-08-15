export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Fresh baked bread", classes: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Macarons", classes: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Croissants", classes: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Cake slice", classes: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Cupcakes", classes: "col-span-1 row-span-1" }
  ];

  return (
    <section id="gallery" className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Vibe Check</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Premium <span className="text-pink-600">Ambiance</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Step into a world of warmth, fresh aromas, and elegant corners designed for your perfect aesthetic moments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[200px]">
          {/* Main feature image - 2x2 */}
          <div className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 relative overflow-hidden rounded-[2rem] group border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300">
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
          
          {/* 4 smaller images */}
          {images.slice(1).map((img, idx) => (
            <div key={idx} className="col-span-1 row-span-1 relative overflow-hidden rounded-[2rem] group border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
