import {  IconView, IconAlerts } from "../assets/icons";
import { ImageKotakLogo } from "../assets/images";


function Header() {
  return (
    <header className="header">
      <div className="logo-nav">
        <img src={ImageKotakLogo} alt="Kotak logo" className="w-full h-full" />
      </div>
      <ul className="flex">
        <li className="header-item">    <IconView />  </li>
        <li className="header-item">   <IconAlerts /> </li>
        <li className="header-item">  <span className="header-item-name"> AR </span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
