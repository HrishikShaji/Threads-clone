import React from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import PostThread from "@/components/forms/PostThread";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await JSON.parse(JSON.stringify(await fetchUser(user.id)));

  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <PostThread userId={userInfo._id} />
    </>
  );
};

export default page;
