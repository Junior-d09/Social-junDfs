"use client";
import assets from "@/src/constants/icons";
import Image from "next/image";
import React from "react";
import UISearch from "./UISearch";
import UIAvatar from "./UIAvatar";

const UINavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-10 py-3.5 bg-white dark:bg-white/[.06] shadow-sm backdrop-blur-md">

      <div>
        <Image
          src={assets.jundfsLogo}
          alt="friym logo"
          width={30}
          height={30}
        />
      </div>
      <UISearch />
      <UIAvatar userName="Junior" />
    </div>
  );
};

export default UINavbar;
