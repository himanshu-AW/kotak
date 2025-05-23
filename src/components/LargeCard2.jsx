/* eslint-disable no-unused-vars */
import React from 'react'
import {IconRightArrow,IconRightArrow2,IconRupee} from '../assets/icons'
 
function LargeCard2({cardType,Icon,Image, title, subTitle,amount,isFooter=false}) {
  const [intPart, decimalPart = "00"] = toCurrency(
    typeof amount === "number" && makePositive(amount)
  ).split(".");

  return (
    <div className={`card rounded-[12px] w-full h-[76px] flex items-center justify-between p-4 border-[0.5px] ${isFooter? 'bg-[#03111A] border-[#FFFFFF66]':' border-[#E3E3E3] bg-[#FFFFFF]'} cursor-pointer`}>
        <div className="w-full flex gap-3 items-center">
            <div className="self-start">{isFooter?<img src={Image} alt="footer card" className='w-8 h-8'/>: <Icon className="mt-1"/>}</div>
            <div className='flex flex-col gap-1'>
              <h3 className={`font-medium text-[16px] leading-[22px] ${isFooter?'text-white':'text-[#000000DE]'}`}>{title}</h3>
              <h4 className={`font-normal text-[14px] leading-[18px] ${isFooter?'text-[#FFFFFFB2]':'text-[#00000099]'}`}>{subTitle}</h4>
            </div>
        </div>
        {!cardType && <button className=" cursor-pointer">
          {isFooter?<IconRightArrow2  className="scale-[1.2]" style={{fill:'#C0C2C4'}}/>:
          <IconRightArrow  className="scale-[1.6]" style={{fill:'#C0C2C4'}}/>}
        </button>}
        <div className="flex flex-col h-full gap-1 min-w-fit">
          {cardType === "account-activity" && (
           <h2 className="flex flex-row justify-end text-[#000000DE] text-[16px]">
              <span className={`${amount>=0 && 'text-[#25A24C]'} font-light inline`}>{amount>=0 ?'+₹':'-₹'}</span>
              <span className={`${amount>=0 && 'text-[#25A24C]'} font-bold`}>{intPart}</span>
              <span className={`${amount>=0 && 'text-[#25A24C]'} text-[10px] leading-[18px] font-normal self-end mb-[0.5px]`}>{"."}{decimalPart}</span>
            </h2>
        )}
        </div>
    </div>
  )
}

const makePositive = (amount)=>{
  if(amount < 0) return amount*(-1)
    return amount;
}

const toCurrency = (num) => {
  if (typeof num !== "number") return "0.00";
  return num.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default LargeCard2