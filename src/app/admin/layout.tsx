import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col fixed h-full">
        <h2 className="text-2xl font-bold mb-8 text-pink-500">BnB Admin</h2>
        <nav className="flex flex-col gap-2 flex-grow">
          <Link href="/admin" className="p-3 hover:bg-slate-800 rounded-lg transition-colors">
            📊 Dashboard
          </Link>
          <Link href="/admin/website" className="p-3 hover:bg-slate-800 rounded-lg transition-colors">
            🌐 Website Elements
          </Link>
          <Link href="/admin/products" className="p-3 hover:bg-slate-800 rounded-lg transition-colors">
            🎂 Products & Categories
          </Link>
          <Link href="/admin/offers" className="p-3 hover:bg-slate-800 rounded-lg transition-colors">
            🎁 Offers
          </Link>
          <Link href="/admin/orders" className="p-3 hover:bg-slate-800 rounded-lg transition-colors">
            🛒 Orders
          </Link>
          <Link href="/admin/settings" className="p-3 hover:bg-slate-800 rounded-lg transition-colors">
            ⚙️ Settings
          </Link>
        </nav>
        <div className="mt-auto">
          <button className="w-full p-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
