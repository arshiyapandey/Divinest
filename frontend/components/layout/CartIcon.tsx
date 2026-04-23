"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/features/cart/store/cartStore";
import { useRouter } from "next/navigation";

export default function CartIcon() {
  const items = useCartStore((state) => state.items);
  const router = useRouter();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <ShoppingCart size={24} />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
}