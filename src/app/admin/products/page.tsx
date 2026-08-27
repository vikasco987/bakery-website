import { PrismaClient } from '@prisma/client';
import InventoryClient from './InventoryClient';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function ProductsPage() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Products & Categories</h1>
      <InventoryClient 
        initialCategories={JSON.parse(JSON.stringify(categories))}
        initialProducts={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
}
