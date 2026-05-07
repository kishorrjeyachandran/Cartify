import axios from "axios";

const API =
  "http://localhost:5000/api/products";

/* GET PRODUCTS */
export const getProducts =
  async () => {
    const { data } =
      await axios.get(API);

    return data;
  };

/* GET PRODUCT */
export const getProductById =
  async (id) => {
    const { data } =
      await axios.get(
        `${API}/${id}`
      );

    return data;
  };