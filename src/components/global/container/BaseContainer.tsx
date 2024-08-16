import React from "react";

const BaseContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 bg-background rounded-lg z-10 transition-all duration-500">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default BaseContainer;
