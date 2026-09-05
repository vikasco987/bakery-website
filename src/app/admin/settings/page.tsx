import { PrismaClient } from '@prisma/client';
import SettingsClient from './SettingsClient';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function SettingsPage() {
  const settings = await prisma.storeSettings.findFirst();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Store Settings</h1>
      <SettingsClient initialSettings={settings} />
    </div>
  );
}
