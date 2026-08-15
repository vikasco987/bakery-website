import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const categoryCount = await prisma.category.count();
  const productCount = await prisma.product.count();
  const activeOffers = await prisma.offer.count({ where: { isActive: true } });
  const pendingOrders = await prisma.order.count({ where: { status: 'Pending' } });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Total Categories</span>
          <span className="text-4xl font-bold text-slate-800 mt-2">{categoryCount}</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Total Products</span>
          <span className="text-4xl font-bold text-blue-600 mt-2">{productCount}</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Active Offers</span>
          <span className="text-4xl font-bold text-green-500 mt-2">{activeOffers}</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Pending Orders</span>
          <span className="text-4xl font-bold text-orange-500 mt-2">{pendingOrders}</span>
        </div>

      </div>
    </div>
  );
}
