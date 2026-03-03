import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const GoToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="border-1 p-[30px] flex flex-col gap-[10px] rounded-lg">
        <p className="font-bold text-2xl">404 Not Found</p>
        <div className="text-center">
          <Button title="Go to Home" clickHanler={GoToHome} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
