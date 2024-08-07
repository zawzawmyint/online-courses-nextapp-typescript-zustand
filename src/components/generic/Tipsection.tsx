import { fetchCourseById } from "@/lib/data";
import EnrollBtn from "../entroll/EnrollBtn";

const Tipsection = async ({ id }: { id: string }) => {
  const course = await fetchCourseById(id);
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 max-w-3xl mx-auto">
      <h2 className="text-5xl text-center font-medium tracking-tight transition-colors">
        Time and tide wait for no man.
      </h2>
      <p className="leading-7">
        {`Take the course for $${course.price} to put it into practice now. This will be more efficient when you are working`}
      </p>
      <div>
        <EnrollBtn variant={"secondary"} course={course} />
      </div>
    </div>
  );
};

export default Tipsection;
