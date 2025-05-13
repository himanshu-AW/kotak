import React from 'react'
import AccountQuickActions from './AccountQuickActions'

function AccountIDetails() {
  return (
     <section className="section">
      <div className="w-full max-w-[734px] m-auto h-full flex flex-col gap-[24px] p-[24px]">
        <h3 className="text-[14px] text-[#000000DE] font-normal leading-[18px]">
          {'<-'} Home {'>'} Bank {'>'} Saving Account
        </h3>
        <div className="w-full flex flex-col gap-[75px]">
          
        </div>
      </div>

      <AccountQuickActions />
    </section>
  )
}

export default AccountIDetails