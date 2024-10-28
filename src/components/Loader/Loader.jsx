import React from "react";
import {PuffLoader} from "react-spinners" 

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center p-5">
      <PuffLoader color="#c26300" size={100} />
    </div>
  );
};

export default Loader;
