/* eslint-disable no-unused-vars */
import React from 'react'
import {IconRightArrow,IconRightArrow2} from '../assets/icons'
 
function LargeCard2({Icon1,Image, title, subTitle,isFooter=false}) {
  return (
    <div className={`rounded-[12px] w-[684px] h-[84px] mt-2 flex items-center justify-between p-4 border-[0.5px] ${isFooter? 'bg-[#03111A] border-[#FFFFFF66]':' border-[#E3E3E3] bg-[#FFFFFF]'} shadow-sm hover:shadow-md cursor-pointer`}>
        <div className="pl-1 pb-3">{isFooter?<img src={Image} alt="footer card" className='w-8 h-8'/>: <Icon1 className="scale-[1.2]"/>}</div>
        <div className="max-w-[584px] w-full mx-atuo">
          <h3 className={`font-medium text-[18px] ${isFooter?'text-white':'text-[#000000DE]'} leading-[22px]`}>{title}</h3>
          <h4 className={`font-normal mt-1 text-[14px] leading-[18px]  ${isFooter?'text-[#FFFFFFB2]':'text-[#00000099]'}`}>{subTitle}</h4>
        </div>
        <button className=" cursor-pointer">
          {isFooter?<IconRightArrow2  className="scale-[1.2]" style={{fill:'#C0C2C4'}}/>:
          <IconRightArrow  className="scale-[1.6]" style={{fill:'#C0C2C4'}}/>}
        </button>
    </div>
  )
}

export default LargeCard2