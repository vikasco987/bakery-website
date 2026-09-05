'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OffersClient({ initialOffers }: { initialOffers: any[] }) {
  const router = useRouter();
  const [offers, setOffers] = useState(initialOffers);
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const res = await fetch('/api/admin/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ title: '', price: '', startDate: '', endDate: '' });
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this offer?')) return;
    try {
      const res = await fetch(`/api/admin/offers/${id}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/offers/${id}`, { 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus })
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add New Offer Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Add New Offer</h2>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Offer Title</label>
            <input 
              type="text" name="title" value={formData.title} onChange={handleChange} 
              className="w-full p-2 border rounded-lg" required placeholder="e.g. 50% Off Cake"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Price (₹)</label>
            <input 
              type="number" name="price" value={formData.price} onChange={handleChange} 
              className="w-full p-2 border rounded-lg" required placeholder="199"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
            <input 
              type="datetime-local" name="startDate" value={formData.startDate} onChange={handleChange} 
              className="w-full p-2 border rounded-lg" required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
            <input 
              type="datetime-local" name="endDate" value={formData.endDate} onChange={handleChange} 
              className="w-full p-2 border rounded-lg" required 
            />
          </div>
          <div className="md:col-span-2">
            <button 
              type="submit" disabled={isAdding}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              {isAdding ? 'Adding...' : 'Add Offer'}
            </button>
          </div>
        </form>
      </div>

      {/* Existing Offers List */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Current Offers</h2>
        {offers.length === 0 ? (
          <p className="text-slate-500">No offers found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-3">Title</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Valid Until</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.map(offer => (
                  <tr key={offer.id} className="border-b hover:bg-slate-50">
                    <td className="p-3 font-medium">{offer.title}</td>
                    <td className="p-3">₹{offer.price}</td>
                    <td className="p-3">{new Date(offer.endDate).toLocaleString()}</td>
                    <td className="p-3">
                      <button 
                        onClick={() => toggleActive(offer.id, offer.isActive)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${offer.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {offer.isActive ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="p-3">
                      <button 
                        onClick={() => handleDelete(offer.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
