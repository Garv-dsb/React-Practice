import React, { useState } from "react";
import ImagesContainer from "../components/ImagesContainer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex flex-col gap-4 ">
      {/* Navbar and ImagesContainer */}
      <nav className="flex justify-between items-center p-4">
        {/* logo  */}
        <h3 className="text-xl text-[#8c52ef] font-extrabold">Image Gallery</h3>

        {/* SearchBar  */}
        <input
          className="px-[20px] py-[10px] bg-[#DADAD3] rounded-lg outline-none w-1/2"
          type="search"
          name="search"
          id="search"
          placeholder="Search the Images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>

      <ImagesContainer query={searchTerm} />
    </div>
  );
};

export default Home;
