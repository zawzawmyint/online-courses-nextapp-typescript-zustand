"use client";
import { useMyCourses } from "@/stores/myCoursesStore";
import CourseCard3 from "../courses/CourseCard3";

const MyCourses = () => {
  const { myCourses } = useMyCourses((state) => state);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-10">
      {myCourses.map((course) => (
        <CourseCard3 key={course.title} course={course} />
      ))}
    </div>
  );
};

export default MyCourses;
