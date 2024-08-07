import React, { Suspense } from "react";
import CourseCategories from "./CourseCategories";
import CourseSearch from "./CourseSearch";
import CourseCategoriesFallback from "@/components/fallback/CourseCategoriesFallback";

const CourseFilterAndSearch = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-between items-center my-7">
      <Suspense key={"categoreis"} fallback={<CourseCategoriesFallback />}>
        <CourseCategories />
      </Suspense>
      <CourseSearch />
    </div>
  );
};

export default CourseFilterAndSearch;
