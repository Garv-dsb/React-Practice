import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex p-[20px] flex-col gap-[20px] bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <Navbar />

      {/* chilredna outlet that will show in the Layout  */}
      <Outlet />
    </div>
  );
};

export default Layout;
