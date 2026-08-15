"use client";

import { useState } from 'react';

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Image Container - STRICT height control so it never gets too large */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-sm bg-white border border-gray-100 flex items-center justify-center p-2">
        <img 
          src={activeImg || "https://via.placeholder.com/600x400"} 
          alt="Product" 
          className="w-full h-full object-contain rounded-2xl transition-all duration-300"
        />
      </div>
      
      {/* Thumbnails - Only show if there is more than 1 unique image */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <div 
              key={`thumb-${idx}-${img}`} 
              onClick={() => setActiveImg(img)}
              className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all shadow-sm ${
                activeImg === img ? 'border-pink-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img || "https://via.placeholder.com/150"} alt={`Thumbnail`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
