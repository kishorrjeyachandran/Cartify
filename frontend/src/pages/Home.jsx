import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import {
  ArrowRight,
  ShoppingBag,
  Star,
} from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import MainLayout from "../layouts/MainLayout";

import {
  getProducts,
} from "../services/productService";

import {
  useCart,
} from "../context/CartContext";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
const slides = [
  {
    title:
      "Discover Premium Fashion",
    subtitle:
      "Curated styles for modern lifestyles.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title:
      "Upgrade Your Workspace",
    subtitle:
      "Minimal tech products built for productivity.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title:
      "Modern Living Essentials",
    subtitle:
      "Premium collections for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
];

const Home = () => {
  const navigate =
  useNavigate();

const { user } =
  useAuth();
  const [products, setProducts] =
    useState([]);

  const { addToCart } =
    useCart();

  /* FETCH PRODUCTS */
  useEffect(() => {
    const fetchProducts =
      async () => {
        try {
          const data =
            await getProducts();

          setProducts(
            data.slice(0, 6)
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchProducts();
  }, []);

  return (
    <MainLayout>
      {/* HERO */}
     
<section className="py-10">
  <HeroSlider />
</section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
        
        <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
          
          <h3 className="text-2xl font-semibold mb-4">
            Premium Products
          </h3>

          <p className="text-zinc-400 leading-7">
            Carefully selected modern products designed
            for quality and comfort.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
          
          <h3 className="text-2xl font-semibold mb-4">
            Fast Delivery
          </h3>

          <p className="text-zinc-400 leading-7">
            Get your products delivered quickly with
            secure and reliable shipping.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
          
          <h3 className="text-2xl font-semibold mb-4">
            Secure Payments
          </h3>

          <p className="text-zinc-400 leading-7">
            Experience safe and protected transactions
            across all purchases.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="pb-24">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          
          <div>
            <p className="text-sm text-zinc-500 mb-3">
              FEATURED
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Trending Products
            </h2>
          </div>

          <Link
            to="/shop"
            className="hidden md:flex h-12 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] items-center gap-2 hover:border-zinc-700 transition"
          >
            View All

            <ArrowRight
              size={18}
            />
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {Array.isArray(products) &&
products.map(
            (product) => (
              <div
                key={product._id}
                className="group rounded-3xl overflow-hidden border border-[#1F1F22] bg-[#111214] hover:border-zinc-700 transition-all"
              >
                {/* LINK */}
                <Link
                  to={`/product/${product._id}`}
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden bg-white">
                    
                    <img
                      src={
                        product.image
                      }
                      alt={
                        product.name
                      }
                      className="w-full h-[340px] object-contain p-6 group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    
                    <div className="flex items-center justify-between gap-5 mb-4">
                      
                      <div>
                        <p className="text-sm text-zinc-500 mb-1 capitalize">
                          {
                            product.category
                          }
                        </p>

                        <h2 className="text-xl font-medium line-clamp-1">
                          {
                            product.name
                          }
                        </h2>
                      </div>

                      <span className="text-lg font-semibold whitespace-nowrap">
                        $
                        {
                          product.price
                        }
                      </span>
                    </div>
                  </div>
                </Link>

                {/* BUTTON */}
                <div className="px-6 pb-6">
                  
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
}}
                    className="w-full h-11 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;