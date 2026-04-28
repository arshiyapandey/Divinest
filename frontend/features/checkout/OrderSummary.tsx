import PrimaryButton from "@/components/ui/PrimaryButton";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Props = {
  items: CartItem[];
  form: {
    name: string;
    email: string;
    address: string;
  };
  clearCart: () => void;
  router: any;
};

export default function OrderSummary({
  items,
  form,
  clearCart,
  router,
}: Props) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }

    if (items.length === 0) {
      alert("Cart is empty");
      return;
    }

    clearCart();
    router.push("/order-success");
  };

  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "32px", // ⬅️ more breathing space
        borderRadius: "14px",
        backgroundColor: "rgba(255,255,255,0.05)",
        color: "#f5e9e2",
        minWidth: "420px", // ⬅️ prevents squeezing
      }}
    >
      <h2 style={{ marginBottom: "24px" }}>Order Summary</h2>

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
              marginBottom: "20px", // ⬅️ more spacing
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "12px",
            }}
          >
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div>
                <p style={{ margin: 0, fontSize: "15px" }}>
                  {item.name}
                </p>
                <p style={{ margin: 0, fontSize: "13px", opacity: 0.7 }}>
                  Qty: {item.quantity}
                </p>
              </div>
            </div>

            <p style={{ margin: 0 }}>
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))
      )}

      <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "20px 0" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <div style={{ marginTop: "20px" }}>
        <PrimaryButton onClick={handlePlaceOrder}>
          Place Order
        </PrimaryButton>
      </div>
    </div>
  );
}