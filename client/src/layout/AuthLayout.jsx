import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFastLogo from "../shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen p-6 md:p-8 bg-base-200">
      {/* Logo */}
      <div >
        <ProFastLogo />
      </div>

      {/* Auth Content */}
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        {/* Image Section with Background */}
        <div
          className="flex-1 flex justify-center items-center rounded-2xl shadow-xl p-4"
          style={{ backgroundColor: "#def29f" }}
        >
          <img
            src={authImg}
            alt="Authentication Illustration"
            className="max-w-sm w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
