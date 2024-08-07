import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

const CoursesFallback = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-3">
      {Array.from("cours").map((_, i) => (
        <Card key={i} className="text-center">
          <CardHeader className="">
            <CardDescription>
              <Skeleton className="w-1/5 h-10" />
            </CardDescription>
            <CardTitle className="text-lg font-medium">
              <Skeleton className="w-1/5 h-10" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-52 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CoursesFallback;
