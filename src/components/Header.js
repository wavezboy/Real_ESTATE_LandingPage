import { useState, useEffect } from "react";

import houseicon from "../assets/img/logo1.svg";

const Header = () => {
  return (
    <div className="absolute w-full left-0 z-10 py-4">
      <div className="container mx-auto">
        <div className="flex items-end justify-between border-b-[0.5px] pb-[22px] transition-all duration-200">
          <img className="ml-[120px]" src={houseicon} alt="" />
          <div className="flex justify-center gap-[56px] w-full">
            <a
              className=" flex justify-center relative text-white font-DMsans font-medium text-[18px] group"
              href="#"
            >
              Home
              <span className=" group-hover:opacity-100 transition-all absolute bottom-[-22px] opacity-0 bg-white w-[91px] h-[2px] block"></span>
            </a>
            <a
              className=" flex justify-center text-white font-DMsans font-normal text-[18px] relative group"
              href="#"
            >
              Landlord
              <span className=" group-hover:opacity-100 transition-all absolute bottom-[-22px] opacity-0 bg-white w-[91px] h-[2px] block"></span>
            </a>
            <a
              className="text-white flex justify-center font-DMsans font-normal text-[18px] relative group"
              href="#"
            >
              Tenant
              <span className=" group-hover:opacity-100 transition-all absolute bottom-[-22px] opacity-0 bg-white w-[91px] h-[2px] block"></span>
            </a>
            <a
              className="flex justify-center text-white font-DMsans font-normal text-[18px] relative group"
              href="#"
            >
              Contact Us
              <span className=" group-hover:opacity-100 transition-all absolute bottom-[-22px] opacity-0 bg-white w-[91px] h-[2px] block"></span>
            </a>
          </div>
          <div className="w-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
