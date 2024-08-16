import React from "react";

const BaseContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 bg-background rounded sticky z-10 ">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default BaseContainer;
