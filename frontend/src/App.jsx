import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* SHOP */}
      <Route
        path="/shop"
        element={<Shop />}
      />

      {/* PRODUCT DETAILS */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      {/* CART */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
  path="/profile"
  element={<Profile />}
/>

      {/* CHECKOUT */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />

      {/* WISHLIST */}
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* ORDERS */}
      <Route
        path="/orders"
        element={<Orders />}
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={<AdminDashboard />}
      />
    </Routes>
  );
}

export default App;