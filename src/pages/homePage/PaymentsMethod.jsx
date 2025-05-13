import React, { useState } from "react";
import { ImageBank2, ImageUpi } from "../../assets/images";
import {
  IconControls2,
  IconMoneyRequest,
  IconPaymentActivityRupeeArrow,
} from "../../assets/icons";
import LargeCard2 from "../../components/LargeCard2";

const PaymentsMethod = () => {
  const [activeTab, setActiveTab] = useState("bank"); // 'upi' or 'bank'
  const [amount, setAmount] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-4 max-w-[684px] w-full border-[#E3E3E3]">
      <div className="flex gap-[70px] w-full h-[323px] mx-auto p-[40px] border-[0.5px] border-[#E3E3E3] bg-white shadow-md hover:shadow-lg rounded-[12px] overflow-hidden">
        <div className="max-w-[208px] w-full h-full p-4 flex flex-col space-y-2 border-r-[1px] border-[#E3E3E3]">
          <button
            onClick={() => setActiveTab("bank")}
            className={`w-[160px] h-[40px] py-2 px-4 rounded-[8px] text-left font-medium  text-[16px] leading-[22px] cursor-pointer ${
              activeTab === "bank"
                ? "bg-[#EAEEFF] text-[#3857FF]"
                : "text-[#A3B1FF]"
            }`}
          >
            Bank
          </button>
          <button
            onClick={() => setActiveTab("upi")}
            className={`w-[160px] h-[40px] py-2 px-4 rounded-[8px] text-left font-medium  text-[16px] leading-[22px] cursor-pointer ${
              activeTab === "upi"
                ? "bg-[#EAEEFF] text-[#3857FF]"
                : "text-[#A3B1FF]"
            }`}
          >
            UPI
          </button>
        </div>

        <div className="w-[296px] h-[233px] flex flex-col items-center gap-6">
          {activeTab === "upi" ? (
            <div className="flex flex-col items-center gap-4">
              <img
                src={ImageUpi}
                alt="upi"
                className="w-[80px] h-[80px] mx-auto"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-[16px] leading-[22px] font-medium text-[#000000DE]">
                  Create UPI ID
                </h2>
                <ul className="list-disc text-[#00000099] text-[14px] mt-2 space-y-1 leading-[18px] text-left">
                  <li>Make instant money transfers</li>
                  <li>Pay contact, mobile or UPI ID</li>
                </ul>
              </div>
              <button className="w-[286px] h-[48px] px-4 pt-[14px] pb-[15px] bg-[#3857FF] text-[16px] leading-[22px] text-white rounded-[8px] hover:bg-blue-700 transition-all cursor-pointer">
                Get started
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <img
                src={ImageBank2}
                alt="bank"
                className="w-[80px] h-[80px] mx-auto"
              />
              <div className="relative w-full">
                <label
                  className={`absolute text-[12px] font-normal bg-white px-1 text-[#3857FF] translate-x-[-50%] left-[50%] ${
                    isFocused || amount ? "visible" : "invisible"
                  } top-[-5px] ${isFocused ? "text-[#3857FF]" : "text-[#aaa]"}`}
                >
                  Enter amount
                </label>
                {/* <span class="absolute top-[50%] left-[10px] translate-y-[-50%] pointer-events-none h-[56px] py-2 px-4 font-normal text-lg">₹</span> */}
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={`${isFocused ? "₹0" : "Enter amount"}`}
                  className={`w-full h-[56px] text-center border-2 mt-1 py-2 px-4 text-lg text-[#000000DE] rounded-lg outline-none transition-all overflow-x-scroll ${
                    isFocused ? "border-[#3857FF]" : "border-[#cccccc]"
                  }`}
                />
              </div>
              <button
                className={`w-[123px] h-[36px] text-[16px] font-medium leading-[22px] text-center px-x py-[7px] rounded-[20px] border-[0.5px] cursor-pointer transition-all ${
                  amount
                    ? "bg-[#3857FF] border-[#3857FF] text-white"
                    : "bg-[#F0EFEF] border-[#DDDDDD] text-[#00000066]"
                }`}
              >
                Select payee
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex gap-3">
        <span className="bg-[#F0EFEF] border-[0.5px] border-[#DDDDDD] text-[14px] text-[#00000099] leading-[18px] py-1 pl-2 pr-[10px] rounded-[16px] flex items-center justify-center cursor-pointer">
          <IconMoneyRequest className="inline mr-2" />
          {"Request money"}
        </span>
        <span className="bg-[#F0EFEF] border-[0.5px] border-[#DDDDDD] text-[14px] text-[#00000099] leading-[18px] py-1 pl-2 pr-[10px] rounded-[16px] flex items-center justify-center cursor-pointer">
          <IconControls2 className="inline mr-2" />
          {"UPI controls"}
        </span>
      </div>

      <LargeCard2 Icon1={IconPaymentActivityRupeeArrow} title={'See all payment activities'} subTitle={'Send, request, manage payments...'}/>
    </div>
  );
};

export default PaymentsMethod;
