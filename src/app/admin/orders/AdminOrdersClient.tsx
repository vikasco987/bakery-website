"use client";

import React, { useState, useEffect } from "react";

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

export default function AdminOrdersClient() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/admin/orders');
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
      }
    } catch (error) {
      console.error('Failed to fetch orders', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async (id: string, newStatus: string) => {
    // Optimistic UI update
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    
    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (!res.ok) {
        // Revert on failure (simplified, ideally we store the previous status)
        fetchOrders();
      }
    } catch (error) {
      console.error('Failed to update status', error);
      fetchOrders();
    }
  };

  const deleteOrder = async (id: string) => {
    if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) return;
    
    // Optimistic UI update
    setOrders(prev => prev.filter(o => o.id !== id));
    
    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Failed to delete order', error);
      fetchOrders();
    }
  };

  const filteredOrders = orders.filter((o) => {
    if (filterType !== "All" && o.orderType !== filterType) return false;
    if (filterStatus !== "All" && o.status !== filterStatus) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!o.customerName?.toLowerCase().includes(query) && 
          !o.orderNumber?.toLowerCase().includes(query) && 
          !o.phone?.toLowerCase().includes(query)) {
        return false;
      }
    }
    return true;
  });

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div className="flex-grow max-w-sm">
          <label className="text-xs font-bold text-gray-500 uppercase">Search</label>
          <input 
            type="text" 
            placeholder="Search by name, phone, or order #" 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="block w-full mt-1 p-2 border rounded-md bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
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
              <th className="p-3 text-center">Actions</th>
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
                  <select 
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className={`p-1 text-xs font-bold rounded-md border cursor-pointer ${
                      order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                      order.status === 'CONFIRMED' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      order.status === 'DELIVERED' ? 'bg-green-50 text-green-700 border-green-200' :
                      'bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="CONFIRMED">CONFIRMED</option>
                    <option value="PREPARING">PREPARING</option>
                    <option value="READY">READY</option>
                    <option value="DELIVERED">DELIVERED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </td>
                <td className="p-3 text-gray-500 text-xs">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 text-center flex justify-center gap-3">
                  <button className="text-pink-600 font-bold hover:underline" title="View Order">View</button>
                  <button onClick={() => deleteOrder(order.id)} className="text-red-500 hover:text-red-700" title="Delete Order">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
