import {
  useEffect,
  useState,
} from "react";
import API from "../services/api";
import axios from "axios";

import {
  Link,
  useParams,
} from "react-router-dom";

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
  useAuth,
} from "../context/AuthContext";

import {
  getProductById,
  getProducts,
} from "../services/productService";

import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const { user } = useAuth();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [rating, setRating] =
    useState(5);

  const [comment, setComment] =
    useState("");

  const [relatedProducts,
    setRelatedProducts] =
    useState([]);

  /* FETCH PRODUCT */
  const fetchProduct =
    async () => {
      try {
        const data =
          await getProductById(
            id
          );

        setProduct(data);

        /* RELATED PRODUCTS */
        const allProducts =
          await getProducts();

        const related =
          allProducts.filter(
            (item) =>
              item.category ===
                data.category &&
              item._id !==
                data._id
          );

        setRelatedProducts(
          related.slice(0, 4)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  /* SUBMIT REVIEW */
  const submitReview =
    async (e) => {
      e.preventDefault();

      try {
        const token =
          localStorage.getItem(
            "token"
          );

        await API.post(
  `/products/${id}/reviews`,
          {
            rating,
            comment,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Review added"
        );

        setComment("");

        fetchProduct();
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Something went wrong"
        );
      }
    };

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
        
        {/* TOP */}
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
            
            <p className="text-sm text-zinc-500 mb-4 capitalize">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              
              <span className="text-3xl font-semibold">
                ${product.price}
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                In Stock
              </span>
            </div>

            <p className="text-zinc-400 leading-8 text-lg mb-10">
              {product.description}
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              <button
                onClick={() =>
                  addToCart(product)
                }
                className="flex-1 h-14 rounded-2xl bg-white text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <ShoppingBag size={20} />
                Add To Cart
              </button>

              <button
                onClick={() =>
                  toggleWishlist(
                    product
                  )
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
            <div className="space-y-5 mb-16">
              
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

        {/* REVIEWS */}
        <section className="mt-24">
          
          <div className="mb-10">
            
            <p className="text-sm text-zinc-500 mb-3">
              REVIEWS
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Customer Reviews
            </h2>
          </div>

          {/* REVIEW FORM */}
          {user && (
            <form
              onSubmit={
                submitReview
              }
              className="mb-16 p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]"
            >
              
              <h3 className="text-2xl font-semibold mb-6">
                Write a Review
              </h3>

              <div className="mb-6">
                
                <label className="block mb-3 text-sm text-zinc-400">
                  Rating
                </label>

                <select
                  value={rating}
                  onChange={(e) =>
                    setRating(
                      e.target.value
                    )
                  }
                  className="w-full h-12 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-4 outline-none"
                >
                  <option value="5">
                    5 Stars
                  </option>

                  <option value="4">
                    4 Stars
                  </option>

                  <option value="3">
                    3 Stars
                  </option>

                  <option value="2">
                    2 Stars
                  </option>

                  <option value="1">
                    1 Star
                  </option>
                </select>
              </div>

              <div className="mb-6">
                
                <label className="block mb-3 text-sm text-zinc-400">
                  Comment
                </label>

                <textarea
                  rows="5"
                  value={comment}
                  onChange={(e) =>
                    setComment(
                      e.target.value
                    )
                  }
                  placeholder="Write your review..."
                  className="w-full rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-4 py-4 outline-none resize-none"
                />
              </div>

              <button className="h-12 px-6 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition">
                Submit Review
              </button>
            </form>
          )}

          {/* REVIEWS LIST */}
          <div className="space-y-6">
            
            {product.reviews &&
            product.reviews.length >
              0 ? (
              Array.isArray(product.reviews) &&
product.reviews.map(
                (
                  review,
                  index
                ) => (
                  <div
                    key={index}
                    className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]"
                  >
                    
                    <div className="flex items-center justify-between mb-5">
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {
                            review.user
                          }
                        </h3>

                        <p className="text-sm text-zinc-500">
                          {new Date(
                            review.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex gap-1">
                        
                        {[
                          ...Array(
                            review.rating
                          ),
                        ].map(
                          (
                            _,
                            i
                          ) => (
                            <Star
                              key={i}
                              size={18}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-8">
                      {
                        review.comment
                      }
                    </p>
                  </div>
                )
              )
            ) : (
              <div className="text-zinc-500">
                No reviews yet.
              </div>
            )}
          </div>
        </section>

        {/* RELATED PRODUCTS */}
        <section className="mt-28">
          
          <div className="mb-10">
            
            <p className="text-sm text-zinc-500 mb-3">
              RELATED
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {Array.isArray(relatedProducts) &&
relatedProducts.map(
              (item) => (
                <div
                  key={item._id}
                  className="group rounded-3xl overflow-hidden border border-[#1F1F22] bg-[#111214] hover:border-zinc-700 transition-all"
                >
                  
                  <Link
                    to={`/product/${item._id}`}
                  >
                    
                    <div className="overflow-hidden bg-white">
                      
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[280px] object-contain p-6 group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-6">
                      
                      <p className="text-sm text-zinc-500 mb-2 capitalize">
                        {item.category}
                      </p>

                      <h3 className="text-xl font-medium line-clamp-1 mb-4">
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        
                        <span className="text-lg font-semibold">
                          ${item.price}
                        </span>

                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            addToCart(
                              item
                            );
                          }}
                          className="h-10 px-4 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </section>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;