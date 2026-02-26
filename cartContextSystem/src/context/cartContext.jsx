import { createContext, useState } from "react";

// create the Cart Context 
const CartContext = createContext({
    cartData: [],
    setCartData: () => { }
});


// create the Cart Context Provider
const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);

    return (
        <CartContext.Provider value={{ cartData, setCartData }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };