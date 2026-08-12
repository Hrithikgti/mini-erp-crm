const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database
const pool = require("./config/database");

// Authentication routes
const authRoutes = require("./routes/authRoutes");

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mini ERP CRM Backend is running",
    endpoints: [
      "/api/health",
      "/api/db-test",
      "/api/auth/register",
      "/api/auth/login"
    ]
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy"
  });
});

// Database test
app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.status(200).json({
      success: true,
      message: "Database connection successful",
      time: result.rows[0].now
    });
  } catch (error) {
    console.error("Database test error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed"
    });
  }
});

// Authentication
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});