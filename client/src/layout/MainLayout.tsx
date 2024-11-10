import Footer from "@/components/user_def_cmp/Footer";
import Navbar from "@/components/user_def_cmp/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen m-2 md:m-0">
        {/* navbar on the top */}
        <header>
          <Navbar />
        </header>
        {/* main containt on middle it will take left size of screen  */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* fotter at the end  */}
        <footer>
            <Footer/>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
