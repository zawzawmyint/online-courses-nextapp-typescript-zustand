import { auth } from "@/auth";
import AuthContainer from "@/components/auth/AuthContainer";
import FormWrapper from "@/components/auth/FormWrapper";
import { SignUpForm } from "@/components/auth/sign_up/SignUpForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (session?.user) return redirect("/");

  return (
    <AuthContainer>
      <FormWrapper>
        <h4 className="scroll-m-20 text-3xl text-start font-semibold tracking-tight">
          Create a new account
        </h4>
        <SignUpForm />
        <hr />
        <Button variant={"link"} className="text-center">
          <Link href={"/users/sign_in"}>I already have an account!</Link>
        </Button>
      </FormWrapper>
    </AuthContainer>
  );
};

export default Page;
