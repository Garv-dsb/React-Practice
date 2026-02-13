import React from "react";
import MyButton from "./components/MyButton";
import ImageCard from "./components/ImageCard";

const App = () => {
  return (
    <div className="flex flex-col gap-[15px] p-[10px]">
      {/* use case of the MyButton  */}
      <h5>Product Card List using props and components</h5>
      <div className="container mx-auto flex  flex-wrap gap-[30px]">
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default App;
