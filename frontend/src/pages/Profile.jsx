import MainLayout from "../layouts/MainLayout";

import {
  User,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Heart,
  LogOut,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

import { useCart } from "../context/CartContext";

import {
  useWishlist,
} from "../context/WishlistContext";

const Profile = () => {
  const { user, logout } =
    useAuth();

  const { cartItems } =
    useCart();

  const { wishlistItems } =
    useWishlist();

  if (!user) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-zinc-500">
          Please login first.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            PROFILE
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            My Account
          </h1>
        </div>

        {/* PROFILE CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT */}
          <div className="lg:col-span-1">
            
            <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
              
              {/* AVATAR */}
              <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-3xl font-semibold mb-6">
                {user.name
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>

              {/* NAME */}
              <h2 className="text-3xl font-semibold mb-3">
                {user.name}
              </h2>

              {/* EMAIL */}
              <div className="flex items-center gap-3 text-zinc-400 mb-4">
                
                <Mail size={18} />

                <span>
                  {user.email}
                </span>
              </div>

              {/* ROLE */}
              <div className="flex items-center gap-3 text-zinc-400 mb-8">
                
                <ShieldCheck
                  size={18}
                />

                <span className="capitalize">
                  {user.role}
                </span>
              </div>

              {/* LOGOUT */}
              <button
                onClick={logout}
                className="w-full h-12 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center gap-2 hover:bg-red-500/20 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* CART */}
              <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
                
                <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-5">
                  
                  <ShoppingBag
                    size={24}
                  />
                </div>

                <h3 className="text-4xl font-semibold mb-2">
                  {
                    cartItems.length
                  }
                </h3>

                <p className="text-zinc-500">
                  Products in Cart
                </p>
              </div>

              {/* WISHLIST */}
              <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
                
                <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-5">
                  
                  <Heart size={24} />
                </div>

                <h3 className="text-4xl font-semibold mb-2">
                  {
                    wishlistItems.length
                  }
                </h3>

                <p className="text-zinc-500">
                  Wishlist Items
                </p>
              </div>
            </div>

            {/* ACCOUNT INFO */}
            <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
              
              <div className="flex items-center gap-3 mb-8">
                
                <User size={24} />

                <h3 className="text-3xl font-semibold">
                  Account Information
                </h3>
              </div>

              <div className="space-y-6">
                
                {/* NAME */}
                <div>
                  <p className="text-sm text-zinc-500 mb-2">
                    Full Name
                  </p>

                  <div className="h-14 px-5 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] flex items-center">
                    {user.name}
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <p className="text-sm text-zinc-500 mb-2">
                    Email Address
                  </p>

                  <div className="h-14 px-5 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] flex items-center">
                    {user.email}
                  </div>
                </div>

                {/* ROLE */}
                <div>
                  <p className="text-sm text-zinc-500 mb-2">
                    Account Role
                  </p>

                  <div className="h-14 px-5 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] flex items-center capitalize">
                    {user.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;