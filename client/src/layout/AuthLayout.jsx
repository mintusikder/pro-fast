import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFastLogo from "../shared/ProFastLogo/ProFastLogo";
const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200 ">
      <div>
        <ProFastLogo></ProFastLogo>
      </div>
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img c src={authImg} className="max-w-sm h-full flex-1 rounded-lg shadow-2xl bg-primary" />
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
