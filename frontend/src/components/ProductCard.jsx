import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { ShoppingBag } from "lucide-react";

import { useAuth } from "../context/AuthContext";

import { useCart } from "../context/CartContext";

const ProductCard = ({
  product,
}) => {
  const navigate =
    useNavigate();

  const { user } =
    useAuth();

  const { addToCart } =
    useCart();

  return (
    <div className="group bg-[#111214] rounded-3xl overflow-hidden border border-[#1F1F22] hover:border-zinc-700 transition-all">
      
      {/* IMAGE */}
      <Link
        to={`/product/${product._id}`}
      >
        <div className="overflow-hidden bg-white">
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[320px] object-contain p-6 group-hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-6">
        
        <p className="text-sm text-zinc-500 mb-2 capitalize">
          {product.category}
        </p>

        <h2 className="text-xl font-medium mb-4 line-clamp-1">
          {product.name}
        </h2>

        <div className="flex items-center justify-between gap-4">
          
          <span className="text-2xl font-semibold">
            ${product.price}
          </span>

          <button
            onClick={() => {
              if (!user) {
                toast.error(
                  "Please login first"
                );

                navigate("/login");

                return;
              }

              addToCart(product);

              toast.success(
                "Added to cart"
              );
            }}
            className="h-11 px-5 rounded-2xl bg-white text-black text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            <ShoppingBag
              size={16}
            />

            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;