import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import {
  getProducts,
} from "../services/productService";

const Shop = () => {
  const { addToCart } = useCart();

  const [products, setProducts] =
    useState([]);

  const [filteredProducts,
    setFilteredProducts] =
    useState([]);

  const [search,
    setSearch] =
    useState("");

  const [loading,
    setLoading] =
    useState(true);

  const [selectedCategory,
    setSelectedCategory] =
    useState("All");

  const [sortBy,
    setSortBy] =
    useState("Newest");

  /* FETCH PRODUCTS */
  useEffect(() => {
    const fetchProducts =
      async () => {
        try {
          const data =
            await getProducts();

          setProducts(data);

          setFilteredProducts(
            data
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchProducts();
  }, []);

  /* UNIQUE CATEGORIES */
  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];

  /* FILTER + SORT */
  useEffect(() => {
    let filtered = [
      ...products,
    ];

    /* SEARCH */
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          product.category
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }

    /* CATEGORY */
    if (
      selectedCategory !== "All"
    ) {
      filtered = filtered.filter(
        (product) =>
          product.category ===
          selectedCategory
      );
    }

    /* SORT */
    switch (sortBy) {
      case "Price Low":
        filtered.sort(
          (a, b) =>
            a.price - b.price
        );
        break;

      case "Price High":
        filtered.sort(
          (a, b) =>
            b.price - a.price
        );
        break;

      case "A-Z":
        filtered.sort((a, b) =>
          a.name.localeCompare(
            b.name
          )
        );
        break;

      default:
        filtered.reverse();
        break;
    }

    setFilteredProducts(
      filtered
    );
  }, [
    search,
    products,
    selectedCategory,
    sortBy,
  ]);

  return (
    <MainLayout>
      {/* HEADER */}
      <section className="pt-16 pb-10">
        
        <p className="text-sm text-zinc-500 mb-3">
          SHOP
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Explore Products
        </h1>

        <p className="text-zinc-400 text-lg max-w-2xl leading-8">
          Discover curated premium products designed
          for modern lifestyles and everyday comfort.
        </p>
      </section>

      {/* TOP BAR */}
      <section className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-10">
        
        {/* SEARCH */}
        <div className="relative w-full lg:max-w-md">
          
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full h-12 rounded-2xl bg-[#111214] border border-[#1F1F22] pl-12 pr-4 outline-none focus:border-zinc-700 transition"
          />
        </div>

        {/* SORT */}
        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-2 px-4 h-12 rounded-2xl bg-[#111214] border border-[#1F1F22]">
            
            <SlidersHorizontal
              size={18}
            />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              className="bg-transparent outline-none text-sm"
            >
              <option>
                Newest
              </option>

              <option>
                Price Low
              </option>

              <option>
                Price High
              </option>

              <option>
                A-Z
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">
        
        {categories.map(
          (category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category
                )
              }
              className={`h-11 px-5 rounded-xl whitespace-nowrap transition ${
                selectedCategory ===
                category
                  ? "bg-white text-black"
                  : "bg-[#111214] border border-[#1F1F22] hover:border-zinc-700"
              }`}
            >
              {category}
            </button>
          )
        )}
      </section>

      {/* LOADING */}
      {loading ? (
        <div className="text-center py-20 text-zinc-500">
          Loading products...
        </div>
      ) : filteredProducts.length ===
        0 ? (
        <div className="text-center py-20 text-zinc-500">
          No products found.
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          
          {filteredProducts.map(
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
                    onClick={() =>
                      addToCart(
                        product
                      )
                    }
                    className="w-full h-11 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )
          )}
        </section>
      )}
    </MainLayout>
  );
};

export default Shop;