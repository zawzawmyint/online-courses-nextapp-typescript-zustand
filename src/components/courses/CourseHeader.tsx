import React from "react";
import CourseFilterAndSearch from "./FilterAndSearch/CourseFilterAndSearch";
import PageTitle from "../generic/PageTitle";

const CourseHeader = () => {
  return (
    <>
      <PageTitle title="Courses" />
      <CourseFilterAndSearch />
    </>
  );
};

export default CourseHeader;
