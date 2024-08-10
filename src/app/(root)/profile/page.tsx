import { auth } from "@/auth";
import PageTitle from "@/components/generic/PageTitle";
import BaseContainer from "@/components/global/container/BaseContainer";
import Profile from "@/components/profile/Profile";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/users/sign_in");

  return (
    <BaseContainer>
      <div className="flex items-center gap-2">
        <PageTitle title="My Account" /> -
        <p className="text-lg font-semibold">
          {session?.user.name?.toUpperCase()}
        </p>
      </div>
      <Profile />
    </BaseContainer>
  );
};

export default Page;
