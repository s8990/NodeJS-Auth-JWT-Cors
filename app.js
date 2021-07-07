require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const app = express();
app.use(express.json());

// Cors
const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// Routes : Auth
app.use("/api", authRoutes);
app.use("/api", authRoutes);

// Routes : User
app.use("/api", userRoutes);

module.exports = app;
