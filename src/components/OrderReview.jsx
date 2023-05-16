import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import {
  clearCartFromBd,
  deleteCartFromBd,
  getLocalData,
} from "./utility/fakeDB";
import OrderSummary from "./OrderSummary/OrderSummary";
import ReviewItem from "./ReviewItem/ReviewItem";

const OrderReview = () => {
  const [cart, setCart] = useState([]);
  const { cartItems } = useLoaderData();
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);
  const clearCart = () => {
    setCart([]);
    clearCartFromBd();
  };
  const handleDeleteProduct = id => {
    const filteredItem = cart.filter(pd => pd._id != id);
    setCart(filteredItem);
    deleteCartFromBd(id);
  };
  return (
    <div className="container mx-auto pl-2">
      <div className="grid md:grid-cols-4">
        <div className="col-span-3 space-y-5 mt-10">
          {cart.length === 0 ? (
            <div>
              <h2 className="text-center text-5xl text-amber-500">
                Your cart is empty.
              </h2>
            </div>
          ) : (
            cart.map(product => (
              <ReviewItem
                key={product._id}
                product={product}
                handleDelete={handleDeleteProduct}
              />
            ))
          )}
        </div>
        <div className="col-span-1 bg-orange-300 p-4 min-h-screen">
          <div className="sticky top-5">
            <OrderSummary
              cart={cart}
              clearCart={clearCart}
              to="/checkout"
              text="Checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
