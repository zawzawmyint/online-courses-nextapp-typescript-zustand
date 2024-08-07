import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

const LatestCoursesFallback = () => {
  return (
    <>
      {Array.from("fb").map((item) => (
        <div
          key={item}
          className="flex flex-col-reverse sm:flex-row my-24 gap-2 sm:items-center"
        >
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
      ))}
    </>
  );
};

export default LatestCoursesFallback;
