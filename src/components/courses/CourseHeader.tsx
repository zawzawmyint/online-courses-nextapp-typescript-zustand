import React from "react";
import CourseFilterAndSearch from "./FilterAndSearch/CourseFilterAndSearch";

const CourseHeader = () => {
  return (
    <>
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-5">
        Courses
      </h4>
      <CourseFilterAndSearch />
    </>
  );
};

export default CourseHeader;
