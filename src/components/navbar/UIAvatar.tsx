"use client";

import assets from "@/src/constants/icons";
import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  userName: string | null | undefined;
}

const UIAvatar: React.FC<AvatarProps> = ({ src, userName }) => {
  return (
    <div className="flex-row items-center justify-center gap-2 rounded-full flex  ">
      <div className="w-[33px] h-[33px]">
        <Image
          className="rounded-full"
          height="33"
          width="33"
          alt="Avatar"
          src={src || assets.EmptyUser}
          style={{ objectFit: "cover" }}
        />
      </div>
      {userName && (
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {userName}
        </span>
      )}
    </div>
  );
};

export default UIAvatar;
