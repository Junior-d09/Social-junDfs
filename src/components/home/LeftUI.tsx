import React from "react";
import BtnLoginUI from "../ui/BtnLoginUI";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { nunito } from "@/src/app/layout";
import Link from "next/link";

const LeftUI = () => {
  return (
    <div className="flex-1 w-full max-w-md text-center lg:text-left px-2 sm:px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Step Into the Next Era of Social Media
      </h1>

      <p className={`${nunito.className} mt-2 md:mt-3 text-sm md:text-base text-gray-600`}>
        Chat, create, and connect with people who inspire you — this is your new
        favorite place to be.
      </p>
      <div className="mt-4 md:mt-6 flex flex-col mx-auto lg:mx-0 max-w-xs">
        <p className="text-lg md:text-xl lg:text-2xl font-medium">Sign up.</p>
        <div>
          <BtnLoginUI
            label="Sign up with Google"
            icon={<FcGoogle size={20} />}
          />
          <BtnLoginUI label="Sign up with Apple" icon={<FaApple size={20} />} />
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="flex-1 border-t border-gray-400"></div>
          <span
            className={`${nunito.className} text-sm md:text-base text-gray-600 text-center whitespace-nowrap`}
          >
            or
          </span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        <BtnLoginUI label="Sign up with Email" icon={<CiMail size={20} />} />
        <div className={`${nunito.className} mt-2 text-xs text-gray-600`}>
          En se connectant tu acceptes les{" "}
          <Link
            href="https://www.fidevo.io/cgus"
            target="_blank"
            className="text-[#217371] font-semibold"
          >
            Conditions d&apos;utilisation{" "}
          </Link>
          et reconnais avoir lu notre{" "}
          <Link
            href="https://www.fidevo.io/privacy"
            target="_blank"
            className="text-[#217371] font-semibold"
          >
            Politique de confidentialité.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftUI;