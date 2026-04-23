"use client";

import { useCartStore } from "@/features/cart/store/cartStore";

export default function CartInfo() {
  const items = useCartStore((state) => state.items);


  return (
    <div>
      <p>Cart Items: {items.length}</p>

      {items.map((item) => (
        <p key={item.id}>
          {item.name} - {item.quantity}
        </p>
      ))}
    </div>
  );
}