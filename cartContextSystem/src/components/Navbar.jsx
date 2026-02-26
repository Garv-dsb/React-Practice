import React, { useContext } from "react";
import { CartClickedConext } from "../context/setCartContext";
import { CartContext } from "../context/cartContext";

const Navbar = () => {
    const { cartClicked, setCartClicked } = useContext(CartClickedConext);
    const { cartData, setCartData } = useContext(CartContext);

    return (
        <nav className="bg-neutral-primary  w-full z-20  border-b border-default ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo  */}
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-sm md:text-md lg:text-lg text-heading font-semibold whitespace-nowrap">
                        E-Com
                    </span>
                </a>

                {/* Cart Button  */}
                <div onClick={() => setCartClicked(!cartClicked)} className="relative hover:cursor-pointer">

                    {/* cart icon  */}
                    <i className="fa-solid fa-cart-arrow-down"></i>

                    {/* Cart Item number  */}
                    <div className={`absolute left-3 bottom-2 ${cartData.length > 0 ? 'bg-black/70 text-white rounded-lg p-[4px] text-[10px] rounded-lg' : ''}`}>
                        {
                            cartData.length > 0 ? <p>{cartData.length}</p> : ''
                        }
                    </div>

                </div>
            </div>
        </nav >
    );
};

export default Navbar;
