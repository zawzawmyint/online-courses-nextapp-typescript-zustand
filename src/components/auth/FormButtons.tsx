import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const FormButtons = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-between items-center">
      <Button type="submit">Submit</Button>
      <Link href={"/"}>
        <Button variant={"link"}>Go Home?</Button>
      </Link>
    </div>
  );
};
