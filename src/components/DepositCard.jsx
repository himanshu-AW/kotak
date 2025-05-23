import React from 'react';

const DepositCard = ({ type, rate, amount, maturity, value }) => (
  <div className="w-full max-h-[126px] bg-white rounded-[12px] border-[0.5px] border-[#E3E3E3] p-4 flex flex-col gap-[14px]">
    
    <div className='flex justify-between gap-2'>
        <div className='text-start flex-1'>
            <div className="text-[12px] text-[#00000099] leading-[16px] font-medium">{type}</div>
            <div className="text-[20px] leading-[28px] font-bold text-[#000000DE]">{rate}</div>
        </div>
        <div className='text-end'>      
            <div className="text-[12px] text-[#00000099] leading-[16px] font-medium">Current value</div>
            <div className="text-[20px] leading-[28px] font-bold text-[#000000DE]">₹{value}</div>
        </div>
    </div>
    
    <div className='h-[1px] w-full bg-[#F0EFEF]'/>
    
    <div className='w-full h-[19px] flex justify-between '>
        <div className="flex flex-1 flex-row items-center gap-6">
            <div className='flex gap-[6px]'>
                <span className='text-[#00000099] text-[12px] leading-[16px] font-medium'>Invested amount</span>
                <span className="text-[#000000DE] text-[12px] leading-[16px] font-medium">₹{amount}</span>
            </div>
            <div className='flex gap-2'>
                <span className='text-[#00000099] text-[12px] leading-[16px] font-medium'>Maturing on</span>
                <span className="text-[#000000DE] text-[12px] leading-[16px] font-medium">{maturity}</span>
            </div>
        </div>      
      <button className="bg-[#F0F7FD] uppercase text-[10px] leading-[12px] text-[#437FBF] px-2 pt-1 pb-[3px] border-[0.5px] border-[#D5E3F2] rounded-[6px] font-medium">
        REUBEN ALEXANDER MATHEW
      </button>
    </div>
  
  </div>
);

const DepositsDashboard = () => {
  return (
    <div className="w-full h-[378px] bg-gradient-to-br from-[#506E81] to-[#253844] flex flex-col gap-6 text-white p-4 rounded-[12px]">
      
      <div className="h-[54px]  flex justify-between gap-2">
        <div className='flex flex-col justify-between'>
            <h4 className="text-[14px] font-medium leading-[18px] text-white">2 deposits</h4>
            <h5 className="text-[14px] font-medium leading-[18px] text-[#FFFFFFB2]">1 Fixed • 1 Activ Money</h5>
        </div>
        <div className='flex flex-col justify-between'>
            <h5 className="text-right font-medium text-[12px] leading-[16px] text-[#FFFFFFB2]">Current value</h5>
            <h4 className="text-right text-[28px] leading-[36px] text-white font-bold">₹56.13 Lakh</h4>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <DepositCard
        type="Fixed"
        rate="4.6%"
        amount="56,00,000.39"
        maturity="1 Oct 2024"
        value="60,00,000.99"
      />
      <DepositCard
        type="Active money"
        rate="4.6%"
        amount="56,00,000.39"
        maturity="1 Oct 2024"
        value="60,00,000.99"
      />
      </div>
    </div>
  );
};

export default DepositsDashboard;
