import { PrismaClient } from '@prisma/client';
import AdminOrdersClient from './AdminOrdersClient';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Customer Orders</h1>
      <AdminOrdersClient initialOrders={JSON.parse(JSON.stringify(orders))} />
    </div>
  );
}
