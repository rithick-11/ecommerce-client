import React from "react";

const CartItem = ({ data }) => {
  console.log(data);
  const { produt } = data;
  return (
    <li className="flex gap-2 bg-white p-2 rounded-md flex justify-between">
      <div className="flex">
      <img
        src={produt.imgUrl}
        alt={produt.name}
        className="aspect-[2/3] w-16"
      />
      <div className="px-3 py-1 flex flex-col justify-between">
        <h1>{produt.name}</h1>
        <p>{produt.brand}</p>
        <div className="text-black text-sm font-semibold flex flex-col gap-0 items-start">
          <p>{produt.price - (produt.price / 100) * produt.discount} Rs/-</p>

          <p className="text-xs text-red-800 line-through">
            {produt.price} Rs/-
          </p>
        </div>
      </div>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <p>quantity : {data.quantity}</p>
        <p>{data.price} Rs/-</p>
      </div>
    </li>
  );
};

export default CartItem;
