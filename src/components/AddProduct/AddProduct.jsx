import React, { useState } from "react";
import FromContainer from "../FromContainer/FromContainer";
import { productFormControls, initialFormData } from "../../config/formsData";
import server from "../../config/apiConfig"

const AddProduct = () => {
  const [productFormData, setProductFormData] = useState(initialFormData);

  const handelProductFromData = (e) => {
    const name = e.target.name;
    setProductFormData((pre) => ({ ...pre, [name]: e.target.value }));
  };

  const toAddProduct =async () => {

    console.log(productFormData);
    const res = await server.post("/api/products/add", productFormData)
    if(res.status === 201){
      setProductFormData(initialFormData)
    }
    
  }
  return (
    <div>
      <div className="bg-black/10 px-4 py-2 rounded-md shadow-md space-y-3">
        <h1 className="text-2xl font-semibold mt-3">Add product</h1>
        <FromContainer
          renderFormList={productFormControls}
          formData={productFormData}
          handleFormData={handelProductFromData}
          handleSubmit={toAddProduct}
          btnText="Add product"
        />
      </div>
    </div>
  );
};

export default AddProduct;
