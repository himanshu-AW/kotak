import React from 'react'
import AccountQuickActions from './AccountQuickActions'
import {accountActivityData} from '../../constants'
import {LargeCard2,Sepration,ToggleButton,ManageTransaction,DepositCard} from '../../components'
import {IconUpArrow,IconRightArrow,IconCheck,IconChequeBook} from '../../assets/icons'

function AccountIDetails() {
  return (
     <section className="section">
      <div className="container">
        <h3 className="text-[14px] text-[#000000DE] font-normal leading-[18px]">
          {'<-'} Home {'>'} Bank {'>'} Saving Account
        </h3>
        <div className="sub-container">

          <div className="sub-container-sections">
              <Sepration textName={"Linked deposits"} />
              <div className="w-full flex gap-3 flex-wrap">
              <DepositCard/>
              <div className="flex w-full justify-end">
                <ToggleButton
                  text={"See all"}
                  Icon={ IconRightArrow }
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="sub-container-sections">
            <div className=''>
              <Sepration textName={"Account activity"} />
            <h3 className='pl-4 pt-[6px] font-normal text-[14px] text-[#00000099] leading-[18px]'>Transactions may take 24 hours to reflect.</h3>
            </div>
            <div className="w-full flex gap-3 flex-wrap">
              {accountActivityData.map((item, id) => (
               <LargeCard2 key={id} cardType={'account-activity'} Icon={item.icon} title={item.title} subTitle={item.subTitle} amount={item.amount}/>
              ))}
              <div className="flex w-full justify-end">
                <ToggleButton
                  text={"See all"}
                  Icon={ IconRightArrow }
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="sub-container-sections">
            <Sepration textName={"Manage cheques"} />
            <div className="w-full flex gap-8 flex-wrap">
              <ManageTransaction />
              <div className="w-full flex gap-3">
                <LargeCard2  Icon={IconChequeBook} title={"Get a new cheque book"} />
                <LargeCard2  Icon={IconCheck} title={"Positive pay"} subTitle={"Make your cheques more secure."} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <AccountQuickActions />
    </section>
  )
}

export default AccountIDetails