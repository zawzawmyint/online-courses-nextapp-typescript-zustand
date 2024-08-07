import React from "react";

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-lg mx-auto min-h-screen grid place-items-center p-2">
      {children}
    </div>
  );
};

export default AuthContainer;
