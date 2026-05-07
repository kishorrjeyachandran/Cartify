import mongoose from "mongoose";

import dotenv from "dotenv";

import Product from "./models/Product.js";

dotenv.config();

/* CONNECT DB */
mongoose.connect(
  process.env.MONGO_URI
);

const products = [
  {
    name: "Premium Headphones",
    category: "electronics",
    description:
      "High quality wireless headphones.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200",
    price: 199,
    stock: 20,
  },

  {
    name: "Modern Sneakers",
    category: "fashion",
    description:
      "Comfortable premium sneakers.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    price: 149,
    stock: 35,
  },

  {
    name: "Smart Watch",
    category: "electronics",
    description:
      "Advanced smartwatch for daily use.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
    price: 249,
    stock: 15,
  },

  {
    name: "Luxury Backpack",
    category: "fashion",
    description:
      "Minimal premium backpack.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200",
    price: 99,
    stock: 18,
  },
];

/* IMPORT PRODUCTS */
const importData =
  async () => {
    try {
      await Product.deleteMany();

      await Product.insertMany(
        products
      );

      console.log(
        "Products Imported"
      );

      process.exit();
    } catch (error) {
      console.log(error);

      process.exit(1);
    }
  };

importData();