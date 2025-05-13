import React from "react";
import LoginUI from "../components/home/LoginUI";
import BottomFooter from "../components/home/BottomFooter";

const page = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-between relative">
      <div className="flex-grow flex items-center justify-center">
        <LoginUI />
      </div>
      <BottomFooter />
    </div>
  );
};

export default page;