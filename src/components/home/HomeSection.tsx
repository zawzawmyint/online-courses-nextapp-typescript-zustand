import React, { Suspense } from "react";
import { Button } from "../ui/button";
import CategorySearch from "../courses/FilterAndSearch/CategorySearch";

const HomeSection = () => {
  return (
    <div className="space-y-3 text-center">
      <h2 className="text-5xl text-center font-medium tracking-tight transition-colors">
        Don&apos;t Limit Yourself
      </h2>
      <p className="leading-7">Make changes to your life here!</p>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Suspense fallback={<div></div>}>
          <CategorySearch category="front-dev">
            <Button variant={"secondary"}>Frontend Development</Button>
          </CategorySearch>
        </Suspense>
        <Suspense fallback={<div></div>}>
          <CategorySearch category="machine-learning">
            <Button variant={"secondary"}>Machine Learning</Button>
          </CategorySearch>
        </Suspense>
      </div>
    </div>
  );
};

export default HomeSection;
