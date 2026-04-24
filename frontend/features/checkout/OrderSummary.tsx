export default function OrderSummary() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Order Summary</h2>

      <div style={{ marginBottom: "10px" }}>
        <p>Product 1 x 2</p>
        <p>Product 2 x 1</p>
      </div>

      <hr />

      <h3 style={{ marginTop: "10px" }}>Total: ₹500</h3>

      <button
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}