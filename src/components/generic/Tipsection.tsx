import { fetchCourseById } from "@/lib/data";
import EnrollBtn from "../entroll/EnrollBtn";

const Tipsection = async ({ id }: { id: string }) => {
  const course = await fetchCourseById(id);
  return (
    <div className="space-y-2 text-center  max-w-3xl mx-auto">
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
