function Customers() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Customers</h1>

      <p>Manage your customers here.</p>

      <div
        style={{
          marginTop: "25px",
          padding: "25px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Customer Management</h2>

        <button
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Customer
        </button>

        <p style={{ marginTop: "20px" }}>
          No customers added yet.
        </p>
      </div>
    </div>
  );
}

export default Customers;