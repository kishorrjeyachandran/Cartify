import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

const WishlistContext =
  createContext();

export const WishlistProvider = ({
  children,
}) => {
  const [wishlistItems,
    setWishlistItems] =
    useState(() => {
      const storedWishlist =
        localStorage.getItem(
          "wishlist"
        );

      return storedWishlist
        ? JSON.parse(
            storedWishlist
          )
        : [];
    });

  /* SAVE */
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );
  }, [wishlistItems]);

  /* TOGGLE */
  const toggleWishlist = (
    product
  ) => {
    const exists =
      wishlistItems.find(
        (item) =>
          item._id ===
          product._id
      );

    if (exists) {
      setWishlistItems((prev) =>
        prev.filter(
          (item) =>
            item._id !==
            product._id
        )
      );

      toast.success(
        "Removed from wishlist"
      );
    } else {
      setWishlistItems((prev) => [
        ...prev,
        product,
      ]);

      toast.success(
        "Added to wishlist"
      );
    }
  };

  /* CHECK */
  const isInWishlist = (
    id
  ) => {
    return wishlistItems.some(
      (item) => item._id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () =>
  useContext(
    WishlistContext
  );