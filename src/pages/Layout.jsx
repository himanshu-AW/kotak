import { Outlet } from "react-router-dom";
import SideNavbar from "./navbarPages/SideNavbar";
import Navbar from "./navbarPages/Navbar";
import Footer from "./footerPage/Footer";

const Layout = () => {
  return (
    <div className="h-screen w-screen flex p-0 flex-col">
      <Navbar />
      <main className="w-full h-full flex flex-col gap-5">
        <div className="w-full flex justify-between">
          <SideNavbar />
          <Outlet />
        </div>
        <div className="w-full min-w-[1280px] h-[281px]">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
