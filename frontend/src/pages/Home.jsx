import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import PromoBanner from "../components/PromoBanner";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#1F1F22] bg-[#111214] text-sm text-zinc-400 mb-8">
              Modern E-Commerce Experience
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Modern Shopping,
              <br />
              Simplified.
            </h1>

            <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">
              Discover curated products with a fast,
              seamless shopping experience designed
              for modern users.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              
              <button className="h-12 px-6 rounded-xl bg-white text-black font-medium flex items-center gap-2 hover:opacity-90 transition">
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button className="h-12 px-6 rounded-xl border border-[#1F1F22] bg-[#111214] hover:bg-[#151618] transition">
                Browse Products
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-[32px]" />

            {/* Card */}
            <div className="relative border border-[#1F1F22] bg-[#111214] rounded-[32px] overflow-hidden">
              
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Watch"
                className="w-full h-[500px] object-cover"
              />

              <div className="p-6 border-t border-[#1F1F22]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      Smart Watch
                    </h2>

                    <p className="text-zinc-500 mt-1">
                      Series X Collection
                    </p>
                  </div>

                  <span className="text-xl font-medium">
                    $199
                  </span>
                </div>

                <button className="w-full h-12 rounded-xl bg-white text-black font-medium hover:opacity-90 transition">
                  Add To Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Categories />

      {/* FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* PROMO BANNER */}
      <PromoBanner />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />
    </MainLayout>
  );
};

export default Home;