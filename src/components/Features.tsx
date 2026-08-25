export default function Features() {
  const features = [
    {
      title: "100% Fresh",
      description: "Baked daily with premium, handpicked ingredients. We never compromise on quality or taste.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 2.5c-4.5 0-8.5 2.5-10.5 6.5-2 4-1.5 8.5 1.5 11.5s7.5 3.5 11.5 1.5c4-2 6.5-6 6.5-10.5 0-5-4-9-9-9zm-6 13.5c-2.5-2.5-2.5-6 0-8.5s6-2.5 8.5 0-6 8.5-8.5 8.5z"/></svg>
      )
    },
    {
      title: "Same Day Delivery",
      description: "Forgot a birthday? We've got you covered with our lightning-fast same-day delivery service.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 14H6V9h12v11z"/></svg>
      )
    },
    {
      title: "Hygienic & Safe",
      description: "Prepared in a state-of-the-art facility maintaining the highest standards of cleanliness and safety.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6.5-3.25L12 3.5l6.5 2.75L12 9.5zm0 3.5l-8-4v4.5l8 4 8-4v-4.5l-8 4z"/></svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FDF7F4] border-y border-rose-100/50 relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E63968]/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Why Choose <span className="text-[#E63968]">BnB Bakery?</span>
          </h2>
          <div className="w-24 h-1 bg-[#E63968] mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group bg-white rounded-3xl p-8 border border-rose-50 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-rose-50 flex items-center justify-center text-[#E63968] mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
