import React from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import InstructorFallback from "./InstructorFallback";

const CourseDetailsFallBack = () => {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row my-28 gap-2 sm:items-center">
        <div className="basis-1/2 border-0 shadow-none">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-10 w-1/2" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-10 w-full" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <Skeleton className="h-14 w-full" />
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-1/2" />
          </CardFooter>
        </div>
        <div className="basis-1/2 border-0">
          <CardContent className="relative h-40 sm:h-80 w-full">
            <Skeleton className="h-40 sm:h-80 w-full rounded-sm" />
          </CardContent>
        </div>
      </div>
      <InstructorFallback />
    </div>
  );
};

export default CourseDetailsFallBack;
