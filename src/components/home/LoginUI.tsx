import React from "react";
import Image from "next/image";
import assets from "@/src/constants/icons";
import LeftUI from "./LeftUI";

const LoginUI = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 w-full max-w-7xl px-4 sm:px-6 md:px-10 mx-auto">
      <div className="flex-1 w-full max-w-md flex justify-center">
        <div className="relative w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px]">
          <Image
            src={assets.jundfsIcone}
            alt="Jundfs"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <LeftUI />
    </div>
  );
};

export default LoginUI;
