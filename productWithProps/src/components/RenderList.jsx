import React from "react";

const RenderList = () => {
  const listOfItems = [
    {
      name: "banana",
      lifeTime: "4 days",
    },
    {
      name: "Apple",
      lifeTime: "5 days",
    },
  ];
  return (
    <div>
      {listOfItems.map((fruits, index) => {
        return (
          <ul key={index}>
            <li className="text-[20px]">
              Fruits : Name = {fruits.name} and the life time is ={" "}
              {fruits.lifeTime} {"✔"}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default RenderList;
