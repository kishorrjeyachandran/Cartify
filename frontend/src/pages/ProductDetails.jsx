import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import {
  useWishlist,
} from "../context/WishlistContext";

import {
  getProductById,
} from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* FETCH PRODUCT */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data =
          await getProductById(id);

        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* LOADING */
  if (loading) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-zinc-500">
          Loading product...
        </div>
      </MainLayout>
    );
  }

  /* NOT FOUND */
  if (!product) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-zinc-500">
          Product not found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* IMAGE */}
          <div className="rounded-[32px] overflow-hidden border border-[#1F1F22] bg-white">
            
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-contain p-10"
            />
          </div>

          {/* CONTENT */}
          <div>
            
            {/* CATEGORY */}
            <p className="text-sm text-zinc-500 mb-4 capitalize">
              {product.category}
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="flex items-center gap-4 mb-8">
              
              <span className="text-3xl font-semibold">
                ${product.price}
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                In Stock
              </span>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-2 mb-8">
              
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="text-zinc-500 text-sm ml-2">
                Premium customer reviews
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 leading-8 text-lg mb-10">
              {product.description}
            </p>

            {/* STOCK */}
            <div className="mb-10">
              
              <div className="flex items-center justify-between mb-3">
                
                <span className="text-sm text-zinc-500">
                  Available Stock
                </span>

                <span className="text-sm font-medium">
                  {product.stock} Items
                </span>
              </div>

              <div className="w-full h-3 rounded-full bg-[#1F1F22] overflow-hidden">
                
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: `${Math.min(
                      product.stock * 5,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              {/* ADD TO CART */}
              <button
                onClick={() =>
                  addToCart(product)
                }
                className="flex-1 h-14 rounded-2xl bg-white text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <ShoppingBag size={20} />
                Add To Cart
              </button>

              {/* WISHLIST */}
              <button
                onClick={() =>
                  toggleWishlist(product)
                }
                className={`h-14 px-6 rounded-2xl border transition flex items-center justify-center ${
                  isInWishlist(
                    product._id
                  )
                    ? "bg-red-500/10 border-red-500/20 text-red-400"
                    : "border-[#1F1F22] bg-[#111214] hover:border-zinc-700"
                }`}
              >
                <Heart
                  size={20}
                  fill={
                    isInWishlist(
                      product._id
                    )
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>
            </div>

            {/* FEATURES */}
            <div className="space-y-5">
              
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#1F1F22] bg-[#111214]">
                
                <Truck className="text-zinc-400" />

                <div>
                  <h3 className="font-medium mb-1">
                    Free Shipping
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Free delivery for all orders over $100.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#1F1F22] bg-[#111214]">
                
                <ShieldCheck className="text-zinc-400" />

                <div>
                  <h3 className="font-medium mb-1">
                    Secure Payments
                  </h3>

                  <p className="text-sm text-zinc-500">
                    100% protected transactions and checkout.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#1F1F22] bg-[#111214]">
                
                <RotateCcw className="text-zinc-400" />

                <div>
                  <h3 className="font-medium mb-1">
                    Easy Returns
                  </h3>

                  <p className="text-sm text-zinc-500">
                    7-day hassle-free return policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;