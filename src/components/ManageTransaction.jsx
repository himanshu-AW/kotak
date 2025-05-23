import React, { useState, useEffect } from "react";
import { ImageBank2, ImageUpi,ImageCheque,ImageCardonly } from "../assets/images";

const ManageTransaction = ({param}) => {
  // const {Bank,UPI} = params;
  console.log(param)
  const [activeTab, setActiveTab] = useState("bank");
  const [amount, setAmount] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Preload images once on mount
  useEffect(() => {
    const bankImg = new Image();
    const upiImg = new Image();
    const chequeImg = new Image();
    const cardImg = new Image();
    bankImg.src = ImageBank2;
    upiImg.src = ImageUpi;
    chequeImg.src = ImageCheque;
    cardImg.src = ImageCardonly;
  }, []);

  return (
    <div className="flex flex-col gap-4 max-w-[684px] w-full border-[#E3E3E3]">
      <div className="flex gap-[70px] w-full h-[323px] mx-auto p-10 border-[0.5px] border-[#E3E3E3] bg-white shadow-xs hover:shadow-md rounded-[12px] transition-all overflow-hidden">
        <div className="max-w-[208px] w-full h-full p-4 flex flex-col space-y-2 border-r-[1px] border-[#E3E3E3]">
          <button
            onClick={() => setActiveTab("bank")}
            className={`w-[160px] h-[40px] py-2 px-4 rounded-[8px] text-left font-medium text-[16px] leading-[22px] cursor-pointer ${
              activeTab === "bank"
                ? "bg-[#EAEEFF] text-[#3857FF]"
                : "text-[#A3B1FF]"
            }`}
          >
          {'Bank'}
          </button>
          <button
            onClick={() => setActiveTab("upi")}
            className={`w-[160px] h-[40px] py-2 px-4 rounded-[8px] text-left font-medium text-[16px] leading-[22px] cursor-pointer ${
              activeTab === "upi"
                ? "bg-[#EAEEFF] text-[#3857FF]"
                : "text-[#A3B1FF]"
            }`}
          >
            {'UPI'}
          </button>
        </div>

        <div className="w-[296px] h-[233px] flex flex-col items-center gap-6">
          {/* Shared Image Section */}
          <div className="relative w-[80px] h-[80px] mx-auto">
            <img
              src={ImageUpi}
              alt="upi"
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-200 ${
                activeTab === "upi" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={ImageBank2}
              alt="bank"
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-200 ${
                activeTab === "bank" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {activeTab === "upi" ? (
            <div className="flex flex-col items-center gap-4">
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
              <div className="relative w-full">
                <label
                  className={`absolute text-[12px] font-normal bg-white px-1 text-[#3857FF] translate-x-[-50%] left-[50%] ${
                    isFocused || amount ? "visible" : "invisible"
                  } top-[-5px] ${isFocused ? "text-[#3857FF]" : "text-[#aaa]"}`}
                >
                  Enter amount
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={`${isFocused ? "₹0" : "Enter amount"}`}
                  className={`w-full h-[56px] text-center border-[1px] mt-1 py-2 px-4 text-[20px] font-normal text-[#000000DE] rounded-[8px] outline-none transition-all overflow-x-scroll ${
                    isFocused ? "border-[#3857FF]" : "border-[#cccccc]"
                  }`}
                />
              </div>
              <button
                className={`h-[36px] text-[16px] font-medium leading-[22px] text-center px-4 py-[7px] rounded-[20px] border-[0.5px] cursor-pointer transition-all ${
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
    </div>
  );
};

export default ManageTransaction;
