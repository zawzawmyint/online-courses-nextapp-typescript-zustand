import { fetchLatestCourses } from "@/lib/data";
import CourseCard from "../courses/CourseCard";
import { delay } from "@/utils/helper";

const LatestCourses = async () => {
  const courses = await fetchLatestCourses();
  await delay();

  return (
    <>
      {courses.map((course, i) => (
        <CourseCard key={i} course={course} />
      ))}
    </>
  );
};

export default LatestCourses;
