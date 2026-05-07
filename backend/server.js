import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://cartify-v2ua.onrender.com",
    credentials: true,
  })
);

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Cartify API Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

/* PORT */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});