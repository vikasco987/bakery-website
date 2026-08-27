export const dynamic = 'force-dynamic';

import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import SettingsCard from './SettingsCard';

export default async function AdminDashboard() {
  const prisma = new PrismaClient();
  
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const totalRevenue = orders
    .filter(o => o.status !== 'CANCELLED')
    .reduce((sum, order) => sum + order.totalAmount, 0);

  const pendingCount = orders.filter(o => o.status === 'PENDING').length;
  const deliveredCount = orders.filter(o => o.status === 'DELIVERED').length;
  const confirmedCount = orders.filter(o => o.status === 'CONFIRMED').length;
  const cancelledCount = orders.filter(o => o.status === 'CANCELLED').length;
  
  const whatsappCount = orders.filter(o => o.orderType === 'WHATSAPP').length;
  const websiteCount = orders.filter(o => o.orderType === 'WEBSITE').length;

  const recentOrders = orders.slice(0, 5);

  let settings = await prisma.storeSettings.findFirst();
  if (!settings) settings = await prisma.storeSettings.create({ data: {} });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Sales Dashboard</h1>
        <div className="text-sm text-gray-500">All-time Overview</div>
      </div>
      
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col border-l-4 border-l-green-500">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Total Revenue</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">₹{totalRevenue.toLocaleString()}</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col border-l-4 border-l-yellow-500">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Pending Orders</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">{pendingCount}</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col border-l-4 border-l-blue-500">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Completed Orders</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">{deliveredCount}</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col border-l-4 border-l-pink-500">
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Platform Split</span>
          <div className="flex gap-4 mt-2">
            <div>
              <span className="text-xs text-gray-500">Web</span>
              <div className="text-xl font-bold text-slate-800">{websiteCount}</div>
            </div>
            <div>
              <span className="text-xs text-gray-500">WhatsApp</span>
              <div className="text-xl font-bold text-slate-800">{whatsappCount}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Status Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:col-span-1">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Order Status Report</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pending</span>
              <span className="font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">{pendingCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Confirmed</span>
              <span className="font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{confirmedCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivered</span>
              <span className="font-bold bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{deliveredCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cancelled</span>
              <span className="font-bold bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">{cancelledCount}</span>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
            <Link href="/admin/orders" className="text-[#e0356b] text-sm font-semibold hover:underline">View All →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-sm">
                  <th className="p-3">Order</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-500">No recent orders.</td>
                  </tr>
                ) : recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-bold text-gray-700">#{order.orderNumber}</td>
                    <td className="p-3">
                      <div>{order.customerName}</div>
                      <div className="text-xs text-gray-500">{order.orderType}</div>
                    </td>
                    <td className="p-3 font-bold">₹{order.totalAmount}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-[10px] font-bold rounded-full border ${
                        order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                        order.status === 'CONFIRMED' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        order.status === 'DELIVERED' ? 'bg-green-50 text-green-700 border-green-200' :
                        'bg-gray-50 text-gray-700 border-gray-200'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SettingsCard initialSetting={settings.isWhatsAppFormEnabled} />
    </div>
  );
}
