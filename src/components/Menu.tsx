import { PrismaClient } from '@prisma/client';
import InteractiveMenu from './InteractiveMenu';

const prisma = new PrismaClient();

export default async function Menu() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  if (!categories || categories.length === 0) {
    return <div className="text-center py-20 text-gray-500">No menu items found.</div>;
  }

  // Pass initial data to the interactive client component
  return <InteractiveMenu initialCategories={categories} />;
}
