import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import sendEmail from "../utils/sendEmail.js";

import User from "../models/User.js";

/* GENERATE TOKEN */
const generateToken = (
  id
) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

/* VERIFY OTP */
const verifyOTP =
  async (req, res) => {
    try {
      const {
        email,
        otp,
      } = req.body;

      const user =
        await User.findOne({
          email,
        });

      if (!user) {
        return res.status(404).json({
          message:
            "User not found",
        });
      }

      if (
        user.verificationOTP !==
        otp
      ) {
        return res.status(400).json({
          message:
            "Invalid OTP",
        });
      }

      user.isVerified =
        true;

      user.verificationOTP =
        "";

      await user.save();

      res.json({
        message:
          "Email verified successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

/* REGISTER */
const registerUser =
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
      } = req.body;

      const userExists =
        await User.findOne({
          email,
        });

      if (userExists) {
        return res.status(400).json({
          message:
            "User already exists",
        });
      }

      /* HASH PASSWORD */
      const salt =
        await bcrypt.genSalt(
          10
        );

      const hashedPassword =
        await bcrypt.hash(
          password,
          salt
        );

      /* OTP */
      const otp =
        Math.floor(
          100000 +
            Math.random() *
              900000
        ).toString();

      /* CREATE USER */
      const user =
        await User.create({
          name,
          email,
          password:
            hashedPassword,
          verificationOTP:
            otp,
        });

      /* SEND EMAIL */
      await sendEmail(
        email,
        "Cartify Email Verification",
        `Your OTP is: ${otp}`
      );

      res.status(201).json({
        message:
          "OTP sent to email",
        email,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

/* LOGIN */
const loginUser =
  async (req, res) => {
    try {
      const {
        email,
        password,
      } = req.body;

      const user =
        await User.findOne({
          email,
        });

      if (!user) {
        return res.status(401).json({
          message:
            "Invalid credentials",
        });
      }

      /* CHECK PASSWORD */
      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {
        return res.status(401).json({
          message:
            "Invalid credentials",
        });
      }

      /* CHECK VERIFIED */
      if (
        !user.isVerified
      ) {
        return res.status(401).json({
          message:
            "Please verify your email",
        });
      }

      /* LOGIN SUCCESS */
      res.json({
        _id: user._id,
        name: user.name,
        email:
          user.email,
        role: user.role,
        token:
          generateToken(
            user._id
          ),
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export {
  registerUser,
  loginUser,
  verifyOTP,
};