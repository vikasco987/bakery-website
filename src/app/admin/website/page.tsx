import { PrismaClient } from '@prisma/client';
import WebsiteConfigClient from './WebsiteConfigClient';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function WebsiteElementsPage() {
  const config = await prisma.websiteConfig.findFirst();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Website Elements Management</h1>
      <WebsiteConfigClient initialConfig={config} />
    </div>
  );
}
