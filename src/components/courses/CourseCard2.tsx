import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CourseField } from "@/lib/definitions";
import Image from "next/image";
import CategorySearch from "./FilterAndSearch/CategorySearch";
import Link from "next/link";
import { Suspense } from "react";

type CourseCardPropsType = {
  course: CourseField;
};

const CourseCard2 = ({ course }: CourseCardPropsType) => {
  return (
    <Link href={`courses/${course.id}`}>
      <Card className="transition-custom text-center">
        <CardHeader>
          <Suspense fallback={<div></div>}>
            <CategorySearch category={course.category_id}>
              <CardDescription>{course.category_id}</CardDescription>
            </CategorySearch>
          </Suspense>
          <CardTitle className="text-lg font-medium">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="flex flex-wrap items-center justify-around my-5 ">
            <CardDescription className="font-semibold">
              {course.lessons.length} Lessons
            </CardDescription>
            <CardDescription className="font-semibold">
              ${course.price}
            </CardDescription>
          </div>
          <div className="relative h-52 w-full">
            <Image
              src={course.image_url}
              alt={course.title}
              fill
              className="rounded-sm object-cover "
              blurDataURL="data:..." // automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard2;
