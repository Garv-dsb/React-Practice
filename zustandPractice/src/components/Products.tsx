import React, { useEffect } from "react";
import { useProductStore } from "../store/productStore";

const Products = () => {
  const productData = useProductStore((state) => state.productData);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const loading = useProductStore((state) => state.loading);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productData);

  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        productData.map((data, idx) => {
          return (
            <div className="flex flex-col gap-2" key={idx}>
              <div className="flex">
                <p className="font-bold">{data.title}</p> -{" "}
                <p>{data.description}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
