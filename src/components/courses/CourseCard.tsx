import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CourseField } from "@/lib/definitions";
import Image from "next/image";
import EnrollBtn from "../entroll/EnrollBtn";
import Link from "next/link";

type CourseCardPropsType = {
  course: CourseField;
};

const CourseCard = ({ course }: CourseCardPropsType) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row my-28 gap-2 sm:items-center">
      <div className="basis-1/2 border-0 shadow-none">
        <CardHeader>
          <Link href={`/courses/${course.id}`}>
            <CardTitle className="hover:underline">{course.title}</CardTitle>
          </Link>
          <CardDescription>Price: {course.price}$</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>{course.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <EnrollBtn course={course} />
        </CardFooter>
      </div>

      <div className="basis-1/2 border-0">
        <Link href={`/courses/${course.id}`}>
          <CardContent className="relative h-40 sm:h-80 w-full">
            <Image
              src={course.image_url}
              alt={course.title}
              fill
              className="rounded-sm transition-custom object-cover "
              blurDataURL="data:..." // automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
          </CardContent>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
