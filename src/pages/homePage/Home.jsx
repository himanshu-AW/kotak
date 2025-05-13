import React from "react";
import SmallCard from "../../components/SmallCard";
import HomeQuickActionRightSide from "./HomeQuickActionRightSide";
import ToggleButton from "../../components/ToggleButton";
import Sepration from "../../components/Sepration";
import {
  ImageBank,
  ImageLocker,
  ImageCards,
  ImageMoneyBag,
  ImageOffersCard1,
  ImageOffersCard2,
  ImageCoins,
  ImageMonitor,
  ImageBuilding,
  ImageBusiness,
  ImageUmrela,
  ImageHealth,
  ImageGlobe,
  ImageGeneral,
  ImageHome,
  ImageCalendar,
  ImageOneView,
  ImageUser
} from "../../assets/images";
import { IconUpArrow, IconDownArrow,IconRightArrow, IconNote } from "../../assets/icons";
import OffersCards from "../../components/OffersCards";
import LargeCard from "../../components/LargeCard";
import PaymentsMethod from "./PaymentsMethod";
import ReviewCard from "../../components/ReviewCard";
import FeaturesCards from "../../components/FeaturesCards";
import LargeCard2 from "../../components/LargeCard2";

function Home() {

  return (
    <section className="mt-[56px] w-[calc(100%-212px)] flex justify-between bg-[#F7FAFC] overflow-auto">
      <div className="w-full max-w-[734px] m-auto h-full flex flex-col gap-[24px] p-[24px]">
        <h3 className="text-[14px] text-[#00000044]">
          Last logged on 10 Sep 2019, 6:50 PM (IST)
        </h3>
        <div className="w-full flex flex-col gap-[75px]">
         
          <div className="flex flex-col gap-[11px]">
            <div className="w-[684] flex gap-3 flex-wrap">
              {smallCardData.map((item, id) => (
                <SmallCard
                  key={id}
                  icon={item.image}
                  title={item.title}
                  titleInfo={item.titleInfo}
                  subTitle={item.subTitle}
                />
              ))}
            </div>
            <div className="flex justify-end">
              <ToggleButton
                text={"See less"}
                Icon={IconUpArrow}
                onClick={() => {}}
              />
            </div>
          </div>
    
          <div className="flex flex-col gap-6">
            <Sepration textName={"Offers"} />
            <div className="w-[684] flex gap-3 flex-wrap">
              <OffersCards image={ImageOffersCard1} altText={""} />
              <OffersCards image={ImageOffersCard2} altText={""} />
              <div className="flex w-full justify-end">
                <ToggleButton
                  text={"See all"}
                  Icon={IconRightArrow}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <Sepration textName={"Bank accounts"} />
            <div className="w-full flex gap-3 flex-wrap">
              {bankAccountData.map((item, id) => (
                <LargeCard
                  key={id}
                  cardType={'account'}
                  title={item.accountType}
                  cardNo={item.accountNo}
                  subTitle={item.accountHolder}
                  amount={item.accountBalance}
                  dateTime={item.dateTime}
                  Image={ImageCoins}
                  path={`/home/bank/${item.accountType + "-" + "account"}`}
                />
              ))}
            <div className="flex w-full justify-end">
              <ToggleButton
                text={"See less"}
                Icon={ IconUpArrow }
                onClick={() => {}}
              />
            </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <Sepration textName={"Send money"} />
            <div className="w-full flex gap-3 flex-wrap">
              <PaymentsMethod/>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <Sepration textName={"Loans"} />
            <div className="w-full flex gap-3 flex-wrap">
              {loanData.map((item, id) => (
                <LargeCard
                  key={id}
                  path={''}
                  cardType={'loan'}
                  title={item.loanType}
                  cardNo={item.loanAmount}
                  paidLoanAmount={item.paidLoanAmount}
                  amount={item.unPaidLoanAmount}
                  paidPercent={item.paidPercent}
                  dateTime={item.dateTime}
                  Image={item.image}
                />
              ))}
            <div className="flex w-full justify-end">
              <ToggleButton
                text={"See less"}
                Icon={ IconUpArrow }
                onClick={() => {}}
              />
            </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <Sepration textName={"Insurance"} />
            <div className="w-full flex gap-3 flex-wrap">
              {insuranceData.map((item, id) => (
                <LargeCard
                  key={id}
                  path={''}
                  cardType={'insurance'}
                  title={item.instanceType}
                  cardNo={item.instanceNo}
                  subTitle={item.annualPremium}
                  amount={item.insuranceAmount}
                  dateTime={item.dateTime}
                  Image={item.image}
                />
              ))}
            <div className="flex w-full justify-end">
              <ToggleButton
                text={"See less"}
                Icon={ IconUpArrow }
                onClick={() => {}}
              />
            </div>
            </div>
          </div>

          <div className="w-full flex gap-3">
            {reviewData.map((item,id)=>(
              <ReviewCard  key={id} relation={item.relType} ratingNo={item.ratingNo} name={item.name} phoneNo={item.phoneNo}/>
            ))}
          </div>

          <div className="w-full flex flex-col gap-6">
            <Sepration textName={"Explore features"} />
            <div className="w-full flex gap-3">
              {featuresData.map((item,id)=>(
                <FeaturesCards key={id} Image={item.image} title={item.title} subTitle={item.subTitle} />
              ))}
            </div>
              <div className="flex w-full justify-end">
              <ToggleButton
                text={"See all"}
                Icon={ IconRightArrow }
                onClick={() => {}}
              />
              </div>
          </div>

          <div className="w-full flex flex-col gap-6 mb-10">
              <LargeCard2 Icon1={IconNote} title={"Coming soon"} subTitle={'New features getting launched soon.'}/>
          </div>
        </div>
      </div>

      <HomeQuickActionRightSide />
    </section>
  );
}

  const smallCardData = [
    {
      title: "2 bank accounts",
      titleInfo: "56.13 Lack",
      subTitle: "Balance AS ON 27 FEB, 2:30 PM",
      image: ImageBank,
    },
    {
      title: "2 deposits ",
      titleInfo: "56.13 Lack",
      subTitle: "Value AS ON 27 FEB, 2:30 PM",
      image: ImageLocker,
    },
    {
      title: "Credit cards",
      titleInfo: "3 cards",
      subTitle: "Balance AS ON 27 FEB, 2:30 PM",
      image: ImageCards,
    },
    {
      title: "1 loan",
      titleInfo: "5.50 Lakh",
      subTitle: "Value AS ON 27 FEB, 2:30 PM",
      image: ImageMoneyBag,
    },
  ];

  const bankAccountData = [
    {
      accountType: "saving",
      accountNo:'XX8888',
      accountHolder: "Reuben Alexander mathew",
      accountBalance: 329200.99,
      dateTime:'27 FEB, 2:30 PM'
    },
    {
      accountType: "current",
      accountNo:'XX2564',
      accountHolder: "Reuben Alexander mathew",
      accountBalance: 578186.56,
      dateTime:'27 FEB, 2:30 PM'
    },
    {
      accountType: "saving",
      accountNo:' XX8888',
      accountHolder: "Reuben Alexander mathew",
      accountBalance: 72500.31,
      dateTime:'27 FEB, 2:30 PM'
    },
    {
      accountType: "saving",
      accountNo:' XX5269',
      accountHolder: "Reuben Alexander mathew",
      accountBalance: 112753.00,
      dateTime:'27 FEB, 2:30 PM'
    },
    {
      accountType: "saving",
      accountNo:' XX2510',
      accountHolder: "Geeta Singh",
      accountBalance: 292526.16,
      dateTime:'27 FEB, 2:30 PM'
    },
    
  ];

  const loanData = [
    {
      loanType: "home loan",
      loanAmount:10000000,
      paidLoanAmount: 14778000,
      unPaidLoanAmount:329200.99,
      paidPercent:'60%',
      dateTime:'Sat, 5 Aug',
      image:ImageHome
    },
    {
      loanType: "personal loan",
      loanAmount:10000000,
      paidLoanAmount: 9359400,
      unPaidLoanAmount:125200.99,
       paidPercent:'60%',
      dateTime:'Sat, 5 Aug',
      image:ImageUser
    },
    {
      loanType: "Education loan",
      loanAmount:6000000,
      paidLoanAmount: 4375000,
      unPaidLoanAmount:68129.00,
       paidPercent:'70%',
      dateTime:'Sun, 17 Aug',
      image:ImageMonitor
    },
    {
      loanType: "Loan against property",
      loanAmount:10000000,
      paidLoanAmount: 9359400,
      unPaidLoanAmount:99200.99,
      paidPercent:'60%',
      dateTime:'Sat, 5 Aug',
      image:ImageBuilding
    },
    {
      loanType: "Business loan",
      loanAmount:1500000,
      paidLoanAmount: 655950,
      unPaidLoanAmount:33610.23,
      paidPercent:'45%',
      dateTime:'Sat, 5 Aug',
      image:ImageBusiness
    },
  ];

  const insuranceData = [
    {
      instanceType:'Term',
      instanceNo:8888888888,
      dateTime:'DUE IN 20 DAYS',
      annualPremium:25000,
      insuranceAmount:'1 Crore',
      image:ImageUmrela
    },
    {
      instanceType:'Health',
      instanceNo:3214646489,
      annualPremium:35000,
      insuranceAmount:'6.5 Lakh',
      image:ImageHealth
    },
    {
      instanceType:'Travel',
      instanceNo:2654188855,
      annualPremium:40000,
      insuranceAmount:'2 Lakh',
      image:ImageGlobe
    },
    {
      instanceType:'General',
      instanceNo:5645827975,
      annualPremium:66000,
      insuranceAmount:'3.6 Lakh',
      image: ImageGeneral
    },
    {
      instanceType:'Property',
      instanceNo:7775115446,
      annualPremium:78000,
      insuranceAmount:'2 Crore',
      image: ImageBuilding
    },
  ];

  const reviewData=[
    {relType:'Relationship Manager',
    name:'Aishwarya Bhattacharya',
    ratingNo:4.5,
    phoneNo:9812345678,
  },
    {relType:'Service Relationship Manager',
    name:'Aditya Bhatt',
    ratingNo:4.5,
    phoneNo:9812345678,
  },
  ]

  const featuresData = [
    {image:ImageCalendar,
      title:'Payments',
      subTitle:'Set daily transfer limits'
    },
    {image:ImageCards,
      title:'Credit card',
      subTitle:'Convert your Transactions into EMIs'
    },
    {image:ImageOneView,
      title:'One view',
      subTitle:'View your net worth'
    },
  ];
export default Home;
