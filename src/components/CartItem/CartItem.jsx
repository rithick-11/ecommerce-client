import React from "react";

const CartItem = ({ data }) => {
  console.log(data);
  const { productId, quantity , price} = data;
  const {name, imgUrl, discount, brand , _id} = productId
  return (
    <li className="gap-2 bg-white p-2 rounded-md flex justify-between">
      <div className="flex">
      <img
        src={imgUrl}
        alt={name}
        className="aspect-[2/3] w-16"
      />
      <div className="px-3 py-1 flex flex-col justify-between">
        <h1>{name}</h1>
        <p>{brand}</p>
        <div className="text-black text-sm font-semibold flex flex-col gap-0 items-start">
          <p>{productId.price - (productId.price / 100) * discount} Rs/-</p>

          <p className="text-xs text-red-800 line-through">
            {productId.price} Rs/-
          </p>
        </div>
      </div>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <p>quantity : {quantity}</p>
        <p>{price} Rs/-</p>
      </div>
    </li>
  );
};

export default CartItem;
