import { PrismaClient } from '@prisma/client';
import InteractiveMenu from './InteractiveMenu';



export default async function Menu() {
  let categories: any[] = [];
  try {
    const prisma = new PrismaClient();
    categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
  } catch (error) {
    console.error("Database connection failed, using empty menu.");
  }

  if (!categories || categories.length === 0) {
    return <div className="text-center py-20 text-gray-500">No menu items found.</div>;
  }

  // Pass initial data to the interactive client component
  return <InteractiveMenu initialCategories={categories} />;
}
