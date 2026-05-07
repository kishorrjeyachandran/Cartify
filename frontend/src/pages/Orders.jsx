import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../layouts/MainLayout";

import {
  Package,
  Truck,
  CheckCircle2,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

import {
  getMyOrders,
} from "../services/orderService";

const Orders = () => {
  const { user } = useAuth();

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        const data =
          await getMyOrders(
            user.token
          );

        setOrders(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  /* NOT LOGGED IN */
  if (!user) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-zinc-500">
          Please login to view orders.
        </div>
      </MainLayout>
    );
  }

  /* LOADING */
  if (loading) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-zinc-500">
          Loading orders...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            ORDERS
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Order History
          </h1>
        </div>

        {/* EMPTY */}
        {orders.length === 0 ? (
          <div className="text-center py-24 text-zinc-500">
            No orders found.
          </div>
        ) : (
          <div className="space-y-8">
            
            {orders.map((order) => (
              <div
                key={order._id}
                className="rounded-3xl border border-[#1F1F22] bg-[#111214] overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  
                  {/* TOP */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                    
                    <div>
                      <p className="text-sm text-zinc-500 mb-2">
                        Order ID
                      </p>

                      <h2 className="text-2xl font-semibold">
                        #{order._id.slice(-6)}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      
                      <div className="px-4 h-11 rounded-xl border border-[#1F1F22] bg-[#151618] flex items-center">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </div>

                      <div className="px-4 h-11 rounded-xl bg-green-500/10 text-green-400 flex items-center">
                        {order.status}
                      </div>
                    </div>
                  </div>

                  {/* PRODUCTS */}
                  <div className="space-y-5 mb-10">
                    
                    {order.products.map(
                      (item) => (
                        <div
                          key={
                            item.product._id
                          }
                          className="flex flex-col md:flex-row gap-5"
                        >
                          {/* IMAGE */}
                          <div className="w-full md:w-[140px] h-[140px] rounded-2xl overflow-hidden bg-white">
                            
                            <img
                              src={
                                item.product
                                  .image
                              }
                              alt={
                                item.product
                                  .name
                              }
                              className="w-full h-full object-contain p-4"
                            />
                          </div>

                          {/* INFO */}
                          <div className="flex-1 flex flex-col justify-between">
                            
                            <div>
                              <p className="text-sm text-zinc-500 mb-2 capitalize">
                                {
                                  item.product
                                    .category
                                }
                              </p>

                              <h3 className="text-2xl font-semibold mb-4">
                                {
                                  item.product
                                    .name
                                }
                              </h3>

                              <p className="text-zinc-400">
                                Quantity:{" "}
                                {
                                  item.quantity
                                }
                              </p>
                            </div>

                            <p className="text-xl font-medium mt-4">
                              $
                              {item.product.price *
                                item.quantity}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* TOTAL */}
                  <div className="flex items-center justify-between mb-10">
                    
                    <span className="text-lg text-zinc-400">
                      Total Amount
                    </span>

                    <span className="text-3xl font-semibold">
                      $
                      {order.totalPrice}
                    </span>
                  </div>

                  {/* TRACKING */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    <div className="p-5 rounded-2xl border border-[#1F1F22] bg-[#151618]">
                      
                      <div className="flex items-center gap-3 mb-3">
                        <Package size={20} />

                        <h4 className="font-medium">
                          Order Placed
                        </h4>
                      </div>

                      <p className="text-sm text-zinc-500 leading-6">
                        Your order has been successfully placed.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-[#1F1F22] bg-[#151618]">
                      
                      <div className="flex items-center gap-3 mb-3">
                        <Truck size={20} />

                        <h4 className="font-medium">
                          Shipping
                        </h4>
                      </div>

                      <p className="text-sm text-zinc-500 leading-6">
                        Your package is on the way.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-[#1F1F22] bg-[#151618]">
                      
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle2 size={20} />

                        <h4 className="font-medium">
                          Delivered
                        </h4>
                      </div>

                      <p className="text-sm text-zinc-500 leading-6">
                        Package delivered successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Orders;