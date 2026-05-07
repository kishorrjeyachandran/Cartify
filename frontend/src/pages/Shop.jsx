import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../layouts/MainLayout";

import ProductCard from "../components/ProductCard";

import {
  getProducts,
} from "../services/productService";

const Shop = () => {
  const [products,
    setProducts] =
    useState([]);

  const [filteredProducts,
    setFilteredProducts] =
    useState([]);

  const [category,
    setCategory] =
    useState("All");

  const [sort,
    setSort] =
    useState("");

  const [loading,
    setLoading] =
    useState(true);

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

  /* FILTER + SORT */
  useEffect(() => {
    let updated =
      [...products];

    /* CATEGORY */
    if (
      category !== "All"
    ) {
      updated =
        updated.filter(
          (product) =>
            product.category ===
            category
        );
    }

    /* SORT */
    if (
      sort === "low-high"
    ) {
      updated.sort(
        (a, b) =>
          a.price -
          b.price
      );
    }

    if (
      sort === "high-low"
    ) {
      updated.sort(
        (a, b) =>
          b.price -
          a.price
      );
    }

    setFilteredProducts(
      updated
    );
  }, [
    category,
    sort,
    products,
  ]);

  /* UNIQUE CATEGORIES */
  const categories = [
    "All",
    ...new Set(
      products.map(
        (p) =>
          p.category
      )
    ),
  ];

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            SHOP
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Explore Products
          </h1>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-12">
          
          {/* CATEGORIES */}
          <div className="flex flex-wrap gap-3">
            
            {categories.map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setCategory(
                      cat
                    )
                  }
                  className={`h-11 px-5 rounded-2xl border transition ${
                    category ===
                    cat
                      ? "bg-white text-black border-white"
                      : "bg-[#111214] border-[#1F1F22] hover:border-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* SORT */}
          <select
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value
              )
            }
            className="h-12 px-5 rounded-2xl bg-[#111214] border border-[#1F1F22] outline-none"
          >
            <option value="">
              Sort By
            </option>

            <option value="low-high">
              Price: Low → High
            </option>

            <option value="high-low">
              Price: High → Low
            </option>
          </select>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="py-32 text-center text-zinc-500">
            Loading products...
          </div>
        ) : (
          <>
            {/* COUNT */}
            <div className="flex items-center justify-between mb-8">
              
              <p className="text-zinc-500">
                Showing{" "}
                {
                  filteredProducts.length
                }{" "}
                products
              </p>
            </div>

            {/* PRODUCTS */}
            {filteredProducts.length ===
            0 ? (
              <div className="py-24 text-center text-zinc-500">
                No products found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                
                {filteredProducts.map(
                  (product) => (
                    <ProductCard
                      key={
                        product._id
                      }
                      product={
                        product
                      }
                    />
                  )
                )}
              </div>
            )}
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default Shop;