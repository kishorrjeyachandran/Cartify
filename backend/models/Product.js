import mongoose from "mongoose";

/* REVIEW SCHEMA */
const reviewSchema =
  mongoose.Schema(
    {
      user: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

/* PRODUCT SCHEMA */
const productSchema =
  mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      category: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      stock: {
        type: Number,
        default: 0,
      },

      reviews: [
        reviewSchema,
      ],
    },
    {
      timestamps: true,
    }
  );

const Product =
  mongoose.model(
    "Product",
    productSchema
  );

export default Product;