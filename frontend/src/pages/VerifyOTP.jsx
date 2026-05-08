import {
  useState,
} from "react";
import API from "../services/api";
import axios from "axios";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import toast from "react-hot-toast";

const VerifyOTP = () => {
  const [otp, setOtp] =
    useState("");

  const navigate =
    useNavigate();
  const location =
    useLocation();

  const email =
    location.state?.email;

  const handleVerify = async (
    e
  ) => {
    e.preventDefault();

    try {
      const { data } =
        await API.post(
  "/auth/verify-otp",
          {
            email,
            otp,
          }
        );

      toast.success(
        data.message
      );

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Verification failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-5">
      <form
        onSubmit={handleVerify}
        className="w-full max-w-md bg-[#111214] border border-[#1F1F22] rounded-3xl p-8"
      >
        <h1 className="text-4xl font-semibold mb-8 text-center">
          Verify OTP
        </h1>

        <input
          type="text"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value
            )
          }
          placeholder="Enter OTP"
          className="w-full h-14 rounded-2xl bg-black border border-[#1F1F22] px-5 outline-none mb-6"
        />

        <button
          className="w-full h-14 rounded-2xl bg-white text-black font-medium"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;