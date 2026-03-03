import React from "react";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="flex flex-col space-y-5 p-10">
      <h2 className="font-bold">Products</h2>
      <Product />
    </div>
  );
};

export default App;
