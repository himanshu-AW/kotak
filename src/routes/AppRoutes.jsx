import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homePage/Home";
import AccountIDetails from "../pages/bacnkAccount/AccountIDetails";
import Payements from "../pages/paymentsPage/Payements";
import CreditCards from "../pages/creditCardPage/CreditCards";
import Investments from "../pages/investmentsPage/Investments";
import More from "../pages/morePage/More";
import Layout from '../pages/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home/bank/:accountType", element: <AccountIDetails /> },
      { path: "/payments", element: <Payements /> },
      { path: "/credit-cards", element: <CreditCards /> },
      { path: "/investments", element: <Investments /> },
      { path: "/more", element: <More /> },
    ],
  },
]);

export default router;
