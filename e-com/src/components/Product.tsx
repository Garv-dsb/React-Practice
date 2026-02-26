import { useContext, useState } from "react";
import { CartContext } from "../context/cartDataContext";

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

const Product = ({ product }: { product: ProductType }) => {
  const [loading, setLoading] = useState(false);
  const { cartData, setCartData } = useContext(CartContext);

  // Fetch the Product Id and store it to the Array
  const fetchProductId = async (id: number) => {
    setLoading(true);
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCartData([...cartData, data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error saving to cart", err);
        setLoading(false);
      });
  };

  return (
    <div className="border border-default flex flex-col h-[350px] w-[300px] p-[5px] rounded-lg">
      {/* Rating  */}

      <div className="flex justify-between border-b border-default mb-[5px] p-[5px] ">
        <p className="text-[10px] opacity-50">
          Rating Count :{product.rating.count}
        </p>
        <p className="text-[10px] opacity-50">
          Rating Star : ⭐{product.rating.rate}
        </p>
      </div>

      {/* Image  */}
      <div className=" flex justify-center object-cover">
        <img className="w-[150px] h-[150px]" src={product.image} alt="" />
      </div>

      {/* Description Box */}
      <div className="p-[10px] flex flex-col gap-[5px] ">
        {/* title  */}
        <h3 className="text-sm font-semibold opacity-75">
          {product.title.slice(0, 25)}
        </h3>

        {/* description  */}
        <p className="text-sm opacity-50">
          {product.description.slice(0, 25)}...
        </p>

        {/* price  */}
        <p className="text-sm opacity-50">${product.price}</p>

        {/* Add to cart Button  */}

        <button
          onClick={() => fetchProductId(product.id)}
          className={`bg-black/70 text-white rounded-lg  p-2 hover:cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}`}
          disabled={loading}
        >
          {loading ? "Adding..." : " Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
