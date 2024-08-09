import { auth } from "@/auth";
import Checkout from "@/components/checkout/Checkout";
import { BreadcrumbNav } from "@/components/generic/BreadcrumbNav";
import BaseContainer from "@/components/global/container/BaseContainer";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  return (
    <BaseContainer>
      <BreadcrumbNav />
      <Checkout />
    </BaseContainer>
  );
};

export default Page;
