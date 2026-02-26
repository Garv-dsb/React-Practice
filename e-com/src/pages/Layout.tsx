import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar  */}
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
