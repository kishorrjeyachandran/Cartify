import API from "./api";

/* GET PRODUCTS */
export const getProducts =
  async () => {
    const { data } =
      await API.get(
        "/products"
      );

    return data;
  };

/* GET PRODUCT */
export const getProductById =
  async (id) => {
    const { data } =
      await API.get(
        `/products/${id}`
      );

    return data;
  };