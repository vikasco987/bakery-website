import { PrismaClient } from '@prisma/client';
import MenuClient from './MenuClient';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function MenuPage() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen pt-28 pb-16 relative" style={{ backgroundColor: '#fdf3ec', backgroundImage: 'radial-gradient(#e7c9b6 1px, transparent 1px)', backgroundSize: '26px 26px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="font-serif italic text-[#e0356b] text-xl md:text-2xl mb-2">Our Special 🎂</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1b1b2e] mb-4 uppercase tracking-wide">Our Menu</h1>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">Discover our wide variety of freshly baked goods made with love and premium ingredients.</p>
        </div>
        
        <MenuClient categories={categories} products={products} />
      </div>
    </main>
  );
}
