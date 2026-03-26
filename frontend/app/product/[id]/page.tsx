"use client";

import { useParams } from "next/navigation";
import { products } from "@/features/products/data/products";

export default function ProductDetailsPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-2xl font-semibold mt-6">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">₹{product.price}</p>

      <p className="mt-4 text-gray-500">
        This Divinest product enhances your spiritual experience and daily rituals.
      </p>
    </div>
  );
}