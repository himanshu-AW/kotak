/* eslint-disable no-unused-vars */
import { NavLink, useLocation } from "react-router-dom";
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
} from "../../assets/icons";

const navList = [
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

function SideNavbar() {
  const location = useLocation();
  const isActivePath = (itemPath, currentPath) => {
    if (itemPath === "/") {
      return (
        currentPath === "/" ||
        currentPath.startsWith("/home") ||
        currentPath.startsWith("/bank")
      );
    }
    return currentPath.startsWith(itemPath);
  };

  return (
    <nav className="w-[212px] mt-14 left-0 h-screen bg-white text-black p-4">
      <ul className="space-y-4 w-[134px] m-auto">
        {navList.map((item) => (
          <li key={item.id}>
            <ListItem
              iconName={item.iconName}
              IconDefault={item.IconDefault}
              IconActive={item.IconActive}
              to={item.path}
              pathname={isActivePath(item.path, location.pathname)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

const ListItem = ({ IconDefault, IconActive, iconName, to, pathname }) => (
  <NavLink
    to={to}
    className={() =>
      `flex items-center gap-2 px-3 py-1 rounded-[16px] cursor-pointer w-fit ${
        pathname
          ? "bg-[#FEEAEE] text-[#F23057]"
          : "text-[#00000099] hover:bg-gray-100"
      }`
    }
  >
    <div className="w-6 h-6">{pathname ? <IconActive /> : <IconDefault />}</div>
    <span
      className={`text-sm ${pathname ? "text-[#F23057]" : "text-gray-700"}`}
    >
      {iconName}
    </span>
  </NavLink>
);

export default SideNavbar;
