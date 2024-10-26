import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import server from "../../config/apiConfig";
import CartList from "../../components/CartList/CartList";
import { UserAuthenticationContext } from "../../context/UserAuthenticationContext";
import { LoginView } from "../../components/LoginView/LoginView";

export const Cart = () => {
  const [cartList, setCartList] = useState({ isLoading: true, data: {} });
  const { user } = useContext(
    UserAuthenticationContext
  );

  const getCartProduct = async () => {
    if(!user.isAunthenticated){
      return
    }
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

  console.log(user)
  return (
    <div className="container mt-20 ">
      {user.isAunthenticated ? cartList.isLoading ? <p>loading</p> : <CartList data={cartList.data} /> : <LoginView />}
    </div>
  );
};
