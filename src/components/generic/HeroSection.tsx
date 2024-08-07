import React from "react";
import HomeSection from "../home/HomeSection";

const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-primary min-h-[28rem] grid place-items-center ">
      {children}
    </section>
  );
};

export default HeroSection;
