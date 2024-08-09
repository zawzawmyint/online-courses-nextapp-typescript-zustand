import { auth } from "@/auth";
import PageTitle from "@/components/generic/PageTitle";
import ViewMore from "@/components/generic/ViewMore";
import BaseContainer from "@/components/global/container/BaseContainer";
import MyCourses from "@/components/my-courses/MyCourses";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/");

  return (
    <BaseContainer>
      <PageTitle title="My Courses" />
      <MyCourses session={session} />
    </BaseContainer>
  );
};

export default Page;
