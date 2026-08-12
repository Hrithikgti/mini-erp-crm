import { useState } from "react";
import Customers from "./Customers";
import Products from "./Products";
import Challans from "./Challans";

function Dashboard() {
  const [page, setPage] = useState("dashboard");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (page === "customers") {
    return (
      <div>
        <Navigation
          setPage={setPage}
          logout={logout}
        />
        <Customers />
      </div>
    );
  }

  if (page === "products") {
    return (
      <div>
        <Navigation
          setPage={setPage}
          logout={logout}
        />
        <Products />
      </div>
    );
  }

  if (page === "challans") {
    return (
      <div>
        <Navigation
          setPage={setPage}
          logout={logout}
        />
        <Challans />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navigation
        setPage={setPage}
        logout={logout}
      />

      <main style={{ padding: "30px" }}>
        <h1>Dashboard</h1>

        <p>Welcome to your Mini ERP CRM.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <h3>Customers</h3>
            <h1>0</h1>
          </div>

          <div style={cardStyle}>
            <h3>Products</h3>
            <h1>0</h1>
          </div>

          <div style={cardStyle}>
            <h3>Challans</h3>
            <h1>0</h1>
          </div>

          <div style={cardStyle}>
            <h3>Orders</h3>
            <h1>0</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

function Navigation({
  setPage,
  logout,
}: {
  setPage: (page: string) => void;
  logout: () => void;
}) {
  return (
    <nav
      style={{
        background: "#1e293b",
        padding: "15px 25px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <strong
        style={{
          color: "white",
          fontSize: "20px",
          marginRight: "20px",
        }}
      >
        Mini ERP CRM
      </strong>

      <button
        onClick={() => setPage("dashboard")}
        style={buttonStyle}
      >
        Dashboard
      </button>

      <button
        onClick={() => setPage("customers")}
        style={buttonStyle}
      >
        Customers
      </button>

      <button
        onClick={() => setPage("products")}
        style={buttonStyle}
      >
        Products
      </button>

      <button
        onClick={() => setPage("challans")}
        style={buttonStyle}
      >
        Challans
      </button>

      <button
        onClick={logout}
        style={{
          ...buttonStyle,
          background: "#dc2626",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

const buttonStyle = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "6px",
  background: "#334155",
  color: "white",
  cursor: "pointer",
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
};

export default Dashboard;