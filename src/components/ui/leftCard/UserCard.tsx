import React from "react";
import assets from "@/src/constants/icons";
import Image from "next/image";
import { formatNumber } from "@/src/lib/myFormat";

interface UserCardProps {
  data?: string | undefined | null;
}

const userStats = [
  {
    title: "Followers",
    value: 125800,
  },
  {
    title: "Following",
    value: 1250,
  },
  {
    title: "Posts",
    value: 125,
  },
];

const UserCard = ({ data }: UserCardProps) => {
  return (
    <div className="bg-white rounded-lg w-full h-[290px] p-4  flex items-center justify-center">
      <div className="bg-[#F7F7F7] w-full h-full rounded-md p-4 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3 border-b-[1px] border-gray-200 pb-3">
          <Image src={assets.EmptyUser} alt="user" width={50} height={50} />
          <div className="flex flex-col ">
            <span className="text-[#07928E] font-bold">Junior DOFONSOU</span>
            <span className="text-sm text-gray-500">@christ</span>
          </div>
        </div>
        <div>
          <span className="text-sm text-gry-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione
            sit nostrum, nesciunt ea error!
          </span>
          <div className="flex flex-row items-center justify-between gap-3 mt-3">
            {userStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-sm text-gray-700 font-bold">
                  {formatNumber(stat.value)}
                </span>
                <span className="text-xs text-gray-500">{stat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
     </div>
  );
};

export default UserCard;
