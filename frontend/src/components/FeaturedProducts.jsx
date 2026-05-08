import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Minimal Watch",
    category: "Accessories",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "Premium Sneakers",
    category: "Fashion",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24">
      
      {/* HEADING */}
      <div className="mb-14">
        <p className="text-sm text-zinc-500 mb-3">
          FEATURED PRODUCTS
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Designed for modern lifestyles.
        </h2>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {Array.isArray(products) &&
products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group border border-[#1F1F22] bg-[#111214] rounded-3xl overflow-hidden hover:border-zinc-700 transition-all"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-medium">
                    {product.name}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    {product.category}
                  </p>
                </div>

                <span className="text-lg font-medium">
                  ${product.price}
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full h-11 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Add To Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;