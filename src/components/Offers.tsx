import { PrismaClient } from '@prisma/client';
import ClientOffers from './ClientOffers';



export default async function Offers() {
  let dbOffers = [];
  try {
    const prisma = new PrismaClient();
    dbOffers = await prisma.offer.findMany({
      where: { isActive: true },
    });
  } catch (error) {
    console.error("Database connection failed, using fallback offers.");
  }

  // If no DB offers, fallback to beautiful placeholder offers
  const offers = dbOffers.length > 0 ? dbOffers : [
    {
      id: "1",
      title: "Weekend Special: 50% Off Bakery Combo",
      price: 299,
      originalPrice: 599,
      tag: "Limited Time"
    },
    {
      id: "2",
      title: "Buy 1 Get 1 Free on all Breads & Starters",
      price: 499,
      originalPrice: 998,
      tag: "Best Seller"
    },
    {
      id: "3",
      title: "Family Celebration Pack - Flat 30% Off",
      price: 999,
      originalPrice: 1499,
      tag: "Family Special"
    }
  ];

  return <ClientOffers offers={offers} />;
}
