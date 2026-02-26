import Layout from "./pages/Layout.tsx";
import { Route, Routes } from "react-router-dom";
import HomeProducts from "./pages/HomeProducts.tsx";
import Cart from "./pages/Cart.tsx";

const App = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeProducts />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
