import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="Lodaing..." className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Lets Meet</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[20px] md:text-[30px] text-white font-bold ">
          Simple App
        </h1>
        <p className="text-[12px] text-white  -mt-0">Learn More with Zego</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
