/* eslint-disable no-unused-vars */
import { NavLink, useLocation } from "react-router-dom";
import {navList} from '../constants'

function Navbar() {
  const location = useLocation();
 
  return (
    <section className="nav ">
      <ul className="nav-list">
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
    </section>
  );
}

const ListItem = ({ IconDefault, IconActive, iconName, to, pathname }) => (
  <NavLink  to={to}  className={() =>`nav-list-item ${ pathname ? "nav-list-item-active" : "nav-list-item-normal" }` }>
    <span className="nav-icon">{pathname ? <IconActive /> : <IconDefault />}</span>
    <span className={`nav-text  ${pathname ? "nav-text-active" : "nav-text-normal"}`} > {iconName}</span>
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


 
export default Navbar;


