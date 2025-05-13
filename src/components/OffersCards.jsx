import React from 'react'

function OffersCards({image,altText}) {
  return (
    <div className='w-[336px] h-[196px] rounded-[16px] bg-transparent cursor-pointer overflow-hidden'>
        <img src={image} alt={altText} className='w-full h-full rounded-[16px]' />
    </div>
  )
}

export default OffersCards