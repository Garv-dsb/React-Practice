import React from "react";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="flex flex-col  bg-[#f9f999]  rounded-[10px] ">
      {/* Image Container */}
      <div className="max-w-[300px] ">
        <img className="object-cover rounded-t-[10px] " src={image} />
      </div>

      {/* Text Container  */}
      <div className="p-[20px]">
        {/* tittle  */}
        <h3 className="font-[600] text-[20px] ">{title}</h3>
        {/* description  */}
        <p className="font-[400] text-[15px] opacity-80">{description}</p>

        {/* price Data  */}
        <p className="font-[300] text-[12px] ">{price}</p>
      </div>

      {/* like Button  */}
    </div>
  );
};

export default ProductCard;
