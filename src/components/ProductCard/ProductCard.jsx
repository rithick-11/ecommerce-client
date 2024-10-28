import React from "react";
import server from "../../config/apiConfig";
import toast from "react-hot-toast";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ data }) => {
  const { imgUrl, price, brand, discount, name } = data;

  const discountPrice =
    discount > 0 ? price - Math.round((price / 100) * discount) : price;

  console.log(data);

  const onAddCart = async () => {
    try {
      await server.post("/api/users/addCard", {
        productId: data._id,
        quantity: 1,
        price: discountPrice,
      });
      toast("product added to cart");
    } catch (err) {
      console.log("err on adding cart");
    }
  };
  return (
    <div className="product-card relative">
      <img
        src={imgUrl}
        alt={name}
        className="max-w-[90%] aspect-[2/3] object-contain mix-blend-color-burn mx-auto"
      />

      <p className="text-sm">{name}</p>

      <div className="flex gap-3">
        <p className="font-bold">₹{discountPrice}</p>
        <p className="text-red-500 line-through">₹{price}</p>
      </div>
      <div className="bg-green-500 absolute aspect-square p-1 flex justify-center items-center rounded-full top-2 right-2 text-primary font-bold ">
        <p>-{discount}%</p>
      </div>

      {brand && (
        <div className="absolute p-1 shadow-md bg-white rounded-md text-sm font-semibold">
          <p>{brand}</p>
        </div>
      )}

      <button onClick={onAddCart} className="btn btn-primary flex w-full items-center justify-center text-sm font-thin gap-2">
        Add to cart <ShoppingBag />
      </button>
    </div>
  );
};

export default ProductCard;
