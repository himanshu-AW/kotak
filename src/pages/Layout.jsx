import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="root">

      <header className="root-header">
        <Header />
      </header>

      <div className="root-container">

        <aside className="root-navbar">
          <Navbar />
        </aside>
        {/* <aside className="block lg:hidden">
        <Navbar />
      </aside> */}

        <main className="root-main">
          <Outlet />

          <footer className="root-footer">
            <Footer />
          </footer>
          
        </main>
      </div>
    </div>
  );
};

export default Layout;
