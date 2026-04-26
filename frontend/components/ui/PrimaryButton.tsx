type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean; // ✅ added
};

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  fullWidth = true, // ✅ default true
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : "auto", // ✅ fix
        padding: fullWidth ? "12px" : "10px 20px",
        backgroundColor: "#f5e9e2",
        color: "#5a0f0f",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "0.2s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
  );
}