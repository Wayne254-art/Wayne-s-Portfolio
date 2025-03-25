const express = require("express");
const cors = require("cors");
const sequelize = require("./db/database");
const UserRoutes = require("./routes/auth.routes");
const ProjectRoutes = require("./routes/project.routes");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config(); // Ensure environment variables are loaded

const app = express();

// Middleware
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000", // Adjust for production
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies in requests
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", UserRoutes);
app.use("/api", ProjectRoutes);

// Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.");
    return sequelize.sync(); // Sync models after connection is successful
  })
  .then(() => {
    console.log("Models synchronized with the database.");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
