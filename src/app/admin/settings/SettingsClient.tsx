'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsClient({ initialSettings }: { initialSettings: any }) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  const [isWhatsAppFormEnabled, setIsWhatsAppFormEnabled] = useState(
    initialSettings?.isWhatsAppFormEnabled || false
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isWhatsAppFormEnabled }),
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
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 max-w-2xl">
      {message && (
        <div className={`p-4 mb-6 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Checkout Preferences</h3>
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="whatsappFormEnabled"
              checked={isWhatsAppFormEnabled} 
              onChange={(e) => setIsWhatsAppFormEnabled(e.target.checked)}
              className="w-5 h-5 text-pink-600 rounded border-gray-300 focus:ring-pink-500"
            />
            <label htmlFor="whatsappFormEnabled" className="text-slate-700 font-medium cursor-pointer">
              Enable WhatsApp Form for Checkout
            </label>
          </div>
          <p className="text-sm text-slate-500 mt-2 ml-8">
            If enabled, customers will be redirected to WhatsApp to complete their order. Otherwise, standard checkout flow applies.
          </p>
        </div>

        <button 
          type="submit" 
          disabled={isSaving}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
}
