import React from "react";

const Button = ({ btnText, submitHandler, loading }) => {
  return (
    <div className="w-full">
      <button
        className={`w-full bg-[#8c52ef] text-white px-4 py-2 rounded-md  ${loading ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}`}
        onClick={submitHandler}
        disabled={loading}
      >
        {loading ? "Submitting..." : btnText}
      </button>
    </div>
  );
};

export default Button;
