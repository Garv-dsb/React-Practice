import { useQuery } from "@tanstack/react-query";
import React from "react";

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

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const Product = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (error) {
    return <div>There is an Error :{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.map((product: ProductType) => {
        return (
          <div className="border border-default flex flex-col h-[280px] w-[300px] p-[5px] rounded-lg">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
