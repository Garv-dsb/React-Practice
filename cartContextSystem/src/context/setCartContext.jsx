import { createContext, useState } from "react";

const CartClickedConext = createContext({
    cartClicked: false,
    setCartClicked: () => { }
})

// create the CartClickedConext provider to check that icon is clicked or not 

const CartClickedProvider = ({ children }) => {
    const [cartClicked, setCartClicked] = useState(false);

    return (
        <CartClickedConext.Provider value={{ cartClicked, setCartClicked }}>
            {children}
        </CartClickedConext.Provider>
    )
}

export { CartClickedConext, CartClickedProvider }