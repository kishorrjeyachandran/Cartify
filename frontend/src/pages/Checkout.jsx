import { useState } from "react";

import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  CreditCard,
  Lock,
  Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import { useAuth } from "../context/AuthContext";

import { createOrder } from "../services/orderService";

const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems, clearCart } =
    useCart();

  const { user } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  const handleCheckout =
    async () => {
      if (!user) {
        alert(
          "Please login first"
        );

        return navigate("/login");
      }

      try {
        setLoading(true);

        const orderData = {
          products: cartItems.map(
            (item) => ({
              product: item._id,
              quantity:
                item.quantity,
            })
          ),

          totalPrice:
            subtotal + 20,
        };

        await createOrder(
          orderData,
          user.token
        );

        clearCart();

        alert(
          "Order placed successfully"
        );

        navigate("/orders");
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Checkout failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            CHECKOUT
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Secure Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
          
          {/* LEFT */}
          <div className="space-y-10">
            
            {/* SHIPPING */}
            <div className="rounded-3xl border border-[#1F1F22] bg-[#111214] p-8">
              
              <div className="flex items-center gap-3 mb-8">
                <Truck size={22} />

                <h2 className="text-2xl font-semibold">
                  Shipping Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="md:col-span-2 h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="text"
                  placeholder="Street Address"
                  className="md:col-span-2 h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />
              </div>
            </div>

            {/* PAYMENT */}
            <div className="rounded-3xl border border-[#1F1F22] bg-[#111214] p-8">
              
              <div className="flex items-center gap-3 mb-8">
                <CreditCard size={22} />

                <h2 className="text-2xl font-semibold">
                  Payment Details
                </h2>
              </div>

              <div className="space-y-5">
                
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <div className="grid grid-cols-2 gap-5">
                  
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                    className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-3xl border border-[#1F1F22] bg-[#111214] p-8 sticky top-24">
            
            <h2 className="text-3xl font-semibold mb-8">
              Order Summary
            </h2>

            {/* ITEMS */}
            <div className="space-y-5 mb-8">
              
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <span className="font-medium">
                    $
                    {item.price *
                      item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* TOTALS */}
            <div className="space-y-5 border-y border-[#1F1F22] py-6 mb-6">
              
              <div className="flex items-center justify-between text-zinc-400">
                <span>Subtotal</span>

                <span>
                  ${subtotal}
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-400">
                <span>Shipping</span>

                <span>Free</span>
              </div>

              <div className="flex items-center justify-between text-zinc-400">
                <span>Tax</span>

                <span>$20</span>
              </div>
            </div>

            {/* TOTAL */}
            <div className="flex items-center justify-between mb-8">
              
              <span className="text-lg text-zinc-400">
                Total
              </span>

              <span className="text-3xl font-semibold">
                ${subtotal + 20}
              </span>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleCheckout}
              disabled={
                loading ||
                cartItems.length === 0
              }
              className="w-full h-14 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading
                ? "Processing..."
                : "Complete Purchase"}
            </button>

            {/* SECURITY */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-zinc-500">
              <Lock size={16} />
              Secure SSL encrypted checkout
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Checkout;