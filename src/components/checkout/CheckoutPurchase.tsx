"use client";
import { useBagStore } from "@/stores/bagStore";
import { useMyCourses } from "@/stores/myCoursesStore";
import { delay } from "@/utils/helper";
import { DollarSignIcon } from "lucide-react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const CheckoutPurchase = ({ session }: { session: Session | null }) => {
  const { bag } = useBagStore((state) => state);
  const { myCourses, addToMyCourses } = useMyCourses((state) => state);
  const { toast } = useToast();
  const router = useRouter();

  if (bag === null) return <p>no items</p>;

  // find current user entrolled
  const userCourses = myCourses.filter(
    (course) => course.user_email == session?.user?.email
  );
  const index = userCourses.findIndex((course) => course.title === bag.title);

  const handleEnroll = async () => {
    await delay().then(() => {
      addToMyCourses({ ...bag, user_email: session?.user?.email });
      toast({
        title: "Succcessfully: Enrollment ",
        description: "You can start learning in My Courses section",
      });
      router.push("/my_courses");
    });
  };
  return (
    <div className="p-3">
      {index !== -1 && (
        <h2 className="text-sm sm:text-md font-medium tracking-tight transition-colors text-primary my-2">
          {userCourses[index].title} course is already endrolled`
        </h2>
      )}
      {!session?.user && (
        <h2 className="text-sm sm:text-md font-medium tracking-tight transition-colors text-destructive my-2">
          Please sign in first
        </h2>
      )}

      <h2 className="text-2xl sm:text-4xl font-medium tracking-tight transition-colors">
        Complete your purchase
      </h2>
      <div className="my-10 flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <p>{bag?.title}</p>
          <p>${bag?.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Total price</p>
          <p>${bag?.price}</p>
        </div>
        <div className="flex flex-col gap-7">
          <h2 className="font-semibold">Payment information</h2>
          <Input
            value={"1111-1111-1111-1111"}
            placeholder="Card number (MM/YY CVC)"
            disabled
          />
          <Button
            disabled={session?.user && index === -1 ? false : true}
            className="w-full p-7"
            onClick={handleEnroll}
          >
            <DollarSignIcon />
            Purchase With Credit Card
          </Button>
          <p className="text-center">or</p>
          <Button
            disabled
            className="w-full p-7 bg-yellow-500 hover:bg-yellow-600"
          >
            Purchase With Pay Pal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPurchase;
