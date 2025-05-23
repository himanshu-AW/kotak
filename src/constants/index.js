import {
  ImageBank,
  ImageLocker,
  ImageCards,
  ImageMoneyBag,
  ImageOfferCard1,
  ImageOfferCard2,
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
  ImageUser,
  ImageOfferCardBg1,
  ImageOfferCardBg2,
} from "../assets/images";
import {
  IconHome,
  IconHomeFilled,
  IconPayments,
  IconPaymentsFilled,
  IconCreditCard,
  IconCreditCardFilled,
  IconInvestments,
  IconInvestmentsFilled,
  IconMore,
  IconMoreFilled,
  IconCreditCardCircle,IconInterests,IconExpenseList,
   IconUpArrow, IconDownArrow,IconRightArrow, IconNote 
} from "../assets/icons";

// Nav screen data

export const navList = [
  {
    id: "home",
    path: "/",
    iconName: "Home",
    IconDefault: IconHome,
    IconActive: IconHomeFilled,
  },
  {
    id: "payments",
    path: "/payments",
    iconName: "Payments",
    IconDefault: IconPayments,
    IconActive: IconPaymentsFilled,
  },
  {
    id: "creditcards",
    path: "/credit-cards",
    iconName: "Credit cards",
    IconDefault: IconCreditCard,
    IconActive: IconCreditCardFilled,
  },
  {
    id: "investments",
    path: "/investments",
    iconName: "Investments",
    IconDefault: IconInvestments,
    IconActive: IconInvestmentsFilled,
  },
  {
    id: "more",
    path: "/more",
    iconName: "More",
    IconDefault: IconMore,
    IconActive: IconMoreFilled,
  },
];

// ----Home screen data

