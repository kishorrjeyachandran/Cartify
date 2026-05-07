import Product from "../models/Product.js";

/* GET PRODUCTS */
const getProducts = async (
  req,
  res
) => {
  try {
    const products =
      await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* GET PRODUCT BY ID */
const getProductById = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message:
          "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* CREATE PRODUCT */
const createProduct = async (
  req,
  res
) => {
  try {
    const product =
      await Product.create(
        req.body
      );

    res.status(201).json(
      product
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* DELETE PRODUCT */
const deleteProduct = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message:
          "Product not found",
      });
    }

    await product.deleteOne();

    res.json({
      message:
        "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ADD REVIEW */
const addReview = async (
  req,
  res
) => {
  try {
    const {
      rating,
      comment,
    } = req.body;

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message:
          "Product not found",
      });
    }

    const review = {
      user:
        req.user?.name ||
        "Anonymous",
      rating,
      comment,
    };

    product.reviews.push(
      review
    );

    await product.save();

    res.status(201).json({
      message:
        "Review added",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  addReview,
};