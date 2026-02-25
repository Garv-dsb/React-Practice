import React from "react";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Home />
      <Toaster />
    </div>
  );
};

export default App;
