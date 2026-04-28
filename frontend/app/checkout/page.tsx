"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/features/cart/store/cartStore";
import CheckoutForm from "@/features/checkout/CheckoutForm";
import OrderSummary from "@/features/checkout/OrderSummary";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  return (
  <div className="max-w-5xl mx-auto py-10">
    <h1 className="text-2xl font-semibold mb-8">Checkout</h1>

    <div className="flex justify-between items-start gap-8">
      
      {/* LEFT - FORM */}
      <div className="w-[50%]">
        <CheckoutForm form={form} setForm={setForm} />
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="w-[50%]">
        <OrderSummary
          items={items}
          form={form}
          clearCart={clearCart}
          router={router}
        />
      </div>

    </div>
  </div>
);
}