import { PrismaClient } from '@prisma/client';
import Navbar from "@/components/Navbar";
import ProductGallery from "@/components/ProductGallery";
import Breadcrumb from "@/components/Breadcrumb";
import ProductInfo from "@/components/ProductInfo";
import SimilarProducts from "@/components/SimilarProducts";

const prisma = new PrismaClient();

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const product = await prisma.product.findUnique({
    where: { id: resolvedParams.id },
    include: { category: true }
  });

  if (!product) {
    return <div className="min-h-screen pt-32 text-center text-2xl font-bold">Product not found!</div>;
  }

  const similarProducts = await prisma.product.findMany({
    where: { 
      categoryId: product.categoryId,
      id: { not: product.id }
    },
    take: 4
  });

  const rawImages = [product.image]; 
  const galleryImages = Array.from(new Set(rawImages.filter(Boolean))) as string[];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Breadcrumb categoryName={product.category.name} productName={product.name} />

        <div className="bg-white rounded-[2rem] shadow-xl shadow-pink-100/50 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ProductGallery images={galleryImages} />
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      <SimilarProducts products={similarProducts} />
    </main>
  );
}
