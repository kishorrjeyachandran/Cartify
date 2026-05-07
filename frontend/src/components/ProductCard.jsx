import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2">
          {product.title}
        </h2>

        <p className="text-zinc-400 mb-4">{product.price}</p>

        <Link
          to={`/product/${product.id}`}
          className="inline-block bg-white text-black px-4 py-2 rounded-xl font-medium"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;