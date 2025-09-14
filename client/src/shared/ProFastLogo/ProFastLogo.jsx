import React from "react";
import logo from "../../assets/logo.png";
const ProFastLogo = () => {
  return (
    <div className="flex items-end  -gap-2">
      <img className="mb-2" src={logo} alt="" />
      <h2 className="-ml-2 text-3xl font-semibold">ProFast</h2>
    </div>
  );
};

export default ProFastLogo;
