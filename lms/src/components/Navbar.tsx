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

        {/* Drop Down  */}
        <ul className="flex items-center text-[#9A92AE]">
          <li>
            <button
              id="dropdownNvbarButton"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between self-center w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
            >
              Library
              <svg
                className="w-4 h-4 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
            >
              <ul
                className="p-2 text-sm text-body font-medium"
                aria-labelledby="dropdownNvbarButton"
              >
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

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
