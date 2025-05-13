/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/main.css";
import { IconRupee } from "../assets/icons";

function SmallCard({ icon, title, titleInfo, subTitle }) {

  return (
    <div className="card w-[336px] h-[96px]">
      <div className="w-[152px] h-[64px] bg-white text-[#00000099]">
        <h5 className="text-[12px]">{title || "2 bank accounts"}</h5>
        <h3 className="text-[#000000DE] text-[20px] flex font-bold">
          {/\d+(\.\d+)?\s*(lakh|lac|crore|cr|thousand|hundred|k|rs|rupees|₹)/i.test(
            titleInfo
          ) ? (
            <IconRupee />
          ) : (
            ""
          )}{" "}
          {titleInfo}
        </h3>
        <h6 className="text-[10px] uppercase">
          {subTitle || "Balance AS ON 27 FEB, 2:30 PM"}
        </h6>
      </div>
      <div className="w-[64px] h-[64px] bg-white">
        <img src={icon} />
      </div>
    </div>
  );
}

export default SmallCard;
