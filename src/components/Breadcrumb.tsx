import Link from "next/link";

interface BreadcrumbProps {
  categoryName: string;
  productName: string;
}

export default function Breadcrumb({ categoryName, productName }: BreadcrumbProps) {
  return (
    <div className="flex items-center text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <span className="hover:text-pink-600 cursor-pointer transition-colors">{categoryName}</span>
      <span className="mx-2">/</span>
      <span className="text-gray-900 font-semibold">{productName}</span>
    </div>
  );
}
