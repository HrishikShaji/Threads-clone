"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <section className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-teal-500 bg-neutral-700 pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6 ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `/profile/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`${
                isActive && "bg-teal-500"
              } relative flex justify-start gap-4 rounded-lg p-4`}>
              <Image
                src={link.imgURL}
                alt={link.label}
                width="24"
                height="24"
              />
              <p className="max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6 flex justify-center">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer text-white text-xs font-semibold">
              LOGOUT
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSideBar;
