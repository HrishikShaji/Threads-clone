import { fetchUser, fetchUsers, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await JSON.parse(JSON.stringify(await fetchUser(user.id)));

  if (!userInfo?.onboarded) redirect("/onboarding");

  const activity = await getActivity(userInfo._id);

  return (
    <section>
      <h1 className="text-white">Activity</h1>
      <section className="mt-10 flex flex-col gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
              <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                <article className="flex items-center gap-2 rounded-md bg-neutral-600 px-7 py-4">
                  <Image
                    src={activity.author.image}
                    alt="Profile Picture"
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                  <p className="text-blue-500 font-semibold text-sm">
                    <span className="mr-1 text-white font-semibold text-sm">
                      {activity.author.name}
                    </span>{" "}
                    replied to your thread
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className="text-red-500">No Activity yet</p>
        )}
      </section>
    </section>
  );
};

export default page;
