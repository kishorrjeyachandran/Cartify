import axios from "axios";
import dotenv from "dotenv";

import connectDB from "../config/db.js";

import Product from "../models/Product.js";

dotenv.config();

connectDB();

const importProducts = async () => {
  try {
    // FETCH PRODUCTS
    const { data } = await axios.get(
      "https://fakestoreapi.com/products"
    );

    // REMOVE OLD PRODUCTS
    await Product.deleteMany();

    // FORMAT PRODUCTS
    const formattedProducts = data.map(
      (product) => ({
        name: product.title,

        category: product.category,

        description:
          product.description,

        price: product.price,

        image: product.image,

        stock: Math.floor(
          Math.random() * 20
        ) + 1,
      })
    );

    // INSERT PRODUCTS
    await Product.insertMany(
      formattedProducts
    );

    console.log(
      "Products Imported Successfully"
    );

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

importProducts();