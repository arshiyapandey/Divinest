"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/features/products/types";
import { useCartStore } from "@/features/cart/store/cartStore";


export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const {
    items,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  // check if item exists in cart
  const item = items.find((i) => i.id === product.id);

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
        <p className="text-secondary font-medium">₹{product.price}</p>
      </div>

      {/* CART ACTIONS */}
      <div className="mt-3">
        {!item ? (
          <button
            onClick={() =>
              addToCart({ ...product, quantity: 1 })
            }
            className="w-full bg-primary text-white py-2 rounded-lg border border-secondary hover:bg-primary/90 transition font-medium"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center gap-4 bg-secondary/10 py-2 rounded-lg">
            
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-primary text-white w-8 h-8 rounded-md flex items-center justify-center text-lg"
            >
              −
            </button>

            <span className="font-semibold text-lg">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="bg-primary text-white w-8 h-8 rounded-md flex items-center justify-center text-lg"
            >
              +
            </button>

          </div>
        )}
      </div>
    </div>
  );
}