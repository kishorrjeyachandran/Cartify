import { useState } from "react";

import {
  ShoppingBag,
  Menu,
  X,
  User,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { cartItems } = useCart();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090A]/80 border-b border-[#1F1F22]">
        
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight"
          >
            Cartify
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            
            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="hover:text-white transition-colors"
            >
              Shop
            </Link>

            <Link
              to="/orders"
              className="hover:text-white transition-colors"
            >
              Orders
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* CART */}
            <Link
              to="/cart"
              className="relative w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center hover:border-zinc-700 transition"
            >
              <ShoppingBag size={18} />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-black text-xs flex items-center justify-center font-medium">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* USER */}
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                
                <div className="h-10 px-4 rounded-xl border border-[#1F1F22] bg-[#111214] flex items-center gap-2">
                  <User size={16} />

                  <span className="text-sm">
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-10 h-10 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex px-5 h-10 rounded-xl bg-white text-black text-sm font-medium items-center hover:opacity-90 transition"
              >
                Login
              </Link>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-[100] transition ${
          open
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-[#0D0E10] border-l border-[#1F1F22] p-6 transition-transform duration-300 ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* TOP */}
          <div className="flex items-center justify-between mb-10">
            
            <h2 className="text-xl font-semibold">
              Cartify
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </div>

          {/* USER */}
          {user && (
            <div className="mb-6 p-4 rounded-2xl border border-[#1F1F22] bg-[#111214]">
              
              <div className="flex items-center gap-3">
                <User size={18} />

                <div>
                  <h3 className="font-medium">
                    {user.name}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* LINKS */}
          <div className="flex flex-col gap-4 text-zinc-300">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="h-12 px-4 rounded-xl hover:bg-[#151618] flex items-center transition"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="h-12 px-4 rounded-xl hover:bg-[#151618] flex items-center transition"
            >
              Shop
            </Link>

            <Link
              to="/orders"
              onClick={() => setOpen(false)}
              className="h-12 px-4 rounded-xl hover:bg-[#151618] flex items-center transition"
            >
              Orders
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="h-12 px-4 rounded-xl hover:bg-[#151618] flex items-center justify-between transition"
            >
              <span>Cart</span>

              {cartItems.length > 0 && (
                <span className="w-6 h-6 rounded-full bg-white text-black text-xs flex items-center justify-center font-medium">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* LOGIN / LOGOUT */}
            {user ? (
              <button
                onClick={handleLogout}
                className="mt-4 h-12 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 font-medium hover:bg-red-500/20 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-4 h-12 rounded-xl bg-white text-black font-medium flex items-center justify-center hover:opacity-90 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;