export const smallCardData = [
  {
    title: "2 bank accounts",
    titleInfo: "56.13 Lakh",
    subTitle: "Balance AS ON 27 FEB, 2:30 PM",
    image: ImageBank,
  },
  {
    title: "2 deposits ",
    titleInfo: "56.13 Lakh",
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

export const offersCardData = [
  {bgColor:'bg-gradient-to-tr from-[#4e47ab] to-[#8657b2]',image:ImageOfferCard1,title:'Increase your credit card limit',description:'Unlock unmatched spending freedom and privileges on your card.',btnLabel:'Get now'},
  {bgColor:'bg-gradient-to-r from-[#135b47] to-[#3f8674]',image:ImageOfferCard2,title:'Turn big spends into easy EMIs',description:'Manage your card payments effortlessly with flexible EMI options.',btnLabel:'Apply now'},
]

export const offersCardDataBg = [
  {image:ImageOfferCardBg1,title:'Increase your credit card limit',description:'Unlock unmatched spending freedom and privileges on your card.',btnLabel:'Get now'},
  {image:ImageOfferCardBg2,title:'Turn big spends into easy EMIs',description:'Manage your card payments effortlessly with flexible EMI options.',btnLabel:'Apply now'},
]

export const bankAccountData = [
  {
    accountType: "saving",
    accountNo: "XX8888",
    accountHolder: "Reuben Alexander mathew",
    accountBalance: 329200.99,
    dateTime: "27 FEB, 2:30 PM",
  },
  {
    accountType: "current",
    accountNo: "XX2564",
    accountHolder: "Reuben Alexander mathew",
    accountBalance: 578186.56,
    dateTime: "27 FEB, 2:30 PM",
  },
  {
    accountType: "saving",
    accountNo: " XX8888",
    accountHolder: "Reuben Alexander mathew",
    accountBalance: 72500.31,
    dateTime: "27 FEB, 2:30 PM",
  },
  {
    accountType: "saving",
    accountNo: " XX5269",
    accountHolder: "Reuben Alexander mathew",
    accountBalance: 112753.0,
    dateTime: "27 FEB, 2:30 PM",
  },
  {
    accountType: "saving",
    accountNo: " XX2510",
    accountHolder: "Geeta Singh",
    accountBalance: 292526.16,
    dateTime: "27 FEB, 2:30 PM",
  },
];

export const loanData = [
  {
    loanType: "home loan",
    loanAmount: 10000000,
    paidLoanAmount: 14778000,
    unPaidLoanAmount: 329200.99,
    paidPercent: "60%",
    dateTime: "Sat, 5 Aug",
    image: ImageHome,
  },
  {
    loanType: "personal loan",
    loanAmount: 10000000,
    paidLoanAmount: 9359400,
    unPaidLoanAmount: 125200.99,
    paidPercent: "60%",
    dateTime: "Sat, 5 Aug",
    image: ImageUser,
  },
  {
    loanType: "Education loan",
    loanAmount: 6000000,
    paidLoanAmount: 4375000,
    unPaidLoanAmount: 68129.0,
    paidPercent: "70%",
    dateTime: "Sun, 17 Aug",
    image: ImageMonitor,
  },
  {
    loanType: "Loan against property",
    loanAmount: 10000000,
    paidLoanAmount: 9359400,
    unPaidLoanAmount: 99200.99,
    paidPercent: "60%",
    dateTime: "Sat, 5 Aug",
    image: ImageBuilding,
  },
  {
    loanType: "Business loan",
    loanAmount: 1500000,
    paidLoanAmount: 655950,
    unPaidLoanAmount: 33610.23,
    paidPercent: "45%",
    dateTime: "Sat, 5 Aug",
    image: ImageBusiness,
  },
];

export const insuranceData = [
  {
    instanceType: "Term",
    instanceNo: 8888888888,
    dateTime: "DUE IN 20 DAYS",
    annualPremium: 25000,
    insuranceAmount: "1 Crore",
    image: ImageUmrela,
  },
  {
    instanceType: "Health",
    instanceNo: 3214646489,
    annualPremium: 35000,
    insuranceAmount: "6.5 Lakh",
    image: ImageHealth,
  },
  {
    instanceType: "Travel",
    instanceNo: 2654188855,
    annualPremium: 40000,
    insuranceAmount: "2 Lakh",
    image: ImageGlobe,
  },
  {
    instanceType: "General",
    instanceNo: 5645827975,
    annualPremium: 66000,
    insuranceAmount: "3.6 Lakh",
    image: ImageGeneral,
  },
  {
    instanceType: "Property",
    instanceNo: 7775115446,
    annualPremium: 78000,
    insuranceAmount: "2 Crore",
    image: ImageBuilding,
  },
];

export const reviewData = [
  {
    relType: "Relationship Manager",
    name: "Aishwarya Bhattacharya",
    ratingNo: 4.5,
    phoneNo: 9812345678,
  },
  {
    relType: "Service Relationship Manager",
    name: "Aditya Bhatt",
    ratingNo: 4.5,
    phoneNo: 9812345678,
  },
];

export const featuresData = [
  {
    image: ImageCalendar,
    title: "Payments",
    subTitle: "Set daily transfer limits",
  },
  {
    image: ImageCards,
    title: "Credit card",
    subTitle: "Convert your Transactions into EMIs",
  },
  { image: ImageOneView, title: "One view", subTitle: "View your net worth" },
];


export const accountActivityData = [
  {icon:IconExpenseList,title:'AMB Non-maintenance', subTitle:'6 hours ago',amount:-100},
  {icon:IconExpenseList,title:'Debit card PIN regeneration', subTitle:'Yesterday',amount:-400.15},
  {icon:IconInterests,title:'Interest received', subTitle:'Yesterday',amount:250.15},
  {icon:IconCreditCardCircle,title:'POS X0051', subTitle:'15 Aug 2023',amount:-12500},
]

export const linkedDepositsData = [
  {icon:IconExpenseList,title:'AMB Non-maintenance', subTitle:'6 hours ago',amount:-100},
  {icon:IconExpenseList,title:'Debit card PIN regeneration', subTitle:'Yesterday',amount:-400.15},
  {icon:IconInterests,title:'Interest received', subTitle:'Yesterday',amount:250.15},
  {icon:IconCreditCardCircle,title:'POS X0051', subTitle:'15 Aug 2023',amount:-12500},
]

export const sendMoneyData={
  Bank:[{placeholder:'Enter amount',btnLabel:'Select payee'}],
  UPI:[{title:'Create UPI ID',markdown1:'Make instant money transfers',markdown2:'Pay contact, mobile or UPI ID',btnLabel:'Get started'}],
}

export const manageChequesData={
  GetStatus:[{title:'See the current status of a cheque',placeholder:'Cheque number',btnLabel:'Submit'}],
  StopCheque:[{title:'Stop an issued cheque from getting cleared',placeholder:'Cheque number',btnLabel:'Submit'}],
}

export const statementsData = [
  { month: "Dec 2024" },
  { month: "Nov 2024" },
  { month: "Oct 2024" },
];