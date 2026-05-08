import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../layouts/MainLayout";

import {
  Trash2,
  Package,
  Plus,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

import {
  getProducts,
} from "../services/productService";

import API from "../services/api";

const AdminDashboard = () => {
  const { user } = useAuth();

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      category: "",
      description: "",
      price: "",
      image: "",
      stock: "",
    });

  /* FETCH PRODUCTS */
  const fetchProducts =
    async () => {
      try {
        const data =
          await getProducts();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /* CREATE PRODUCT */
  const handleCreate =
    async (e) => {
      e.preventDefault();

      try {
        await API.post(
          "/products",
          {
            ...formData,
            price: Number(
              formData.price
            ),
            stock: Number(
              formData.stock
            ),
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setShowModal(false);

        setFormData({
          name: "",
          category: "",
          description: "",
          price: "",
          image: "",
          stock: "",
        });

        fetchProducts();
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Create failed"
        );
      }
    };

  /* DELETE PRODUCT */
  const handleDelete =
    async (id) => {
      try {
        await API.delete(
          `/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        fetchProducts();
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Delete failed"
        );
      }
    };

  /* NOT ADMIN */
  if (
    !user ||
    user.role !== "admin"
  ) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-zinc-500">
          Admin access only.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          
          <div>
            <p className="text-sm text-zinc-500 mb-3">
              ADMIN
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Dashboard
            </h1>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="h-12 px-5 rounded-2xl bg-white text-black font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
            
            <div className="flex items-center justify-between mb-6">
              
              <Package size={28} />

              <span className="text-zinc-500">
                Products
              </span>
            </div>

            <h2 className="text-5xl font-semibold">
              {products.length}
            </h2>
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="text-center text-zinc-500">
            Loading...
          </div>
        ) : (
          <div className="space-y-5">
            
            {Array.isArray(products) &&
products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row md:items-center gap-5 justify-between p-5 rounded-3xl border border-[#1F1F22] bg-[#111214]"
              >
                {/* LEFT */}
                <div className="flex items-center gap-5">
                  
                  {/* IMAGE */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white">
                    
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-3"
                    />
                  </div>

                  {/* INFO */}
                  <div>
                    
                    <p className="text-sm text-zinc-500 capitalize mb-1">
                      {product.category}
                    </p>

                    <h2 className="text-xl font-medium mb-2">
                      {product.name}
                    </h2>

                    <p className="text-zinc-400">
                      ${product.price}
                    </p>
                  </div>
                </div>

                {/* DELETE */}
                <button
                  onClick={() =>
                    handleDelete(
                      product._id
                    )
                  }
                  className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center hover:bg-red-500/20 transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
          
          <div className="w-full max-w-2xl rounded-3xl border border-[#1F1F22] bg-[#111214] p-8">
            
            <div className="flex items-center justify-between mb-8">
              
              <h2 className="text-3xl font-semibold">
                Add Product
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="text-zinc-500 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleCreate}
              className="space-y-5"
            >
              
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
              />

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-32 px-5 py-4 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none resize-none"
              />

              <div className="grid grid-cols-2 gap-5">
                
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
                />
              </div>

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl bg-[#151618] border border-[#1F1F22] outline-none"
              />

              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition"
              >
                Create Product
              </button>
            </form>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default AdminDashboard;