'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type WebsiteConfigProps = {
  initialConfig: any;
};

export default function WebsiteConfigClient({ initialConfig }: WebsiteConfigProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  const [formData, setFormData] = useState({
    heroTitle: initialConfig?.heroTitle || '',
    heroSubtitle: initialConfig?.heroSubtitle || '',
    whatsappNumber: initialConfig?.whatsappNumber || '',
    address: initialConfig?.address || '',
    email: initialConfig?.email || '',
    businessHours: initialConfig?.businessHours || '',
    instagramUrl: initialConfig?.instagramUrl || '',
    facebookUrl: initialConfig?.facebookUrl || '',
    googleMapsUrl: initialConfig?.googleMapsUrl || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('Settings saved successfully!');
        router.refresh();
      } else {
        setMessage('Failed to save settings.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while saving.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 max-w-3xl">
      {message && (
        <div className={`p-4 mb-6 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Hero Section</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hero Title</label>
              <input 
                type="text" 
                name="heroTitle" 
                value={formData.heroTitle} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hero Subtitle</label>
              <textarea 
                name="heroSubtitle" 
                value={formData.heroSubtitle} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp Number</label>
              <input 
                type="text" 
                name="whatsappNumber" 
                value={formData.whatsappNumber} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
                rows={2}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Business Hours</label>
              <input 
                type="text" 
                name="businessHours" 
                value={formData.businessHours} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
                placeholder="e.g. Mon-Sun: 9:00 AM - 9:00 PM"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Social Links & Maps</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Instagram URL</label>
              <input 
                type="url" 
                name="instagramUrl" 
                value={formData.instagramUrl} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Facebook URL</label>
              <input 
                type="url" 
                name="facebookUrl" 
                value={formData.facebookUrl} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Google Maps Embedded URL</label>
              <input 
                type="url" 
                name="googleMapsUrl" 
                value={formData.googleMapsUrl} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSaving}
          className="w-full md:w-auto px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 disabled:opacity-50 transition-colors"
        >
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
}
