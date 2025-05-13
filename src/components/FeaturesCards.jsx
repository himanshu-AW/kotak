import React from 'react'

function FeaturesCards({Image,title,subTitle}) {
  return (
    <div className='max-w-[220px] w-full h-[194px] flex flex-col justify-between rounded-[12px] px-3 py-4 bg-white shadow-sm hover:shadow-lg transition-all'>
        <div className='w-[64px] h-[64px]'>
            <img src={Image} alt={title} className='w-full h-full'/>
        </div>
        <div className='w-full h-[64px] flex flex-col gap-2'>
            <h4 className='uppercase text-[10px] leading-[12px] font-medium text-[#00000099]'>{title}</h4>
            <h2 className='text-[16px] text-[#000000DE] font-bold '>{subTitle}</h2>
        </div>
    </div>
  )
}

export default FeaturesCards