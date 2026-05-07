import { Link, useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import { useAuth } from "../context/AuthContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const { user } =
    useAuth();

  const navigate =
    useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            CART
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Shopping Cart
          </h1>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-[#1F1F22] bg-[#111214] py-24 px-6 text-center">
            
            <div className="w-20 h-20 rounded-full bg-[#151618] flex items-center justify-center mx-auto mb-6">
              
              <ShoppingBag size={32} />
            </div>

            <h2 className="text-3xl font-semibold mb-4">
              Your cart is empty
            </h2>

            <p className="text-zinc-500 max-w-md mx-auto leading-7 mb-8">
              Looks like you haven’t added any products yet.
              Start exploring premium collections.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition"
            >
              Continue Shopping

              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
            
            {/* LEFT */}
            <div className="space-y-6">
              
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="rounded-3xl border border-[#1F1F22] bg-[#111214] p-5"
                >
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    
                    {/* IMAGE */}
                    <div className="w-full sm:w-[180px] h-[180px] rounded-2xl overflow-hidden bg-white">
                      
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 flex flex-col justify-between">
                      
                      <div>
                        
                        <p className="text-sm text-zinc-500 mb-2 capitalize">
                          {item.category}
                        </p>

                        <h2 className="text-2xl font-medium mb-3">
                          {item.name}
                        </h2>

                        <p className="text-xl font-semibold">
                          ${item.price}
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center justify-between mt-6">
                        
                        {/* QUANTITY */}
                        <div className="flex items-center gap-3">
                          
                          <button
                            onClick={() =>
                              decreaseQuantity(item._id)
                            }
                            className="w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#151618] flex items-center justify-center hover:border-zinc-700 transition"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="text-lg font-medium w-6 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item._id)
                            }
                            className="w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#151618] flex items-center justify-center hover:border-zinc-700 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removeFromCart(item._id)
                          }
                          className="w-10 h-10 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SUMMARY */}
            <div className="h-fit rounded-3xl border border-[#1F1F22] bg-[#111214] p-8 sticky top-24">
              
              <h2 className="text-3xl font-semibold mb-8">
                Order Summary
              </h2>

              {/* SUMMARY */}
              <div className="space-y-5 border-b border-[#1F1F22] pb-6 mb-6">
                
                <div className="flex items-center justify-between text-zinc-400">
                  
                  <span>Subtotal</span>

                  <span>
                    ${subtotal.toFixed(2)}
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
                  ${(subtotal + 20).toFixed(2)}
                </span>
              </div>

              {/* CHECKOUT */}
              {user ? (
                <Link
                  to="/checkout"
                  className="w-full h-14 rounded-2xl bg-white text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  Proceed To Checkout

                  <ArrowRight size={18} />
                </Link>
              ) : (
                <button
                  onClick={() =>
                    navigate("/login")
                  }
                  className="w-full h-14 rounded-2xl bg-red-500 text-white font-medium hover:opacity-90 transition"
                >
                  Login To Checkout
                </button>
              )}

              {/* NOTE */}
              <p className="text-sm text-zinc-500 leading-7 mt-6 text-center">
                Secure checkout powered by encrypted payment systems.
              </p>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Cart;