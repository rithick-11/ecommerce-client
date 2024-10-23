import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const ProductCard = ({ data }) => {
  return (
    <div className="p-2 bg-white w-fit rounded-md shadow-md relative">
      <img
        src={data.imgUrl}
        alt={data.description}
        className="aspect-square object-contain w-[120px] mx-auto"
      />

      <div className="flex flex-col gap-1">
        <p className="text-sm">{data.description}</p>
        <hr className="border-b  border-black" />
        <div className="flex items-center justify-between">
          <p className="text-black font-semibold">{data.price} Rs/-</p>
          <FaCartShopping className="text-green-500 h-5 w-5" />
        </div>
      </div>
      <div className="text-[10px] text-black font-bold flex items-center justify-center flex-col bg-red-500 absolute -top-4 -right-4 z-10 rounded-full w-8 h-8">
        <p>{data.discount}% </p>
        <span>-off</span>
      </div>
    </div>
  );
};

export default ProductCard;
