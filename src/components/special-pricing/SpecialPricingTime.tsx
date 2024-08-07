import EnrollBtn from "../entroll/EnrollBtn";
import { Card } from "../ui/card";

const times = [
  { name: "Days", number: "0" },
  { name: "Hours", number: "00" },
  { name: "Minutes", number: "00" },
  { name: "Seconds", number: "00" },
];
const SpecialPricingTime = () => {
  return (
    <div className="max-w-lg mx-auto my-20 flex flex-col gap-5">
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
      <div className="text-center">{/* <EnrollBtn /> */}</div>
    </div>
  );
};

export default SpecialPricingTime;
