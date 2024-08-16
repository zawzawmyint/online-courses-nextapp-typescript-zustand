import React from "react";

const HeroSection = ({
  children,
  position = "top-20",
}: {
  children: React.ReactNode;
  position?: string;
}) => {
  return (
    <section
      className={`bg-primary min-h-[28rem] grid place-items-center w-full sticky left-0 ${position} -z-10 `}
    >
      {children}
    </section>
  );
};

export default HeroSection;
