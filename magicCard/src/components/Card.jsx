import React from "react";

const Card = ({ imageSrc }) => {
  return (
    <div className="flex flex-center items-center w-35 h-35 bg-[#8c52eff] object-cover rounded-lg">
      <img src={imageSrc} />
    </div>
  );
};

export default Card;
