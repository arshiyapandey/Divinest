"use client";

import { useCartStore } from "@/features/cart/store/cartStore";
import CheckoutForm from "@/features/checkout/CheckoutForm";
import OrderSummary from "@/features/checkout/OrderSummary";

export default function CheckoutPage() {
  const { items } = useCartStore();

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "30px" }}>
        Checkout
      </h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <CheckoutForm />
        </div>

        <div style={{ flex: 1 }}>
          <OrderSummary items={items} />
        </div>
      </div>
    </div>
  );
}