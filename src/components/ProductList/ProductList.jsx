import React, { useEffect, useState } from "react";
import server from "../../config/apiConfig";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const [produList, setProductLis] = useState({ isLoading: false, data: [] });
  const getProductFromDb = async () => {
    setProductLis((pre) => ({ ...pre, isLoading: true }));
    const res = await server.get("/api/products");
    setProductLis((pre) => ({ isLoading: false, data: res.data }));
  };
  useEffect(() => {
    getProductFromDb();
  }, []);
  return <div className="bg-gray-500/20 my-5 pb-5  rounded-md px-3 py-1 shadow">
    <h1 className="text-lg font-semibold">Collection</h1>
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
        {!produList.isLoading && produList.data.map(each => <ProductCard data={each} />)}
    </ul>
  </div>;
};

export default ProductList;
