import CourseHeader from "@/components/courses/CourseHeader";
import Courses from "@/components/courses/Courses";
import CoursesFallback from "@/components/fallback/CoursesFallback";
import BaseContainer from "@/components/global/container/BaseContainer";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    query?: string;
    page?: string;
  };
}) {
  const category = searchParams?.category || "";
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <BaseContainer>
      <CourseHeader />
      <Suspense key={"courses"} fallback={<CoursesFallback />}>
        <Courses category={category} query={query} />
      </Suspense>
    </BaseContainer>
  );
}
