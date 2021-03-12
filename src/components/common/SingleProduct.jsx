import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <h2>{product?.title}</h2>
    </div>
  );
};

export default SingleProduct;
