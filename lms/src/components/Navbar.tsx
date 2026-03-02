import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const userName = localStorage.getItem("userName");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const LogOut = () => {
    setLoading(true);
    localStorage.removeItem("token");
    setLoading(false);
    navigate("/login");
  };

  return (
    <nav className="h-fit w-full bg-white border border-gray-200 rounded-2xl gap-[30px] shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-between px-[10px] py-[15px]">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-[#9A92AE]  text-xl text-heading font-semibold whitespace-nowrap">
            LMS
          </span>
        </Link>

        {/* User profile and Log out Button  */}
        <div className="flex items-center gap-[20px]">
          <img
            className="h-[30px] w-[30px]"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9ML0QbGwOiQvUlDh1_E4PSKmHPyTRxjuaQ&s"
            }
          />
          <p className="font-bold text-center text-[#9A92AE] ">{userName}</p>

          <Button title="Log Out" loading={loading} clickHanler={LogOut} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
