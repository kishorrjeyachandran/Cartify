import express from "express";
import {
  verifyOTP,
} from "../controllers/authController.js";
import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();
router.post(
  "/verify-otp",
  verifyOTP
);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;