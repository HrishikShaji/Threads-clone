import AccountProfile from "@/components/forms/AccountProfile";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

const page = async () => {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings
  const userInfo = await fetchUser(user.id);
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-xl font-bold text-white">Onboarding</h1>
      <p className="mt-3 text-base text-white">Complete your Profile</p>
      <section className="mt-9 bg-neutral-800 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </div>
  );
};

export default page;
