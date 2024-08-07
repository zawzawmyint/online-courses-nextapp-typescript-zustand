import Instructor from "@/components/instructor/Instructor";
import { fetchCourseById } from "@/lib/data";
import CourseCard from "../CourseCard";
import { delay } from "@/utils/helper";
import { CourseOutline } from "./CourseOutline";

const CourseDetails = async ({ id }: { id: string }) => {
  const course = await fetchCourseById(id);
  await delay();
  return (
    <>
      <CourseCard course={course} />
      <Instructor instructorId={course.customer_id} />
      <CourseOutline course={course} />
    </>
  );
};

export default CourseDetails;
