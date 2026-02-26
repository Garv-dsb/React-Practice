import Navbar from "../components/Navbar";
import Products from "./Products";

const Home = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar  */}
      <Navbar />

      {/* products Page  */}
      <Products />
    </div>
  );
};

export default Home;
