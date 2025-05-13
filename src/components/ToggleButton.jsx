/* eslint-disable no-unused-vars */
import React from 'react'

function ToggleButton({text,Icon,onClick}) {
  return (
    <button className='py-1 pl-[10px] pr-[8px] border-[0.5px] border-[#DDDDDD] bg-[#F0EFEF] flex items-center justify-center gap-1 rounded-[16px] cursor-pointer' onClick={onClick}>
        <span className='text-[#00000099] text-[14px]'>{text}</span> <Icon/>
    </button>
  )
}

export default ToggleButton;