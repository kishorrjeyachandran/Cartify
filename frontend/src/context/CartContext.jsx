import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

const CartContext =
  createContext();

export const CartProvider = ({
  children,
}) => {
  const [cartItems,
    setCartItems] =
    useState(() => {
      const storedCart =
        localStorage.getItem(
          "cart"
        );

      return storedCart
        ? JSON.parse(
            storedCart
          )
        : [];
    });

  /* SAVE */
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartItems
      )
    );
  }, [cartItems]);

  /* ADD */
  const addToCart = (
    product
  ) => {
    const exists =
      cartItems.find(
        (item) =>
          item._id ===
          product._id
      );

    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id ===
          product._id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  1,
              }
            : item
        )
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    toast.success(
      "Added to cart"
    );
  };

  /* REMOVE */
  const removeFromCart = (
    id
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          item._id !== id
      )
    );

    toast.success(
      "Removed from cart"
    );
  };

  /* INCREASE */
  const increaseQuantity = (
    id
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity +
                1,
            }
          : item
      )
    );
  };

  /* DECREASE */
  const decreaseQuantity = (
    id
  ) => {
    setCartItems((prev) =>
      (Array.isArray(prev)
  ? prev
  : []
).map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity >
                1
                  ? item.quantity -
                    1
                  : 1,
            }
          : item
      )
    );
  };

  /* CLEAR */
  const clearCart = () => {
    setCartItems([]);

    toast.success(
      "Cart cleared"
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);