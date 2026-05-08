import {
  useEffect,
  useState,
} from "react";
import API from "../services/api";
import MainLayout from "../layouts/MainLayout";

import {
  PackageCheck,
} from "lucide-react";

const Orders = () => {
  const [orders,
    setOrders] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {
    const fetchOrders =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await API.get(
  "/orders/my-orders",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          const data =
            await res.json();

          setOrders(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchOrders();
  }, []);

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
            My Orders
          </h1>
        </div>

        {/* EMPTY */}
        {!Array.isArray(orders) ||
orders.length === 0 ? (
          <div className="rounded-3xl border border-[#1F1F22] bg-[#111214] py-24 px-6 text-center">
            
            <div className="w-24 h-24 rounded-full bg-[#151618] flex items-center justify-center mx-auto mb-8">
              
              <PackageCheck
                size={40}
              />
            </div>

            <h2 className="text-4xl font-semibold mb-4">
              No Orders Yet
            </h2>

            <p className="text-zinc-500">
              Your order history will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            
            {Array.isArray(orders) &&
orders.map(
              (order) => (
                <div
                  key={
                    order._id
                  }
                  className="rounded-3xl border border-[#1F1F22] bg-[#111214] p-8"
                >
                  
                  {/* TOP */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    
                    <div>
                      
                      <p className="text-sm text-zinc-500 mb-2">
                        Order ID
                      </p>

                      <h2 className="text-xl font-medium">
                        {
                          order._id
                        }
                      </h2>
                    </div>

                    <div className="flex items-center gap-4">
                      
                      <div className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm">
                        {
                          order.status
                        }
                      </div>

                      <div className="text-2xl font-semibold">
                        $
                        {
                          order.totalPrice
                        }
                      </div>
                    </div>
                  </div>

                  {/* PRODUCTS */}
                  <div className="space-y-5">
                    
                    {Array.isArray(
  order.products
) &&
  order.products.map(
                      (
                        item,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                          className="flex items-center justify-between border border-[#1F1F22] rounded-2xl p-5"
                        >
                          
                          <div className="flex items-center gap-5">
                            
                            <img
                              src={
                                item.product &&
item.product.image
                              }
                              alt={
                                item.product &&
item.product.name
                              }
                              className="w-20 h-20 rounded-2xl bg-white object-contain p-3"
                            />

                            <div>
                              
                              <h3 className="text-lg font-medium mb-2">
                                {
                                  item.product &&
item.product.name
                                }
                              </h3>

                              <p className="text-zinc-500">
                                Quantity:
                                {
                                  item.quantity
                                }
                              </p>
                            </div>
                          </div>

                          <div className="text-lg font-semibold">
                            $
                            {
                              item.product &&
item.product.price
                            }
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Orders;