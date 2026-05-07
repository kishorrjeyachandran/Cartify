import { useState } from "react";

import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Heart,
  User,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import { useWishlist } from "../context/WishlistContext";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const { wishlistItems } =
    useWishlist();

  const { user, logout } =
    useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#1F1F22] bg-[#0B0B0C]/80 backdrop-blur-xl">
        
        <nav className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-4">
            
            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setMenuOpen(true)
              }
              className="md:hidden w-11 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center"
            >
              <Menu size={22} />
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="text-2xl font-semibold tracking-tight"
            >
              Cartify
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            
            <Link
              to="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="hover:text-white transition"
            >
              Shop
            </Link>

            <Link
              to="/orders"
              className="hover:text-white transition"
            >
              Orders
            </Link>

            {user?.role ===
              "admin" && (
              <Link
                to="/admin"
                className="hover:text-white transition"
              >
                Admin
              </Link>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            
            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="relative w-11 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center hover:border-zinc-700 transition"
            >
              <Heart size={20} />

              {wishlistItems.length >
                0 && (
                <span className="absolute -top-2 -right-2 min-w-[22px] h-[22px] px-1 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {
                    wishlistItems.length
                  }
                </span>
              )}
            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className="relative w-11 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center hover:border-zinc-700 transition"
            >
              <ShoppingBag
                size={20}
              />

              {cartItems.length >
                0 && (
                <span className="absolute -top-2 -right-2 min-w-[22px] h-[22px] px-1 rounded-full bg-white text-black text-xs font-medium flex items-center justify-center">
                  {
                    cartItems.length
                  }
                </span>
              )}
            </Link>

            {/* USER */}
            {user ? (
              <div className="flex items-center gap-3">
                
                {/* ADMIN */}
                {user.role ===
                  "admin" && (
                  <Link
                    to="/admin"
                    className="hidden md:flex w-11 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214] items-center justify-center hover:border-zinc-700 transition"
                  >
                    <LayoutDashboard
                      size={20}
                    />
                  </Link>
                )}

                {/* PROFILE */}
                <div className="hidden md:flex items-center gap-2 px-4 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214]">
                  
                  <User size={18} />

                  <span className="text-sm">
                    {user.name}
                  </span>
                </div>

                {/* LOGOUT */}
                <button
                  onClick={logout}
                  className="w-11 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center hover:border-zinc-700 transition"
                >
                  <LogOut
                    size={20}
                  />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex h-11 px-5 rounded-2xl bg-white text-black text-sm font-medium items-center justify-center hover:opacity-90 transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-[100] transition ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        
        {/* BACKDROP */}
        <div
          onClick={() =>
            setMenuOpen(false)
          }
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${
            menuOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}
        <div
          className={`absolute top-0 left-0 h-full w-[300px] bg-[#0B0B0C] border-r border-[#1F1F22] p-6 transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          
          {/* TOP */}
          <div className="flex items-center justify-between mb-10">
            
            <h2 className="text-2xl font-semibold">
              Cartify
            </h2>

            <button
              onClick={() =>
                setMenuOpen(false)
              }
              className="w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-4">
            
            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="h-14 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] flex items-center"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() =>
                setMenuOpen(false)
              }
              className="h-14 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] flex items-center"
            >
              Shop
            </Link>

            <Link
              to="/wishlist"
              onClick={() =>
                setMenuOpen(false)
              }
              className="h-14 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] flex items-center justify-between"
            >
              Wishlist

              <span className="text-sm text-zinc-500">
                {
                  wishlistItems.length
                }
              </span>
            </Link>

            <Link
              to="/cart"
              onClick={() =>
                setMenuOpen(false)
              }
              className="h-14 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] flex items-center justify-between"
            >
              Cart

              <span className="text-sm text-zinc-500">
                {
                  cartItems.length
                }
              </span>
            </Link>

            <Link
              to="/orders"
              onClick={() =>
                setMenuOpen(false)
              }
              className="h-14 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] flex items-center"
            >
              Orders
            </Link>

            {/* ADMIN */}
            {user?.role ===
              "admin" && (
              <Link
                to="/admin"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="h-14 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] flex items-center"
              >
                Admin Dashboard
              </Link>
            )}

            {/* LOGIN */}
            {!user && (
              <Link
                to="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="h-14 px-5 rounded-2xl bg-white text-black font-medium flex items-center justify-center"
              >
                Login
              </Link>
            )}

            {/* USER */}
            {user && (
              <button
                onClick={() => {
                  logout();

                  setMenuOpen(false);
                }}
                className="h-14 px-5 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;