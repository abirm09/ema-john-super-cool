import React from "react";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const OrderSummary = ({ cart, clearCart }) => {
  let totalProduct = 0;
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalProduct = totalProduct + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  const tax = parseFloat(((totalPrice * 7) / 100).toFixed(2));
  const grandTotal = totalPrice + totalShipping + tax;
  //redirect to Order Review
  const navigateToReviewOrder = useNavigate();
  const gotoOrderReview = () => {
    navigateToReviewOrder("/orderReview");
  };

  return (
    <>
      <h2 className="font-lato text-2xl text-center">Order Summary</h2>
      <div className="space-y-3 font-lato mt-10">
        <p>Selected item : {totalProduct}</p>
        <p>Total Price : ${totalPrice}</p>
        <p>Total Shipping Charge : ${totalShipping}</p>
        <p>Tax : ${tax}</p>
      </div>
      <h2 className="font-lato text-2xl mt-5">Grand Total: ${grandTotal}</h2>
      <div className="mt-10 space-y-5">
        <button
          onClick={clearCart}
          className="btn w-full  bg-red-500 border-0 hover:bg-red-600"
        >
          Clear Cart
          <span className="ml-4">
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </button>
        <button
          onClick={gotoOrderReview}
          className="btn w-full bg-amber-600 border-0 hover:bg-amber-700"
        >
          Order review
          <span className="ml-4">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
