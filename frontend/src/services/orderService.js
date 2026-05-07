import API from "./api";

/* CREATE ORDER */
export const createOrder = async (
  orderData,
  token
) => {
  const { data } = await API.post(
    "/orders",
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

/* GET MY ORDERS */
export const getMyOrders =
  async (token) => {
    const { data } = await API.get(
      "/orders/my-orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  };