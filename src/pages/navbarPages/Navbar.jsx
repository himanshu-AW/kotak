import React from "react";
import {  IconView, IconAlerts } from "../../assets/icons";
import { ImageKotakLogo } from "../../assets/images";


function Navbar() {
  return (
    <div className="fixed top-0 w-full min-h-[56px] flex flex-row justify-between px-24 items-center bg-white border-b-2 border-gray-100 ">
      <div className="w-[113px] h-[28px] cursor-pointer">
        <img src={ImageKotakLogo} alt="Kotak logo" className="w-full h-full" />
      </div>
      <ul className="nav-links flex">
        <li className="w-[48px] h-[48] flex items-center justify-center cursor-pointer">
          <IconView />
        </li>
        <li className="w-[48px] h-[48] flex items-center justify-center cursor-pointer">
          <IconAlerts />
        </li>
        <li className="w-[48px] h-[48] flex items-center justify-center cursor-pointer">
          <span className="w-[32px] h-[32px] rounded-full bg-[#253844] text-[12px] flex items-center justify-center text-white">
            AR
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
