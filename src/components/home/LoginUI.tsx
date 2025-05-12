import React from "react";
import Image from "next/image";
import assets from "@/src/constants/icons";
import LeftUI from "./LeftUI";

const LoginUI = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-[1700px] px-4 sm:px-6 md:px-12 lg:px-20 mx-auto">
      <div className="flex-1 max-w-[800px] flex justify-center">
        <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
          <Image
            src={assets.jundfsIcone}
            alt="Jundfs"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <LeftUI />
    </div>
  );
};

export default LoginUI;
