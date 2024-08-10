import Link from "next/link";
import EnrollBtn from "../entroll/EnrollBtn";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { fetchCourseById } from "@/lib/data";

const times = [
  { name: "Days", number: "0" },
  { name: "Hours", number: "00" },
  { name: "Minutes", number: "00" },
  { name: "Seconds", number: "00" },
];
const SpecialPricingTime = async () => {
  const course = await fetchCourseById("1d06e4de-dec9-437b-b4bd-efe3cfa8bb2a");
  return (
    <div className="max-w-lg mx-auto my-20 space-y-10">
      <h3 className="text-2xl font-semibold tracking-tight my-5 text-center">
        The time to open the course is very close. Register now to not miss out
        on the special price.
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-1">
        {times.map((time) => (
          <Card key={time.name} className="flex-1 text-center p-1">
            <h1 className="text-3xl font-semibold opacity-50 ">
              {time.number}
            </h1>
            <h6 className="text-sm font-semibold ">{time.name}</h6>
          </Card>
        ))}
      </div>
      <div className="text-center my-5">
        <EnrollBtn course={course} />
      </div>
    </div>
  );
};

export default SpecialPricingTime;
