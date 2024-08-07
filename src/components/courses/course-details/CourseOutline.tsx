"use client";
import { Accordion } from "@/components/ui/accordion";
import { CourseField } from "@/lib/definitions";
import { useMyCourses } from "@/stores/myCoursesStore";
import CourseOutlineItem from "./CourseOutlineItem";

export function CourseOutline({ course }: { course: CourseField }) {
  const { myCourses } = useMyCourses((state) => state);
  function checkIsEnrolled(): boolean {
    const index = myCourses.findIndex((item) => item.id === course.id);
    return index >= 0;
  }

  const isEnrolled = checkIsEnrolled();
  return (
    <>
      <h3 className="text-2xl text-center font-semibold tracking-tight">
        COURSE OUTLINES
      </h3>
      <Accordion
        type="single"
        collapsible
        className="max-w-4xl mx-auto mb-20 mt-10 "
      >
        {course.lessons.map((lesson, index) => {
          return (
            <CourseOutlineItem
              key={index + lesson}
              lesson={lesson}
              index={index}
              isEnrolled={isEnrolled}
            />
          );
        })}
      </Accordion>
    </>
  );
}
