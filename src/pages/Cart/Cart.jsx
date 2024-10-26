import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import server from "../../config/apiConfig";
import CartList from "../../components/CartList/CartList";

export const Cart = () => {
  const [cartList, setCartList] = useState({ isLoading: true, data: {} });
  const getCartProduct = async () => {
    setCartList((pre) => ({ ...pre, isLoading: true }));
    try {
      const res = await server.get("/api/users/cart");
      setCartList(pre => ({...pre, data: res.data}))
    } catch (err) {
      toast(err.response.data.message);
    }
    setCartList((pre) => ({ ...pre, isLoading: false }));
  };
  useEffect(() => {
    getCartProduct();
  }, []);
  return (
    <div className="container mt-20">
      {cartList.isLoading ? <p>loading</p> : <CartList data={cartList.data} />}
    </div>
  );
};
