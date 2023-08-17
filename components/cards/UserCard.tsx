"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const UserCard = ({ id, name, username, imgUrl, personType }: Props) => {
  const router = useRouter();

  return (
    <article className="flex  justify-between items-center gap-4 max-xs:rounded-xl max-xs:bg-neutral-500 max-xs:p-4 xs:flex-row xs:items-center">
      <div className="flex flex-1 items-start justify-start gap-3 xs:items-center">
        <Image
          src={imgUrl}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1 text-ellipsis">
          <h4 className="text-white font-semibold">{name}</h4>
          <h4 className="text-gray-600 text-sm font-semibold">@{username}</h4>
        </div>
      </div>
      <Button onClick={() => router.push(`/profile/${id}`)}>View</Button>
    </article>
  );
};

export default UserCard;
