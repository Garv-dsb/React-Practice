import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const GoToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full flex justify-center items-center rounded-lg ">
      <div className="border-1 p-[20px] flex flex-col gap-[10px] ">
        <p className="font-bold ">404 Not Found</p>
        <Button title="Go to Home" clickHanler={GoToHome} />
      </div>
    </div>
  );
};

export default NotFound;
