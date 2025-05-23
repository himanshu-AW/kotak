import React from "react";
import ActionButton from "./ActionButton";

function OffersCards({ image, title, description, buttonLabel ,bgColor}) {
  return (
    <div className={`w-[336px] h-[198px] rounded-[16px] ${bgColor} cursor-pointer overflow-hidden `}>
      <div className="w-full h-full relative">
        <div className="w-full h-full">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div className="z-1 absolute top-0 lef-0 flex flex-row justify-around py-6 pl-4 h-full">
          <div className="w-[178px] h-[96px] flex flex-col gap-[22px] flex-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-[20px] font-bold text-white leading-[100%] tracking-normal">
                {title}
              </h2>
              <p className="text-[#FFFFFFB2] text-[12px] font-normal  leading-[100%]">
                {description}
              </p>
            </div>
            <div className="">
              <ActionButton label={buttonLabel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersCards;
