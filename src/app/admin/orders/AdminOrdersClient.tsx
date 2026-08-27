"use client";

import React, { useState } from "react";

type Order = {
  id: string;
  orderNumber: string;
  customerName: string;
  phone: string;
  address: string;
  items: any[];
  totalAmount: number;
  orderType: string;
  status: string;
  createdAt: string;
};

export default function AdminOrdersClient({ initialOrders }: { initialOrders: Order[] }) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredOrders = orders.filter((o) => {
    if (filterType !== "All" && o.orderType !== filterType) return false;
    if (filterStatus !== "All" && o.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Type</label>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="block mt-1 p-2 border rounded-md bg-gray-50">
            <option value="All">All Types</option>
            <option value="WHATSAPP">WhatsApp</option>
            <option value="WEBSITE">Website</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="block mt-1 p-2 border rounded-md bg-gray-50">
            <option value="All">All Statuses</option>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="PREPARING">Preparing</option>
            <option value="READY">Ready</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Order</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Items</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-4 text-center text-gray-500">No orders found.</td>
              </tr>
            ) : filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-bold text-gray-700">#{order.orderNumber}</td>
                <td className="p-3">
                  <div>{order.customerName}</div>
                  <div className="text-xs text-gray-500">{order.phone}</div>
                </td>
                <td className="p-3">
                  {order.items?.length || 0} items
                </td>
                <td className="p-3 text-right font-bold">₹{order.totalAmount}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${order.orderType === 'WHATSAPP' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {order.orderType}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full border ${
                    order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                    order.status === 'CONFIRMED' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    order.status === 'DELIVERED' ? 'bg-green-50 text-green-700 border-green-200' :
                    'bg-gray-50 text-gray-700 border-gray-200'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-gray-500 text-xs">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 text-center">
                  <button className="text-pink-600 font-bold hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
