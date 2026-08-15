export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1556217698-eb0b8a3f8510?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Bakery Kitchen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Info Box */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[240px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">
                  👨‍🍳
                </div>
                <div>
                  <p className="font-bold text-gray-900">Chef Rahul</p>
                  <p className="text-xs text-gray-500">Head Pastry Chef</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">"Baking with love and butter since the very beginning."</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-1 bg-yellow-400 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              A Passion for <span className="text-pink-600">Sweetness</span> Since 2018
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-10">
              <p>
                What started as a small home kitchen has blossomed into the city's most beloved patisserie. We believe that every celebration deserves a centerpiece that looks as stunning as it tastes.
              </p>
              <p>
                Our recipes are crafted from scratch daily, using only the finest organic ingredients, real butter, and absolutely zero shortcuts. 
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <b className="block text-4xl font-black text-gray-900 mb-1">6+</b>
                <span className="text-sm text-gray-500 font-medium">Years Baking</span>
              </div>
              <div>
                <b className="block text-4xl font-black text-gray-900 mb-1">50+</b>
                <span className="text-sm text-gray-500 font-medium">Unique Flavors</span>
              </div>
              <div>
                <b className="block text-4xl font-black text-gray-900 mb-1">15k+</b>
                <span className="text-sm text-gray-500 font-medium">Happy Clients</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
