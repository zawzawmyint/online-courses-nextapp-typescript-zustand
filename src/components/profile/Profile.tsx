import React from "react";
import ViewMore from "../generic/ViewMore";
import { signOut } from "@/auth";
import { Button } from "../ui/button";

const Profile = () => {
  return (
    <div className="flex flex-wrap min-h-96">
      <ViewMore />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant={"secondary"} className="font-bold">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default Profile;
