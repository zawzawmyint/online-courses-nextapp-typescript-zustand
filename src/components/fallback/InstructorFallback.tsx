import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const InstructorFallback = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-5xl mx-auto">
        <div className="flex-1 relative aspect-square w-full h-80">
          <Skeleton className="h-40 sm:h-80 w-full rounded-sm" />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-10 w-1/2" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-5 w-2/3" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <Skeleton className="h-60 w-full rounded-sm" />
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default InstructorFallback;
