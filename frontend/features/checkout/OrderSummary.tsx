import PrimaryButton from "@/components/ui/PrimaryButton";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function OrderSummary({ items }: { items: CartItem[] }) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "24px",
        borderRadius: "12px",
        backgroundColor: "rgba(255,255,255,0.05)",
        color: "#f5e9e2",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Order Summary</h2>

      {items.length === 0 ? (
        <p style={{ opacity: 0.7 }}>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "10px",
            }}
          >
            {/* LEFT */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <div>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  {item.name}
                </p>
                <p style={{ margin: 0, fontSize: "12px", opacity: 0.7 }}>
                  Qty: {item.quantity}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <p style={{ margin: 0 }}>
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))
      )}

      <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
          fontWeight: "bold",
        }}
      >
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <PrimaryButton>
        Place Order
      </PrimaryButton>
    </div>
  );
}