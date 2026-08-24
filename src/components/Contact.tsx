export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FDF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Visit <span className="text-[#E63968]">Us</span>
            </h2>
            <div className="w-24 h-1 bg-[#E63968] rounded-full opacity-50 mb-8"></div>
            
            <p className="text-gray-600 text-lg mb-12">
              We'd love to see you in person! Drop by our bakery in Nadiad for fresh treats, or order directly via WhatsApp for quick delivery.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E63968] flex-shrink-0 border border-gray-200 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Alzaa Food Corner<br />
                    Main Market Road, Nadiad<br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E63968] flex-shrink-0 border border-gray-200 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Sunday<br />
                    9:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E63968] flex-shrink-0 border border-gray-200 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Call or WhatsApp</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    +91 81787 08376
                  </p>
                  <a href="https://wa.me/918178708376?text=Hello%20Alzaa%20Food%20Corner,%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#20b858] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(37,211,102,0.4)] items-center gap-3">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    ORDER ON WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full rounded-3xl overflow-hidden border-8 border-white shadow-xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117765.26425983842!2d72.7820619717772!3d22.689626490659972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b3644f77c8f%3A0xeab50d75c2eafdf8!2sNadiad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714498394464!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
