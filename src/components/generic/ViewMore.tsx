import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ViewMore = () => {
  return (
    <Link href={"/courses"}>
      <Button variant={"link"}>View more courses?</Button>
    </Link>
  );
};

export default ViewMore;
