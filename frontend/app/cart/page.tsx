"use client";

import { useCartStore } from "@/features/cart/store/cartStore";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CartPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const router = useRouter();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold mb-2">Your cart is empty</h1>
        <PrimaryButton
        onClick={() => router.push("/shop")}
        fullWidth={false}
        >
      Continue Shopping
      </PrimaryButton>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            
            {/* LEFT: Image + Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />

              <div>
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-secondary">₹{item.price}</p>
              </div>
            </div>

            {/* RIGHT: Controls */}
            <div className="flex items-center gap-6">

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-secondary/10 px-3 py-1 rounded-md">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-primary text-white w-7 h-7 rounded flex items-center justify-center"
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-primary text-white w-7 h-7 rounded flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <p className="font-semibold w-20 text-right">
                ₹{item.price * item.quantity}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* TOTAL SECTION */}
      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <h2 className="text-lg font-semibold">Total</h2>
        <p className="text-xl font-bold">₹{total}</p>
      </div>

      {/* CHECKOUT BUTTON */}
      <div className="mt-6">
        <PrimaryButton onClick={() => router.push("/checkout")}>
          Proceed to Checkout
        </PrimaryButton>
      </div>

    </div>
  );
}