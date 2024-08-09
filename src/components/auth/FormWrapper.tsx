import React from "react";

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full space-y-10 ">{children}</div>;
};

export default FormWrapper;
