import React from "react";

const MyButton = ({ children, className = "", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 bg-[#8c52ef] hover:bg-[#7a3ed1] text-white rounded-md shadow-sm transition ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
