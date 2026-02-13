import React from "react";
import ProductCard from "./components/productCard";
import RenderList from "./components/renderList";

const App = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[20px]">
      {/* Product Listing  */}
      <div className="flex flex-col gap-[20px] ">
        <h4 className="text-[24px] font-[600] text-center">Product Listing</h4>
        <div className=" flex flex-wrap justify-center p-[20px] gap-[20px]  mx-auto">
          <ProductCard
            image="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
            title="Hello Product 1"
            description="Hello Description"
            price="$450.00"
          />

          <ProductCard
            image="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
            title="Hello Product 1"
            description="Hello Description"
            price="$450.00"
          />

          <ProductCard
            image="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
            title="Hello Product 1"
            description="Hello Description"
            price="$450.00"
          />

          <ProductCard
            image="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
            title="Hello Product 1"
            description="Hello Description"
            price="$450.00"
          />
        </div>
      </div>

      {/* Conditional rendering List  */}
      <div className="flex flex-col gap-[20px] ">
        <h4 className="text-[20px] font-[600] text-center">
          Conditional Rendering List
        </h4>
        {/* Items rendering  */}
        <div className="flex justify-center">
          <RenderList />
        </div>
      </div>
    </div>
  );
};

export default App;
