import React from "react";
import server from "../../config/apiConfig"
import { FaCartShopping } from "react-icons/fa6";

const ProductCard = ({ data }) => {

  const onAddCart = async () => {
    const res = await server.post("/api/users/addCard", {productId: data._id, quantity: 1, price:data.price - (data.price / 100) * data.discount })
  }
  return (
    <div className="p-2 flex flex-col justify-between bg-white w-fit rounded-md shadow-md relative min-h-[270px]">
      <img
        src={data.imgUrl}
        alt={data.description}
        className="aspect-square object-contain min-w-[90px] mx-auto"
      />

      <div className="flex flex-col gap-1">
        <p className="text-sm">{data.description}</p>
        <hr className="border-b  border-black" />
        <div className="flex items-center justify-between">
          <div className="text-black text-sm font-semibold flex flex-col gap-0 items-start">
            <p>{data.price - (data.price / 100) * data.discount} Rs/-</p>
            <p className="text-xs text-red-800 line-through">
              {data.price} Rs/-
            </p>
          </div>

          <button onClick={onAddCart} className="btn btn-primary flex gap-2 items-center">
            Add <FaCartShopping className="text-green-500 h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="text-xs font-bold text-black shadow-md p-1  flex items-center justify-center bg-red-500 absolute top-2 right-2 z-10 rounded-full">
      -off {data.discount}%
      </div>
      {data.brand && <p className="bg-gray-200 w-fit p-1 text-sm absolute top-2 left-2 shadow-md rounded-md">{data.brand}</p> }
    </div>
  );
};

export default ProductCard;
