import React from "react";
import LoginUI from "../components/home/LoginUI";
import BottomFooter from "../components/home/BottomFooter";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center ">
     <LoginUI />
     <BottomFooter />
    </div>
  );
};

export default page;
