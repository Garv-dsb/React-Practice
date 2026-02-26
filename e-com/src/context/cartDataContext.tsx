import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

interface cartDataType {
  cartData: ProductType[];
  setCartData: Dispatch<SetStateAction<ProductType[]>>;
}

// create the Cart Context
const CartContext = createContext<cartDataType>({
  cartData: [],
  setCartData: () => {},
});

// create the Cart Context Provider
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<ProductType[]>([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
