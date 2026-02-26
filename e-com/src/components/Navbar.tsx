import { useContext } from "react";
import { CartContext } from "../context/cartDataContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartData } = useContext(CartContext);

  return (
    <nav className="bg-white sticky top-0 w-full z-20  border-b border-default ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo  */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-sm md:text-md lg:text-lg text-heading font-semibold whitespace-nowrap">
            E-Com
          </span>
        </Link>

        {/* Cart Button  */}
        <Link to="/cart">
          <div className="relative hover:cursor-pointer">
            {/* cart icon  */}
            <i className="fa-solid fa-cart-arrow-down"></i>

            {/* Cart Item number  */}

            <div
              className={`absolute left-3 bottom-2 ${cartData.length > 0 ? "bg-black/70 text-white h-[20px] w-[20px] flex justify-center items-center text-[10px] rounded-[50%]" : ""}`}
            >
              {cartData.length > 0 ? <p>{cartData.length}</p> : ""}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
