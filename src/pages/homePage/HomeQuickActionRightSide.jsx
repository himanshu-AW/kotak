import { useState } from "react";
import {
  IconUpi,
  IconPermittedTransactions,
  IconManagePayee,
  IconUpiActivity,
  IconSIP,
  IconSpotlight,
  IconDeposits,
  IconControls,
  IconTopPerformer,
  IconCardControls,
  IconBillpay,
  IconCardControls2,
  IconRupee,
  IconRightArrow,
  IconServiceRequests,
  IconComplaintQuestion,
  IconBulb
} from "../../assets/icons";
import {ImageAlert} from '../../assets/images'

function HomeQuickActionRightSide() {
  const [activeTab, setActiveTab] = useState("Pay");

  return (
    <nav className="max-h-[673px] h-[673px] flex flex-col gap-8 max-w-[336px] w-[336px] bg-white">
      <Notifiactions/>
      <div className="w-[288px] h-[1px] bg-[#F0EFEF] mx-auto"></div>
      <Shortcuts activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-[288px] h-[1px] bg-[#F0EFEF] mx-auto"></div>
      <Supports/>
    </nav>
  );
}

export default HomeQuickActionRightSide;

const Notifiactions = () => {
  return (
    <div className="flex justify-center flex-col gap-4 max-w-[288px] mt-[32px] mx-auto">
      <h3 className="text-3 text-[#00000099] font-medium uppercase  leading-[16px]">
        Notifications
      </h3>
      <div className="max-w-[288px] flex gap-[6px]">
        <div className="w-4 h-full mt-[6px]"><img src={ImageAlert} alt="alert" className="w-3 h-3" /></div>
        <div className="w-full ">
          <h2 className="w-full max-h-[18px] font-medium text-[14px] leading-[18px] text-[#000000DE] mb-2">Pay Credit Card EMI of <IconRupee className='inline scale-[0.75]'/>5,000</h2>
          <p className="w-full font-medium text-[12px] leading-[16px] text-[#00000099]">Your Credit Card EMI XX342 is overdue by 3 days. Pay now to avoid interest a…</p>
          <div className="w-full h-[39px] flex justify-between items-center">
            <h4 className="text-[#437FBF] bg-[#F0F7FD] rounded-[6px] border-[0.5px] border-[#D5E3F2] text-[10px] uppercase leading-[12px] px-2 pt-1 pb-[3px] w-fit font-medium">Due on 5 days</h4>
            <button className="text-[14px] text-[#3857FF] font-medium leading-[18px] cursor-pointer">Pay now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shortcuts = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center flex-col gap-4 max-w-[288px] mx-auto">
      <h3 className="text-3 text-[#00000099] font-medium uppercase  leading-[16px]">
        Shortcuts
      </h3>
      <div className="pb-4 gap-6 max-w-[288px] h-[144px] mx-auto bg-white rounded-[12px] border-[0.5px] border-[#E3E3E3] shadow-xs duration-300">
        <div className="w-full h-[42px] flex items-center justify-around border-b-[1px] border-[#F0EFEF]">
          {Object.keys(tabData).map((tab) => (
            <div
              className={`w-[96px] h-[42px] flex items-center justify-center ${
                activeTab === tab
                  ? " border-b-1 border-[#3857FF]"
                  : " border-b-1 border-transparent"
              }`}
            >
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`max-h-[18px] text-center text-[14px] leading-[18px] font-medium cursor-pointer ${
                  activeTab === tab ? "text-[#3857FF]" : "text-[#00000099]"
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>

        <div className="h-full w-full flex px-1 mt-6 mb-4">
          {tabData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="w-[72px] h-[62px] flex flex-col items-center gap-[6px] cursor-pointer "
            >
              <div className="w-full flex items-center justify-center">
                <item.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-[12px] w-full min-h-[32px] px-1 font-medium text-[#000000DE] leading-[16px] text-center">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const tabData = {
  Pay: [
    { Icon: IconUpi, label: "UPI transfer" },
    { Icon: IconPermittedTransactions, label: "Bank transfer" },
    { Icon: IconManagePayee, label: "Manage payee" },
    { Icon: IconUpiActivity, label: "UPI activity" },
  ],
  Invest: [
    { Icon: IconDeposits, label: "Create new deposit" },
    { Icon: IconSIP, label: "Start SIP" },
    { Icon: IconTopPerformer, label: "Top funds" },
    { Icon: IconSpotlight, label: "Funds in spotlight" },
  ],
  Cards: [
    { Icon: IconCardControls2, label: "Credit card details" },
    { Icon: IconControls, label: "Credit card controls" },
    { Icon: IconCardControls, label: "Convert to EMI" },
    { Icon: IconBillpay, label: "Pay Credit Card bill" },
  ],
};

const Supports = () => {
  return (
    <div className="flex justify-center flex-col gap-4 w-[288px] max-w-[288px] mx-auto">
      <h3 className="text-3 text-[#00000099] font-medium uppercase  leading-[16px]">
        Supports
      </h3>
        {supportsData.map((item,id) =>(
           <div key={id} className="w-full flex items-center gap-[6px]">
              <div className="w-full h-[24px] flex justify-start items-center gap-3">
                <item.Icon />
                <h3 className="text-[14px] text-[#000000DE] font-medium leading-[18px]">{item.text}</h3>
                {item?.isOpen && <h4 className="text-[#437FBF] bg-[#F0F7FD] rounded-[6px] border-[0.5px] border-[#D5E3F2] text-[10px] uppercase leading-[12px] px-2 pt-1 pb-[3px] w-fit font-medium">{item?.isOpen}</h4>}
              </div>
            <button className="w-5 h-5 flex items-center justify-center cursor-pointer"><IconRightArrow className='scale-[1.5]'/></button>
         </div>
        ))}
    </div>
  );
};

const supportsData =[
  {Icon:IconServiceRequests,text:'Your requests',isOpen:"2 Open"},
  {Icon:IconComplaintQuestion,text:'Raise request or complaint'},
  {Icon:IconBulb,text:'Learn about UPI security tips'},
];