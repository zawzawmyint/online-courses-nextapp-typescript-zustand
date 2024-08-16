import CourseDetails from "@/components/courses/course-details/CourseDetails";
import CourseDetailsFallBack from "@/components/fallback/CourseDetailsFallBack";
import HeroSection from "@/components/generic/HeroSection";
import Tipsection from "@/components/generic/Tipsection";
import BaseContainer from "@/components/global/container/BaseContainer";
import { Suspense } from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <BaseContainer>
        <Suspense key={"course-details"} fallback={<CourseDetailsFallBack />}>
          <CourseDetails id={params.id} />
        </Suspense>
      </BaseContainer>
      <HeroSection position="bottom-32">
        <Tipsection id={params.id} />
      </HeroSection>
    </div>
  );
};

export default page;
