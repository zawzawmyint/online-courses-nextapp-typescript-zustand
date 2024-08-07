import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { CourseField } from "@/lib/definitions";

const CourseCard3 = ({ course }: { course: CourseField }) => {
  return (
    <Link href={`courses/${course.id}`}>
      <Card className="transition-custom text-center">
        <div className="relative h-60 w-full">
          <Image
            src={course?.image_url}
            alt={course?.title}
            fill
            className="rounded-sm object-cover"
            blurDataURL="data:..." // automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="my-5 p-2 ">
          <CardTitle className="font-semibold p-2">{course.title}</CardTitle>
          <CardDescription className="font-semibold">
            {course.description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard3;
