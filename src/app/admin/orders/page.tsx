import AdminOrdersClient from './AdminOrdersClient';

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Customer Orders</h1>
      <AdminOrdersClient />
    </div>
  );
}
