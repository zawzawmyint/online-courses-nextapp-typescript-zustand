import React from "react";
import BaseContainer from "../global/container/BaseContainer";
import CourseCard2 from "./CourseCard2";
import { fetchCourses } from "@/lib/data";
import { delay } from "@/utils/helper";

const Courses = async ({
  category,
  query,
}: {
  category: string;
  query: string;
}) => {
  const courses = await fetchCourses(category, query);
  await delay();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {courses.map((course) => (
        <CourseCard2 key={course.title} course={course} />
      ))}
    </div>
  );
};

export default Courses;
