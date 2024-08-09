import InstructorFallback from "@/components/fallback/InstructorFallback";
import LatestCoursesFallback from "@/components/fallback/LatestCoursesFallback";
import HeroSection from "@/components/generic/HeroSection";
import BaseContainer from "@/components/global/container/BaseContainer";
import HomeSection from "@/components/home/HomeSection";
import LatestCourses from "@/components/home/LatestCourses";
import Instructor from "@/components/instructor/Instructor";
import SpecialPricingTime from "@/components/special-pricing/SpecialPricingTime";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection>
        <HomeSection />
      </HeroSection>
      <BaseContainer>
        <Suspense key={"latest-courses"} fallback={<LatestCoursesFallback />}>
          <LatestCourses />
        </Suspense>
        <Suspense key={"instructor"} fallback={<InstructorFallback />}>
          <Instructor instructorId={"3958dc9e-742f-4377-85e9-fec4b6a6442a"} />
        </Suspense>
        <SpecialPricingTime />
      </BaseContainer>
    </div>
  );
}
