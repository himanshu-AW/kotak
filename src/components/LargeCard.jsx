import React from "react";
import { IconRupee,IconCalendar } from "../assets/icons";
import { Link } from "react-router-dom";

function LargeCard({
  path,
  Image,
  cardType,
  title,
  cardNo,
  subTitle,
  amount,
  dateTime,
  paidLoanAmount,
  paidPercent,
}) {
  const [intPart, decimalPart = "00"] = toCurrency(
    typeof amount === "number" && amount
  ).split(".");

  return (
    <Link to={path} className="card bg-white pl-3 py-4 pr-4 w-full">
      <div className="flex items-center gap-3">
        <img src={Image} alt="money" className="w-[64px] h-[64px]" />
        <div className="flex flex-col gap-2">
          <h3 className="text-[14px] text-[#000000DE] font-medium leading-[18px]">
            {toSentenceCase(title)}
            {" • "}
            {cardType === "account" && cardNo}
            {cardType === "loan" && "₹" + toCurrency(cardNo).split(".")[0]}
            {cardType === "insurance" && cardNo}
          </h3>
          <div className="flex gap-2 items-center">
            {(cardType === "account" || cardType === "loan") && (
              <h4
                className={`text-[#437FBF] bg-[#F0F7FD] border-[#D5E3F2]  rounded-[6px] border-[0.5px] text-[10px] uppercase leading-[12px] px-2 pt-1 pb-[3px] w-fit font-medium`}
              >
                {cardType === "account" && subTitle}
                {cardType === "loan" && dateTime}
              </h4>
            )}
            {cardType === "insurance" && dateTime && (
              <h4
                className={`text-[#F74F55] bg-[#FCEBEA] border-[#F74F55]  rounded-[6px] border-[0.5px] text-[10px] uppercase leading-[12px] px-2 pt-1 pb-[3px] w-fit font-medium`}
              >
                {dateTime}
              </h4>
            )}
            {cardType === "insurance" && (
              <>
                <span className="text-[#00000099] text-[12px] leading-[12px] font-medium">
                  ₹{toCurrency(subTitle)} annual premium
                </span>
              </>
            )}
            {cardType === "loan" && (
              <> 
                <div className="flex items-center gap-[6px]">
                  <IconCalendar className='inline'/>
                <span className="text-[#00000099] text-[12px] leading-[12px] font-medium">
                  ₹{toCurrency(paidLoanAmount)} paid
                </span>
                <span className="text-[#00000099] text-[10px] leading-[12px] rounded-[6px] border-[0.5px] bg-[#F2F2F2] border-[#DDDDDD] px-1 py-[2px]">
                  {paidPercent}
                </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 ">
        {cardType === "loan" && (
          <h5 className="uppercase leading-[12px] text-[10px] text-[#00000099] font-medium text-end">
            Next EMI amount
          </h5>
        )}
        {cardType === "insurance" ? (
          <h2 className="flex leading-[28px] justify-end">
            <IconRupee />
            <span className="text-[#000000DE] text-[20px] font-bold">
              {amount}
            </span>
          </h2>
        ) : (
          <h2 className="flex leading-[28px] justify-end">
            <IconRupee />
            <span className="text-[#000000DE] text-[20px] font-bold">
              {intPart}
            </span>
            <span className="text-[14px] text-[#000000DE] font-normal">
              {"."}
              {decimalPart}
            </span>
          </h2>
        )}
        {cardType === "account" && (
          <h5 className="uppercase leading-[12px] text-[10px] text-[#00000099] font-medium text-end">
            As of {dateTime}
          </h5>
        )}
      </div>
    </Link>
  );
}

const toCurrency = (num) => {
  if (typeof num !== "number") return "0.00";
  return num.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const toSentenceCase = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// const toCapitalizeEachWord = (str) => {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };
export default LargeCard;
