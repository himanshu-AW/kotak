import React from 'react'
import '../styles/main.css'
import {IconStar,IconStarFilled,IconPhone} from '../assets/icons'

function ReviewCard({phoneNo,name,relation,ratingNo}) {
  return (
    <div className='flex flex-col gap-2 shadow-sm transition-all hover:shadow-lg rounded-[12px] border-[0.5] items-center max-w-[336px] w-full bg-white border-[#E3E3E3] overflow-hidden'>
        <div className='w-full flex flex-col items-center gap-2 p-[16px]'>
            <h3 className='font-medium text-[12px] text-[#00000099] leading-[16px]'>{relation}</h3>
            <h2 className='font-bold text-[20px] text-[#000000DE] leading-[28px]'>{name}</h2>
            <h4 className='py-1 px-2 mt-1 rounded-[6px] border-[0.5px] border-[#FCE9BD] bg-[#FFF8E8] text-[#FFA64D] text-[10px] leading-[12px] font-medium flex items-center gap-[3px]'> <IconStarFilled className="inline"/> {ratingNo}</h4>
        </div>
        <button className='border-[0.5px] bg-white border-[#e3e3e3] shadow-sm font-medium text-[16px] leading-[22px] rounded-[18px] px-4 py-[6px] flex items-center gap-[10px]' ><IconPhone className="inline"/> <span>{phoneNo}</span></button>
        <div className='uppercasec mt-3 w-[366px] h-[36px] flex items-center justify-center leading-[12px] bg-[#253844] text-white rounded-bl-[12px] rounded-br-[12px] text-[10px] font-medium p-3'>You Rated <IconStarFilled className="ml-2"/><IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStar/></div>
    </div>
  )
}

export default ReviewCard