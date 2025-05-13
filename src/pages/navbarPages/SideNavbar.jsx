/* eslint-disable no-unused-vars */
import { NavLink, useLocation } from "react-router-dom";
import {navList} from '../../constants'

function SideNavbar() {
  const location = useLocation();
 
  return (
    <nav className="container-sidenav">
      <ul className="sidenav-list">
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
  <NavLink  to={to}  className={() =>`sidenav-list-item ${ pathname ? "sidenav-list-item-active" : "sidenav-list-item-normal" }` }>
    <span className="sidenav-icon">{pathname ? <IconActive /> : <IconDefault />}</span>
    <span className={`${pathname ? "sidenav-text-active" : "sidenav-text"}`} > {iconName}</span>
  </NavLink>
);

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


 
export default SideNavbar;


