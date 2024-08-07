import React from "react";
import CheckoutItem from "./CheckoutItem";
import CheckoutPurchase from "./CheckoutPurchase";

const Checkout = () => {
  return (
    <div className="flex justify-center my-16 gap-5 flex-col-reverse sm:flex-row">
      <div className="flex-1">
        <CheckoutPurchase />
      </div>
      <div className="flex-1">
        <CheckoutItem />
      </div>
    </div>
  );
};

export default Checkout;
