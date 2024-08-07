import { getInstructorById } from "@/lib/data";
import React from "react";
import InstructorCard from "./InstructorCard";
import { delay } from "@/utils/helper";

const Instructor = async ({ instructorId }: { instructorId: string }) => {
  const instructor = await getInstructorById(instructorId);
  await delay();
  return (
    <div className="w-full">
      <InstructorCard instructor={instructor} />
    </div>
  );
};

export default Instructor;
