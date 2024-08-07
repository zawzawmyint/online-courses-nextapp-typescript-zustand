import BaseContainer from "@/components/global/container/BaseContainer";
import MyCourses from "@/components/my-courses/MyCourses";
import React from "react";

const Page = () => {
  return (
    <BaseContainer>
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-5 ">
        My Courses
      </h4>
      <MyCourses />
    </BaseContainer>
  );
};

export default Page;
