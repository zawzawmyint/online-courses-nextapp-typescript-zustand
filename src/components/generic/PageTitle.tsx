import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-5 ">
      {title}
    </h4>
  );
};

export default PageTitle;
