import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";

import {
  CartProvider,
} from "./context/CartContext";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  WishlistProvider,
} from "./context/WishlistContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background:
                    "#111214",
                  color: "#fff",
                  border:
                    "1px solid #1F1F22",
                },
              }}
            />

            <App />
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);