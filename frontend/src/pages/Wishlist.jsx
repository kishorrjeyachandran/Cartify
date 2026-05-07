import MainLayout from "../layouts/MainLayout";

import {
  Heart,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import {
  useWishlist,
} from "../context/WishlistContext";

import {
  useCart,
} from "../context/CartContext";

const Wishlist = () => {
  const {
    wishlistItems,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } =
    useCart();

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            WISHLIST
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Saved Products
          </h1>
        </div>

        {/* EMPTY */}
        {wishlistItems.length ===
        0 ? (
          <div className="text-center py-24">
            
            <Heart
              size={60}
              className="mx-auto text-zinc-700 mb-6"
            />

            <h2 className="text-3xl font-semibold mb-4">
              Wishlist is empty
            </h2>

            <p className="text-zinc-500">
              Save products you love for later.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {wishlistItems.map(
              (product) => (
                <div
                  key={product._id}
                  className="flex flex-col md:flex-row gap-6 justify-between p-6 rounded-3xl border border-[#1F1F22] bg-[#111214]"
                >
                  {/* LEFT */}
                  <div className="flex gap-5">
                    
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white">
                      
                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                        className="w-full h-full object-contain p-4"
                      />
                    </div>

                    <div>
                      
                      <p className="text-sm text-zinc-500 capitalize mb-2">
                        {
                          product.category
                        }
                      </p>

                      <h2 className="text-2xl font-semibold mb-4">
                        {
                          product.name
                        }
                      </h2>

                      <p className="text-2xl font-medium">
                        $
                        {
                          product.price
                        }
                      </p>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-4">
                    
                    <button
                      onClick={() =>
                        addToCart(
                          product
                        )
                      }
                      className="h-12 px-5 rounded-2xl bg-white text-black font-medium flex items-center gap-2 hover:opacity-90 transition"
                    >
                      <ShoppingBag
                        size={18}
                      />
                      Add To Cart
                    </button>

                    <button
                      onClick={() =>
                        toggleWishlist(
                          product
                        )
                      }
                      className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center hover:bg-red-500/20 transition"
                    >
                      <Trash2
                        size={18}
                      />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Wishlist;