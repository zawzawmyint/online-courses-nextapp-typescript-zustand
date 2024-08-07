"use client";
import { CourseField } from "@/lib/definitions";
import { useBagStore } from "@/stores/bagStore";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useMyCourses } from "@/stores/myCoursesStore";

type EnrollPropsType = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  course: CourseField;
};

const EnrollBtn = ({ variant = "default", course }: EnrollPropsType) => {
  const { bag, addToBag } = useBagStore((state) => state);
  const { myCourses } = useMyCourses((state) => state);
  const router = useRouter();

  function checkIsEnrolled(): boolean {
    const index = myCourses.findIndex((item) => item.id === course.id);
    return index >= 0;
  }

  const handleEnroll = () => {
    if (!isEnrolled) {
      addToBag(course);
      router.push("/checkout");
    }
  };

  const isEnrolled = checkIsEnrolled();

  return (
    <Button
      variant={variant}
      className="hover-bg-slide hover:text-primary"
      onClick={handleEnroll}
    >
      {isEnrolled ? (
        <span className="font-extrabold text-foreground">ENROLLED 🧑‍💻</span>
      ) : (
        <span className="font-extrabold">Enroll course</span>
      )}
    </Button>
  );
};

export default EnrollBtn;
