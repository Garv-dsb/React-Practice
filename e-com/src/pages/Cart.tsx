import { useContext } from "react";
import { CartContext } from "../context/cartDataContext";

const Cart = () => {
  const { cartData } = useContext(CartContext);

  // CartData type
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

  // calculate the total cart price
  const calculatePrice = (cartItems: ProductType[]) => {
    return cartItems.reduce((total, current) => {
      return total + current.price;
    }, 0);
  };

  // total price
  const price = calculatePrice(cartData);

  return (
    <div className="p-[16px] mx-auto container flex flex-col flex-wrap gap-[20px] justify-center ">
      {/*  Cart Data  */}
      <div className="flex justify-center items-center flex-wrap gap-[20px]">
        {cartData.map((prod, idx) => {
          return (
            <div
              className="flex gap-[30px] border border-default flex flex-col h-[350px] w-[250px] p-[5px] rounded-lg "
              key={idx}
            >
              {/* Rating  */}

              <div className="flex justify-between border-b border-default mb-[5px] p-[5px] ">
                <p className="text-[10px] opacity-50">
                  Rating Count :{prod.rating.count}
                </p>
                <p className="text-[10px] opacity-50">
                  Rating Star : ⭐{prod.rating.rate}
                </p>
              </div>

              {/* Image  */}
              <div className=" flex justify-center object-cover">
                <img className="w-[150px] h-[150px]" src={prod.image} alt="" />
              </div>

              {/* text container  */}
              <div className="p-[10px] flex flex-col gap-[5px] ">
                {/* title  */}
                <h3 className="text-sm font-semibold opacity-75">
                  {prod.title.slice(0, 25)}
                </h3>

                {/* description  */}
                <p className="text-sm opacity-50">
                  {prod.description.slice(0, 25)}...
                </p>

                {/* price  */}
                <p className="text-sm opacity-50">${prod.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* // Total Price  */}

      {cartData.length > 0 && (
        <div>
          <div className="border-t border-default mt-[10px] flex justify-between">
            {/* Items Name  */}

            <div className="w-[45%]">
              <p className="text-md font-bold">Items Name</p>
              {cartData.map((prod, idx) => {
                return (
                  <h3 key={idx} className="text-sm font-semibold opacity-75">
                    {prod.title.slice(0, 20)}
                  </h3>
                );
              })}
            </div>

            {/* Price  */}

            <div className="">
              <p className="text-md font-bold">Price</p>
              {cartData.map((prod, idx) => {
                return (
                  <h3 key={idx} className="text-sm font-semibold opacity-75">
                    ${prod.price}
                  </h3>
                );
              })}
              {/* Total Price  */}
              <div className="border-t border-default mt-[10px] flex flex-end">
                <div>
                  <p className="text-md font-bold">Total</p>
                  <h3 className="text-sm font-semibold opacity-75">{price}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
