"use client";
import assets from "@/src/constants/icons";
import Image from "next/image";
import React from "react";
import UISearch from "./UISearch";
import UIAvatar from "./UIAvatar";
import ThemeToggle from "../ThemeToggle";

const UINavbar = () => {
  return (
    <div className="flex-row items-center justify-between w-full flex px-14 py-2   bg-white dark:bg-white/[.06] shadow-sm">
      <div>
        <Image
          src={assets.jundfsLogo}
          alt="friym logo"
          width={150}
          height={150}
        />
      </div>
      <UISearch />
      <UIAvatar userName="Friym" />
      <ThemeToggle />
    </div>
  );
};

export default UINavbar;
