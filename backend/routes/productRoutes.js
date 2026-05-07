import express from "express";

import {
  getProducts,
  createProduct,
  getProductById,
  addReview,
  deleteProduct,
} from "../controllers/productController.js";

import {
  protect,
  admin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

/* GET PRODUCTS */
router.get("/", getProducts);

/* GET PRODUCT BY ID */
router.get(
  "/:id",
  getProductById
);

/* CREATE PRODUCT */
router.post(
  "/",
  protect,
  admin,
  createProduct
);

/* DELETE PRODUCT */
router.delete(
  "/:id",
  protect,
  admin,
  deleteProduct
);

/* ADD REVIEW */
router.post(
  "/:id/reviews",
  protect,
  addReview
);

export default router;