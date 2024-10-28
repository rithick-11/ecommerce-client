import React, { useEffect, useState } from "react";
import server from "../../config/apiConfig";
import Loader from "../Loader/Loader";
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
  return (
    <div className="my-5 pb-5  rounded-md px-3 py-1">
      <h1 className="text-2xl pt-3 font-semibold mb-5">Collection</h1>
      {produList.isLoading ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-rows-4 lg:grid-cols-5 gap-4">
          {produList.data.map((each, i) => <ProductCard key={i} data={each} />)}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
