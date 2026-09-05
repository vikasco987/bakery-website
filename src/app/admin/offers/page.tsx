import { PrismaClient } from '@prisma/client';
import OffersClient from './OffersClient';

export const dynamic = 'force-dynamic';
const prisma = new PrismaClient();

export default async function OffersPage() {
  const offers = await prisma.offer.findMany({
    orderBy: { startDate: 'desc' }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Active Offers</h1>
      <OffersClient initialOffers={JSON.parse(JSON.stringify(offers))} />
    </div>
  );
}
