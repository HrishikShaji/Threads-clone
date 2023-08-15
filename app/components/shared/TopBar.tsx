import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { dark } from "@clerk/themes";

const TopBar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-neutral-800 px-6 py-3 text-white">
      <Link href="/" className="flex items-center gap-4 ">
        <h1 className="font-bold">THREADS</h1>
      </Link>
      <div className="flex items-center gap-1 ">
        <div className="">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer text-xs font-semibold">
                LOGOUT
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default TopBar;
