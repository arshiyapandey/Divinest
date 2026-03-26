"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/features/products/types";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer"
    >
      <div className="w-full h-[300px] flex items-center justify-center bg-white rounded-md overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="h-full object-contain"
  />
</div>

      <h2 className="mt-3 font-medium">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
}