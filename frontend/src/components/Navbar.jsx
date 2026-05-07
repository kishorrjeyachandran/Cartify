import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Heart,
  User,
  LogOut,
  LayoutDashboard,
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

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F1F22] bg-[#0B0B0C]/80 backdrop-blur-xl">
      
      <nav className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight"
        >
          Cartify
        </Link>

        {/* LINKS */}
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

        {/* ACTIONS */}
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
              
              {user.role ===
                "admin" && (
                <Link
                  to="/admin"
                  className="w-11 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center hover:border-zinc-700 transition"
                >
                  <LayoutDashboard
                    size={20}
                  />
                </Link>
              )}

              <div className="hidden md:flex items-center gap-2 px-4 h-11 rounded-2xl border border-[#1F1F22] bg-[#111214]">
                
                <User size={18} />

                <span className="text-sm">
                  {user.name}
                </span>
              </div>

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
              className="h-11 px-5 rounded-2xl bg-white text-black text-sm font-medium flex items-center justify-center hover:opacity-90 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;