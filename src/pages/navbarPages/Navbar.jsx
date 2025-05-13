import {  IconView, IconAlerts } from "../../assets/icons";
import { ImageKotakLogo } from "../../assets/images";


function Navbar() {
  return (
    <nav className="header-nav">
      <div className="logo-nav">
        <img src={ImageKotakLogo} alt="Kotak logo" className="w-full h-full" />
      </div>
      <ul className="flex">
        <li className="nav-list-item">    <IconView />  </li>
        <li className="nav-list-item">   <IconAlerts /> </li>
        <li className="nav-list-item">  <span className="nav-list-item-name"> AR </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
