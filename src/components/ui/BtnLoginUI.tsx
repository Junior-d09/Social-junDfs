import { nunito } from "@/src/app/layout"; 
import Link from "next/link";
import React from "react";
interface BtnLoginUIProps {
  label: string;
  icon: React.ReactNode;
}

const BtnLoginUI = ({ label, icon }: BtnLoginUIProps) => {
  return (
    <Link
      href={"/feed"}
      className="my-3 flex-row items-center cursor-pointer flex gap-5 bg-white rounded-full justify-center px-4 py-3 text-lg font-medium text-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:border-primary hover:text-primary  '_blank' "
    >
      {icon}
      <span className={`${nunito.className} md:text-xl text-sm `}>{label}</span>
    </Link>
  );
};

export default BtnLoginUI;
