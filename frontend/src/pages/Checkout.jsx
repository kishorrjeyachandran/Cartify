import {
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import API from "../services/api";
import { useCart } from "../context/CartContext";

import { useAuth } from "../context/AuthContext";

import toast from "react-hot-toast";

const Checkout = () => {
  const navigate =
    useNavigate();

  const { user } =
    useAuth();

  const {
    cartItems,
    clearCart,
  } = useCart();

  const [loading,
    setLoading] =
    useState(false);

  const [showPayment,
    setShowPayment] =
    useState(false);

  /* SHIPPING FORM */
  const [formData,
    setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    });

  /* PAYMENT FORM */
  const [paymentData,
    setPaymentData] =
    useState({
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });

  /* PROTECT PAGE */
  useEffect(() => {
    if (!user) {
      toast.error(
        "Please login first"
      );

      navigate("/login");
    }
  }, [user, navigate]);

  /* SHIPPING INPUT */
  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /* PAYMENT INPUT */
  const handlePaymentChange =
    (e) => {
      setPaymentData({
        ...paymentData,
        [e.target.name]:
          e.target.value,
      });
    };

  /* TOTAL */
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      item.price *
        item.quantity,
    0
  );

  const total =
    subtotal + 20;

  /* OPEN PAYMENT */
  const handleCheckout =
    (e) => {
      e.preventDefault();

      const {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        postalCode,
      } = formData;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !postalCode
      ) {
        toast.error(
          "Please fill all fields"
        );

        return;
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(
          email
        )
      ) {
        toast.error(
          "Invalid email address"
        );

        return;
      }

      if (
        phone.length < 10
      ) {
        toast.error(
          "Invalid phone number"
        );

        return;
      }

      setShowPayment(true);
    };

  /* SAVE ORDER */
  const saveOrder =
    async (
      paymentMethod
    ) => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        await API.post(
  "/auth/verify-otp",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify({
              products:
                cartItems.map(
                  (
                    item
                  ) => ({
                    product:
                      item._id,

                    quantity:
                      item.quantity,
                  })
                ),

              totalPrice:
                total,

              paymentMethod,

              status:
                "Pending",
            }),
          }
        );

        toast.success(
          "Order placed successfully!"
        );

        clearCart();

        navigate("/orders");
      } catch (error) {
        console.log(error);

        toast.error(
          "Order failed"
        );
      }
    };

  /* CARD PAYMENT */
  const completePayment =
    async () => {
      const {
        cardName,
        cardNumber,
        expiry,
        cvv,
      } = paymentData;

      if (
        !cardName ||
        !cardNumber ||
        !expiry ||
        !cvv
      ) {
        toast.error(
          "Please fill payment details"
        );

        return;
      }

      if (
        cardNumber.length <
        16
      ) {
        toast.error(
          "Invalid card number"
        );

        return;
      }

      setLoading(true);

      setTimeout(
        async () => {
          await saveOrder(
            "Card"
          );

          setLoading(false);

          setShowPayment(
            false
          );
        },
        2000
      );
    };

  return (
    <MainLayout>
      <section className="py-16">
        
        {/* HEADER */}
        <div className="mb-12">
          
          <p className="text-sm text-zinc-500 mb-3">
            CHECKOUT
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Secure Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
          
          {/* FORM */}
          <form
            onSubmit={
              handleCheckout
            }
            className="space-y-8"
          >
            
            <div className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]">
              
              <h2 className="text-3xl font-semibold mb-8">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <input
                  type="text"
                  name="firstName"
                  value={
                    formData.firstName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="First Name"
                  className="h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="text"
                  name="lastName"
                  value={
                    formData.lastName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Last Name"
                  className="h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Email Address"
                  className="md:col-span-2 h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Phone Number"
                  className="md:col-span-2 h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="text"
                  name="address"
                  value={
                    formData.address
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Street Address"
                  className="md:col-span-2 h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="text"
                  name="city"
                  value={
                    formData.city
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="City"
                  className="h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="text"
                  name="postalCode"
                  value={
                    formData.postalCode
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Postal Code"
                  className="h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />
              </div>
            </div>
          </form>

          {/* SUMMARY */}
          <div className="h-fit rounded-3xl border border-[#1F1F22] bg-[#111214] p-8 sticky top-24">
            
            <h2 className="text-3xl font-semibold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5 border-b border-[#1F1F22] pb-6 mb-6">
              
              {cartItems.map(
                (item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4"
                  >
                    
                    <div className="flex items-center gap-4">
                      
                      <img
                        src={
                          item.image
                        }
                        alt={
                          item.name
                        }
                        className="w-16 h-16 rounded-xl bg-white object-contain p-2"
                      />

                      <div>
                        
                        <h3 className="font-medium">
                          {
                            item.name
                          }
                        </h3>

                        <p className="text-sm text-zinc-500">
                          Qty:
                          {
                            item.quantity
                          }
                        </p>
                      </div>
                    </div>

                    <span>
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(
                        2
                      )}
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="flex items-center justify-between mb-8">
              
              <span className="text-lg text-zinc-400">
                Total
              </span>

              <span className="text-3xl font-semibold">
                $
                {total.toFixed(
                  2
                )}
              </span>
            </div>

            <button
              onClick={
                handleCheckout
              }
              className="w-full h-14 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition"
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </section>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
          
          <div className="w-full max-w-lg rounded-[32px] border border-[#1F1F22] bg-[#111214] p-8">
            
            <div className="flex items-center justify-between mb-8">
              
              <div>
                
                <p className="text-sm text-zinc-500 mb-2">
                  PAYMENT
                </p>

                <h2 className="text-3xl font-semibold">
                  Choose Payment Method
                </h2>
              </div>

              <button
                onClick={() =>
                  setShowPayment(
                    false
                  )
                }
                className="w-10 h-10 rounded-xl border border-[#1F1F22] bg-[#151618]"
              >
                ✕
              </button>
            </div>

            {/* COD */}
            <button
              onClick={async () => {
                setLoading(true);

                await saveOrder(
                  "Cash On Delivery"
                );

                setLoading(false);

                setShowPayment(
                  false
                );
              }}
              className="w-full h-14 rounded-2xl bg-green-500 text-white font-medium hover:opacity-90 transition mb-6"
            >
              Cash On Delivery
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 mb-6">
              
              <div className="flex-1 h-px bg-[#1F1F22]" />

              <span className="text-sm text-zinc-500">
                OR PAY BY CARD
              </span>

              <div className="flex-1 h-px bg-[#1F1F22]" />
            </div>

            {/* CARD FORM */}
            <div className="space-y-5">
              
              <input
                type="text"
                name="cardName"
                value={
                  paymentData.cardName
                }
                onChange={
                  handlePaymentChange
                }
                placeholder="Card Holder Name"
                className="w-full h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
              />

              <input
                type="text"
                name="cardNumber"
                value={
                  paymentData.cardNumber
                }
                onChange={
                  handlePaymentChange
                }
                placeholder="1234 5678 9012 3456"
                className="w-full h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
              />

              <div className="grid grid-cols-2 gap-5">
                
                <input
                  type="text"
                  name="expiry"
                  value={
                    paymentData.expiry
                  }
                  onChange={
                    handlePaymentChange
                  }
                  placeholder="MM/YY"
                  className="h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />

                <input
                  type="password"
                  name="cvv"
                  value={
                    paymentData.cvv
                  }
                  onChange={
                    handlePaymentChange
                  }
                  placeholder="CVV"
                  className="h-14 rounded-2xl bg-[#0B0B0C] border border-[#1F1F22] px-5 outline-none"
                />
              </div>

              <button
                onClick={
                  completePayment
                }
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition"
              >
                {loading
                  ? "Processing..."
                  : "Complete Purchase"}
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Checkout;