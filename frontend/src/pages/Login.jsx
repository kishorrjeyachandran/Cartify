import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import API from "../services/api";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await API.post(
        "/auth/login",
        formData
      );

      setUser(data);

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="min-h-[85vh] flex items-center justify-center py-16">
        
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border border-[#1F1F22] bg-[#111214]">
          
          {/* LEFT */}
          <div className="hidden lg:flex flex-col justify-between p-12 border-r border-[#1F1F22] bg-[#0D0E10]">
            
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#1F1F22] text-sm text-zinc-400 mb-8">
                Welcome Back
              </div>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight mb-6">
                Continue your shopping journey.
              </h1>

              <p className="text-zinc-400 text-lg leading-8 max-w-md">
                Access your account to manage orders,
                wishlist, and premium shopping experiences.
              </p>
            </div>

            <p className="text-sm text-zinc-500">
              © 2026 Cartify
            </p>
          </div>

          {/* RIGHT */}
          <div className="p-8 md:p-12">
            
            <div className="max-w-md mx-auto">
              
              <div className="mb-10">
                <h2 className="text-4xl font-semibold tracking-tight mb-3">
                  Login
                </h2>

                <p className="text-zinc-500">
                  Enter your credentials to continue.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                
                <div>
                  <label className="block text-sm text-zinc-400 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none focus:border-zinc-700 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-3">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none focus:border-zinc-700 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition"
                >
                  {loading
                    ? "Logging in..."
                    : "Login"}
                </button>
              </form>

              <p className="text-zinc-500 text-sm mt-8 text-center">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-white hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Login;