import React from "react";
import Image from "next/image";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: Props) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-left font-semibold text-lg text-white">
              {name}
            </h2>
            <p className="text-white ">@{username}</p>
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-lg text-white">{bio}</p>
      <div className="mt-12 h-0.5 w-full bg-neutral-600" />
    </div>
  );
};

export default ProfileHeader;
