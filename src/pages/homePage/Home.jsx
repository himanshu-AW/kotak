import {ToggleButton,SmallCard,LargeCard,Sepration,OfferCard,LargeCard2,FeaturesCards,ReviewCard,ManageTransaction}from "../../components";
import {featuresData,reviewData,insuranceData,loanData,bankAccountData,smallCardData,offersCardData,offersCardDataBg,sendMoneyData} from '../../constants'
import HomeQuickActionRightSide from "./HomeQuickActionRightSide";
import {IconUpArrow,IconRightArrow,IconNote,IconPaymentActivityRupeeArrow,IconMoneyRequest,IconControls2} from '../../assets/icons'
import {ImageCoins} from '../../assets/images'


function Home() {

  return (
    <section className="section">
      <div className="container">
        <h3 className="last-status">
          Last logged on 10 Sep 2019, 6:50 PM (IST)
        </h3>
        <div className="sub-container">
         
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
    
          <div className="sub-container-sections">
            <Sepration textName={"Offers"} />
            <div className="w-[684] flex gap-3 flex-wrap">
              {offersCardData.map((item, id) => (
                <OfferCard
                  key={id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  buttonLabel={item.btnLabel}
                  bgColor={item.bgColor}
                  onClick={()=>{}}
                />
              ))}
            </div>
            <div className="w-[684] flex gap-3 flex-wrap">
              {offersCardDataBg.map((item, id) => (
                <OfferCard
                  key={id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  buttonLabel={item.btnLabel}
                  onClick={()=>{}}
                />
              ))}
            </div>
            <div className="flex justify-end">
              <ToggleButton
                text={"See all"}
                Icon={IconUpArrow}
                onClick={() => {}}
              />
            </div>
          </div>

          <div className="sub-container-sections">
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

          <div className="sub-container-sections">
            <Sepration textName={"Send money"} />
            <div className="w-full flex gap-[11px] flex-wrap">
              <ManageTransaction data={sendMoneyData}/>
              <div className="w-full flex flex-col gap-[27px]">
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
                <LargeCard2  Icon={IconPaymentActivityRupeeArrow} title={"See all payment activities"} subTitle={"Send, request, manage payments..."} />
              </div>
            </div>
          </div>

          <div className="sub-container-sections">
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

          <div className="sub-container-sections">
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

          <div className="sub-container-sections-2">
            {reviewData.map((item,id)=>(
              <ReviewCard  key={id} relation={item.relType} ratingNo={item.ratingNo} name={item.name} phoneNo={item.phoneNo}/>
            ))}
          </div>

          <div className="sub-container-sections">
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

          <div className="sub-container-sections">
              <LargeCard2 Icon={IconNote} title={"Coming soon"} subTitle={'New features getting launched soon.'}/>
          </div>

        </div>
      </div>

      <HomeQuickActionRightSide />
    </section>
  );
}

export default Home;
