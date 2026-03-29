"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/features/products/types";
import { useCartStore } from "@/features/cart/store/cartStore";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition">
      
      {/* IMAGE CLICK → NAVIGATION */}
      <div
        className="cursor-pointer"
        onClick={() => router.push(`/product/${product.id}`)}
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

      {/* BUTTON (separate) */}
      <button
        onClick={() => {
          console.log("ADDING TO CART:", product);
          addToCart({ ...product, quantity: 1 });
        }}
        className="mt-3 w-full bg-black text-white py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}