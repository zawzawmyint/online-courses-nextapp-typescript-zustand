import React from "react";
import CheckoutItem from "./CheckoutItem";
import CheckoutPurchase from "./CheckoutPurchase";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Checkout = async () => {
  const session = await auth();

  // if (!session?.user) return redirect("/");

  return (
    <div className="flex justify-center my-16 gap-5 flex-col-reverse sm:flex-row">
      <div className="flex-1">
        <CheckoutPurchase session={session} />
      </div>
      <div className="flex-1">
        <CheckoutItem />
      </div>
    </div>
  );
};

export default Checkout;
