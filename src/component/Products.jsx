import React from "react";
import Product from "./Product";

const Products = ({ handleClickIncrease, handleClickDecrease, veri }) => {
  return (
    <div>
      <Product
        handleClickIncrease={handleClickIncrease}
        handleClickDecrease={handleClickDecrease}
        veri={veri}
      />
    </div>
  );
};

export default Products;
