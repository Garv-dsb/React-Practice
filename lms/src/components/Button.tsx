import React from "react";

interface ButtonProps {
  title: string;
  clickHanler?: () => void;
}

const Button = ({ title, clickHanler }: ButtonProps) => {
  return (
    <button
      onClick={clickHanler}
      className="p-2 w-full bg-black/50 text-white rounded-lg hover:cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
