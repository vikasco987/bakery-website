"use client";
import { useState } from "react";

export default function SettingsCard({ initialSetting }: { initialSetting: boolean }) {
  const [isEnabled, setIsEnabled] = useState(initialSetting);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSetting = async () => {
    setIsLoading(true);
    const newValue = !isEnabled;
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isWhatsAppFormEnabled: newValue })
      });
      if (res.ok) {
        setIsEnabled(newValue);
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-8">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Store Settings</h2>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-gray-700">WhatsApp Order Form</div>
          <div className="text-sm text-gray-500">Ask for Name and Phone before opening WhatsApp</div>
        </div>
        <button 
          onClick={toggleSetting}
          disabled={isLoading}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isEnabled ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
    </div>
  );
}
