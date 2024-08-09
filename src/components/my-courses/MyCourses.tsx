"use client";
import { useMyCourses } from "@/stores/myCoursesStore";
import CourseCard3 from "../courses/CourseCard3";
import ViewMore from "../generic/ViewMore";
import { Session } from "next-auth";

const MyCourses = ({ session }: { session: Session }) => {
  const { myCourses } = useMyCourses((state) => state);
  const userCourses = myCourses.filter(
    (course) => course.user_email == session?.user?.email
  );

  return (
    <>
      <ViewMore />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-10">
        {userCourses.length > 0 &&
          userCourses.map((course) => (
            <CourseCard3 key={course?.title} course={course} />
          ))}
        {userCourses.length === 0 && (
          <p className="text-sm font-medium">No enrolled items found!</p>
        )}
      </div>
    </>
  );
};

export default MyCourses;
