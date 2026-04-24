import CheckoutForm from "@/features/checkout/CheckoutForm";
import OrderSummary from "@/features/checkout/OrderSummary";

export default function CheckoutPage() {
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
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}