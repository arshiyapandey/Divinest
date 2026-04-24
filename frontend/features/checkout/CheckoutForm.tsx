export default function CheckoutForm() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Shipping Details</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input placeholder="Name" style={inputStyle} />
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Address" style={inputStyle} />
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};